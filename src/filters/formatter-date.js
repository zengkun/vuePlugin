import Vue from 'vue';

function formatterDate(timestamp) {
  let date = new Date(timestamp);
  return `${date.getFullYear()}-${(date.getMonth() + 1)}-${date.getDate()}`;
}

export default Vue.filter('formatterDate', formatterDate);
