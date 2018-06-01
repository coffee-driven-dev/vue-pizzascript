<template>
  <div class="grid-container">

	<div class="grid-image primary">
		<img src="https://placehold.it/250x250/05AABA/000000?text=PizzaPizzaPizza" />
	</div>
	<div class="grid-image secondary">
		<img src="https://placehold.it/250x250/05AABA/000000?text=PizzaPizzaPizza" />
	</div>
	<div class="grid-image thirdary">
		<img src="https://placehold.it/250x250/05AABA/000000?text=PizzaPizzaPizza" />
	</div>
  </div>
</template>

<script>
export default {
  name: 'ProductGrid',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.grid-container {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template:
    "primary secondary"
    "primary thirdary";
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
</style>
