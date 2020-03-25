# vue-verification-input

> 方形验证码框 支持快速粘贴

## 链接

**[demo](https://git.yasinchan.com/vue-verification-input/dist/)**
**[npm](https://www.npmjs.com/package/vue-verification-input)**

## 用法

```bash
$ yarn add vue-verification-input -S
# or
$ npm i vue-verification-input -S
```

1. 全局组件使用

   ```js
   import Vue from 'vue'
   import VerificationCodeInput from 'vue-verification-input'
   Vue.component('VerificationCodeInput', VerificationCodeInput)
   ```

2. 局部组件

   ```js
   import VerificationCodeInput from 'vue-verification-input'
   export default {
     components: {
       VerificationCodeInput
     }
   }
   ```

3. template

   ```html
   <VerificationCodeInput
       :wrong="[Boolean]"
       :type="[String]"
       :item-class="[String]"
       :max-length="[Number]"
       item-margin="20px 10px"
       :item-active-class="[String]"
       :item-wrong-class="[String]"
       @deleteEvent="deleteEvent"
       @finishEvent="finishEvent"
   />
   ```

   | Props             | 描述                           | 默认值 | 必须/可选 |
   | ----------------- | ------------------------------ | ------ | --------- |
   | wrong             | 用来控制验证框的状态           | false  | 必须      |
   | type              | Input 类型，一般选用 tel或text | tel    | 可选      |
   | item-class        | 单个框的样式                   | 如下   | 可选      |
   | max-length        | 输入框个数                     | 6      | 可选      |
   | item-margin       | 单个框左右和上下的间距         | 10px 0 | 可选      |
   | item-active-class | 单个框输入时的高亮样式         | 如下   | 可选      |
   | item-wrong-class  | 错误回调后的每个框的高亮样式   | 如下   | 可选      |

   ```css
   // item-class item-active-class item-wrong-class 的默认样式
   .item-class {
     height: 50px;
     width: 40px;
     border: 1px solid #f8f8f8;
     background: #f8f8f8;
     border-radius: 5px;
     font-size: 22px;
     color: #333333;
   }
   
   .item-active-class {
     border: 1px solid #14B9C8;
   }
   
   .item-wrong-class {
     border: 1px solid #F25A5A;
   }
   ```

   | emit        | 描述             | 参数                 |
   | ----------- | ---------------- | -------------------- |
   | deleteEvent | 删除事件         | 会传入删除前输入的值 |
   | finishEvent | 完整输入后的事件 | 会传入完成时输入的值 |

   ```js
   deleteEvent(code) {
     // code 删除前输入的值
     this.wrong = false
   },
   finishEvent(code) {
     // code 完成时输入的值
     this.wrong = true
   },
   ```

   > 需要注意的是，props 中的 `wrong` 需要与两个emit 共同作用，用来在不同阶段控制输入框的状态。
