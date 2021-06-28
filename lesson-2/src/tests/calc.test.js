import { mount } from '@vue/test-utils';
import calculate from '../components/calculate.vue';

// eslint-disable-next-line no-undef
describe('Calc logic test', () => {
  // eslint-disable-next-line no-undef
  test('test sum operator', () => {
    const Wrapper = mount(calculate);

    const operand1 = Wrapper.find('input[name=operand1]');
    operand1.setValue('100');
    const operand2 = Wrapper.find('input[name=operand2]');
    operand2.setValue('25');

    const sumBtn = Wrapper.find('button[name="+"]');
    sumBtn.trigger('click');

    // eslint-disable-next-line no-undef
    expect(Wrapper.vm.result).toBe(125);
  });
});
