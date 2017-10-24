<template>
  <div id="transfer-member">
    <a class="button is-danger" v-if="!created" @click="showModal = true">Добавить отдающего?!</a>

    <article class="message is-success is-small is-marginless" v-if="created">
      <div class="message-header">
        <p>Отдаёт</p><button class="delete is-small" @click="dropTransferMember"></button>
      </div>
      <div class="message-body">
        <p>
          <strong >{{localTransferMember.name}}</strong><br>
          <small>Организация: {{localTransferMember.organization}},
            <br>Адрес: {{localTransferMember.address}},
            <br>Должность: {{localTransferMember.position}}
          </small>
        </p>
      </div>
    </article>

    <div class="modal" :class="{'is-active': showModal}">
      <div class="modal-background"></div>
        <div class="modal-content">
          <div class="box">
            <strong>Кто отдаёт:</strong>
            <div class="field">
              <div class="control">
                <input v-model="localTransferMember.name" class="input is-small" type="text" placeholder="ФИО сотрудника, отдающей стороны">
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input v-model="localTransferMember.organization" class="input is-small" type="text" placeholder="Огранизация сотрудника, отдающей стороны">
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input v-model="localTransferMember.address" class="input is-small" type="text" placeholder="Адрес отдающей стороны">
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input v-model="localTransferMember.position" class="input is-small" type="text" placeholder="Должность отдающей стороны">
              </div>
            </div>
            <div class="field has-addons has-addons-centered">
              <div class="control">
                <button class="is-small" @click="addTransferMember">добавить</button>
              </div>
            </div>
          </div>
        </div>
      <button class="modal-close is-large" aria-label="close" @click="showModal = false"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TransferMember',
  data () {
    return {
      created: false,
      showModal: false,
      localTransferMember: {
        name: '',
        organization: '',
        address: '',
        position: ''
      }
    }
  },

  methods: {
    getMemberData () {
      this.localTransferMember = this.$store.state.transferMember
    },
    addTransferMember () {
      this.$store.commit('createTransferMember', this.localTransferMember)
      this.localTransferMember = this.$store.state.transferMember
      this.created = true
      this.showModal = false
      this.changeBlockState()
    },
    dropTransferMember () {
      this.$store.commit('createTransferMember', {})
      this.localTransferMember = {}
      this.created = false
      this.changeBlockState()
    },
    changeBlockState () {
      this.$store.commit('changeBlock', {transfer: this.created})
    }
  }
}
</script>
