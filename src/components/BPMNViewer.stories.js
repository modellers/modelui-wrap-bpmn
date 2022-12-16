import React from 'react';
import { action } from '@storybook/addon-actions' // storybook action handler
// test utils
import { util } from '../modelui-core-runtime';
import registerComponents from './Components';

import { BPMNViewerComponent } from './BPMNViewer';
import { triggers, events, config } from './BPMNViewer'

import { layout } from '../modelui-core-runtime';

export default {
  title: 'Extras/OMG BPMN',
  component: BPMNViewerComponent,
  argTypes: util.StoryUtil.createStoryArgumentTypesFromSchema(config.options),
};
const bpmn_diagram_initial = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><bpmn:definitions xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:bpmn=\"http://www.omg.org/spec/BPMN/20100524/MODEL\" xmlns:bpmndi=\"http://www.omg.org/spec/BPMN/20100524/DI\" xmlns:dc=\"http://www.omg.org/spec/DD/20100524/DC\" xmlns:di=\"http://www.omg.org/spec/DD/20100524/DI\" id=\"Definitions_1odjuxa\" targetNamespace=\"http://bpmn.io/schema/bpmn\" exporter=\"bpmn-js (https://demo.bpmn.io)\" exporterVersion=\"8.8.2\"><bpmn:process id=\"Process_1bq8ug9\" isExecutable=\"false\"><bpmn:task id=\"Activity_03lz547\" name=\"Test initial\"><bpmn:incoming>Flow_0wvwsvv</bpmn:incoming></bpmn:task><bpmn:sequenceFlow id=\"Flow_0wvwsvv\" sourceRef=\"StartEvent_0ky7h1i\" targetRef=\"Activity_03lz547\" /><bpmn:startEvent id=\"StartEvent_0ky7h1i\"><bpmn:outgoing>Flow_0wvwsvv</bpmn:outgoing><bpmn:timerEventDefinition id=\"TimerEventDefinition_1hukx01\" /></bpmn:startEvent></bpmn:process><bpmndi:BPMNDiagram id=\"BPMNDiagram_1\"><bpmndi:BPMNPlane id=\"BPMNPlane_1\" bpmnElement=\"Process_1bq8ug9\"><bpmndi:BPMNEdge id=\"Flow_0wvwsvv_di\" bpmnElement=\"Flow_0wvwsvv\"><di:waypoint x=\"192\" y=\"99\" /><di:waypoint x=\"250\" y=\"99\" /></bpmndi:BPMNEdge><bpmndi:BPMNShape id=\"Activity_03lz547_di\" bpmnElement=\"Activity_03lz547\"><dc:Bounds x=\"250\" y=\"59\" width=\"100\" height=\"80\" /></bpmndi:BPMNShape><bpmndi:BPMNShape id=\"Event_0qtde8q_di\" bpmnElement=\"StartEvent_0ky7h1i\"><dc:Bounds x=\"156\" y=\"81\" width=\"36\" height=\"36\" /></bpmndi:BPMNShape></bpmndi:BPMNPlane></bpmndi:BPMNDiagram></bpmn:definitions>";
const bpmn_diagram_replace = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><bpmn:definitions xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:bpmn=\"http://www.omg.org/spec/BPMN/20100524/MODEL\" xmlns:bpmndi=\"http://www.omg.org/spec/BPMN/20100524/DI\" xmlns:dc=\"http://www.omg.org/spec/DD/20100524/DC\" xmlns:di=\"http://www.omg.org/spec/DD/20100524/DI\" id=\"Definitions_1odjuxa\" targetNamespace=\"http://bpmn.io/schema/bpmn\" exporter=\"bpmn-js (https://demo.bpmn.io)\" exporterVersion=\"8.8.2\"><bpmn:process id=\"Process_1bq8ug9\" isExecutable=\"false\"><bpmn:task id=\"Activity_03lz547\" name=\"Test replaced\"><bpmn:incoming>Flow_0wvwsvv</bpmn:incoming></bpmn:task><bpmn:sequenceFlow id=\"Flow_0wvwsvv\" sourceRef=\"StartEvent_0ky7h1i\" targetRef=\"Activity_03lz547\" /><bpmn:startEvent id=\"StartEvent_0ky7h1i\"><bpmn:outgoing>Flow_0wvwsvv</bpmn:outgoing><bpmn:timerEventDefinition id=\"TimerEventDefinition_1hukx01\" /></bpmn:startEvent></bpmn:process><bpmndi:BPMNDiagram id=\"BPMNDiagram_1\"><bpmndi:BPMNPlane id=\"BPMNPlane_1\" bpmnElement=\"Process_1bq8ug9\"><bpmndi:BPMNEdge id=\"Flow_0wvwsvv_di\" bpmnElement=\"Flow_0wvwsvv\"><di:waypoint x=\"192\" y=\"99\" /><di:waypoint x=\"250\" y=\"99\" /></bpmndi:BPMNEdge><bpmndi:BPMNShape id=\"Activity_03lz547_di\" bpmnElement=\"Activity_03lz547\"><dc:Bounds x=\"250\" y=\"59\" width=\"100\" height=\"80\" /></bpmndi:BPMNShape><bpmndi:BPMNShape id=\"Event_0qtde8q_di\" bpmnElement=\"StartEvent_0ky7h1i\"><dc:Bounds x=\"156\" y=\"81\" width=\"36\" height=\"36\" /></bpmndi:BPMNShape></bpmndi:BPMNPlane></bpmndi:BPMNDiagram></bpmn:definitions>";
const trigger_data = {
  populate: [{
    id: 'replaced-bpmn-example',
    xml: bpmn_diagram_replace
  }],
  select: {
    ids: [
      "Activity_03lz547",
      "StartEvent_0ky7h1i"
    ]
  }
}

export const BPMNBasicViewer = (args) => {

  const props = {
    id: 'BPMNBasicViewer_id',
    type: 'bpmn-viewer',
    data: [{
      id: 'initial-bpmn-example',
      xml: bpmn_diagram_initial
    }],
    config: { options: args },
    schema: {}
  }

  return (
    <div>
      {util.StoryUtil.prepStoryComponent(layout.Manager.ComponentManager.getInstance(), action, registerComponents, props, triggers, events, { triggers: trigger_data })}
      <BPMNViewerComponent {...props} />
    </div>
  );
};
BPMNBasicViewer.args = {
  backgroundColor: 'white'
}
