import { mount } from '@vue/test-utils';
import upCalculate from '../components/upCalculate.vue';

// eslint-disable-next-line no-undef
describe('appCalc all operations', () => {
  // eslint-disable-next-line no-undef
  test('test sum operator', () => {
    const Wrapper = mount(upCalculate);

    const operand1 = Wrapper.find('input[name=operand1]');
    operand1.setValue('100');
    const operand2 = Wrapper.find('input[name=operand2]');
    operand2.setValue('25');

    const resultBtn = Wrapper.find('button[name="+"]');
    resultBtn.trigger('click');

    // eslint-disable-next-line no-undef
    expect(Wrapper.vm.result).toBe(125);
  });
  // eslint-disable-next-line no-undef
  test('test sub operator', () => {
    const Wrapper = mount(upCalculate);

    const operand1 = Wrapper.find('input[name=operand1]');
    operand1.setValue('100');
    const operand2 = Wrapper.find('input[name=operand2]');
    operand2.setValue('25');

    const resultBtn = Wrapper.find('button[name="-"]');
    resultBtn.trigger('click');

    // eslint-disable-next-line no-undef
    expect(Wrapper.vm.result).toBe(75);
  });
  // eslint-disable-next-line no-undef
  test('test div operator', () => {
    const Wrapper = mount(upCalculate);

    const operand1 = Wrapper.find('input[name=operand1]');
    operand1.setValue('100');
    const operand2 = Wrapper.find('input[name=operand2]');
    operand2.setValue('25');

    const resultBtn = Wrapper.find('button[name="/"]');
    resultBtn.trigger('click');

    // eslint-disable-next-line no-undef
    expect(Wrapper.vm.result).toBe(4);
  });
  // eslint-disable-next-line no-undef
  test('test mul operator', () => {
    const Wrapper = mount(upCalculate);

    const operand1 = Wrapper.find('input[name=operand1]');
    operand1.setValue('100');
    const operand2 = Wrapper.find('input[name=operand2]');
    operand2.setValue('25');

    const resultBtn = Wrapper.find('button[name="*"]');
    resultBtn.trigger('click');

    // eslint-disable-next-line no-undef
    expect(Wrapper.vm.result).toBe(2500);
  });
  // eslint-disable-next-line no-undef
  test('test exp operator', () => {
    const Wrapper = mount(upCalculate);

    const operand1 = Wrapper.find('input[name=operand1]');
    operand1.setValue('2');
    const operand2 = Wrapper.find('input[name=operand2]');
    operand2.setValue('5');

    const resultBtn = Wrapper.find('button[name="exp"]');
    resultBtn.trigger('click');

    // eslint-disable-next-line no-undef
    expect(Wrapper.vm.result).toBe(32);
  });
  // eslint-disable-next-line no-undef
  test('test int operator', () => {
    const Wrapper = mount(upCalculate);

    const operand1 = Wrapper.find('input[name=operand1]');
    operand1.setValue('100');
    const operand2 = Wrapper.find('input[name=operand2]');
    operand2.setValue('49');

    const resultBtn = Wrapper.find('button[name="int"]');
    resultBtn.trigger('click');

    // eslint-disable-next-line no-undef
    expect(Wrapper.vm.result).toBe(2);
  });
});

// eslint-disable-next-line no-undef
describe('Calculator input tests', () => {
  // eslint-disable-next-line no-undef
  test('Test operand1 input value', async () => {
    const wrapper = mount(upCalculate);

    const operand1Input = wrapper.find('input[name=operand1]');
    operand1Input.setValue('10');

    // eslint-disable-next-line no-undef
    expect(wrapper.vm.operand1).toBe(10);
  });

  // eslint-disable-next-line no-undef
  test('Test operand2 input value', async () => {
    const wrapper = mount(upCalculate);

    const operand2Input = wrapper.find('input[name=operand2]');
    operand2Input.setValue('20');

    // eslint-disable-next-line no-undef
    expect(wrapper.vm.operand2).toBe(20);
  });
});

// eslint-disable-next-line no-undef
describe('Calculator on-screen keyboard', () => {
  // eslint-disable-next-line no-undef
  test('Test on-screen buttons', () => {
    const Wrapper = mount(upCalculate);

    const operand1Input = Wrapper.find('input[name=operand1]');
    // operand1Input.setValue('1');
    const btnOnScreen = Wrapper.find('button[name="btnOnScreen"]');
    btnOnScreen.trigger('click');
    // eslint-disable-next-line no-undef
    expect(operand1Input).toContain(btnOnScreen);
  });
  // eslint-disable-next-line no-undef
  test('Test eraseOne buttons', () => {
    const Wrapper = mount(upCalculate);

    const operand1Input = Wrapper.find('input[name=operand1]');
    const btnErase = Wrapper.find('button[name="btnErase"]');
    btnErase.trigger('click');
    // eslint-disable-next-line no-undef
    expect(operand1Input).toContain(btnErase);
  });
});
