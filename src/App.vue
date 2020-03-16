<template>
  <div id="app">
    <h1>vue-verification-input</h1>
    <a href="https://github.com/YasinChan/vue-verification-input/tree/gh-pages">演示源码</a>
    <a href="https://github.com/YasinChan/vue-verification-input/tree/master">主仓库</a>
    <a href="https://www.npmjs.com/package/vue-verification-input">NPM</a>
    <div class="fixed">
      <div>
        <span>删除回调</span>
        <span>{{ deleteNum }}</span>
      </div>
      <div>
        <span>删除前的值</span>
        <span>{{ deleteCode }}</span>
      </div>
      <div>
        <span>完成回调</span>
        <span>{{ finishNum }}</span>
      </div>
      <div>
        <span>完成时的值</span>
        <span>{{ finishCode }}</span>
      </div>
    </div>
    <h2>默认样式</h2>
    <verificationCodeInput
        :wrong="verifyCodeWrong"
        @deleteEvent="deleteEvent"
        @finishEvent="finishEvent"
    />
    <span :style="{ color: verifyCodeWrong ? 'red' : '' }">{{ remind }}</span>
    <pre style="text-align: left;" v-highlightjs="sourcecode1"><code class=""></code></pre>

    <h2>自定义样式</h2>
    <verificationCodeInput
        :wrong="verifyCodeWrong2"
        type="text"
        item-class="item-class"
        max-length="4"
        item-margin="20px 10px"
        item-active-class="item-active-class"
        item-wrong-class="item-wrong-class"
        @deleteEvent="deleteEvent2"
        @finishEvent="finishEvent2"
    />
    <pre style="text-align: left;" v-highlightjs="sourcecode2"><code class=""></code></pre>
  </div>
</template>

<script>
  import 'highlight.js/styles/github.css'
  import VerificationCodeInput from './components/VerificationCodeInput.vue'

  export default {
    name: 'App',
    components: {
      VerificationCodeInput
    },
    data() {
      return {
        remind: '请输入验证码',
        verifyCodeWrong: false,
        verifyCodeWrong2: false,
        deleteNum: 0,
        deleteCode: '',
        finishNum: 0,
        finishCode: '',
        sourcecode1:
            '<template>\n' +
            '  <verificationCodeInput\n' +
            '    :wrong="verifyCodeWrong"\n' +
            '    @deleteEvent="deleteEvent"\n' +
            '    @finishEvent="finishEvent"\n' +
            '  />\n' +
            '</template>\n' +
            '// script \n' +
            'export default {\n' +
            '  methods: {\n' +
            '    deleteEvent() {\n' +
            '      this.deleteNum += 1\n' +
            '      this.remind = \'请输入验证码\'\n' +
            '      this.verifyCodeWrong = false\n' +
            '    },\n' +
            '    finishEvent() {\n' +
            '      this.finishNum += 1\n' +
            '      this.remind = \'验证码输入错误\'\n' +
            '      this.verifyCodeWrong = true\n' +
            '    },\n' +
            '  }\n' +
            '}\n',
        sourcecode2:
            '<template>\n' +
            '  <verificationCodeInput\n' +
            '    :wrong="verifyCodeWrong2"\n' +
            '    item-class="item-class"\n' +
            '    max-length="4"\n' +
            '    item-margin="20px 10px"\n' +
            '    item-active-class="item-active-class"\n' +
            '    item-wrong-class="item-wrong-class"\n' +
            '    @deleteEvent="deleteEvent2"\n' +
            '    @finishEvent="finishEvent2"\n' +
            '  />\n' +
            '</template>\n' +
            '\n' +
            '// script \n' +
            'export default {\n' +
            '  methods: {\n' +
            '    deleteEvent2() {\n' +
            '      this.deleteNum += 1\n' +
            '      this.verifyCodeWrong2 = false\n' +
            '    },\n' +
            '    finishEvent2() {\n' +
            '      this.finishNum += 1\n' +
            '      this.verifyCodeWrong2 = true\n' +
            '    }\n' +
            '  }\n' +
            '}\n' +
            '\n' +
            '// css\n' +
            '<style>\n' +
            '  .item-class {\n' +
            '    height: 80px;\n' +
            '    width: 60px;\n' +
            '    border: 1px solid #999;\n' +
            '    background: #fff;\n' +
            '    border-radius: 8px;\n' +
            '    font-size: 26px;\n' +
            '    color: #ccc;\n' +
            '  }\n' +
            '  .item-active-class {\n' +
            '    border: 1px solid #1989fa;\n' +
            '    color: #1989fa;\n' +
            '    background: #f2f2f2;\n' +
            '  }\n' +
            '  .item-wrong-class {\n' +
            '    border: 1px solid #e6a23c;\n' +
            '    color: #fff;\n' +
            '    background: #e6a23c;\n' +
            '  }\n' +
            '</style>'
      }
    },
    methods: {
      deleteEvent(code) {
        this.deleteNum += 1
        this.deleteCode = code
        this.remind = '请输入验证码'
        this.verifyCodeWrong = false
      },
      finishEvent(code) {
        this.finishNum += 1
        this.finishCode = code
        this.remind = '验证码输入错误'
        this.verifyCodeWrong = true
      },
      deleteEvent2(code) {
        this.deleteNum += 1
        this.deleteCode = code
        this.verifyCodeWrong2 = false
      },
      finishEvent2(code) {
        this.finishNum += 1
        this.finishCode = code
        this.verifyCodeWrong2 = true
      }
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    max-width: 960px;
    margin: 0 auto;
  }
  a {
    color: #409eff;
    font-size: 18px;
    font-weight: bold;
    display: block;
  }
  h1 {
    margin: 20px 0 10px;
  }
  .item-class {
    height: 80px;
    width: 60px;
    border: 1px solid #999;
    background: #fff;
    border-radius: 8px;
    font-size: 26px;
    color: #ccc;
  }
  .item-active-class {
    border: 1px solid #1989fa;
    color: #1989fa;
    background: #f2f2f2;
  }
  .item-wrong-class {
    border: 1px solid #e6a23c;
    color: #fff;
    background: #e6a23c;
  }
  .fixed {
    position: fixed;
    right: 10px;
    text-align: left;
    z-index: 2;
    top: 50%;
    transform: translateY(-50%);
    width: 190px;
    background: rgba(0, 0, 0 ,0.1);
    padding: 20px;
    border-radius: 10px;
    box-sizing: border-box;
  }
</style>
