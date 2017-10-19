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
              <strong>Тип акта:</strong>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
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

export default {
  name: 'app',
  computed: {
    aktState () {
      return this.$store.state.akt
    }
  },
  components: {
    AktTypeSelector, Items, AcceptMember, TransferMember
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
