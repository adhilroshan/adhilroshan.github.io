<script>
	import '../app.css';
	import Header from './components/Header.svelte';
	import ThemePicker from './components/ThemePicker.svelte';
	import { fade } from 'svelte/transition';

	let showPicker = false;
	export let togglePicker = () => {
		showPicker = !showPicker;
	};
</script>

<div class="relative h-[100%] w-screen bg-heroBg bg-hero-pattern" transition:fade>
	<ThemePicker {showPicker} on:togglePicker={togglePicker} />
	<Header on:click={togglePicker} />
	<slot />
</div>
