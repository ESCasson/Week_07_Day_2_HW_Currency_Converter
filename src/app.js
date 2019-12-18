import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({

    el: "#app",

    data: {
      allRates:[],
      amount: 0,
      calc: "from",
      conversionRate: 1,
      multiAmount: 0,
      multiConversionRateFrom: 1,
      multiConversionRateTo: 1,
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
      multiCalculation: function(){
        const value = (this.multiAmount / this.multiConversionRateFrom) *
        this.multiConversionRateTo
        return value.toFixed(2)
      }
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
