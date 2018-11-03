<template>
  <div id="accept-member">
    <a class="button is-danger" v-if="!created" @click="showModal = true">Добавить принимающего?!</a>

    <article class="message is-success is-small is-marginless" v-if="created">
      <div class="message-header">
        <p>Принимает</p><button class="delete is-small" @click="dropAcceptMember"></button>
      </div>
      <div class="message-body">
        <p>
          <strong >{{localAcceptMember.name}}</strong><br>
          <small>Организация: {{localAcceptMember.organization}},
            <br>Адрес: {{localAcceptMember.address}},
            <br>Должность: {{localAcceptMember.position}}
          </small>
        </p>
      </div>
    </article>

    <div class="modal" :class="{'is-active': showModal}">
      <div class="modal-background"></div>
        <div class="modal-content">
          <div class="box">
            <strong>Кто принимает:</strong>
            <div class="field">
              <div class="control">
                <input v-model="localAcceptMember.name" class="input is-small" type="text" placeholder="ФИО сотрудника, принимающей стороны">
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input v-model="localAcceptMember.organization" class="input is-small" type="text" placeholder="Огранизация сотрудника, принимающей стороны">
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input v-model="localAcceptMember.address" class="input is-small" type="text" placeholder="Адрес принимающего стороны">
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input v-model="localAcceptMember.position" class="input is-small" type="text" placeholder="Должность принимающего стороны">
              </div>
            </div>
            <div class="field has-addons has-addons-centered">
              <div class="control">
                <button class="is-small" @click="addAcceptMember">добавить</button>
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
  name: 'AcceptMember',
  data () {
    return {
      created: false,
      showModal: false,
      localAcceptMember: {
        name: '',
        organization: '',
        address: '',
        position: ''
      }
    }
  },

  methods: {
    getMemberData () {
      this.localAcceptMember = this.$store.state.acceptMember
    },
    addAcceptMember () {
      this.$store.commit('createAcceptMember', this.localAcceptMember)
      this.localAcceptMember = this.$store.state.acceptMember
      this.created = true
      this.showModal = false
      this.changeBlockState()
    },
    dropAcceptMember () {
      this.$store.commit('createAcceptMember', {})
      this.localAcceptMember = {}
      this.created = false
      this.changeBlockState()
    },
    changeBlockState () {
      this.$store.commit('changeBlock', { accept: this.created })
    }
  }
}
</script>
