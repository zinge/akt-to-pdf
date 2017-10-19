<template>
  <div class="akt-type-selector">
    <a class="button is-info" @click="invertAktState">{{aktDesc[aktState]}}</a>
  </div>
</template>

<script>
  export default {
    name: 'AktTypeSelector',

    data () {
      return {
        aktState: false,
        aktDesc: {
          true: 'Акт с обязательствами',
          false: 'Акт без обязательств'
        }
      }
    },

    methods: {
      invertAktState () {
        this.aktState = !this.aktState
        this.$store.commit('changeAkt', this.aktState)
      }
    },

    computed: {
      saveAktState () {
        this.$store.commit('changeAkt', this.aktState)
      }
    }
  }
</script>
