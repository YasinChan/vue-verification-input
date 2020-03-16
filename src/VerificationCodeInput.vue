<template>
  <div class="verification-code">
    <input
        :maxlength="maxLength"
        ref="codeInput"
        v-model="code"
        class="verification-code__input"
        :type="type"
        onselectstart="return false;"
    />
    <table class="verification-code__box" :style="{ borderSpacing: itemMargin }" @click="triggerInput">
      <tr>
        <td
            v-for="(item, index) in itemList"
            :key="index"
            :class="['verification-code__item', itemClass, wrong ? itemWrongClass : '', item ? itemActiveClass : '']"
        >
          {{ item }}
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
  export default {
    name: 'VerificationCodeInput',
    props: {
      maxLength: {
        default: 6
      },
      type: {
        default: 'tel',
        type: String
      },
      wrong: {
        type: Boolean,
        default: false
      },
      itemClass: {
        type: String,
        default: 'verification-code__item-class'
      },
      itemWrongClass: {
        type: String,
        default: 'wrong'
      },
      itemActiveClass: {
        type: String,
        default: 'active'
      },
      itemMargin: {
        type: String,
        default: '10px 0'
      }
    },
    data() {
      return {
        code: '',
        lock: false,
        itemList: new Array(Number(this.maxLength))
      }
    },
    watch: {
      code(newVal, oldVal) {
        if (newVal.length === Number(this.maxLength)) {
          this.endCallback()
        }
        if (newVal.length > oldVal.length) {
          this.lock = false
          const valArr = newVal.split('')
          for (let i = 0; i < valArr.length; i++) {
            this.itemList[i] = valArr[i]
          }
        } else if ((newVal !== '' || oldVal.length === 1) && !this.lock) {
          this.lock = true
          this.itemList = new Array(Number(this.maxLength))
          this.code = ''
          this.deleteCallback(oldVal)
        }
      }
    },
    methods: {
      deleteCallback(val) {
        this.$emit('deleteEvent', val)
      },
      triggerInput() {
        this.$refs.codeInput.focus()
      },
      endCallback() {
        this.$emit('finishEvent', this.code)
      }
    }
  }
</script>
<style scoped>
  .verification-code {
    text-align: center;
    position: relative;
  }
  .verification-code__box {
    margin: 0 auto;
    position: relative;
    background: #ffffff;
  }

  .verification-code__input {
    position: absolute;
    left: 0;
    top: 0;
    height: 0;
    opacity: 0;
    outline: none;
    border: 0;
  }

  .verification-code__item {
    text-align: center;
    vertical-align: middle;
  }
  .verification-code__item-class {
    height: 50px;
    width: 40px;
    border: 1px solid #f8f8f8;
    background: #f8f8f8;
    border-radius: 5px;
    font-size: 22px;
    color: #333333;
  }
  .verification-code__item.active {
    border: 1px solid #14B9C8;
  }
  .verification-code__item.wrong {
    border: 1px solid #F25A5A;
  }
</style>
