new Vue({
    el: '#genres',
    data () {
      return {
        info: []
      }
    },
    created () {
      axios({
        "method":"GET",
        "url":"https://rawg-video-games-database.p.rapidapi.com/genres",
        "headers":{
        "content-type":"application/json",
        "x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key":"48a733ac78mshe1653c711738f3cp16f015jsnc74c1cc7c74e"
        }
      })
        .then(response => (
          this.info = response.data.results
          ))    
    }
  })