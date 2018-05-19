<template>
  <div id="acceptor">
    <a class="button is-danger"
      v-if="!created"
      @click="showModal = true">{{acceptor.mainAction}}</a>

    <card v-if="created"
      :employee="localAcceptMember"
      :commitMethod="commitMethod"
      :title="acceptor.cardTitle"
      @drop="dropAcceptMember"/>

    <modal
     :showModal="showModal"
     :opts="acceptor"
     :commitMethod="commitMethod"
     @created="addAcceptMember"
     @closeModal="showModal = false"
     />
  </div>
</template>

<script>
import {acceptor} from '@/components/Common/Constants'
import Card from '@/components/Common/TheCard'
import Modal from '@/components/Common/TheModal'
export default {
  name: 'Acceptor',

  components: {
    Card, Modal
  },

  data () {
    return {
      created: false,
      showModal: false,
      acceptor,
      commitMethod: 'createAcceptMember'
    }
  },

  methods: {
    addAcceptMember () {
      this.created = true
      this.showModal = false
      this.changeBlockState()
    },
    dropAcceptMember () {
      this.created = false
      this.changeBlockState()
    },
    changeBlockState () {
      this.$store.commit('changeBlock', {accept: this.created})
    }
  },

  computed: {
    localAcceptMember () {
      return this.$store.state.acceptMember
    }
  }
}
</script>
