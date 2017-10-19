<template>
  <div id="app">
    <!-- <div class="columns">
      <div class="column"/>
      <div class="column is-three-quarters">
        <div class="box">

          <akt-type-selector/>
          <without-user-form v-if="aktState == 'without'"/>
          <with-user-form v-if="aktState == 'with'"/>
        </div>
      </div>
      <div class="column"/>
    </div> -->


  <div class="section">
    <div class="container">
      <div class="tile is-ancestor">
        <div class="tile is-4 is-vertical is-parent">
          <div class="tile is-child box">
            <p class="title">Принимает:</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
          </div>
          <div class="tile is-child box">
            <p class="title">Передает:</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
          </div>
          <div class="tile is-child box">
            <p class="title">Тип акта:</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
          </div>
        </div>
        <div class="tile is-parent">
          <div class="tile is-child box">
            <p class="title">Список оборудования</p>
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
import WithoutUserForm from './components/without/UserForm.vue'
import WithUserForm from './components/with/UserForm.vue'
import Items from './components/Items.vue'

export default {
  name: 'app',
  computed: {
    aktState () {
      return this.$store.state.akt
    },
    accept () {
      return this.$store.state.acceptUser
    },
    transfer () {
      return this.$store.state.transferUser
    }
  },
  components: {
    AktTypeSelector, WithoutUserForm, WithUserForm, Items
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
