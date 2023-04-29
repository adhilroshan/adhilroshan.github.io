<script>
	import { scale, fade } from 'svelte/transition';
</script>

<div
	class="shadow-xl m-2 shadow-slate-400 bg-slate-600 rounded-3xl w-96 h-80 flex flex-col transition-transform duration-300 hover:scale-105"
    in:scale
>
	<img
		src="https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/7bc157eb8f76b806a7d074f5a0786229"
		alt=""
		class="object-cover w-full h-60"
	/>
	<div class="mx-4 my-2  flex flex-col relative">
		<h1 class="text-2xl text-slate-100 z-20">Heading</h1>
		<div class="flex flex-row mb-2 hover:h-full">
			<p class="text-slate-400 leading-6 whitespace-normal text-ellipsis overflow-hidden h-12 ">
				Lorem ipsum dolor sit amet Dolor eum maiores sit aut recusandae? Suscipit magni magnam
				dolores rem consequatur quidem enim veniam vero iusto. Eum delectus quo fugit. Possimus!
			</p>
			<div class="absolute z-0 scale-75 flex flex-row right-0 top-0 -m-1 ">
				<a href="#a" class="px-3 py-1 text-slate-200 block rounded-lg m-1 bg-slate-800">Link</a>
				<a href="#a" class="px-3 py-1 text-slate-200 block rounded-lg m-1 bg-slate-800">Link</a>
				<a href="#a" class="px-3 py-1 text-slate-200 block rounded-lg m-1 bg-slate-800">Link</a>
				<a href="#a" class="px-3 py-1 text-slate-200 block rounded-lg m-1 bg-slate-800">Link</a>
			</div>
		</div>
	</div>
</div>
