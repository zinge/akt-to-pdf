<template>
  <div class="modal" :class="{'is-active': showModal}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{template.title && `Add ${template.title}` || 'Modal title'}}</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        <div class="field" v-for="field in template.fields" :key="field.id">
          <div class="control">
            <input class="input is-info" type="text" :placeholder="field.label" v-model="modalData[field.name]">
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="saveData">{{template.title && `Save ${template.title}` || 'Save changes'}}</button>
        <button class="button" @click="closeModal">Cancel</button>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DashboardModal',

  data () {
    return {
      modalData: {}
    }
  },

  computed: {
    showModal () {
      return this.$store.state.showModal
    },
    template () {
      return this.$store.state.modalTemplate
    }
  },

  methods: {
    closeModal () {
      this.clearModalTemplate()
      this.clearModalData()
      this.$store.commit('toggleModal')
    },

    clearModalTemplate () {
      this.$store.commit('setModalTemplate', {})
    },

    clearModalData () {
      this.modalData = {}
    },

    saveData () {
      this.$store.commit('saveData', {
        name: this.template.name,
        values: this.modalData
      })
      this.closeModal()
    }
  }
}
</script>
