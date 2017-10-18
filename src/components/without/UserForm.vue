<template>
  <div id="without-user-form">
    <div class="box">
      <h1>Кто передает</h1>
      <div class="field">
        <label class="label">ФИО</label>
        <div class="control">
          <input v-model="transfer.name" class="input" type="text" placeholder="ФИО сотрудника, передающей стороны">
        </div>
      </div>
      <div class="field">
        <label class="label">Огранизация</label>
        <div class="control">
          <input v-model="transfer.organization" class="input" type="text" placeholder="Огранизация сотрудника, передающей стороны">
        </div>
      </div>
      <div class="field">
        <label class="label">Адрес</label>
        <div class="control">
          <input v-model="transfer.address" class="input" type="text" placeholder="Адрес передающей стороны">
        </div>
      </div>
    </div>
    <div class="box">
      <h1>Кто принимает</h1>
      <div class="field">
        <label class="label">ФИО</label>
        <div class="control">
          <input v-model="accept.name" class="input" type="text" placeholder="ФИО сотрудника, принимающей стороны">
        </div>
      </div>
      <div class="field">
        <label class="label">Огранизация</label>
        <div class="control">
          <input v-model="accept.organization" class="input" type="text" placeholder="Огранизация сотрудника, принимающей стороны">
        </div>
      </div>
      <div class="field">
        <label class="label">Адрес</label>
        <div class="control">
          <input v-model="accept.address" class="input" type="text" placeholder="Адрес принимающего стороны">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WithoutUserForm',

  computed: {
    transfer: {
      get () {
        return this.$store.state.transferUser
      },
      set () {
        return this.$store.state.transferUser
      }
    },
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
