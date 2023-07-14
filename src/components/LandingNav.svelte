<script lang="ts">
	import CaptifyLogo from "~icons/game-icons/abstract-116";
	import PhArrowCircleUpRightFill from "~icons/ph/arrow-circle-up-right-fill";
	import type { PageData } from "../routes/$types";
	import { fade, fly } from "svelte/transition";

	export let ctaClicked: () => void;

	export let data: PageData;

	let navProfileHovered = false;
</script>

<nav class="flex flex-col md:flex-row w-full justify-between items-center py-4 md:py-6 gap-4">
	<div class="flex-1">
		<a
			href="/"
			class="flex w-min items-center gap-2 text-3xl md:text-4xl font-bold hover:-rotate-2 hover:scale-105 transition"
		>
			<CaptifyLogo class="w-10 h-10" />
			Captify
		</a>
	</div>
	<div
		id="nav-links"
		class="flex flex-1 w-full md:w-auto items-center justify-evenly md:justify-center md:gap-10 text-lg md:text-xl font-medium"
	>
		<a href="/" class="hover:font-bold hover:-translate-y-1 transition">/Home</a>
		<a href="#/features" class="hover:font-bold hover:-translate-y-1 transition">/Features</a>
		<a href="#/TOS" class="hover:font-bold hover:-translate-y-1 transition">/TOS</a>
	</div>
	<div class="flex flex-1 justify-end text-lg md:text-xl font-semibold md:font-bold">
		{#if data.session}
			<form action="/logout" method="post">
				<button
					on:mouseenter={() => (navProfileHovered = true)}
					on:mouseleave={() => (navProfileHovered = false)}
					id="nav-profile"
					class="flex w-80 justify-center font-medium px-4 py-1 rounded-lg bg-light-text-secondary/20 hover:bg-light-text-secondary/30 transition"
				>
					<p
						class="{navProfileHovered
							? 'opacity-100 visible'
							: 'opacity-0 w-0 h-0 invisible'} transition duration-300"
					>
						Logout
					</p>
					<p
						class="{!navProfileHovered
							? 'opacity-100 visible'
							: 'opacity-0 w-0 h-0 invisible'} transition duration-300"
					>
						Welcome, {data.session.user.email?.substring(0, 16)}...
					</p>
				</button>
			</form>
		{:else}
			<div id="nav-buttons">
				<button
					class="flex items-center gap-2 border-2 border-light-text rounded-full hover:shadow-sm hover:shadow-light-text hover:-translate-y-1 transition"
					on:click={ctaClicked}
				>
					<span class="ml-2">Get Started</span>
					<PhArrowCircleUpRightFill class="w-8 h-8 md:w-10 md:h-10" />
				</button>
			</div>
		{/if}
	</div>
</nav>
