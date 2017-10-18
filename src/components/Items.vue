<template>
  <div id="items">
    <div class="box">
      <table class="table is-bordered">
        <thead>
          <tr>
            <th v-for="(item, index) in itemHead" :key="item.id">{{ item }}</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>

      <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-content">
          Any other Bulma elements you want
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Items',
  data () {
    return {
      itemHead: {
        name: 'наименование',
        sap: 'инв. SAP',
        vendorSerial: 'инв. заводской',
        count: 'количество'
      }
    }
  },

  computed: {
    items: {
      get () {
        return this.$store.state.items
      }
    }
  }
}
</script>

<style>

</style>


