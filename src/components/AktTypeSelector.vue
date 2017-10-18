<template>
  <div class="akt-type-selector">
    <div class="box">
      <label class="radio">
          <input v-model="aktState" type="radio" name="answer" value="with">
          С обязательствами
      </label>
      <label class="radio">
          <input v-model="aktState" type="radio" name="answer" value="without">
          Без обязательств
      </label>
      <label class="radio">
          <input v-model="aktState" type="radio" name="answer" value="undefined">
          Скрыть меню с ФИО
      </label>
    </div>
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
