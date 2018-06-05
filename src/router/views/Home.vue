<template>
  <cdd-master-layout class="home">
	<cdd-container :fluid="true" class="hot-deals">
		<cdd-placeholder
			:height="150"
			:width="150"
			:text="`${x}`"
			class="hot-item"
			v-for="(x, i) in [1, 2, 3, 4, 5]"
			:key="i"
		/>
	</cdd-container>

	<cdd-container style="padding: 35px 0;">
		<cdd-card style="padding: 15px;">
			<cdd-product-grid msg="Welcome to Your PizzaScript"/>
		</cdd-card>
	</cdd-container>
  </cdd-master-layout>
</template>

<script>
import CddMasterLayout from '@layouts/Master.vue';
import CddCard from '@components/Card.vue';
import CddContainer from '@components/Container.vue';
import CddPlaceholder from '@components/Placeholder.vue';
import CddProductGrid from '@components/ProductGrid.vue';

export default {
  name: 'home',
  components: {
    CddMasterLayout,
    CddCard,
    CddContainer,
    CddPlaceholder,
    CddProductGrid
  }
}
</script>

<style lang="scss">
.hot-deals {
  min-height: 250px;

  .hot-item {
    display: flex;
    flex-grow: 1;
  }
}
</style>
