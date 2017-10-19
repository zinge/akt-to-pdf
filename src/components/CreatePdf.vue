<template>
  <div id="create-pdf">
    <a class="button is-warning" @click="create">create pdf</a>
  </div>
</template>

<script>
// import jsPdf from 'jspdf'

export default {
  name: 'CreatePdf',

  methods: {
    create () {
      console.log('push create')
      // pdfmake.createPdf(docDefinition).download('optionalName.pdf')
      // this.doc = new jsPdf({
      //   text: 'Hello world'
      // })
      // doc.save('a4.pdf')
      this.$pdf.mymethod()
      // this.$pdf.text('Hello world', 1, 1)
      // this.$pdf.save('a4.pdf')
    }
  }
}
</script>

