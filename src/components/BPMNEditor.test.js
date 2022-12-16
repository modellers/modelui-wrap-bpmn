/**
 * ListComponent tests
 * Testing DD events and actions integrety
 */

import { BPMNEditorComponent, events, triggers, config } from './BPMNEditor';
import { BPMNEditor } from './BPMN';

import { util } from '../modelui-core-runtime';
import { layout } from '../modelui-core-runtime';
import registerComponents from './Components';
import renderer from 'react-test-renderer';

describe('BPMNEditor protocol', () => {
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

describe('BPMNEditor register', () => {
  const tests = util.TestUtil.createComponentRegisterTests(
    layout.Manager.ComponentManager.getInstance(),
    registerComponents,    
    'bpmn-editor',
    BPMNEditor,
    triggers,
    events,
    config,
    {}
  );
  tests.forEach((t) => { test(t.title, t.test); });
});
