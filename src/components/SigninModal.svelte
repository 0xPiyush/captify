<script lang="ts">
	import Modal from "./Modal.svelte";
	import MaterialSymbolsCloseRounded from "~icons/material-symbols/close-rounded";
	import LogosGoogleIcon from "~icons/logos/google-icon";
	import LogosDiscordIcon from "~icons/logos/discord-icon";
	import Spinner from "~icons/svg-spinners/270-ring";
	import type { Provider } from "@supabase/supabase-js";
	import { supabaseClient } from "../lib/supabaseClient";
	import { enhance, type SubmitFunction } from "$app/forms";

	let modal: Modal;

	let disabled = false;
	let googleSigninInProgress = false;
	let discordSigninInProgress = false;

	export function show() {
		modal.show();
	}

	function hide() {
		modal.hide();
	}

	function animateGoogleButton() {
		disabled = true;
		googleSigninInProgress = true;
		// Emulate a delay
		setTimeout(() => {
			disabled = false;
			googleSigninInProgress = false;
		}, 3000);
	}

	function animateDiscordButton() {
		disabled = true;
		discordSigninInProgress = true;
		// Emulate a delay
		setTimeout(() => {
			disabled = false;
			discordSigninInProgress = false;
		}, 3000);
	}

	async function signInWithProvider(provider: Provider) {
		const { data, error } = await supabaseClient.auth.signInWithOAuth({ provider: provider });
	}

	const submitSocialSignin: SubmitFunction = async ({ action, cancel }) => {
		switch (action.searchParams.get("provider")) {
			case "google":
				await signInWithProvider("google");
				break;
			case "discord":
				await signInWithProvider("discord");
				break;
			default:
				break;
		}
		cancel();
	};

	export let blur = false;
</script>

<Modal bind:this={modal} {blur}>
	<slot>
		<div class="flex flex-col w-full h-full justify-center items-center">
			<!-- Modal Title -->
			<div
				class="flex w-full justify-between border-b border-light-text py-2 px-6 text-lg font-semibold"
			>
				Login / Sign up
				<button on:click={hide} {disabled} class="disabled:cursor-not-allowed"
					><MaterialSymbolsCloseRounded /></button
				>
			</div>
			<!-- Modal Body -->
			<form
				method="POST"
				use:enhance={submitSocialSignin}
				class="flex flex-col w-auto justify-center items-center py-4 gap-4"
			>
				<!-- Sign in buttons -->
				<button
					formaction="?/signin&provider=google"
					class="flex items-center w-full gap-2 text-md font-medium px-4 py-2 bg-light-text text-light rounded-md
                        {!disabled ? 'hover:outline' : 'hover:outline-none'} 
                        {!disabled ? 'hover:outline-light-accent' : ''}
                        {!disabled ? 'hover:scale-105' : ''}
                        disabled:cursor-not-allowed
                        disabled:bg-light-text-secondary
                    transition"
					{disabled}
					on:click={animateGoogleButton}
				>
					{#if googleSigninInProgress}
						<Spinner />
						Signing in
					{:else}
						<LogosGoogleIcon />
						Continue with Google
					{/if}
				</button>
				<button
					formaction="?/signin&provider=discord"
					class="flex items-center w-full gap-2 text-md font-medium px-4 py-2 bg-light-text text-light rounded-md
                        {!disabled ? 'hover:outline' : 'hover:outline-none'} 
                        {!disabled ? 'hover:outline-light-accent' : ''}
                        {!disabled ? 'hover:scale-105' : ''}
                        disabled:cursor-not-allowed
                        disabled:bg-light-text-secondary
                        transition"
					{disabled}
					on:click={animateDiscordButton}
				>
					{#if discordSigninInProgress}
						<Spinner />
						Signing in
					{:else}
						<LogosDiscordIcon />
						Continue with Discord
					{/if}
				</button>
			</form>
		</div>
	</slot>
</Modal>

<style>
</style>
