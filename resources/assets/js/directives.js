import Vue from "vue";

Vue.directive("mouseout-element", {
  bind: function(el, binding) {
    const ourClickEventHandler = event => {
      if (!el.contains(event.target) && el !== event.target) {
        binding.value(event);
      }
    };
    el.__vueClickEventHandler__ = ourClickEventHandler;

    document.addEventListener("mouseout", ourClickEventHandler);
  },
  unbind: function(el) {
    document.removeEventListener("mouseout", el.__vueClickEventHandler__);
  }
});

Vue.directive("click-outside", {
  bind: function(el, binding) {
    const ourClickEventHandler = event => {
      if (!el.contains(event.target) && el !== event.target) {
        binding.value(event);
      }
    };
    el.__vueClickEventHandler__ = ourClickEventHandler;

    document.addEventListener("click", ourClickEventHandler);
  },
  unbind: function(el) {
    document.removeEventListener("click", el.__vueClickEventHandler__);
  }
});

Vue.directive("mouseover-element", {
  bind: function(el, binding) {
    const ourClickEventHandler = event => {
      if (!el.contains(event.target) && el !== event.target) {
        binding.value(event);
      }
    };
    el.__vueClickEventHandler__ = ourClickEventHandler;

    document.addEventListener("mouseover", ourClickEventHandler);
  },
  unbind: function(el) {
    document.removeEventListener("mouseover", el.__vueClickEventHandler__);
  }
});
