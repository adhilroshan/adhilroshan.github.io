<script>
	import { scale } from 'svelte/transition';
</script>

<main>
	<!-- <div class="flex flex-row justify-center" /> -->
	<div
		class="flex h-[90vh] w-full flex-col items-center justify-evenly backdrop-blur-xl md:flex-row"
	>
		<h1
			transition:scale={{ duration: 400, delay: 200 }}
			class="font-brunoace text-4xl font-bold text-white"
		>
			Adhil Roshan
		</h1>
		<div>
			<img class="h-80 w-80" src="/hero.svg" alt="" />
		</div>
	</div>
</main>
