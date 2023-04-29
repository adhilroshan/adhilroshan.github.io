<script>
	import '../app.css';
	import Header from './components/Header.svelte';
	import ThemePicker from './components/ThemePicker.svelte';
	let showPicker = false;

	export let togglePicker = () => {
		showPicker = !showPicker;
	};
</script>

<div class="h-screen w-screen relative">
	<ThemePicker {showPicker} on:togglePicker={togglePicker} />
	<Header on:click={togglePicker} />
	<slot />
</div>
