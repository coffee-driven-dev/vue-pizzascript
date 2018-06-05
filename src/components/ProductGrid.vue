<template>
  <div class="grid-container">

	<div class="grid-cell primary">
		<cdd-placeholder :height="500" :width="500" text="hello world" />
	</div>
	<div class="grid-cell secondary">
		<cdd-placeholder :height="250" :width="500" text="PizzaPizzaPizza" />
	</div>
	<div class="grid-cell thirdary">
		<cdd-placeholder :height="250" :width="250" text="PizzaPizzaPizza" />
	</div>
	<div class="grid-cell forthery">
		<cdd-placeholder :height="250" :width="250" text="PizzaPizzaPizza" />
	</div>
  </div>
</template>

<script>
import CddPlaceholder from '@components/Placeholder.vue';

export default {
  name: 'ProductGrid',
  components: {
    CddPlaceholder
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../styles/global-variables.scss";

.grid-container {
  position: relative;
  display: grid;
  column-gap: 15px;
  row-gap: 15px;

  // Mobile First
  height: 750px;
  grid-template-columns: 50% 50%;
  grid-template:
    "primary primary"
    "secondary secondary"
    "thirdary forthery";

  // Tablet and beyond
  @media #{$mq-small} {
    height: 500px;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template:
      "primary primary secondary secondary"
      "primary primary thirdary forthery";
  }
}

.primary {
  grid-area: primary;
}
.secondary {
  grid-area: secondary;
}
.thirdary {
  grid-area: thirdary;
}
.forthery {
  grid-area: forthery;
}

.grid-cell > img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-height: 100%;
}
</style>
