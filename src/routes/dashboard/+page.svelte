<script lang="ts">
	import IcRoundFileUpload from "~icons/ic/round-file-upload";
	import DashNav from "../../components/DashNav.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;

	let files: FileList;
	let fileInput: HTMLInputElement;

	let disabled = false;

	function handleUpload() {
		// POST request to /api/transcribe
		disabled = true;
		const formData = new FormData();
		formData.append("audio", files[0]);
		fetch("/api/transcribe", {
			method: "POST",
			body: formData
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				window.location.href = `/dashboard/result?fileName=${data.fileName}&transcription=${data.transcription}`;
			})
			.catch((err) => {
				console.error(err);
				disabled = false;
			});
	}

	let hasFile = false;
	function handleFileChange() {
		if (files.length > 0) {
			hasFile = true;
		}
	}
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
		<h1 class="text-3xl md:text-4xl font-semibold mt-10">Create a new Transcription</h1>
		<form on:submit|preventDefault={handleUpload} class="flex flex-col w-full h-full items-center">
			<div
				id="dropzone"
				class="flex flex-col w-3/4 justify-center items-center md:w-1/2 h-1/2 m-10 p-4 rounded-lg drop-shadow-lg backdrop-blur-sm bg-light-text-secondary/20 outline-double outline-light-text-secondary text-light-text text-center"
			>
				<input
					type="file"
					name="video"
					id="video-input"
					class="absolute w-full h-full inset-0 opacity-0 cursor-pointer disabled:cursor-not-allowed"
					accept="audio/*"
					bind:files
					on:change={handleFileChange}
					required
					bind:this={fileInput}
					{disabled}
				/>
				{#if !hasFile}
					<IcRoundFileUpload class="w-9 h-9" />
					<p>Choose an audio or drag and drop it here.</p>
				{:else}
					<p class="text-2xl">File: {files[0].name}</p>
				{/if}
			</div>
			<button
				class="flex w-fit gap-2 p-2 text-xl group transform bg-light-text text-light rounded-lg font-bold hover:shadow-md hover:shadow-light-text
						{!disabled ? 'hover:outline' : 'hover:outline-none'} 
                        {!disabled ? 'hover:outline-light-accent' : ''}
                        {!disabled ? 'hover:scale-105' : ''}
                        disabled:cursor-not-allowed
                        disabled:bg-light-text-secondary
						transition"
				type="submit"
				{disabled}
			>
				<span>Upload</span>
				<IcRoundFileUpload class="w-6 h-6 group-hover:rotate-12 transition" />
			</button>
		</form>
	</div>
</main>

<style>
</style>
