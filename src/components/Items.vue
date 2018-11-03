<template>
  <div id="items">
    <div class="field is-grouped">
      <p class="control is-expanded">
        <strong>Список оборудования, {{items.length}}</strong>
      </p>
      <p class="control">
        <a class="button is-small is-danger" @click="isActive = true">добавить оборудование</a>
      </p>
    </div>

    <div class="modal" :class="{'is-active': isActive}">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box">
          <strong>Параметры добавляемого элемента</strong>
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
          <div class="field has-addons has-addons-centered">
            <div class="control">
              <button class="is-small" @click="addItem">добавить</button>
            </div>
          </div>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="isActive = false"></button>
    </div>

    <article class="message is-small" v-for="(item, index) in items" :key="item.id">
      <div class="message-header">
        {{index}} элемент
        <button class="delete is-small" @click="dropItem(index)"></button>
      </div>
      <div class="message-body">
        <strong>{{item.name}}</strong><br>
        SAP: {{item.sap}}, Инв. №: {{item.vendorSerial}}, Кол-во: {{item.count}}
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Items',
  data () {
    return {
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
      this.item = {}
      this.changeBlockState()
    },
    dropItem (index) {
      this.$store.commit('dropItem', index)
      this.changeBlockState()
    },
    changeBlockState () {
      if (!this.items.length) {
        this.$store.commit('changeBlock', { items: false })
      } else {
        this.$store.commit('changeBlock', { items: true })
      }
    }
  }
}
</script>
