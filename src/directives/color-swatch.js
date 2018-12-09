import Vue from 'vue';

const colorSwatch = function(el, binding) {
  el.style.color = binding.value
}

export default Vue.directive('colorSwatch', colorSwatch);
