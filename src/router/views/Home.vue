<template>
  <cdd-master-layout>
	<div class="home">
		<img src="@assets/logo.png">
		<cdd-product-grid msg="Welcome to Your PizzaScript"/>
	</div>
  </cdd-master-layout>
</template>

<script>
import CddMasterLayout from '@layouts/Master.vue';
import CddProductGrid from '@components/ProductGrid.vue';

export default {
  name: 'home',
  components: {
    CddMasterLayout,
    CddProductGrid
  }
}
</script>
