<script lang="ts">
	import DashNav from "../../../components/DashNav.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<main class="flex flex-col h-screen w-full text-light-text items-center">
	<img
		id="bg-img"
		class="absolute w-full h-3/4 bottom-0 opacity-40 -z-10"
		src="/wave-bg.svg"
		alt=""
		draggable="false"
	/>
	<div class="container md:px-32 flex flex-col w-full h-full items-center">
		<DashNav {data} />
		<h1 class="text-3xl md:text-4xl font-semibold mt-10">Transcription Results:</h1>
		<h2 class="text-xl md:text-2xl font-semibold mt-10">{data.fileName}</h2>

		<div
			class="bg-light-text text-light mt-10 w-3/4 h-2/5 overflow-y-scroll p-10 rounded-lg opacity-80"
		>
			<p class="text-lg md:text-xl font-medium break-words">
				{data.transcription}
			</p>
		</div>
	</div>
</main>

<style>
</style>
