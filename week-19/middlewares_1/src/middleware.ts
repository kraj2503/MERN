import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// let requestCount = 0;
export function middleware(request: NextRequest) {
 if(request.nextUrl.pathname.startsWith('/admin')){
  return NextResponse.redirect(new URL('/signin', request.url))
 }
 

 if(request.nextUrl.pathname.startsWith('/dashboard')){

  return NextResponse.next()
 }
  // requestCount++;
  // console.log("number of requests is " + requestCount);
  // return  NextResponse.next()
}

// //will go to a bundle of routes that matches
// export const config = {
//   matcher: '/api/:path*'
// }