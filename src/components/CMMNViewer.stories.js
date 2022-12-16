import React from 'react';
import { action } from '@storybook/addon-actions' // storybook action handler
// test utils
import { util } from '../modelui-core-runtime';
import registerComponents from './Components';

import { CMMNViewerComponent } from './CMMNViewer';
import { triggers, events, config } from './CMMNViewer'

import { layout } from '../modelui-core-runtime';

export default {
  title: 'Extras/OMG CMMN',
  component: CMMNViewerComponent,
  argTypes: util.StoryUtil.createStoryArgumentTypesFromSchema(config.options),
};

const cmmn_diagram_initial = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><cmmn:definitions xmlns:dc=\"http://www.omg.org/spec/CMMN/20151109/DC\" xmlns:cmmndi=\"http://www.omg.org/spec/CMMN/20151109/CMMNDI\" xmlns:cmmn=\"http://www.omg.org/spec/CMMN/20151109/MODEL\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:di=\"http://www.omg.org/spec/CMMN/20151109/DI\" id=\"Definitions_0q2hekz\" targetNamespace=\"http://bpmn.io/schema/cmmn\" exporter=\"cmmn-js (https://demo.bpmn.io/cmmn)\" exporterVersion=\"0.20.0\"><cmmn:case id=\"Case_0mbeegm\"><cmmn:casePlanModel id=\"CasePlanModel_0l75tfv\" name=\"A CasePlanModel\"><cmmn:planItem id=\"PlanItem_0nndxko\" definitionRef=\"Task_14nbr0o\"><cmmn:entryCriterion id=\"EntryCriterion_0i4ja07\" sentryRef=\"Sentry_18pc5du\" /></cmmn:planItem><cmmn:planItem id=\"PlanItem_0th8d5v\" definitionRef=\"EventListener_0poum21\" /><cmmn:sentry id=\"Sentry_18pc5du\"><cmmn:planItemOnPart id=\"PlanItemOnPart_125ga5x\" sourceRef=\"PlanItem_0th8d5v\"><cmmn:standardEvent>occur</cmmn:standardEvent></cmmn:planItemOnPart></cmmn:sentry><cmmn:task id=\"Task_14nbr0o\" name=\"Test initial\" /><cmmn:eventListener id=\"EventListener_0poum21\" name=\"Page load\" /></cmmn:casePlanModel></cmmn:case><cmmndi:CMMNDI><cmmndi:CMMNDiagram id=\"CMMNDiagram_1\"><cmmndi:Size width=\"500\" height=\"500\" /><cmmndi:CMMNShape id=\"DI_CasePlanModel_0l75tfv\" cmmnElementRef=\"CasePlanModel_0l75tfv\"><dc:Bounds x=\"156\" y=\"99\" width=\"534\" height=\"389\" /><cmmndi:CMMNLabel /></cmmndi:CMMNShape><cmmndi:CMMNShape id=\"PlanItem_0nndxko_di\" cmmnElementRef=\"PlanItem_0nndxko\"><dc:Bounds x=\"336\" y=\"148\" width=\"100\" height=\"80\" /><cmmndi:CMMNLabel /></cmmndi:CMMNShape><cmmndi:CMMNShape id=\"PlanItem_0th8d5v_di\" cmmnElementRef=\"PlanItem_0th8d5v\"><dc:Bounds x=\"209\" y=\"170\" width=\"36\" height=\"36\" /><cmmndi:CMMNLabel><dc:Bounds x=\"202\" y=\"206\" width=\"50\" height=\"13\" /></cmmndi:CMMNLabel></cmmndi:CMMNShape><cmmndi:CMMNShape id=\"EntryCriterion_0i4ja07_di\" cmmnElementRef=\"EntryCriterion_0i4ja07\"><dc:Bounds x=\"326\" y=\"174\" width=\"20\" height=\"28\" /><cmmndi:CMMNLabel /></cmmndi:CMMNShape><cmmndi:CMMNEdge id=\"PlanItemOnPart_125ga5x_di\" cmmnElementRef=\"PlanItemOnPart_125ga5x\" targetCMMNElementRef=\"EntryCriterion_0i4ja07\" isStandardEventVisible=\"true\"><di:waypoint x=\"245\" y=\"188\" /><di:waypoint x=\"286\" y=\"188\" /><di:waypoint x=\"286\" y=\"188\" /><di:waypoint x=\"326\" y=\"188\" /><cmmndi:CMMNLabel><dc:Bounds x=\"269\" y=\"174.5\" width=\"34\" height=\"13\" /></cmmndi:CMMNLabel></cmmndi:CMMNEdge></cmmndi:CMMNDiagram></cmmndi:CMMNDI></cmmn:definitions>";
const cmmn_diagram_replace = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><cmmn:definitions xmlns:dc=\"http://www.omg.org/spec/CMMN/20151109/DC\" xmlns:cmmndi=\"http://www.omg.org/spec/CMMN/20151109/CMMNDI\" xmlns:cmmn=\"http://www.omg.org/spec/CMMN/20151109/MODEL\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:di=\"http://www.omg.org/spec/CMMN/20151109/DI\" id=\"Definitions_0q2hekz\" targetNamespace=\"http://bpmn.io/schema/cmmn\" exporter=\"cmmn-js (https://demo.bpmn.io/cmmn)\" exporterVersion=\"0.20.0\"><cmmn:case id=\"Case_0mbeegm\"><cmmn:casePlanModel id=\"CasePlanModel_0l75tfv\" name=\"A CasePlanModel\"><cmmn:planItem id=\"PlanItem_0nndxko\" definitionRef=\"Task_14nbr0o\"><cmmn:entryCriterion id=\"EntryCriterion_0i4ja07\" sentryRef=\"Sentry_18pc5du\" /></cmmn:planItem><cmmn:planItem id=\"PlanItem_0th8d5v\" definitionRef=\"EventListener_0poum21\" /><cmmn:sentry id=\"Sentry_18pc5du\"><cmmn:planItemOnPart id=\"PlanItemOnPart_125ga5x\" sourceRef=\"PlanItem_0th8d5v\"><cmmn:standardEvent>occur</cmmn:standardEvent></cmmn:planItemOnPart></cmmn:sentry><cmmn:task id=\"Task_14nbr0o\" name=\"Test replaced\" /><cmmn:eventListener id=\"EventListener_0poum21\" name=\"Page load\" /></cmmn:casePlanModel></cmmn:case><cmmndi:CMMNDI><cmmndi:CMMNDiagram id=\"CMMNDiagram_1\"><cmmndi:Size width=\"500\" height=\"500\" /><cmmndi:CMMNShape id=\"DI_CasePlanModel_0l75tfv\" cmmnElementRef=\"CasePlanModel_0l75tfv\"><dc:Bounds x=\"156\" y=\"99\" width=\"534\" height=\"389\" /><cmmndi:CMMNLabel /></cmmndi:CMMNShape><cmmndi:CMMNShape id=\"PlanItem_0nndxko_di\" cmmnElementRef=\"PlanItem_0nndxko\"><dc:Bounds x=\"336\" y=\"148\" width=\"100\" height=\"80\" /><cmmndi:CMMNLabel /></cmmndi:CMMNShape><cmmndi:CMMNShape id=\"PlanItem_0th8d5v_di\" cmmnElementRef=\"PlanItem_0th8d5v\"><dc:Bounds x=\"209\" y=\"170\" width=\"36\" height=\"36\" /><cmmndi:CMMNLabel><dc:Bounds x=\"202\" y=\"206\" width=\"50\" height=\"13\" /></cmmndi:CMMNLabel></cmmndi:CMMNShape><cmmndi:CMMNShape id=\"EntryCriterion_0i4ja07_di\" cmmnElementRef=\"EntryCriterion_0i4ja07\"><dc:Bounds x=\"326\" y=\"174\" width=\"20\" height=\"28\" /><cmmndi:CMMNLabel /></cmmndi:CMMNShape><cmmndi:CMMNEdge id=\"PlanItemOnPart_125ga5x_di\" cmmnElementRef=\"PlanItemOnPart_125ga5x\" targetCMMNElementRef=\"EntryCriterion_0i4ja07\" isStandardEventVisible=\"true\"><di:waypoint x=\"245\" y=\"188\" /><di:waypoint x=\"286\" y=\"188\" /><di:waypoint x=\"286\" y=\"188\" /><di:waypoint x=\"326\" y=\"188\" /><cmmndi:CMMNLabel><dc:Bounds x=\"269\" y=\"174.5\" width=\"34\" height=\"13\" /></cmmndi:CMMNLabel></cmmndi:CMMNEdge></cmmndi:CMMNDiagram></cmmndi:CMMNDI></cmmn:definitions>";

const trigger_data = {
  populate: [{
    id: 'replace-cmmn-example',
    xml: cmmn_diagram_replace
  }],
  select: {
    ids: ["PlanItem_0th8d5v", "PlanItem_0nndxko"]
  }
}

export const CMMNBasicViewer = (args) => {
  const props = {
    id: 'CMMNBasicViewer_id',
    type: 'cmmn-viewer',
    data: [{
      id: 'initial-cmmn-example',
      xml: cmmn_diagram_initial
    }],
    config: { options: args },
    schema: {}
  }
  return (
    <div>
      {util.StoryUtil.prepStoryComponent(layout.Manager.ComponentManager.getInstance(), action, registerComponents, props, triggers, events, { triggers: trigger_data })}
      <CMMNViewerComponent {...props} />
    </div>
  );
};
CMMNBasicViewer.args = {
  backgroundColor: 'white'
}
