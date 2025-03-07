const corsHeaders: Record<string, string> = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
};

const MISS_PARAMETER_ERROR = "Missing 'target' parameter";

/** Only forwards GET requests */
async function ForwardUrlGet(request: Request, env: any, ctx: ExecutionContext) {
    try {
        const url = new URL(request.url);
        const targetUrl = url.searchParams.get("target");
        if (!targetUrl) {
            return new Response(MISS_PARAMETER_ERROR, {
                status: 400,
                headers: corsHeaders,
            });
        }

        // Use the headers from the client to initiate the GET request
        const clientHeaders: Headers = new Headers(request.headers);
        const responseFromTarget: Response = await fetch(targetUrl, {
            method: "GET",
            headers: clientHeaders,
        });

        // Clone the response headers and append CORS configurations
        const responseHeaders: Headers = new Headers(responseFromTarget.headers);
        responseHeaders.set("Access-Control-Allow-Origin", "*");
        responseHeaders.set("Access-Control-Allow-Methods", "GET");
        responseHeaders.set("Access-Control-Allow-Headers", "Content-Type");

        // Return the response content (status code, status text, body) as is,
        // but with the added CORS configurations
        return new Response(responseFromTarget.body, {
            status: responseFromTarget.status,
            statusText: responseFromTarget.statusText,
            headers: responseHeaders,
        });
    } catch (err: any) {
        console.error("Request Error:", err);
        return new Response("Error: " + err.toString(), {
            status: 500,
            headers: corsHeaders,
        });
    }
}

export default {
    /* Entry point */
    async fetch(
        request: Request,
        env: any,
        ctx: ExecutionContext
    ): Promise<Response> {
        const corsHeaders: Record<string, string> = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET",
            "Access-Control-Allow-Headers": "Content-Type",
        };

        // Only allow GET requests
        if (request.method === "GET") {
            return ForwardUrlGet(request, env, ctx);
        }
        return new Response("Method Not Allowed, Only Support Get!", {
            status: 405,
            headers: corsHeaders,
        });
    },
};