import React from 'react';

import { CMMNViewerComponent, events as eventsViewer, triggers as triggersViewer, config as configViewer } from './CMMNViewer'
import { CMMNEditorComponent, events as eventsEditor, triggers as triggersEditor, config as configEditor } from './CMMNEditor'

export function CMMNViewer(props) {
  // lets enumerate schema to extract uiSchema and validation
  return (<CMMNViewerComponent {...props} />);
}

export function CMMNEditor(props) {
  // lets enumerate schema to extract uiSchema and validation
  return (<CMMNEditorComponent {...props} />);
}

export function registerViewer(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: CMMNViewer,
    type: 'cmmn-viewer',
    events: eventsViewer,
    triggers: triggersViewer,
    config: configViewer
  });
}

export function registerEditor(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: CMMNEditor,
    type: 'cmmn-editor',
    events: eventsEditor,
    triggers: triggersEditor,
    config: configEditor
  });
}
