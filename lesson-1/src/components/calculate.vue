<template>
  <div class="hello">
    <h3>{{ msg }} <a href="https://gb.ru/lessons/134350" target="_blank">{{ lesson }} {{ num }}</a></h3>
    <h3>Калькулятор</h3>

  <!-- не смог сделать "переключатель классов", как в обычном JS, что то вроде: -->
  <!-- function changeActiveClass(event) {
    document.querySelector('.active').classList.remove('active');
    event.target.classList.add('active');
  } -->
   <!-- когда при нажатии кнопки, активируется определенный класс,
   а при нажатии другой, он де-активируется и присваеватся на которую нажали
   не сообразил, как это во Vue прописать. С одной кнопкой понятно, а с несколькими нет.
   И с переключалкой кнопки on - off: цвет меняет, а названия не получается -->

  <!-- switch на общую функцию calc написал, но как его правильно запустить
  тоже пока не понял  -->

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

      <div class="btns">
        <button
        :class="{green: isActive, btn: isGrayBtn}"
        @click="sum(),
        isActive = !isActive,
        btn = isGrayBtn"
        >+</button>

        <button
         :class="{green: isActive, btn: isGrayBtn}"
        @click="sub(),
        isActive = !isActive,
        btn = isGrayBtn"
        >-</button>

        <button
        @click="div()"
        >/</button>

        <button
        @click="mul"
        >*</button>

        <button
        @click="exp"
        >exp</button>

        <button
        @click="int"
        >int /</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'calculate',
  props: {
    msg: String,
    num: Number,
    // stutus: Bulean,
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
    operand1: '',
    operand2: '',
    result: 0,
    action: [
      'sum',
      'sub',
      'div',
      'mul',
      'exp',
      'int',
    ],
  }),

  methods: {
    sum() {
      this.result = this.operand1 + this.operand2;
    },
    sub() {
      this.result = this.operand1 - this.operand2;
    },
    div() {
      this.result = this.operand1 / this.operand2;
    },
    mul() {
      this.result = this.operand1 * this.operand2;
    },
    exp() {
      // eslint-disable-next-line no-restricted-properties
      this.result = Math.pow(this.operand1, this.operand2);
    },
    int() {
      this.result = Math.trunc(this.operand1 / this.operand2);
    },
  },
  computed: {
    calculation(operand1, operand2, action) {
      switch (action) {
        case '+':
          return action.sum(operand1, operand2);
        case '-':
          return action.sub(operand1, operand2);
        case '/':
          return action.div(operand1, operand2);
        case '*':
          return action.mul(operand1, operand2);
        case 'exp':
          return action.exp(operand1, operand2);
        case 'int':
          return action.int(operand1, operand2);
        default:
          throw new Error(`Операция ${action} не предусмотрена`);
      }
    },
  },
};
</script>

<style scoped lang="scss">

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
