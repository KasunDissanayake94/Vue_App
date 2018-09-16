<template>
  <div class="form-group">
    <label for="songInputEmail1">Search Music By Title</label>
    <input type="text" class="form-control" id="songInputEmail1" aria-describedby="emailHelp" placeholder="Enter here" @input="keyPressed">
    <small id="emailHelp" class="form-text text-muted">You can see your search result here</small>
  </div>

</template>
<script>
  import axios from 'axios';
  export default {


    methods:{
      keyPressed(event){
        var key = event.target.value;

        // Make a request for a user with a given ID
        axios.get("http://ws.audioscrobbler.com/2.0/?method=track.search&track="+ key +"&api_key=208408abe58141dbff3826cafc4a65b9&format=json")
          .then(response => {
            console.log(response.data.results.trackmatches.track)
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    }
  }
</script>
