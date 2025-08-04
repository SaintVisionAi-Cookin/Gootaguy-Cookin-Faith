import { NextRequest, NextResponse } from 'next/server';

const planRoutes = {
  dashboard: ['free', 'unlimited', 'pro', 'enterprise', 'white_label', 'custom'],
  partnertech: ['pro', 'enterprise', 'white_label', 'custom'],
  enterprise: ['enterprise', 'white_label', 'custom'],
  whiteLabel: ['white_label', 'custom'],
  custom: ['custom'],
};

export function middleware(req: NextRequest) {
  const url = req.nextUrl.pathname;
  const user = req.cookies.get('user');
  const plan = user?.app_metadata?.plan;

  if (url.startsWith('/dashboard') && !planRoutes.dashboard.includes(plan)) {
    return NextResponse.redirect(new URL('/conversion', req.url));
  }
  if (url.startsWith('/partnertech') && !planRoutes.partnertech.includes(plan)) {
    return NextResponse.redirect(new URL('/conversion', req.url));
  }
  if (url.startsWith('/enterprise') && !planRoutes.enterprise.includes(plan)) {
    return NextResponse.redirect(new URL('/conversion', req.url));
  }
  if (url.startsWith('/white-label') && !planRoutes.whiteLabel.includes(plan)) {
    return NextResponse.redirect(new URL('/conversion', req.url));
  }
  if (url.startsWith('/custom') && !planRoutes.custom.includes(plan)) {
    return NextResponse.redirect(new URL('/conversion', req.url));
  }

  return NextResponse.next();
}
