<template>
  <article class="tile is-child" v-bind:class='isButton'>
    <div v-if='!filled' class="tile is-vertical">
      <div class="tile is-child has-text-centered">
        <div class="button is-success" @click="showModal">Add {{who.title}} ...</div>
      </div>
    </div>
    <MemberCard v-if="filled" :who="who"/>
  </article>
</template>
<script>
import { hasValues } from '@/utils'
import MemberCard from './MemberCard'

export default {
  name: 'DashboardMember',

  components: {
    MemberCard
  },

  props: ['who'],

  data () {
    return {
      fields: [
        { label: 'Name', name: 'name' },
        { label: 'Organization', name: 'organization' },
        { label: 'Address', name: 'address' },
        { label: 'Position', name: 'position' }
      ]
    }
  },

  computed: {
    filled () {
      return hasValues(this.$store.state[this.who.name])
    },

    isButton () {
      return this.filled ? null : ['box', 'has-background-info']
    }
  },

  methods: {
    showModal () {
      this.setModalTemplate()
      this.$store.commit('toggleModal')
    },

    setModalTemplate () {
      this.$store.commit('setModalTemplate', {
        ...this.who,
        fields: this.fields
      })
    }
  }
}
</script>
