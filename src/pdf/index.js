import Vue from 'vue'
import Pdf from 'jspdf'

Vue.use(Pdf)

export default new Pdf({
  orientation: 'p',
  unit: 'mm',
  format: 'A4',
  compressPdf: 0
})
