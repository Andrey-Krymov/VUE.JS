<template>
  <div class="hello">
    <h3>{{ msg }} <a href="https://gb.ru/lessons/134350" target="_blank">{{ lesson }} {{ num }}</a></h3>
    <h3>Калькулятор</h3>
     <button
     class="btnOnOff"
    :class="{gray: isGray}"
     @click="
     show = !show,
     isGray = !isGray,
     status.on = status.off"
     >{{ status.on || status.off}}</button>

    <div v-if="show" class="calc">
        <input v-model.number="operand1"/>
        <input v-model.number="operand2"/>
      = <span>{{ result }}</span>
<br>
<br>
      fib (<input v-model.number="operand1"/>)
      : <span>{{ fib1  }}</span>
      fib (<input v-model.number="operand2"/>)
      : <span>{{ fib2 }}</span>

      <div class="btns">
        <button
        :class="{'active': btnActiveState === '+'}"
        v-for="op in operations"
        :key="op"
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
  props: {
    msg: String,
    num: Number,
  },
  data: () => ({
    lesson: 'Lesson',
    show: false,
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

h3 {
  margin: 40px 0 0;
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
