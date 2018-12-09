import Vue from 'vue';

const innerText = function(el, binding) {
  el.innerHTML = binding.value
}

export default Vue.directive('innerText', innerText);
