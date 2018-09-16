<template>
  <div class="container">
    <form>
      <fieldset>
        <legend></legend>
        <app-search></app-search>
      </fieldset>
    </form>

    <div class="row">
      <div class="col-md-12">
        <app-result></app-result>
      </div>
    </div>
  </div>
</template>
<script>

  import SearchArea from './SearchArea'
  import ResultArea from './ResultArea'
  export default {
    components: {
      'app-search': SearchArea,
      'app-result': ResultArea
    }
  }
</script>
