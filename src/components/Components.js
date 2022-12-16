
// Managers and factories
import { layout } from '../modelui-core-runtime';

// Components
import { registerViewer as registerBPMNViewer, registerEditor as registerBPMNEditor} from './BPMN';
import { registerViewer as registerCMMNiewer, registerEditor as registerCMMNEditor} from './CMMN';

export default function registerComponents(component_manager) {

    if (!component_manager) {
        component_manager = layout.Manager.ComponentManager.getInstance();
    }
    /*
    if (component_manager.constructor.name !== 'ComponentManager') {
        throw `Constructor must be component manager. Got type ${component_manager.constructor.name}`;
    }
    */
    registerBPMNViewer(component_manager);
    registerBPMNEditor(component_manager);
    registerCMMNiewer(component_manager);
    registerCMMNEditor(component_manager);

}