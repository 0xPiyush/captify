// src/routes/+page.server.ts
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ url, locals: { getSession }, parent }) => {
	await parent();
	const session = await getSession();

	if (!session) {
		throw redirect(303, "/");
	}

	if (!url.searchParams.has("fileName") || !url.searchParams.has("transcription")) {
		throw redirect(303, "/dashboard");
	} else {
		return {
			fileName: url.searchParams.get("fileName"),
			transcription: url.searchParams.get("transcription")
		};
	}
};
