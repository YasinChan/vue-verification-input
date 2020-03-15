# vue-verification-input
> 方形验证码框

## 用法
```
$ yarn add vue-verification-input -S
# or
$ npm i vue-verification-input -S
```
1. 全局组件使用
    ```vue
    import Vue from 'vue'
    import VerificationCodeInput from 'vue-verification-input'
    Vue.component('VueInputCode', VerificationCodeInput)
    ```
2. 局部组件
    ```vue
    import VerificationCodeInput from 'vue-verification-input'
    export default {
      components: {
        VerificationCodeInput
      }
    }
    ```
3. template
    ```html
    <verificationCodeInput
        :wrong="verifyCodeWrong2"
        item-class="item-class"
        max-length="4"
        item-margin="20px 10px"
        item-active-class="item-active-class"
        item-wrong-class="item-wrong-class"
        @deleteEvent="deleteEvent2"
        @finishEvent="finishEvent2"
    />
    ```
   

