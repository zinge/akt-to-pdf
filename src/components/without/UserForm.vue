<template>
  <div id="without-user-form">
    <div class="box">
      <strong>Кто передает:</strong>
      <div class="field">
        <div class="control">
          <input v-model="transfer.name" class="input is-small" type="text" placeholder="ФИО сотрудника, передающей стороны">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input v-model="transfer.organization" class="input is-small" type="text" placeholder="Огранизация сотрудника, передающей стороны">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input v-model="transfer.address" class="input is-small" type="text" placeholder="Адрес передающей стороны">
        </div>
      </div>
    </div>
    <div class="box">
      <strong>Кто принимает:</strong>
      <div class="field">
        <div class="control">
          <input v-model="accept.name" class="input is-small" type="text" placeholder="ФИО сотрудника, принимающей стороны">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input v-model="accept.organization" class="input is-small" type="text" placeholder="Огранизация сотрудника, принимающей стороны">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input v-model="accept.address" class="input is-small" type="text" placeholder="Адрес принимающего стороны">
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
        this.$store.commit('addTransferUser', this.transfer)
      }
    },
    accept: {
      get () {
        return this.$store.state.acceptUser
      },
      set () {
        this.$store.commit('addAcceptUser', this.accept)
      }
    }
  }
}
</script>

<style>

</style>
