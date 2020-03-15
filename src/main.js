import VerificationCodeInput from './VerificationCodeInput.vue'

if (typeof window !== 'undefined' && window.Vue) {
  Vue.component('vue-input-code', VerificationCodeInput);
}

export default VerificationCodeInput;
