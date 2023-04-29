<script>
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
</script>

<nav class="bg-black/30  backdrop-blur-lg sticky top-0 z-50">
	<div class="flex flex-row">
		<div class="flex flex-row  w-full justify-start ">
			<!-- TODO: Profile -->
			<h1
				class="flex w-full text-xl font-mono  justify-center rounded-lg px-3 py-2 text-slate-700 font-medium  my-2 "
			>
				Adhil Roshan
			</h1>
		</div>
		<div class="flex w-full justify-center">
			<!-- {navItems.map(([title, url]) => ( -->
			{#each navItems as navItem}
				<a
					href={navItem.url}
					class="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:opacity-80 my-2 hover:text-slate-900"
					>{navItem.title}</a
				>
			{/each}
			<!-- ))} -->
		</div>
		<div class="flex  w-full justify-end ">
			<!-- TODO: Navbar -->
			<button
				class="w-4 h-4 m-1 mr-5 rounded-lg py-2 text-slate-700 font-medium  hover:opacity-80 my-2 hover:text-slate-300"
				on:click
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
					><path
						d="M0 64C0 28.7 28.7 0 64 0H352c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM160 352c0-17.7 14.3-32 32-32V304c0-44.2 35.8-80 80-80H416c17.7 0 32-14.3 32-32V160 69.5c37.3 13.2 64 48.7 64 90.5v32c0 53-43 96-96 96H272c-8.8 0-16 7.2-16 16v16c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V352z"
					/></svg
				>
			</button>
		</div>
	</div>
</nav>
