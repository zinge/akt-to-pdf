<template>
  <div class="akt-type-selector">
    <label class="radio">
        <input v-model="aktState" type="radio" name="answer" value="with">
        With 
    </label>
    <label class="radio">
        <input v-model="aktState" type="radio" name="answer" value="without">
        Without
    </label>
  </div>
</template>

<script>
  export default {
    name: 'AktTypeSelector',
    computed: {
      aktState: {
        get () {
          return this.$store.state.akt
        },
        set (value) {
          this.$store.commit('changeAkt', value)
        }
      }
    }
  }
</script>

<style>

</style>
