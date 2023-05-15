import { NextResponse } from "next/server";

export const runtime = "edge";

const handler = () => {
    return NextResponse.json({
        name: `Radha Radha, I'm now an Edge Function!`,
    });
};

export {
    handler as GET,
    handler as POST,
    handler as PUT,
    handler as PATCH,
    handler as DELETE,
};
