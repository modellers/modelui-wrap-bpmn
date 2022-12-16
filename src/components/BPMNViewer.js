import React from 'react';

// import BpmnJS from 'bpmn-js/dist/bpmn-navigated-viewer.production.min.js'; // https://bpmn.io/toolkit/bpmn-js/walkthrough/
import BpmnJS from 'bpmn-js/dist/bpmn-viewer.development.js';

import { elementExtractInfo, options } from './OMGShared'

import {
  OMGBase,
  events as baseEvents,
  triggers as baseTriggers,
  StateOMG
} from './OMGBase';

export const events = baseEvents;
export const triggers = baseTriggers;
export const config = {
  name: 'BPMN Viewer',
  type: 'bpmn-viewer',
  author: 'Kjartan Jonsson',
  version: 0.1,
  description: 'View Buisness Process Model Notation (BPMN) Diagrams as specified by the OMG group.',
  relation: {
    contains: [],
    within: "component" // parent
  },
  options: { ...options, id: 'bpmn-viewer' },
  state: StateOMG
};


export class BPMNViewerComponent extends OMGBase {

  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
  }

  getInstance = (container) => {
    if (!this.omgInstance) {
      this.omgInstance = new BpmnJS({ container });
    }
    return this.omgInstance;
  }

  getActionState(action, callback) {
    const self = this;
    if (this.omgInstance) {
      if (action === 'submit') {
        this.omgInstance.saveXML({ format: true }).then((result) => {
          /* TODO: see if this is really used, if so restore it by adding missing properties to initial state
          const event_data = {
            definition: self.omgInstance.getDefinitions(),
            xml: xml,
            id: self.state.data.id,
            warnings: "warnings",
            error: "error"
          };
          */
          callback({ data: { xml: result.xml } })
        }).catch(error => {
          callback(); // do nothing regarding update
          self.handleError(error); // handle error
        });
      } else { callback(); }
    } else { callback(); }
  }

  updateView = function (action, arr, updated, data) {
    // extend by parent
    if (this.omgInstance) {
      if (action === 'populate') {
        this.renderDiagram(updated)
      }
      if (action === 'select') {
        if (updated.selected) {
          let selectionInst = this.omgInstance.get("selection");
          try {
            selectionInst.select(updated.selected);
          } catch (e) {
            // TODO: throw common error notifying that the selection could not be done (missing content)
          }
        }
      }
      if (action === 'enable') { }
      if (action === 'disable') { }
      if (action === 'clear') {
        this.omgInstance.clear();
      }
    }
    return true;
  };

  renderDiagram(_data_diagrams) {
    const data_diagrams = _data_diagrams || this.state;
    const container = this.containerRef.current;

    if (data_diagrams && data_diagrams.data && data_diagrams.data.length) {

      const diagram = data_diagrams.data[0]; // always show the top most in array of diagrams (for each view)

      if (container && diagram) {
        // const commonTriggersOMG = getCommonTriggers(this, this.omgInstance);
        this.registerCommonEvenHandlers(this.getInstance(container));
        if (diagram.xml) { return this.loadDiagram(diagram.xml); }
        else { 
          // TOOD: handle error missing xml
        }
      }
    }
    // TODO: share event - imported
  }

  componentDidMount = () => {

    if (this.stateManager) { this.stateManager.doMount(this); }
    this.renderDiagram();
  }

  elementSelect(dd_event, self, event, detailed, inst, config, include_selected) {
    // TODO: share event - select

    const omgInst = inst;
    const elementIncoming = [];
    const elementOutgoing = [];
    const buisinessEvent = event.element.businessObject;

    if (!buisinessEvent) {
      // TODO: react to error
      return;
    }

    let event_info = elementExtractInfo(self.state, buisinessEvent);

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
      if (buisinessEvent.incoming) {
        buisinessEvent.incoming.forEach((item, idx) => {
          elementIncoming.push({
            bpmnId: item.id,
            bpmnType: item['$type']
          });
        });
      }

      if (buisinessEvent.outgoing) {
        buisinessEvent.outgoing.forEach((item, idx) => {
          elementOutgoing.push({
            bpmnId: item.id,
            bpmnType: item['$type']
          });
        });
      }

      event_info.incoming = elementIncoming;
      event_info.outgoing = elementOutgoing;
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

  registerCommonEvenHandlers(bpmnInstance) {

    bpmnInstance.on('element.changed', (event) => {
      // Share event - diagram changed
      // TODO: save this change to internal state
      const event_element = event.element;
      let event_data = {};
      if (event_element.buisinessEvent) { event_data = elementExtractInfo(event_element.buisinessEvent); }
      this.triggerEvent('changed', event_data, {});
    });

    // bpmnInstance.on('element.hover', (event, detailEvent) => { this.elementSelect('hover-over', this, event, false, bpmnInstance, this.props); });
    // bpmnInstance.on('element.out', (event, detailEvent) => { this.elementSelect('hover-exit', this, event, false, bpmnInstance, this.props); });
    bpmnInstance.on('element.click', (event, detailEvent) => { this.elementSelect('selected', this, event, true, bpmnInstance, this.props, true); });
    bpmnInstance.on('element.dblclick', (event, detailEvent) => { this.elementSelect('tap', this, event, true, bpmnInstance, this.props, true); });
    bpmnInstance.on('element.mousedown', (event, detailEvent) => { this.elementSelect('press', this, event, false, bpmnInstance, this.props); });
    bpmnInstance.on('element.mouseup', (event, detailEvent) => { this.elementSelect('release', this, event, false, bpmnInstance, this.props); });

    bpmnInstance.on('import.done', (event, detailEvent) => {
      const {
        error,
        warnings
      } = event;

      if (error) {
        // TODO: share event - import-error
        return this.handleError(error);
      }

      bpmnInstance.get('canvas').zoom('fit-viewport');

      return this.handleShown(warnings);
    });
  }

  loadDiagram(xml) {
    const self = this;
    // Share event - loading

    this.triggerEvent('loading', {
      xml: xml,
      id: self.state.data.id
    }, {});

    // Do the import
    this.omgInstance.importXML(xml);
    /* TODO: use promisess
      function (err) {
      if (err) {
        self.handleError(err);
        return;
      } else {
        // TODO: notify loaded
      }
    });
    */
  }

  handleLoading() {
    const { onLoading } = this.props;

    if (onLoading) {
      onLoading();
    }
  }

  handleError(err) {
    // TODO: refactor following to this -> this.eventDD('failure', err);
    this.triggerEvent('failure', {
      code: 12012,
      detail: 'asdf'
    }, err);
  }

  handleShown(warnings) {
    const { onShown } = this.props;

    if (onShown) {
      onShown(warnings);
    }
  }

  render() {
    // this.renderDiagram();
    return (<div className="react-bpmn-diagram-container" ref={this.containerRef} style={{ flex: 1, height: '100vh' }} > </div >)
  }
}
