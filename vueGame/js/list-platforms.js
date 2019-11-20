new Vue({
    el: '#app',
    data () {
      return {
        platforms: []
      }
    },
    mounted() {
      axios({
        "method":"GET",
        "url":"https://rawg-video-games-database.p.rapidapi.com/platforms",
        "headers":{
        "content-type":"application/json",
        "x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key":"48a733ac78mshe1653c711738f3cp16f015jsnc74c1cc7c74e"
        }
      })
        .then(response => (this.platforms = response.data.results))    
    }
  })