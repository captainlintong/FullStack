let Vue;
// vue插件形式：
// 实现一个install方法，在use时被调用
class KVueRouter {
  constructor(options) {
    console.log(options);
    this.$options = options; // defineReactive
    Vue.util.defineReactive(this, "current", window.location.hash.slice(1)) || '/';
    window.addEventListener("hashchange", () => {
      console.log(this.current);
      this.current = window.location.hash.slice(1) || '/';
    });
  }
}
KVueRouter.install = function(_Vue) {
  Vue = _Vue;
  // 传入构造函数，我们可以修改他的原型，起到扩展的作用
  Vue.mixin({
    beforeCreate() {
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router;
        console.log(this.$options.router);
        console.log(this);
      }
    },
  });
  Vue.component("router-link", {
    props: {
      to: {
        type: String,
        required: true,
      },
    },
    render(h) {
      return h(
        "a",
        {
          attrs: {
            href: "#" + this.to,
          },
        },
        this.$slots.default
      );
    },
  });
  Vue.component("router-view", {
    render(h) {
      let component = null;
      const route = this.$router.$options.routes.find(
        (route) => route.path === this.$router.current
      );
      if (route) {
        component = route.component;
      }
      return h(component);
    },
  });
};
export default KVueRouter;