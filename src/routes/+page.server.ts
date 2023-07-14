import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import type { Provider } from "@supabase/supabase-js";

const OAUTH_PROVIDERS = ["google", "discord"];

export const actions: Actions = {
	signin: async ({ locals: { supabase }, url }) => {
		const provider = url.searchParams.get("provider");

		if (provider) {
			if (!OAUTH_PROVIDERS.includes(provider)) {
				return fail(400, { error: "Invalid provider" });
			}
			const { data, error: err } = await supabase.auth.signInWithOAuth({
				provider: provider as Provider
			});

			if (err) {
				console.error(err);
				return fail(500, { error: "Something went wrong." });
			}

			throw redirect(303, data.url);
		}
		return fail(400, { error: "No provider specified" });
	}
};
