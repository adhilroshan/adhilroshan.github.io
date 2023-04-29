<script>
	export let showPicker = false;
	import { createEventDispatcher } from 'svelte';
	import PaletteCircle from './PaletteCircle.svelte';
	import { slide, scale, fade } from 'svelte/transition';

	let dispatch = createEventDispatcher();

	let palettes = [
		{ id: 1, name: 'Black', colors: ['#EDEBE6', '#D6E1C7', '#94C7B6', '#403B33', '#D3643B'] },
		{ id: 2, name: 'White', colors: ['#FDF1CC', '#C6D6B8', '#987F69', '#E3AD40', '#FCD036'] },
		{ id: 3, name: 'Zzz', colors: ['#230F2B', '#F21D41', '#EBEBBC', '#BCE3C5', '#82B3AE'] },
		{ id: 4, name: 'Colors', colors: ['#251605', '#c57b57', '#f1ab86', '#f7dba7', '#9cafb7'] },
		{ id: 5, name: 'Dic', colors: ['#233d4d', '#fe7f2d', '#fcca46', '#a1c181', '#619b8a'] }
	];
</script>

{#if showPicker}
	<div class="flex flex-col bg-opacity-50 bg-orange-200 w-full no-wrap" transition:slide>
		<h2 class=" flex uppercase justify-center pt-2 font-bold p-1 tracking-wide">select theme</h2>

		<button on:click={() => dispatch('togglePicker')}>
			<svg
				class="feather feather-x absolute top-2 right-6"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg
			>
		</button>
		<div class="flex flex-row overflow-x-auto pb-2">
			{#each palettes as palette}
				<div
					class="flex flex-col w-36 items-center container rounded-md  m-2 p-2 border  shadow-slate-300 shadow-sm hover:shadow-xl hover:scale-110 transition-all duration-200 cursor-pointer"
					style="background-color: {palette.colors[4]};"
					transition:scale
				>
					<h3 class="flex justify-center" style="color: {palette.colors[0]};">{palette.name}</h3>
					<span class="block p-1 shrink-0">
						{#each palette.colors as color}
							<PaletteCircle {color} />
						{/each}
					</span>
				</div>
			{/each}
		</div>
	</div>
{/if}
