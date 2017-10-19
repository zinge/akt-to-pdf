<template>
  <div id="create-pdf">
    <a class="button is-warning" @click="create">create pdf</a>
  </div>
</template>

<script>
export default {
  name: 'CreatePdf',

  methods: {
    create () {
      console.log('push create')
    }
  }
}
</script>

