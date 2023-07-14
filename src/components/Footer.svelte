<script lang="ts">
	import CaptifyLogo from "~icons/game-icons/abstract-116";
	import MdiFacebook from "~icons/mdi/facebook";
	import MdiInstagram from "~icons/mdi/instagram";
	import MdiTwitter from "~icons/mdi/twitter";
	import MdiLinkedin from "~icons/mdi/linkedin";
</script>

<footer class="w-full text-lg font-semibold body-font lg:px-32 bg-amber-100">
	<div class="container py-8 mx-auto flex items-center sm:flex-row flex-col">
		<a href="/" class="logo flex items-center gap-2 hover:-rotate-2 transition">
			<CaptifyLogo class="w-10 h-10" />
			<span class="text-3xl font-bold">Captify</span>
		</a>
		<p class="text-base sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-600 sm:py-2 sm:mt-0 mt-4">
			<!-- © 2023 Captify — <span>Piyush Sharma & Nitish Kapoor</span> -->
			© 2023 Captify — <span>HARISHWA, RITHVIK, PRATAP, SAI PRATEEK</span>
		</p>
		<span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
			<a href="/#">
				<MdiFacebook />
			</a>
			<a href="/#" class="ml-3">
				<MdiTwitter />
			</a>
			<a href="/#" class="ml-3">
				<MdiInstagram />
			</a>
			<a href="/#" class="ml-3">
				<MdiLinkedin />
			</a>
		</span>
	</div>
</footer>
