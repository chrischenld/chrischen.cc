// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isPasswordEnabled = !!process.env.PAGE_PASSWORD;

export async function middleware(request: NextRequest) {
	const isLoggedIn = request.cookies.has(process.env.PASSWORD_COOKIE_NAME!);

	// const isPathPasswordProtect = request.nextUrl.pathname.startsWith("/rosetta");

	if (isPasswordEnabled && !isLoggedIn) {
		const page = request.nextUrl.pathname;
		const redirectUrl = new URL("/password", request.url);
		redirectUrl.searchParams.set("page", page);

		return NextResponse.redirect(redirectUrl);

		// return NextResponse.redirect(new URL("/password", request.url));
	}
	return NextResponse.next();
}

export const config = {
	matcher: ["/rosetta", "/rosetta-tokens"],
};
