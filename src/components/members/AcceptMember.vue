<template>
  <button ></button>
</template>

<script>
export default {
  name: 'AcceptMember',
  data () {
    return {
      localAcceptMember: {}
    }
  },

  methods: {
    isNotEmpty (value) {
      if (value) {
        return true
      }else{
        return false
      }
    }
  }

}
</script>
