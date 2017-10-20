<template>
  <div id="create-pdf">
    <a class="button is-warning" @click="create">create pdf</a>
  </div>
</template>

<script>
import pdfMake from 'pdfmake/build/pdfmake.min.js'
import pdfFonts from 'pdfmake/build/vfs_fonts.js'

export default {
  name: 'CreatePdf',

  data () {
    return {
      pdfMake,
      pdfFonts,
      docDefinition: {
        content: 'This is an sample PDF printed with pdfMake, тест'
      }
    }
  },

  methods: {
    create () {
      this.pdfMake.vfs = this.pdfFonts.pdfMake.vfs
      this.pdfMake.createPdf(this.docDefinition).download('optionalName.pdf')
    }
  }
}
</script>

