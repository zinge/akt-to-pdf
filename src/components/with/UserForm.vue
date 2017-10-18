<template>
  <div id="with-user-form">
    <div class="field">
      <label class="label">ФИО</label>
      <div class="control">
        <input v-model="accept.name" class="input" type="text" placeholder="ФИО принимающего сотрудника">
      </div>
    </div>
    <div class="field">
      <label class="label">Огранизация</label>
      <div class="control">
        <input v-model="accept.organization" class="input" type="text" placeholder="Огранизация принимающего сотрудника">
      </div>
    </div>
    <div class="field">
      <label class="label">Должность</label>
      <div class="control">
        <input v-model="accept.position" class="input" type="text" placeholder="Должность принимающего сотрудника">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WithUserForm',

  computed: {
    accept: {
      get () {
        return this.$store.state.acceptUser
      },
      set () {
        return this.$store.state.acceptUser
      }
    }
  }
}
</script>

<style>

</style>
