<template>
	<img :src="srcUrl" />
</template>

<script>
export default {
  name: 'Placeholder',
  props: {
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    backgroundColor: {
      type: String,
      default: undefined
    },
    fontColor: {
      type: String,
      default: '000000'
    },
    text: {
      type: String,
      required: false
    }
  },
  computed: {
    srcUrl () {
      let backgroundColor = this.backgroundColor || this.randomHex()

      let url = `https://placehold.it/${this.width}x${
        this.height
      }/${backgroundColor}/${this.fontColor}`
      url += this.text ? `?text=${this.text}` : '';
      return url
    }
  },
  methods: {
    randomHex () {
      let random = Math.random()
      const exponent = --random.toExponential().split('-')[1]

      // Make sure random number is between 1.0 and 0.1 to assure correct hex values.
      random *= Math.pow(10, exponent)

      return (~~(random * (1 << 24))).toString(16)
    }
  }
}
</script>

<style scoped>
</style>
