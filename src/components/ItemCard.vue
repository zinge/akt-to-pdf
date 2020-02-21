<template>
  <article class="tile is-child">
    <article class="message is-small">
      <div class="message-header">
        <h4 class="is-4">#{{index}} item ...</h4>
        <button class="delete is-small" aria-label="delete" @click="dropItem(index)"></button>
      </div>
      <div class="message-body">
        <strong>{{item.name}}</strong><br>
        <small>
          SAP: {{item.sap}}, Vendor: {{item.vendor}}, Count.: {{item.count}}
        </small>
      </div>
    </article>
  </article>
</template>
<script>
export default {
  name: 'ItemCard',

  props: ['item', 'index'],

  methods: {
    dropItem (id) {
      this.$store.commit('dropItem', id)
    }
  }
}
</script>
