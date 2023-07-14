import { Configuration, OpenAIApi } from "openai";
import type { RequestHandler } from "./$types";
import { OPENAI_API_KEY } from "$env/static/private";
import * as stream from "stream";

const configuration = new Configuration({
	apiKey: OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

export const POST: RequestHandler = async ({ locals, request }) => {
	if (!(await locals.getSession())) {
		return new Response(null, { status: 401, statusText: "Unauthorized" });
	}

	const file = (await request.formData()).get("audio") as File;

	const audioReadStream = stream.Readable.from(Buffer.from(await file.arrayBuffer()));
	// @ts-expect-error Workaround till OpenAI fixed the sdk
	audioReadStream.path = "conversation.wav";

	const resp = await openai.createTranscription(audioReadStream as unknown as File, "whisper-1");

	return new Response(JSON.stringify({ transcription: resp.data.text, fileName: file.name }), {
		status: 200,
		statusText: "OK"
	});
};
