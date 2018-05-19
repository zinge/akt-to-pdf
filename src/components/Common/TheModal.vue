<template>
  <div class="modal" :class="{'is-active': showModal}">
    <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box">
          <strong>{{opts.modalTitle}}</strong>
          <field-input v-for="(field, index) in opts.fields"
            :key="index"
            v-model="newValue[field.name].value"
            :isFocus="newValue[field.name].isFocus"
            :placeholder="field.placeholder"
            :type="field.validate.type"/>
          <div class="field has-addons has-addons-centered">
            <div class="control">
              <button class="is-small"
                @click="saveModal">{{opts.modalAction}}</button>
            </div>
          </div>
        </div>
      </div>
    <button class="modal-close is-large"
      aria-label="close"
      @click="closeModal"></button>
  </div>
</template>
<script>
import FieldInput from './FieldInput'

export default {
  name: 'Modal',

  components: {
    FieldInput
  },

  data () {
    return {
      newValue: this.initValues()
    }
  },

  props: {
    showModal: {
      type: Boolean,
      required: true,
      default: false
    },

    opts: {
      type: Object,
      required: true
    },

    commitMethod: {
      type: String,
      required: true
    }
  },

  methods: {
    saveModal () {
      if (!this.haveEmptys()) {
        this.$store.commit(this.commitMethod, {
          initials: this.newValue.initials.value,
          organization: this.newValue.organization.value,
          address: this.newValue.address.value,
          position: this.newValue.position.value
        })
        this.$emit('created')
        this.newValue = this.initValues()
      }
    },

    closeModal () {
      this.$emit('closeModal')
    },

    initValues () {
      return this.opts.fields.reduce((result, current) => ({
        ...result,
        [`${current.name}`]: {
          value: '',
          isFocus: false
        }
      }), {})
    },

    haveEmptys () {
      let count = 0
      for (const key in this.newValue) {
        if (this.newValue.hasOwnProperty(key)) {
          const element = this.newValue[key]
          const required = this.opts.fields.find(el => el.name === key).validate.required
          if (required) {
            element.isFocus = !element.value
            if (element.isFocus) {
              count++
            }
          }
        }
      }

      return Boolean(count)
    }
  }
}
</script>
