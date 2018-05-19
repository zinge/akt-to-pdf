<template>
  <div id="sender">
    <a class="button is-danger"
      v-if="!created"
      @click="showModal = true">{{sender.mainAction}}</a>

    <card v-if="created"
      :employee="localTransferMember"
      :commitMethod="commitMethod"
      :title="sender.cardTitle"
      @drop="dropTransferMember"/>

    <modal
     :showModal="showModal"
     :opts="sender"
     :commitMethod="commitMethod"
     @created="addTransferMember"
     @closeModal="showModal = false"
     />
  </div>
</template>

<script>
import {sender} from '@/components/Common/Constants'
import Card from '@/components/Common/TheCard'
import Modal from '@/components/Common/TheModal'
export default {
  name: 'Sender',

  components: {
    Card, Modal
  },

  data () {
    return {
      created: false,
      showModal: false,
      sender,
      commitMethod: 'createTransferMember'
    }
  },

  methods: {
    addTransferMember () {
      this.created = true
      this.showModal = false
      this.changeBlockState()
    },
    dropTransferMember () {
      this.created = false
      this.changeBlockState()
    },
    changeBlockState () {
      this.$store.commit('changeBlock', {accept: this.created})
    }
  },

  computed: {
    localTransferMember () {
      return this.$store.state.transferMember
    }
  }
}
</script>
