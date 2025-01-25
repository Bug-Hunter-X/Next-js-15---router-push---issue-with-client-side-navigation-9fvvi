# Next.js 15 - router.push() Client-Side Navigation Issue

This repository demonstrates an uncommon bug encountered in Next.js 15 related to client-side navigation using `router.push()`.  The navigation works fine initially, but subsequent client-side navigations behave unexpectedly.

## Bug Description

The issue arises when using `router.push()` to navigate between pages within a Next.js 15 application.  The navigation works perfectly on the initial load. However, subsequent attempts to use `router.push()` for client-side transitions exhibit unexpected behavior, such as the page not rendering correctly or the application entering an unexpected state.

## How to Reproduce

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the development server using `npm run dev`.
4. Navigate to `/about`.
5. Click the "Go to Contact Page" button.  The navigation to `/contact` should fail and behave unexpectedly. 

## Solution

The solution involves implementing a proper error handling and navigation strategy to account for the potential issues during client-side navigation.  This might include a more robust navigation technique or alternative routing approaches, or simply handling possible errors in the router.push method.