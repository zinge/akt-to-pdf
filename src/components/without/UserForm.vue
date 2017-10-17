<template>
  <div id="without-user-form">
      <form novalidate @submit.stop.prevent="submit">
        <div class="box">
          <h1>Кто передает</h1>
          <div class="field">
            <label class="label">ФИО</label>
            <div class="control">
              <input v-model="transferShortFullName" class="input" type="text" placeholder="ФИО сотрудника, передающей стороны">
            </div>
          </div>
          <div class="field">
            <label class="label">Огранизация</label>
            <div class="control">
              <input v-model="transferOrganization" class="input" type="text" placeholder="Огранизация сотрудника, передающей стороны">
            </div>
          </div>
          <div class="field">
            <label class="label">Адрес</label>
            <div class="control">
              <input v-model="transferAddress" class="input" type="text" placeholder="Адрес передающей стороны">
            </div>
          </div>
        </div>
        <div class="box">
          <h1>Кто принимает</h1>
          <div class="field">
            <label class="label">ФИО</label>
            <div class="control">
              <input v-model="acceptShortFullName" class="input" type="text" placeholder="ФИО сотрудника, принимающей стороны">
            </div>
          </div>
          <div class="field">
            <label class="label">Огранизация</label>
            <div class="control">
              <input v-model="acceptOrganization" class="input" type="text" placeholder="Огранизация сотрудника, принимающей стороны">
            </div>
          </div>
          <div class="field">
            <label class="label">Адрес</label>
            <div class="control">
              <input v-model="acceptAddress" class="input" type="text" placeholder="Адрес принимающего стороны">
            </div>
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
      transferShortFullName: undefined,
      transferOrganization: undefined,
      transferAddress: undefined,
      acceptShortFullName: undefined,
      acceptOrganization: undefined,
      acceptAddress: undefined
    }
  }
}
</script>

<style>

</style>
