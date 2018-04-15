<template>
  <div class="field">
    <div class="control">
      <input
        class="input is-small"
        :class="{'is-danger': isFocus}"
        type="text"
        :value="value"
        @input="updateValue($event.target.value)"
        ref="input"
        :placeholder="placeholder">
    </div>
  </div>
</template>
<script>
export default {
  name: 'FieldInput',

  props: {
    value: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false
    },
    isFocus: {
      type: Boolean,
      default: false,
      required: false
    },
    type: {
      type: Function,
      required: true
    }
  },

  methods: {
    updateValue (value) {
      return this.$emit('input', this.type(value))
    }
  }
}
</script>
