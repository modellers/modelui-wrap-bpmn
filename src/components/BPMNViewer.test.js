/**
 * ListComponent tests
 * Testing DD events and actions integrety
 */

import { BPMNViewerComponent, events, triggers, config } from './BPMNViewer';
import { BPMNViewer } from './BPMN';

import { util } from '../modelui-core-runtime';
import { layout } from '../modelui-core-runtime';
import registerComponents from './Components';
import renderer from 'react-test-renderer';


describe('BPMNViewer protocol', () => {
  const tests = util.TestUtil.createComponentClassTests(
    layout.Manager.ComponentManager.getInstance(),
    registerComponents,
    renderer,      
    config,
    [
      'submit',
      'enable',
      'disable',
      // 'load',
      'select',
      'clear',
      'populate'
    ], [
    'enabled',
    'disabled',
    'populating',
    'populated',
    'invalidated',
    'validated',
    'changed',
    'selected',
    'tap',
    'hover-over',
    'hover-exit',
    'press',
    'release',
    'cleared',
    'submitted',
    'failure'
  ]
  );
  tests.forEach((t) => { test(t.title, t.test); });
});
/*
describe('BPMNViewer register', () => {
  const tests = util.TestUtil.createComponentRegisterTests(
    layout.Manager.ComponentManager.getInstance(),
    registerComponents,    
    'bpmn-viewer',
    BPMNViewer,
    triggers,
    events,
    config,
    {}
  );
  tests.forEach((t) => { test(t.title, t.test); });
});
*/