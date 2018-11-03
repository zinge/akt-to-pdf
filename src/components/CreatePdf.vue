<template>
  <div id="create-pdf">
    <a class="button is-warning" v-show="changedBlocksCount === 3" @click="create">create pdf</a>
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
      doc: {}
    }
  },

  computed: {
    changedBlocksCount () {
      return this.$store.state.blocks.filter(block => block.changed).length
    },
    aktWithAgreement () {
      return this.$store.state.aktWithAgreement
    },
    employees () {
      return Object.assign({}, {
        accept: this.$store.state.acceptMember,
        transfer: this.$store.state.transferMember
      })
    }
  },
  methods: {
    row0__docWithAgreementTemplate () {
      return {
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
            text: 'Стороны составили настоящий АКТ о том, что:\n\n'
          },
          // 4 row4__transferEmployee
          // 5 row5_acceptEmployee
          // 6
          {
            text: [
              'во временное пользование в количестве ',
              { text: ' 1 ', decoration: 'underline' },
              ' единиц(ы) следующее имущество\n\n'
            ]
          },
          // 7 row7__equip
          // 8
          {
            text: 'Принимающая сторона обязуется:\n\n',
            fontSize: 14,
            bold: true
          },
          // 9
          {
            ol: [
              'использовать имущество строго по прямому назначению в целях, предусмотренных спецификацией;\n',
              'не передавать имущество в пользование третьим лицам (независимо от степени родства);\n',
              'содержать имущество в исправности, соблюдать соответствующие стандарты, технические условия, и правила технической эксплуатации согласно инструкции предприятия-изготовителя;\n',
              'не производить никаких конструктивных изменений (модификаций) имущества; а также нести перед OU OJSC «Company» ответственность за сохранность и техническое состояние полученного в пользование имущества;\n',
              'возмещать ущерб, причиненный по вине принимающей стороны или третьих лиц, привлеченных принимающей стороной для работы с имуществом;\n',
              'принимать меры по предотвращению утраты имущества, порчи и т.п.;\n',
              'при выявлении фактов утраты, порчи, хищения, повреждения имущества своевременно сообщить в OU OJSC «Company»;\n'
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
    },
    row2__toDate () {
      return {
        text: 'от ' + (new Date()).toLocaleDateString() + ' г\n\n',
        alignment: 'right',
        decoration: 'underline'
      }
    },
    row4__transferEmployee () {
      return {
        text: 'Передает: ' + this.employees.transfer.position + ' ' + this.employees.transfer.organization + ' ' + this.employees.transfer.name + '\n\n',
        decoration: 'underline'
      }
    },
    row5__acceptEmployee () {
      return {
        text: 'Принимает: ' + this.employees.accept.position + ' ' + this.employees.accept.organization + ' ' + this.employees.accept.name + '\n\n',
        decoration: 'underline'
      }
    },
    row7__equip () {
      let equipList = this.$store.state.items

      if (equipList.length > 1) {
        let text = ''

        for (let i = 0; i < equipList.length; i++) {
          if (i) {
            text += ',\n\n'
          }
          text +=
            equipList[i].name +
            (equipList[i].sap !== '' ? ', SAP: ' + equipList[i].sap : '') +
            (equipList[i].vendorSerial !== '' ? ', ИНВ №: ' + equipList[i].vendorSerial : '')
        }

        return {
          text: text + '\n\n',
          decoration: 'underline'
        }
      } else {
        return {
          text: equipList[0].name +
                (equipList[0].sap !== '' ? ', SAP: ' + equipList[0].sap : '') +
                (equipList[0].vendorSerial !== '' ? ', ИНВ №: ' + equipList[0].vendorSerial : '') + '\n\n',
          decoration: 'underline'
        }
      }
    },
    createAktWithAgreements () {
      Object.assign(this.doc, this.row0__docWithAgreementTemplate())
      this.doc.content.splice(2, 0, this.row2__toDate())
      this.doc.content.splice(4, 0, this.row4__transferEmployee())
      this.doc.content.splice(5, 0, this.row5__acceptEmployee())
      this.doc.content.splice(7, 0, this.row7__equip())
    },

    createAktWithoutAgreements () {
      Object.assign(this.doc, { content: [] })
    },

    create () {
      let fileName = (
        new Date().toISOString().slice(0, 19).replace(/-|:/g, '').replace('T', '-')
      ) + '_' + (this.aktWithAgreement ? 'with' : 'without') + '.pdf'

      if (this.aktWithAgreement) {
        this.createAktWithAgreements()
      } else {
        this.createAktWithoutAgreements()
      }

      this.pdfMake.vfs = this.pdfFonts.pdfMake.vfs
      this.pdfMake.createPdf(this.doc).download(fileName)
      this.doc = {}
    }
  }
}
</script>
