<template>
  <div class="hello">

    <h3>the simple calculator</h3>
     <button
     class="btnOnOff"
    :class="{gray: isGray}"
     @click="
     show = !show,
     isGray = !isGray,
     status.on = status.off"
     >{{ status.on || status.off}}</button>

    <div v-if="show" class="calc">
        <input v-model.number="operand1" name="operand1"/>
        <input v-model.number="operand2" name="operand2"/>
      = <span>{{ result }}</span>

    <div class="error" v-if="error">{{ error }}</div>
    <div class="description" v-if="result < 0">the result is a negative number</div>
    <div class="description" v-else-if="result > 100">the result is more than 100</div>
    <div class="description" v-else-if="result === 0">the result is zero</div>
    <div class="description" v-else></div>
<br>
      <!-- fib (<input v-model.number="operand1"/>)
      : <span>{{ fib1  }}</span>
      fib (<input v-model.number="operand2"/>)
      : <span>{{ fib2 }}</span> -->

      <div class="btns">
        <button
        :class="{'active': btnActiveState === '+'}"
        v-for="op in operations"
        :key="op"
        :name="op"
        @click="calculate(op), onClick('+')"
        >{{ op }}</button>
      </div>
    </div>
        <!-- <button
        :class="{green: isActive, btn: isGrayBtn}"
        @click="calculate('+'),
        isActive = !isActive,
        btn = isGrayBtn"
        >+</button>

        <button
        @click="calculate('/')"
        >/</button> -->
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'calculate',
  props: { },
  data: () => ({
    lesson: 'Lesson',
    show: true,
    isGray: false,
    isGreen: false,
    isGrayBtn: true,
    status: {
      on: 'on',
      off: 'off',
    },
    isActive: false,

    btnActiveState: '',
    operand1: '',
    operand2: '',
    result: 0,
    error: '',
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

      if (op === '/' && operand2 === 0) {
        this.error = 'Divizion by zero!';
        return;
      }
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

      // this.$set

      // this.logs[Date.now()] = `used op ${op}`;
      // this.logs = { ...this.logs };
      // this.logs = Object.assign( {}, this.logs);
    },
    onClick(op) {
      this.btnActiveState = op;
    },
    fib(n) {
      return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2);
    },
  },
  computed: {
    fib1() {
      return this.fib(this.operand1);
    },
    fib2() {
      return this.fib(this.operand2);
    },
  },
};
</script>

<style scope lang="scss">
.error {
  padding: 15px;
  margin: 20px auto;
  width: 200px;
  border: 1px solid red;
}

ul {
  list-style-type: none;
  padding: 0;
}
.btnOnOff {
  margin: 20px 0;
  background-color: #42b983;
  border: none;
  font-size: 18px;
  cursor: pointer;
}

.btns{
  margin: 20px;
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
