import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({

    el: "#app",

    data: {
      allRates:[]
    },

    mounted(){
      this.fetchAllRates()
    },

    methods: {
      fetchAllRates: function(){
        const request = fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => this.allRates = data.rates)
      }



    },

  })
}
)
