<template>
  <div id="transfer-member">
    <a class="button is-danger" v-if="!created" @click="isActive = true">Добавить ?!</a>

    <article class="message is-success is-small" v-if="created">
      <div class="message-header">
        </p><button class="delete is-small" @click="dropTransferMember"></button>
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

    <div class="modal" :class="{'is-active': isActive}">
      <div class="modal-background"></div>
        <div class="modal-content">
          <div class="box">
            <strong>Кто принимает:</strong>
            <div class="field">
              <div class="control">
                <input v-model="localTransferMember.name" class="input is-small" type="text" placeholder="ФИО сотрудника, принимающей стороны">
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input v-model="localTransferMember.organization" class="input is-small" type="text" placeholder="Огранизация сотрудника, принимающей стороны">
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input v-model="localTransferMember.address" class="input is-small" type="text" placeholder="Адрес принимающего стороны">
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input v-model="localTransferMember.position" class="input is-small" type="text" placeholder="Должность принимающего стороны">
              </div>
            </div>
            <div class="field has-addons has-addons-centered">
              <div class="control">
                <button class="is-small" @click="addTransferMember">добавить</button>
              </div>
            </div>
          </div>
        </div>
      <button class="modal-close is-large" aria-label="close" @click="isActive = false"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TransferMember',
  data () {
    return {
      created: false,
      isActive: false,
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
      this.isActive = false
    },
    dropTransferMember () {
      this.$store.commit('createTransferMember', {})
      this.localTransferMember = {}
      this.created = false
    }
  }
}
</script>
