<template>
  <div id="app">
    <div class="section">
      <div class="container">
        <div class="tile is-ancestor">
          <div class="tile is-4 is-vertical is-parent">
            <div class="tile is-child box">
              <accept-member/>
            </div>
            <div class="tile is-child box">
              <transfer-member/>
            </div>
            <div class="tile is-child box">
              <div class="field is-grouped is-grouped-centered">
                <div class="control is-expanded">
                  <akt-type-selector/>
                </div>
                <div class="control is-right">
                  <create-pdf/>
                </div>
              </div>
            </div>
          </div>
          <div class="tile is-parent">
            <div class="tile is-child box">
              <items/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AktTypeSelector from './components/AktTypeSelector.vue'
import Items from './components/Items.vue'
import AcceptMember from './components/members/AcceptMember.vue'
import TransferMember from './components/members/TransferMember.vue'
import CreatePdf from './components/CreatePdf.vue'

export default {
  name: 'app',

  components: {
    AktTypeSelector, Items, AcceptMember, TransferMember, CreatePdf
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
