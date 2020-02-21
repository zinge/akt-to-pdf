<template>
  <article class="message is-small is-primary">
    <div class="message-header">
      <h4>{{who.title}} ...</h4>
      <button class="delete is-small" aria-label="delete" @click="drop"></button>
    </div>
    <div class="message-body">
      <p>
        <strong >{{member.name}}</strong><br>
        <small>Organization: {{member.organization}},
          <br>Address: {{member.address}},
          <br>Position: {{member.position}}
        </small>
      </p>
    </div>
  </article>
</template>
<script>
export default {
  name: 'MemberCard',

  props: ['who'],

  computed: {
    member () {
      return this.$store.state[this.who.name]
    }
  },

  methods: {
    drop () {
      this.$store.commit('saveData', {
        name: this.who.name,
        values: {}
      })
    }
  }
}
</script>
