<script lang="ts">
	import { fade, fly } from "svelte/transition";

	let visible = false;
	let modalBox: HTMLElement;

	export function show() {
		visible = true;
	}

	export function hide() {
		visible = false;
	}

	export let blur = false;
</script>

{#if visible}
	<div
		class="fixed top-0 left-0 flex justify-center items-center w-screen h-screen overflow-x-hidden overflow-y-auto bg-neutral-800/50
		{blur ? 'backdrop-blur-sm' : ''} inset-0 z-50"
		transition:fade={{ duration: 200 }}
	>
		<div
			class="flex w-4/5 md:w-4/6 lg:w-1/2 xl:w-2/5 h-auto bg-light-secondary rounded-lg"
			bind:this={modalBox}
			transition:fly={{ x: 0, y: 100, duration: 200 }}
		>
			<slot />
		</div>
	</div>
{/if}

<style>
</style>
