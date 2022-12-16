import CmmnJS from 'cmmn-js/dist/cmmn-modeler.production.min.js'; // https://bpmn.io/toolkit/bpmn-js/walkthrough/
import { CMMNViewerComponent } from './CMMNViewer'
// editor requires CSS
import 'cmmn-js/dist/assets/diagram-js.css';
import 'cmmn-js/dist/assets/cmmn-font/css/cmmn.css';
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
  name: 'CMMN Editor',
  type: 'cmmn-editor',
  author: 'Kjartan Jonsson',
  version: 0.1,
  description: 'View Buisness Process Model Notation (CMMN) Diagrams as specified by the OMG group.',
  relation: {
    contains: [],
    within: "component" // parent
  },
  options: { ...options, id: 'cmmn-editor' },
  state: StateOMG
};
export class CMMNEditorComponent extends CMMNViewerComponent {

  getInstance = (container) => {
    if (!this.omgInstance) {
      // create the CMMN Editor
      this.omgInstance = new CmmnJS({ container });
    }
    return this.omgInstance;
  }

}
