<template>
  <div id="items">
    <div class="box">
      <a class="button is-small" @click="isActive = true">добавить оборудование</a><hr>

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

      <article class="message is-info is-small" v-for="(item, index) in items" :key="item.id">
        <div class="message-header">
          Элемент: {{index}}
          <button class="delete is-small" @click="dropItem(index)"></button>
        </div>
        <div class="message-body">
          <p>
            <strong >{{item.name}}</strong><br>
            <small>SAP: {{item.sap}}, Инв. №: {{item.vendorSerial}}, Кол-во: {{item.count}}</small>
          </p>
        </div>
      </article>
    </div>
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
    },
    dropItem (index) {
      this.$store.commit('dropItem', index)
    }
  }
}
</script>

<style>

</style>


