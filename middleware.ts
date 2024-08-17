
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  //enhanced cookies
  request.cookies.set('token', 'abc123');
  const token = request.cookies.get('token');
  const { pathname, searchParams , buildId  } = request.nextUrl  


  
  console.log(`currentUrl: ${buildId}`);
}