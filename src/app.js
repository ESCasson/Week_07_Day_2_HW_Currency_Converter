import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({

    el: "#app",

    data: {
      allRates:[],
      amount: 0,
      calc: "from",
      conversionRate: 1,
    },

    computed: {
      calculation: function(){
        if (this.calc === "from"){
        const value = this.amount * this.conversionRate
        return value.toFixed(2)
      } else {
        const value = this.amount / this.conversionRate
        return value.toFixed(2)
        }
      },
    },

    mounted(){
      this.fetchAllRates()
    },

    methods: {
      fetchAllRates: function(){
        const request = fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => this.allRates = data.rates)
      },





    },

  })
}
)
