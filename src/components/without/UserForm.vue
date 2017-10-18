<template>
  <div id="without-user-form">
      <form novalidate @submit.stop.prevent="submit">
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
  name: 'WithoutUserForm',
  data () {
    return {
      transfer: {},
      accept: {}
    }
  },

  methods: {
    submit () {
      this.$store.commit('addAcceptUser', this.accept)
      this.$store.commit('addTransferUser', this.transfer)
    }
  }
}
</script>

<style>

</style>
