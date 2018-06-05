<template>
	<div class="container" :class="{ fluid: fluid }">
		<slot></slot>
	</div>
</template>

<script>
export default {
  name: 'Container',
  props: {
    fluid: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/global-variables.scss";

.container {
  display: flex;
  margin: 0 4%;

  @media #{$mq-medium} {
    margin: 0 8%;
  }

  @media #{$mq-large} {
    margin: 0 12%;
  }

  @media #{$mq-xlarge} {
    margin: 0 18%;
  }

  &.fluid {
    margin: 0;
  }
}
</style>
