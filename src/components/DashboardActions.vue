<template>
  <div class="tile is-child box has-background-info">
    <div class="tile is-vertical">
      <div class="tile is-child">
        <div class="field has-text-centered">
          <input id="switchAgreement" type="checkbox" name="switchAgreement" class="switch" v-model="agreement">
          <label for="switchAgreement">{{agreementText}}</label>
        </div>
      </div>
      <div class="tile is-child has-text-centered">
        <div v-if='filled' class="button is-success" @click="showResult">Create PDF</div>
        <div class="button is-danger" @click="clearAll">Clear</div>
      </div>
    </div>
  </div>
</template>
<script>
import 'bulma-switch/dist/bulma-switch.min.css'

export default {
  name: 'DashboardActions',

  data () {
    return {
      WITH_AGREEMENTS: 'With Agreements',
      WITHOUT_AGREEMENTS: 'Without Agreement'
    }
  },

  computed: {
    agreement: {
      get () {
        return this.$store.state.agreement
      },
      set (value) {
        this.setAgreement(value)
      }
    },

    filled () {
      return this.$store.getters.doneFill
    },

    agreementText () {
      return this.agreement ? this.WITH_AGREEMENTS : this.WITHOUT_AGREEMENTS
    }
  },

  methods: {
    clearAll () {
      this.$store.commit('clearStore')
    },

    setAgreement (value) {
      this.$store.commit('setAgreement', value)
    },

    showResult () {
      this.$router.push('result', () => this.$router.go(-1))
    }
  }
}
</script>
