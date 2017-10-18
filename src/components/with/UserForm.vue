<template>
  <div id="with-user-form">
    <div class="box">
      <div class="field">
        <div class="control">
          <input v-model="accept.name" class="input is-small" type="text" placeholder="ФИО принимающего сотрудника">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input v-model="accept.organization" class="input is-small" type="text" placeholder="Огранизация принимающего сотрудника">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input v-model="accept.position" class="input is-small" type="text" placeholder="Должность принимающего сотрудника">
        </div>
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
