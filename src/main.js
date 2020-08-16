import Vue from "vue";
import App from "./App.vue";

/**
 * We import our router instance from `router.js`
 */
import router from "./router";

/**
 * In our Vue app instance, we give the router
 * instance as an option so our router is wired
 * up with the rest of our app.
 */
new Vue({
  router: router,
  render: (h) => h(App)
}).$mount("#app");
