<template>
  <div class="tile is-child">
    <div class="tile is-ancestor">
      <div class="tile is-parent is-vertical">
        <div class="tile is-child has-text-centered">
          <div class="button is-success" @click="showModal">Add item ...</div>
        </div>
        <template v-for="(item, index) in items">
          <ItemCard :key='index' :index='index' :item='item'/>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import ItemCard from './ItemCard'

export default {
  name: 'DashboardItems',

  components: { ItemCard },

  data () {
    return {
      modalTemplate: {
        name: 'items',
        title: 'Item',
        fields: [
          { label: 'Equip name', name: 'name' },
          { label: 'SAP number', name: 'sap' },
          { label: 'Vendor number', name: 'vendor' },
          { label: 'Items count', name: 'count' }
        ]
      }
    }
  },

  computed: {
    items () {
      return this.$store.state.items
    }
  },

  methods: {
    showModal () {
      this.setModalTemplate()
      this.$store.commit('toggleModal')
    },

    setModalTemplate () {
      this.$store.commit('setModalTemplate', this.modalTemplate)
    }
  }
}
</script>
