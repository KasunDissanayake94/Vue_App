<template>
  <div>
    <div class="col-xs-8 col-xs-offset-2 slide-row" v-for="res in resList">
      <div id="carousel-1" class="carousel slide slide-carousel" data-ride="carousel">
        <div class="carousel-inner">
          <div class="item active">
            <img v-bind:src="res.image[2]['#text']" alt="Image">
          </div>

        </div>
      </div>
      <div class="slide-content">
        <h4>{{res.name}} - {{res.artist}}</h4>
        <p>
          Listners - {{ res.listeners}} <br>
        </p>
      </div>
      <div class="slide-footer">
        <span class="pull-right buttons">
          <button type="button" class="btn btn-primary">Show more</button>

                    <!--<router-link :to="{name: 'track', params: {  id:res.id }}"><button class="btn btn-sm btn-default"><i class="fa fa-fw fa-eye"></i> Show More</button></router-link>-->


                </span>
      </div>
    </div>
  </div>
</template>
<script>

  export default {

    props :[ 'resList']

  }
</script>
<style>
  /* FONT AWESOME & not necessary for functions */
  /*REQUIRED*/
  img{
    max-width:none;
  }
  .slide-row {
    padding: 0;
    background-color: #ffffff;
    min-height: 150px;
    border: 1px solid #e7e7e7;
    overflow: hidden;
    height: auto;
    position: relative;
  }
  .slide-carousel {
    width: 20%;
    float: left;
    display: inline-block;
  }
  .slide-carousel .carousel-indicators {
    margin-bottom: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .5);
  }
  .slide-carousel .carousel-indicators li {
    border-radius: 0;
    width: 20px;
    height: 6px;
  }
  .slide-carousel .carousel-indicators .active {
    margin: 1px;
  }
  .slide-content {
    position: absolute;
    top: 0;
    left: 20%;
    display: block;
    float: left;
    width: 80%;
    max-height: 76%;
    padding: 1.5% 2% 2% 2%;
    overflow-y: auto;
  }
  .slide-content h4 {
    margin-bottom: 3px;
    margin-top: 0;
  }
  .slide-footer {
    position: absolute;
    bottom: 0;
    left: 20%;
    width: 78%;
    height: 20%;
    margin: 1%;
  }
  /* Scrollbars */
  .slide-content::-webkit-scrollbar {
    width: 5px;
  }
  .slide-content::-webkit-scrollbar-thumb:vertical {
    margin: 5px;
    background-color: #999;
    -webkit-border-radius: 5px;
  }
  .slide-content::-webkit-scrollbar-button:start:decrement,
  .slide-content::-webkit-scrollbar-button:end:increment {
    height: 5px;
    display: block;
  }
</style>
