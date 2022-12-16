import CmmnJS from 'cmmn-js/dist/cmmn-navigated-viewer.production.min.js'; // https://bpmn.io/toolkit/cmmn-js/walkthrough/
import { BPMNViewerComponent } from './BPMNViewer';
import { options, elementExtractInfo } from './OMGShared'
import {
  events as baseEvents,
  triggers as baseTriggers,
  StateOMG
} from './OMGBase';

export const events = baseEvents;
export const triggers = baseTriggers;
export const config = {
  name: 'CMMN Viewer',
  type: 'cmmn-viewer',
  author: 'Kjartan Jonsson',
  version: 0.1,
  description: 'View Buisness Process Model Notation (CMMN) Diagrams as specified by the OMG group.',
  relation: {
    contains: [],
    within: "component" // parent
  },
  options: { ...options, id: 'cmmn-viewer' },
  state: StateOMG
};

export class CMMNViewerComponent extends BPMNViewerComponent {

  getInstance = (container) => {
    if (!this.omgInstance) {
      // create the CMMN Viewer
      this.omgInstance = new CmmnJS({ container });
    }
    return this.omgInstance;
  }

  getActionState(action, callback) {
    // the CMMN library is different than BPMN
    const self = this;
    if (this.omgInstance) {
      if (action === 'submit') {
        this.omgInstance.saveXML({ format: true }, function (error, xml) {
          if (error) {
            callback(); // do nothing regarding update
            self.handleError(error); // handle error         
          } else {
            /* TODO: see if this is really used, if so restore it by adding missing properties to initial state
          const event_data = {
            id: self.state.id,
            definition: omgInst.getDefinitions(),
            xml: xml,
            error: err
          };

            */

            callback({ data: { xml: xml } })
          }
        });
      } else { callback(); }
    } else { callback(); }
  }


  criterionChildren(criterion) {
    const children = []
    if (criterion.sentryRef) {
      criterion.sentryRef.onParts.forEach(function (part) {
        children.push({ type: part["$type"], id: part["id"] })
      });
    }
    return children;
  }

  elementEdgeConnections(edge, elementIncoming, elementOutgoing) {
    if (edge.cmmnElementRef) {
      elementOutgoing["type"] = edge.cmmnElementRef["$type"];
      elementOutgoing["id"] = edge.cmmnElementRef["id"];
      elementIncoming["parts"] = this.criterionChildren(edge.cmmnElementRef);
      // incomming into criterion
      elementIncoming["type"] = edge.targetCMMNElementRef["$type"];
      elementIncoming["id"] = edge.targetCMMNElementRef["id"];
      elementIncoming["parts"] = this.criterionChildren(edge.targetCMMNElementRef);
    }
  }

  elementSelect(dd_event, self, event, detailed, inst, config, include_selected) {
    const omgInst = inst;
    const elementIncoming = [];
    const elementOutgoing = [];
    const eventElement = event.element;
    const buisinessEvent = event.element.businessObject;

    if (!buisinessEvent) {
      // TODO: react to error
      return;
    }

    let event_info = elementExtractInfo(self.state.data, buisinessEvent);

    if (include_selected && (!!omgInst)) { // get selection
      let selectionInstance = omgInst.get("selection");
      let selected = selectionInstance.get("selection");
      selected.forEach((itm, idx) => {
        event_info.selected.push({
          bpmnId: itm.id,
          bpmnType: itm.type
        });
      })
    }

    if (detailed) {
      if (buisinessEvent["$type"] === "cmmndi:CMMNEdge") {
        this.elementEdgeConnections(buisinessEvent, elementIncoming, elementOutgoing);
      } else {

        if (buisinessEvent.entryCriteria) {
          buisinessEvent.entryCriteria.forEach((item, idx) => {
            const criterion = {
              id: item.id,
              type: item['$type'],
              parts: this.criterionChildren(item)
            }
            elementIncoming.push(criterion);
          });
        }

        if (eventElement.outgoing) {
          eventElement.outgoing.forEach((item, idx) => {
            const criterion = {
              id: item.id,
              type: item['type'],
              parts: this.criterionChildren(item)
            }
            elementOutgoing.push(criterion);
          });
        }
      }

      event_info.incoming = elementIncoming;
      event_info.outgoing = elementOutgoing;
      event_info.definition = omgInst.getDefinitions();
      event_info.parent = null;
      // event_info.definition = omgInst.getDefinitions();
      event_info.parent = null;
      if (event.element.parent) {
        event_info.parent = {
          bpmnId: event.element.parent.id,
          bpmnType: event.element.parent['type'] || event.element.parent['$type']
        }
      }
    }

    this.triggerEvent(dd_event, event_info, self);
  }

}
