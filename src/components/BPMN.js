import React from 'react';

import { BPMNViewerComponent, events as eventsViewer, triggers as triggersViewer, config as configViewer } from './BPMNViewer'
import { BPMNEditorComponent, events as eventsEditor, triggers as triggersEditor, config as configEditor } from './BPMNEditor'

export function BPMNViewer(props) {
  // lets enumerate schema to extract uiSchema and validation
  return (<BPMNViewerComponent {...props} />);
}

export function BPMNEditor(props) {
  // lets enumerate schema to extract uiSchema and validation
  return (<BPMNEditorComponent {...props} />);
}

export function registerViewer(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: BPMNViewer,
    type: 'bpmn-viewer',
    events: eventsViewer,
    triggers: triggersViewer,
    config: configViewer
  });
}

export function registerEditor(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: BPMNEditor,
    type: 'bpmn-editor',
    events: eventsEditor,
    triggers: triggersEditor,
    config: configEditor
  });
}