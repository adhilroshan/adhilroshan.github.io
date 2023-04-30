<script>
	import { slide, scale, fade } from 'svelte/transition';
</script>

<div
	class="m-2 flex h-80 w-96 scale-95 flex-col rounded-3xl bg-slate-600 shadow-xl transition-transform duration-300 hover:scale-100 active:scale-90"
	in:scale
>
	<img
		src="https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/7bc157eb8f76b806a7d074f5a0786229"
		alt=""
		class="h-60 w-full rounded-2xl object-cover shadow-md"
	/>
	<div class="relative mx-4 my-2 flex flex-col">
		<h1 class="z-20 text-2xl text-slate-100">Heading</h1>
		<div class="mb-2 flex flex-row hover:h-full">
			<p class="h-12 overflow-hidden text-ellipsis whitespace-normal leading-6 text-slate-400">
				Lorem ipsum dolor sit amet Dolor eum maiores sit aut recusandae? Suscipit magni magnam
				dolores rem consequatur quidem enim veniam vero iusto. Eum delectus quo fugit. Possimus!
			</p>
			<div class="absolute right-0 top-0 z-0 -m-1 flex scale-75 flex-row">
				<a href="#a" class="m-1 block rounded-lg bg-slate-800 px-3 py-1 text-slate-200">Link</a>
				<a href="#a" class="m-1 block rounded-lg bg-slate-800 px-3 py-1 text-slate-200">Link</a>
				<a href="#a" class="m-1 block rounded-lg bg-slate-800 px-3 py-1 text-slate-200">Link</a>
				<a href="#a" class="m-1 block rounded-lg bg-slate-800 px-3 py-1 text-slate-200">Link</a>
			</div>
		</div>
	</div>
</div>
