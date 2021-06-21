export default {
  install(Vue) {
    if (this.installed) {
      return;
    }
    this.installed = true;

    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$modal = {
      EventBus: new Vue(),

      show(name, settings) {
        this.EventBus.$emit('show', { name, settings });
      },
      close() {
        this.EventBus.$emit('close');
      },
    };
  },
};
