<template>
	<div class="layout">
		<section class="header">
			<nav class="primary-navigation">
				<!-- Navigation -->
				<cdd-container>
					<cdd-placeholder class="brand" :height="55" :width="120" text="Put Logo Here" />
				</cdd-container>
			</nav>
			<div class="action-bar">
				<cdd-container>
					Hello World
				</cdd-container>
			</div>
		</section>

		<main class="main">
			<slot></slot>
		</main>

		<section class="footer">

		</section>
	</div>
</template>

<script>
import CddContainer from '@components/Container.vue';
import CddPlaceholder from '@components/Placeholder.vue';

export default {
  name: 'MasterLayout',
  components: {
    CddContainer,
    CddPlaceholder
  }
}
</script>

<style lang="scss">
@import "../../styles/global-variables.scss";

.layout {
  display: grid;
  padding-top: 130px;
  grid-template-columns: 25% 25% 25% 25%;
  // grid-template-rows: auto;
  grid-row-gap: 0px;
  grid-column-gap: 0px;
  grid-template-areas:
    "header header header header"
    "main main main main"
    "footer footer footer footer";
}

.header {
  grid-area: header;
  position: fixed;
  background-color: map-get($brand, white);
  width: 100%;
  min-height: 130px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  z-index: map-get($z, header);

  .primary-navigation {
    position: relative;
    height: 60px;
    width: 100%;
  }

  .action-bar {
    position: relative;
    height: 70px;
    width: 100%;
    background-color: map-get($brand, primary);
  }
}

.main {
  position: relative;
  grid-area: main;
}

.footer {
  grid-area: footer;
  min-height: 200px;
  background-color: map-get($brand, primary);
}
</style>
