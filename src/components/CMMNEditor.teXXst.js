/**
 * ListComponent tests
 * Testing DD events and actions integrety
 */

import { CMMNEditorComponent, events, triggers, config } from './CMMNEditor';
import { CMMNEditor } from './CMMN';

import { util } from '../modelui-core-runtime';
import { layout } from '../modelui-core-runtime';
import registerComponents from './Components';
import renderer from 'react-test-renderer';

describe('CMMNEditor protocol', () => {
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

describe('CMMNEditor register', () => {
  const tests = util.TestUtil.createComponentRegisterTests(
    layout.Manager.ComponentManager.getInstance(),
    registerComponents,        
    'cmmn-editor',
    CMMNEditor,
    triggers,
    events,
    config,
    {}
  );
  tests.forEach((t) => { test(t.title, t.test); });
});
