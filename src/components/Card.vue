<template>
	<div class="card">
		<slot></slot>
	</div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style lang="scss" scoped>
@import "../styles/global-variables.scss";

.card {
  width: 100%;
  border: 0 solid #dae1e7;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  border-radius: 0.25rem;
  background-color: map-get($brand, white);
}
</style>
