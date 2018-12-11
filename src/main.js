// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import uuidv1 from 'uuid/v1'

console.log(uuidv1());

// test344444444444444

Vue.config.productionTip = false

import "./filters";
import "./directives";

import Raven from "raven-js"
import RavenVue from "raven-js/plugins/vue"

Raven.config("https://a7aee4e6cc33459f8f3142ae08c0b456@sentry.io/1338549", {
    release: "wow-vue-v1"
  })
  .addPlugin(RavenVue, Vue)
  .install()


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

/*
过滤数组中的假值（false, null, 0, "", undefined, NaN）
 */

// chrome对ES6做了深度优化
// https://juejin.im/post/59411934a0bb9f006b7938e8

// 方法一（原生filter）：
function filterCompact(array) {
  console.time("filterCompact");
  const result = array => array.map(Boolean)
  console.timeEnd("filterCompact");
  return result;
}

// 方法二（lodash源码）：
function lodashCompact(array) {
  console.time("lodashCompact");
  var index = -1,
    length = array == null ? 0 : array.length,
    resIndex = 0,
    result = [];

  while (++index < length) {
    var value = array[index];
    if (value) {
      result[resIndex++] = value
    }
  }
  console.timeEnd("lodashCompact");
  return result;
}

var arr = [0, 1, false, 2, '', ' ', NaN, 'e' * 23, 0, 1, 2, '', ' ', NaN, 'e' * 23, 0, 1, false, 2, '', ' ', NaN, 'e' * 23, 0, 1, false, 2, '', ' ', NaN, 'e' * 23, 0, 1, false, 2, '', ' ', NaN, 'e' * 23, 0, 1, false, 2, '', ' ', NaN, 'e' * 23, 0, 1, false, 2, '', ' ', NaN, 'e' * 23, 0, 1, false, 2, '', ' ', NaN, 'e' * 23, 0, 1, false, 2, '', ' ', NaN, 'e' * 23, 0, 1, false, 2, '', ' ', NaN, 'e' * 23, 0, 1, false, 2, '', ' ', NaN, 'e' * 23, 0, 1, false, 2, '', ' ', NaN, 'e' * 23, 0, 1, false, 2, '', ' ', NaN, 'e' * 23, 0, 1, false, 2, '', ' ', NaN, 'e' * 23]

filterCompact(arr);
lodashCompact(arr);
