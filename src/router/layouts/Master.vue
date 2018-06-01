<template>
	<div class="layout">
		<section class="header">
		</section>
		<main class="main">
			<slot></slot>
		</main>

		<section class="footer">

		</section>
	</div>
</template>

<script>
export default {
  name: 'MasterLayout'
}
</script>

<style lang="scss">
@import "../../styles/global-variables.scss";

.layout {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: auto;
  grid-template-areas:
    "header header header header"
    "main main main main"
    "footer footer footer footer";
}

.header {
  grid-area: header;
  background-color: map-get($brand, primary);
  min-height: 60px;

  @media (max-width: 600px) {
    grid-area: footer;
  }
}

.main {
  grid-area: main;
}

.footer {
  grid-area: footer;
  background-color: map-get($brand, primary);
}
</style>
