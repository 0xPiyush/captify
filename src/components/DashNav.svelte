<script lang="ts">
	import CaptifyLogo from "~icons/game-icons/abstract-116";
	import type { PageData } from "../routes/$types";

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
	<div class="flex flex-1 justify-end text-lg md:text-xl font-semibold md:font-bold">
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
					Welcome, {data.session ? data.session.user.email?.substring(0, 16) : "error"}...
				</p>
			</button>
		</form>
	</div>
</nav>
