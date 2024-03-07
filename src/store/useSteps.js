import AboutFormVue from '@/components/Steps/AboutForm.vue';
import InformationFormVue from '@/components/Steps/InformationForm.vue';
import ProfileFormVue from '@/components/Steps/ProfileForm.vue';

import { reactive, readonly } from 'vue';


const stateDefault = {
    currentStep: 0,
    steps: [
        { component: AboutFormVue },
        { component: InformationFormVue },
        { component: ProfileFormVue }
    ]
}

const state = reactive(stateDefault);

const actions = {
    setCurrentStep: (value) => {
        state.currentStep = value;
    },
    setSteps: (value) => {
        state.steps[value] = value;
    }
}


export default () => {
    return {
        state: readonly(state),
        ...actions,
    };
};
