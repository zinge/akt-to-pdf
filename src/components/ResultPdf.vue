<template>
  <div/>
</template>
<script>
import pdfMake from 'pdfmake/build/pdfmake.min.js'
import pdfFonts from 'pdfmake/build/vfs_fonts.js'

export default {
  name: 'ResultPdf',

  computed: {
    suffix () {
      return this.$store.state.agreement ? 'with' : 'without'
    },

    prefix () {
      return new Date().toISOString().slice(0, 19).replace(/-|:/g, '').replace('T', '-')
    }
  },

  methods: {
    create () {
      const fileName = `${this.prefix}_${this.suffix}.pdf`
      this.doc = this.$store.state.pdf

      pdfMake.vfs = pdfFonts.pdfMake.vfs
      pdfMake.createPdf(this.doc).download(fileName)
    }
  },

  created () {
    this.create()
  }
}
</script>
