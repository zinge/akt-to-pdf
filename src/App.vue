<template>
  <div id="app">
    <div class="section">
      <div class="container">
        <div class="tile is-ancestor">
          <div class="tile is-4 is-vertical is-parent">
            <div class="tile is-child box">
              <acceptor/>
            </div>
            <div class="tile is-child box">
              <sender/>
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
import CreatePdf from './components/CreatePdf.vue'
import Acceptor from '@/components/TheAcceptor'
import Sender from '@/components/TheSender'

export default {
  name: 'app',

  components: {
    AktTypeSelector, Items, Sender, CreatePdf, Acceptor
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
