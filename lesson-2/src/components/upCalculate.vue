<template>
  <div class="hello">

    <h3>the simple calculator is updated</h3>

    <div class="calc">
        <input v-bind="Number.num" v-model.number="operand1" ref="op1" />
        <input v-bind="Number.num" v-model.number="operand2" ref="op2" />
      = <span>{{ result }} </span>

      <div class="btns">
        <button
        :class="{'active': btnActiveState === '+'}"
        v-for="op in operations"
        :key="op"
        @click="calculate(op), onClick('+')"
        >{{ op }}</button>
      </div>

      <input type="checkbox"
      v-model="btnsNum"
      >show on-screen keyboard

      <div v-if="btnsNum === status.on">
         <button class="btnsNum"
         v-for="(num, index) in Numbers"
         :key="num.index"
         v-on:remove="Numbers.splice(index, 1)"
         > {{ num }} </button>

         <button class="del" @click="$emit('remove')">←</button><br>

         <!-- Запутался окончательно с радио-кнопками, то одно не работает, то другое,
         всё вместе вообще никак не запускается. Всю логику понимаю, а как всё вместе
         правильно прописать в увязке с инпутами, пока до конца не понял -->

        <input type="radio" id="operand1" value="" :v-model="operand1">
        <label for="operand1">op 1</label>

        <input type="radio" id="operand2" value="" :v-model="operand2">
        <label for="operand2">op 2</label>
      </div>
      <div v-else></div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'upCalculate',
  props: [],
  data: () => ({
    Numbers:
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    num: '',
    selectedNum: '',
    btnsNum: true,
    status: {
      on: true,
      off: false,
    },

    show: false,
    isGray: false,
    isGreen: false,
    isGrayBtn: true,
    isActive: false,

    btnActiveState: '',
    operand1: '',
    operand2: '',
    result: 0,
    operations: [
      '+', '-',
      '/', '*',
      'exp', 'int',
    ],
    logs: {},
  }),

  methods: {
    calculate(op) {
      const { operand1, operand2 } = this;
      const calcOperation = {
        '+': () => operand1 + operand2,
        '-': () => operand1 - operand2,
        '/': () => operand1 / operand2,
        '*': () => operand1 * operand2,

        // eslint-disable-next-line no-restricted-properties
        exp: () => Math.pow(operand1, operand2),
        int: () => Math.trunc(operand1 / operand2),
      };
      this.result = calcOperation[op]();

      Vue.set(this.logs, Date.now(), `used op ${op}`);
    },
    onClick(op) {
      this.btnActiveState = op;
    },
    op1Choose() {
      const { op1 } = this.$refs;
      if (op1) {
        op1.focus();
        console.log(op1);
      }
    },
    op2Choose() {
      const { op2 } = this.$refs;
      if (op2) {
        op2.focus();
        console.log(op2);
      }
    },
  },
  computed: {
    isChecked() {
      return this.selectedNum === this.value;
    },
  },
};
</script>

<style scope lang="scss">

ul {
  list-style-type: none;
  padding: 0;
}
.calc {
  margin: 20px 0;
}

.del {
  background: #42b983;
}

.btns, .btnsNum {
  margin: 12px 3px;
}

.btn {
  margin: 0px 3px;
  background-color: #2c3e50;
  color: #42b983;
  cursor: pointer;
}

.active,
.green {
  background-color: #42b983;
  color: #2c3e50;
}

.gray {
  background-color: #2c3e50;
  color: #42b983;
}

input {
  text-align: center;
  width: 100px;
  outline: none;
}
span {
  color: #42b983;
  font-size: 16px;
  font-weight: bold;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  text-decoration: none;
  color: #42b983;
}
</style>
