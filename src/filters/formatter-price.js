import Vue from 'vue';

function formatterPrice(price, unit) {
  return `${price} ${unit ? unit : '元'}`
}

export default Vue.filter('formatterPrice', formatterPrice);
