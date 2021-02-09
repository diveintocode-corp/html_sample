

// Vue.component('button-counter', {
//   data: function () {
//     return {
//       count: 0
//     }
//   },
//   template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
//   // template: `
//   // <button v-on:click="count++">
//   //   You clicked me {{ count }} times.
//   // </button>
//   // `
// })



const app = new Vue({
  el: '#app',
  data() {
    return {
      errorMessage: 'Eメールが一致しません',
      confirmView: false,
      formData: {
        name: '',
        email: '',
        emailConfirm: '',
        content: '',
        region: '',
      },
      regions: [
        '東北',
        '関東',
        '関西'
      ]
    }
  },
  computed: {
    validation: function() {
      return this.formData.email === '' || this.formData.emailConfirm === '' || this.formData.email === this.formData.emailConfirm
    },
    errorClass: function() {
      return this.validation ? false : "alert_bg";
    }
  },
  methods: {
    checkForm() {
      if (!this.validation) return false;
      this.confirmView = true;
    },
    closeCheckForm() {
      this.confirmView = false;
    }
  }
})
