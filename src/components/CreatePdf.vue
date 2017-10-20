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
      },
      docWithAgreement: {
        content: [
          {
            text: 'АКТ',
            style: 'header'
          },
          {
            text: 'приема - передачи имущества\n\n',
            style: 'smallheader'
          },
          {
            text: 'от 13.09.2017 г\n\n',
            alignment: 'right',
            decoration: 'underline'
          },
          {
            text: 'Стороны составили настоящий АКТ о том, что:'
          },
          {
            text: 'Передает: Lead Engineer Nunc Mauris LLP Elmo Franklin\n\n',
            decoration: 'underline'
          },
          {
            text: 'Принимает: Lead Engineer Nunc Mauris LLP Elmo Franklin\n\n',
            decoration: 'underline'
          },
          {
            text: [
              'во временное пользование в количестве ',
              {text: ' 1 ', decoration: 'underline'},
              ' единиц(ы) следующее имущество'
            ]
          },
          {
            text: 'iPad Air2 32GB(MNVR2RU/A)+Чехол',
            decoration: 'underline'
          },
          {
            text: 'Принимающая сторона обязуется:\n\n',
            fontSize: 14,
            bold: true
          },
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

  methods: {
    create () {
      this.pdfMake.vfs = this.pdfFonts.pdfMake.vfs
      this.pdfMake.createPdf(this.docWithAgreement).download('optionalName.pdf')
    }
  }
}
</script>

