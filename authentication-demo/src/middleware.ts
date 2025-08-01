import { RedirectToSignIn, RedirectToSignUp } from '@clerk/nextjs';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// const isProtectedRoute = createRouteMatcher(["/user-profile", "/dashboard"])
const isPublicRoute = createRouteMatcher([
  '/', 
  '/sign-in(.*)', 
  '/sign-up(.*)', 
  '/sign-out(.*)'
]);

export default clerkMiddleware(async (auth, req) => {
  // Automatically protect all non-public routes
  const { userId } = await auth()
  if (!userId && !isPublicRoute(req)) {
    // await auth.protect() // This safely handles JWT validation and redirection
    (await auth()).redirectToSignIn()
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};