function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function(item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
  }
  
  new Vue({
    el: '#platforms',
    data () {
      return {
        info: []
      }
    },
    mounted () {
      axios({
        "method":"GET",
        "url":"https://rawg-video-games-database.p.rapidapi.com/platforms/"+findGetParameter("id"),
        "headers":{
        "content-type":"application/json",
        "x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key":"48a733ac78mshe1653c711738f3cp16f015jsnc74c1cc7c74e"
        }
      })
        .then(response => (
          this.info = response.data
          ))    
    }
  })