<template>
  <article class="message is-success is-small is-marginless">
    <div class="message-header">
      <p>{{title}}</p><button class="delete is-small" @click="dropEmployee"></button>
    </div>
    <div class="message-body">
      <p>
        <strong >{{employee.initials}}</strong><br>
        <small>{{card.organization}} {{employee.organization}},
          <br>{{card.address}} {{employee.address}},
          <br>{{card.position}} {{employee.position}}
        </small>
      </p>
    </div>
  </article>
</template>
<script>
import {card} from './CardConstants'
export default {
  name: 'Card',

  data () {
    return {
      card
    }
  },

  props: {
    employee: {
      type: Object,
      required: true
    },

    title: {
      type: String,
      required: true
    },

    commitMethod: {
      type: String,
      required: true
    }
  },

  methods: {
    dropEmployee () {
      this.$store.commit(this.commitMethod, {})
      this.$emit('drop')
    }
  }
}
</script>
