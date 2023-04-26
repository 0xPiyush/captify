<script lang="ts">
	import CaptifyLogo from "~icons/game-icons/abstract-116";
	import PhArrowCircleUpRightFill from "~icons/ph/arrow-circle-up-right-fill";
	import FluentEmojiHighContrastMagicWand from "~icons/fluent-emoji-high-contrast/magic-wand";

	import * as THREE from "three";
	// @ts-ignore
	import CLOUDS from "vanta/dist/vanta.clouds.min";
	import Footer from "../components/Footer.svelte";
	import SigninModal from "../components/SigninModal.svelte";

	function vanta(node: HTMLElement) {
		CLOUDS({
			el: node,
			THREE: THREE,
			mouseControls: true,
			touchControls: true,
			gyroControls: true,
			speed: 1.5
		});
	}

	let modal: SigninModal;
</script>

<main
	class="flex flex-col items-center bg-transparent text-light-text selection:bg-light-selection md:bg-gradient-to-r md:from-50% md:from-light md:to-transparent"
>
	<div
		id="vanta"
		use:vanta
		class="absolute top-0 flex w-full md:w-1/2 h-2/3 md:h-4/5 right-0 -z-[1]"
	/>
	<div class="container lg:px-32">
		<nav class="flex flex-col md:flex-row w-full justify-between items-center py-4 md:py-6 gap-4">
			<a
				href="/"
				class="flex items-center gap-2 text-3xl md:text-4xl font-bold hover:-rotate-2 hover:scale-105 transition"
			>
				<CaptifyLogo class="w-10 h-10" />
				Captify
			</a>
			<div
				id="nav-as"
				class="flex w-full md:w-auto items-center justify-evenly md:justify-center md:gap-10 text-lg md:text-xl font-medium"
			>
				<a href="/" class="hover:font-bold hover:-translate-y-1 transition">/Home</a>
				<a href="#/features" class="hover:font-bold hover:-translate-y-1 transition">/Features</a>
				<a href="#/TOS" class="hover:font-bold hover:-translate-y-1 transition">/TOS</a>
			</div>
			<div id="nav-buttons">
				<button
					class="flex items-center gap-2 text-lg md:text-xl font-semibold md:font-bold border-2 border-light-text rounded-full hover:shadow-sm hover:shadow-light-text hover:-translate-y-1 transition"
					on:click={modal.show}
				>
					<span class="ml-2">Get Started</span>
					<PhArrowCircleUpRightFill class="w-8 h-8 md:w-10 md:h-10" />
				</button>
			</div>
		</nav>
		<div class="flex flex-col w-full h-1/2 md:justify-center mt-10 items-center md:items-start">
			<p
				class="text-4xl md:text-6xl leading-snug md:leading-normal font-semibold text-center md:text-start"
			>
				Create Captivating Content <br /> With AI-Powered Tools
			</p>
			<div class="flex flex-col md:flex-row justify-center gap-8 mt-4 items-center md:ml-16">
				<p class="text-2xl">
					Content creation is{" "}
					<span class="line-through">tough</span>{" "}
					<span class="underline font-semibold">Easy</span>.
				</p>
				<div class="flex w-full md:w-auto justify-center items-center">
					<button
						class="flex gap-2 p-2 text-xl group bg-light-text text-light rounded-lg font-bold hover:shadow-md hover:shadow-light-text hover:outline hover:outline-light-accent hover:-translate-y-1 transition"
						on:click={modal.show}
					>
						Start Creating
						<FluentEmojiHighContrastMagicWand class="group-hover:rotate-90 transition" />
					</button>
				</div>
			</div>
		</div>
	</div>
	<div
		id="cards"
		class="flex w-full lg:px-32 mb-10 justify-center bg-gradient-to-t from-95% md:from-50% from-light to-transparent md:mt-20 mt-14"
	>
		<div
			class="container flex flex-col md:flex-row md:w-full gap-10 w-full justify-center items-center"
		>
			<div
				class="relative w-3/4 md:w-full h-72 rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg shadow-light-text-secondary hover:shadow-light-text hover:outline hover:outline-light-accent hover:-translate-y-1 transition"
			>
				<img class="object-cover w-full h-full" src="/card1.webp" alt="Generative Art" />
				<div class="absolute top-0 flex h-full w-full justify-start items-end pb-2 pl-2">
					<div class="flex flex-col items-start justify-center">
						<span class="px-2 py-1 bg-amber-50 text-lg font-semibold rounded-t-xl rounded-br-xl">
							Unleash your creativity
						</span>
						<br />
						<span class="px-2 pb-1 bg-amber-50 text-lg font-semibold rounded-b-xl">
							with Generative Art
						</span>
					</div>
				</div>
			</div>
			<div
				class="relative w-3/4 md:w-full h-72 rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg shadow-light-text-secondary hover:shadow-light-text hover:outline hover:outline-light-accent hover:-translate-y-1 transition"
			>
				<img class="object-cover w-full h-full" src="/card2.jpg" alt="Content Generation" />
				<div class="absolute top-0 flex h-full w-full justify-center items-end pb-2">
					<div class="flex flex-col items-center justify-center">
						<span class="px-2 pt-1 bg-amber-50 text-lg font-semibold rounded-t-xl">
							Never go stale
						</span>
						<br />
						<span class="px-2 py-1 bg-amber-50 text-lg font-semibold rounded-xl">
							with AI-generated content
						</span>
					</div>
				</div>
			</div>
			<div
				class="relative w-3/4 md:w-full h-72 rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg shadow-light-text-secondary hover:shadow-light-text hover:outline hover:outline-light-accent hover:-translate-y-1 transition"
			>
				<img class="object-cover w-full h-full" src="/card3.png" alt="AI Transcription" />

				<div class="absolute top-0 flex h-full w-full justify-end items-end pb-2 pr-2">
					<div class="flex flex-col items-end justify-center">
						<span class="px-2 pt-1 bg-amber-50 text-lg font-semibold rounded-t-xl">
							Reach a wider audience
						</span>
						<br />
						<span class="px-2 py-1 bg-amber-50 text-lg font-semibold rounded-b-xl rounded-tl-xl">
							with AI transcription and translation
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
	<Footer />
	<SigninModal bind:this={modal} />
</main>

<style>
</style>
