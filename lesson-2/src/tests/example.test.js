import { mount } from '@vue/test-utils';
import TestComponent from './TestComponent.vue';

// eslint-disable-next-line no-undef
describe('TestComponent', () => {
  // eslint-disable-next-line no-undef
  test('Content of TestComponent', () => {
    const Wrapper = mount(TestComponent, {
      propsData: {
        message: 'Hello from test!',
      },
    });
    // eslint-disable-next-line no-undef
    expect(Wrapper.text()).toEqual(
      'The message is: Hello from test!',
    );
  });
});
