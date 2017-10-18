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
          <tr v-for="(item, index) in items" :key="item.id">
            <th v-for="(val,key) in item[index]" :key="val.id">
              {{ val }}
            </th>
          </tr>
        </tbody>
      </table>

      <a class="button" @click="isActive = true">Button</a>
      <div class="modal" :class="{'is-active': isActive}">
        <div class="modal-background"></div>
        <div class="modal-content">
          <div class="box">
            <strong>Парметры нового элемента</strong>
            <div class="field">
              <div class="control">
                <input v-model="item.name" class="input is-small" type="text" placeholder="наименование оборудования">
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input v-model="item.sap" class="input is-small" type="text" placeholder="инвентарный номер в SAP">
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input v-model="item.vendorSerial" class="input is-small" type="text" placeholder="инвентарный номер производителя">
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input v-model="item.count" class="input is-small" type="text" placeholder="количество">
              </div>
            </div>
            <div class="field">
              <div class="control">
                <button class="is-small" @click="addItem">добавить</button>
              </div>
            </div>
          </div>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="isActive = false"></button>
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
      },
      isActive: false,
      item: {}
    }
  },

  computed: {
    items: {
      get () {
        return this.$store.state.items
      }
    }
  },

  methods: {
    addItem () {
      this.$store.commit('addItem', this.item)
      this.isActive = false
    }
  }
}
</script>

<style>

</style>


