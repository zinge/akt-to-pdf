<template>
  <div id="create-pdf">
    <a class="button is-warning" @click="create">create pdf</a>
  </div>
</template>

<script>
import JSPDF from 'jspdf'

export default {
  name: 'CreatePdf',

  data () {
    return {
      doc: {}
    }
  },

  methods: {
    create () {
      this.doc = new JSPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'A4',
        compressPdf: 0
      })
      console.log(this.doc.getFontList())
      // this.doc.text('Hello world', 10, 10)
      // this.doc.save('a4.pdf')
    }
  }
}
</script>

