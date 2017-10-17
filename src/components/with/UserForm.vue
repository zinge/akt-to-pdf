<template>
  <div id="with-user-form">
      <form novalidate @submit.stop.prevent="submit">
        <div class="field">
          <label class="label">Имя</label>
          <div class="control">
            <input v-model="user.name" class="input" type="text" placeholder="Имя принимающего сотрудника">
          </div>
        </div>
        <div class="field">
          <label class="label">Фамилия</label>
          <div class="control">
            <input v-model="user.surname" class="input" type="text" placeholder="Фамилия принимающего сотрудника">
          </div>
        </div>
        <div class="field">
          <label class="label">Отчество</label>
          <div class="control">
            <input v-model="user.patronymic" class="input" type="text" placeholder="Отчество принимающего сотрудника">
          </div>
        </div>
        <div class="field">
          <label class="label">Огранизация</label>
          <div class="control">
            <input v-model="user.organization" class="input" type="text" placeholder="Огранизация принимающего сотрудника">
          </div>
        </div>
        <div class="field">
          <label class="label">Должность</label>
          <div class="control">
            <input v-model="user.position" class="input" type="text" placeholder="Должность принимающего сотрудника">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
        </div>
      </form>
  </div>
</template>

<script>
export default {
  name: 'WithUserForm',
  data () {
    return {
      user: {}
    }
  },

  methods: {
    submit () {
      this.$store.commit('addAcceptUser', this.user)
    }
  }
}
</script>

<style>

</style>
