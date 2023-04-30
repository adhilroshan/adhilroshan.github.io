<script>
	import AnimatedHamburgerMenu from './AnimatedHamburgerMenu.svelte';
	import { fly } from 'svelte/transition';

	let navItems = [
		{
			title: 'Home',
			url: '/'
		},
		{
			title: 'Projects',
			url: '/projects'
		},
		{
			title: 'Blogs',
			url: '/blog'
		}
	];

	export let open = false;
	export let onClick = () => {
		open = !open;
	};
</script>

<nav class="sticky top-3 z-50 mx-auto h-[10vh] w-11/12 rounded-lg bg-heroBg/20 backdrop-blur-md">
	<div class="flex flex-row">
		<div class="flex w-full flex-row justify-start">
			<!-- TODO: Profile -->
			<a
				href="/"
				class="my-2 flex w-full justify-center rounded-lg px-3 py-2 font-mono text-xl font-medium text-white/60"
			>
				Adhil Roshan
			</a>
		</div>
		<div class="hidden w-full justify-center md:flex">
			<!-- {navItems.map(([title, url]) => ( -->
			{#each navItems as navItem}
				<a
					href={navItem.url}
					class="my-2 rounded-lg px-3 py-2 font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 hover:opacity-80"
					>{navItem.title}</a
				>
			{/each}
			<!-- ))} -->
		</div>
		<div class=" hidden w-full items-center justify-end md:flex">
			<!-- TODO: Navbar -->
			<button
				class="m-1 my-2 mr-5 h-4 w-4 rounded-lg font-medium text-slate-700 hover:text-slate-300 hover:opacity-80"
				on:click
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
					><path
						d="M0 64C0 28.7 28.7 0 64 0H352c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM160 352c0-17.7 14.3-32 32-32V304c0-44.2 35.8-80 80-80H416c17.7 0 32-14.3 32-32V160 69.5c37.3 13.2 64 48.7 64 90.5v32c0 53-43 96-96 96H272c-8.8 0-16 7.2-16 16v16c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V352z"
					/></svg
				>
			</button>
		</div>
		<div class=" flex w-full justify-end md:hidden">
			<AnimatedHamburgerMenu {open} {onClick} />
		</div>
	</div>
	{#if open}
		<div
			class="absolute mt-2 flex w-full flex-col items-center gap-4 rounded-lg bg-white/20 p-2 backdrop-blur-lg"
			transition:fly={{ x: 200, duration: 400 }}
		>
			{#each navItems as navItem}
				<a
					on:click={onClick}
					href={navItem.url}
					class="my-2 w-5/6 rounded-lg px-3 py-2 text-center font-medium text-yellow-200 transition-transform hover:transform hover:bg-slate-400"
					>{navItem.title}</a
				>
			{/each}
		</div>
	{/if}
</nav>
