import createMiddleware from 'next-intl/middleware';
import {routing} from './app/i18n/routing';

// here is default middleware
// if you want to compose yours, please read:
//   https://next-intl-docs.vercel.app/docs/routing/middleware#composing-other-middlewares
export default createMiddleware(routing);
 
export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*).*)',
    '/(zh|en)/:path*'
  ]
};