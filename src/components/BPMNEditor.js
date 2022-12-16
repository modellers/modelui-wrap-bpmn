// import BpmnJS from 'bpmn-js/dist/bpmn-modeler.development.js'; // https://bpmn.io/toolkit/bpmn-js/walkthrough/
import BpmnJS from 'bpmn-js/dist/bpmn-modeler.production.min.js';

import { BPMNViewerComponent } from './BPMNViewer'
// editor requires CSS
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
// common code between omgInstance and BPMNViewer
import { options, } from './OMGShared'

import {
  events as baseEvents,
  triggers as baseTriggers,
  StateOMG
} from './OMGBase';

export const events = baseEvents;
export const triggers = baseTriggers;
export const config = {
  name: 'BPMN Editor',
  type: 'bpmn-editor',
  author: 'Kjartan Jonsson',
  version: 0.1,
  description: 'View Buisness Process Model Notation (CMMN) Diagrams as specified by the OMG group.',
  relation: {
    contains: [],
    within: "component" // parent
  },
  options: { ...options, id: 'bpmn-editor' },
  state: StateOMG
};
export class BPMNEditorComponent extends BPMNViewerComponent {

  getInstance = (container) => {
    if (!this.omgInstance) {
      // create the BPMN Editor
      this.omgInstance = new BpmnJS({ container });
    }
    return this.omgInstance;
  }

}
