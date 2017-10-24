<template>
  <div id="create-pdf">
    <a class="button is-warning" :disabled="changedBlocksCount < 3" @click="create">create pdf</a>
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
      docWithAgreement: {
        content: [
          // 0
          {
            text: 'АКТ',
            style: 'header'
          },
          // 1
          {
            text: 'приема - передачи имущества\n\n',
            style: 'smallheader'
          },
          // 2 row2__toDate
          // 3
          {
            text: 'Стороны составили настоящий АКТ о том, что:'
          },
          // 4 row4__transferEmployee
          // 5 row5_acceptEmployee
          // 6
          {
            text: [
              'во временное пользование в количестве ',
              {text: ' 1 ', decoration: 'underline'},
              ' единиц(ы) следующее имущество'
            ]
          },
          // 7
          {
            text: 'iPad Air2 32GB(MNVR2RU/A)+Чехол',
            decoration: 'underline'
          },
          // 8
          {
            text: 'Принимающая сторона обязуется:\n\n',
            fontSize: 14,
            bold: true
          },
          // 9
          {
            ol: [
              'использовать имущество строго по прямому назначению в целях, предусмотренных спецификацией;',
              'не передавать имущество в пользование третьим лицам (независимо от степени родства);',
              'содержать имущество в исправности, соблюдать соответствующие стандарты, технические условия, и правила технической эксплуатации согласно инструкции предприятия-изготовителя;',
              'не производить никаких конструктивных изменений (модификаций) имущества; а также нести перед OU OJSC «Company» ответственность за сохранность и техническое состояние полученного в пользование имущества;',
              'возмещать ущерб, причиненный по вине принимающей стороны или третьих лиц, привлеченных принимающей стороной для работы с имуществом;',
              'принимать меры по предотвращению утраты имущества, порчи и т.п.;',
              'при выявлении фактов утраты, порчи, хищения, повреждения имущества своевременно сообщить в OU OJSC «Company»;'
            ]
          }
        ],
        styles: {
          header: {
            fontSize: 18,
            bold: true,
            alignment: 'center'
          },
          smallheader: {
            fontSize: 16,
            bold: true,
            alignment: 'center'
          }
        }
      }
    }
  },

  computed: {
    changedBlocksCount () {
      return this.$store.state.blocks.filter(block => block.changed).length
    }
  },
  methods: {
    row2__toDate () {
      return {
        text: 'от ' + (new Date()).toLocaleDateString() + ' г\n\n',
        alignment: 'right',
        decoration: 'underline'
      }
    },
    row4__transferEmployee () {
      return {
        text: 'Передает: ' + this.$store.state.transferMember.position + ' ' + this.$store.state.transferMember.organization + ' ' + this.$store.state.transferMember.name + '\n\n',
        decoration: 'underline'
      }
    },
    row5_acceptEmployee () {
      return {
        text: 'Принимает: ' + this.$store.state.acceptMember.position + ' ' + this.$store.state.acceptMember.organization + ' ' + this.$store.state.acceptMember.name + '\n\n',
        decoration: 'underline'
      }
    },

    create () {
      this.docWithAgreement.content.splice(2, 0, this.row2__toDate())
      this.docWithAgreement.content.splice(4, 0, this.row4__transferEmployee())
      this.docWithAgreement.content.splice(5, 0, this.row5_acceptEmployee())
      // console.log(this.docWithAgreement)

      this.pdfMake.vfs = this.pdfFonts.pdfMake.vfs
      this.pdfMake.createPdf(this.docWithAgreement).download('optionalName.pdf')
    }
  }
}
</script>

