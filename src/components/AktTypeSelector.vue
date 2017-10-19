<template>
  <div class="akt-type-selector">
    <a class="button" :class="buttonType[aktState]" @click="invertAktState">{{aktDesc[aktState]}}</a>
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
        },
        buttonType: {
          true: 'is-primary',
          false: 'is-info'
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
