import { PartnerTech } from './components/PartnerTech';
import { CRM } from './components/CRM';
import { LeadDiscovery } from './components/LeadDiscovery';
import { HACPIntegration } from './components/HACPIntegration';
import { ReferralBot } from './components/ReferralBot';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import Dedication from './pages/Dedication';
import HACPShowcase from './pages/HACPShowcase';
import Why from './pages/Why';

import WarRoom from './pages/WarRoom';

import Conversion from './pages/conversion';
import Upgrade from './pages/upgrade';

export interface RouteConfig {
  name: string;
  path: string;
  component: React.ComponentType<any>;
  private?: boolean;
  roles?: string[];
  layout?: string;
  breadcrumb?: string;
}

export const routes: RouteConfig[] = [
  { name: 'Home', path: '/', component: PartnerTech, layout: 'default', breadcrumb: 'Home' },
  { name: 'Why', path: '/why', component: Why, layout: 'default', breadcrumb: 'Why' },
  { name: 'CRM', path: '/crm', component: CRM, private: true, roles: ['pro', 'enterprise'], layout: 'dashboard', breadcrumb: 'CRM' },
  { name: 'Lead Discovery', path: '/lead-discovery', component: LeadDiscovery, private: true, roles: ['pro', 'enterprise'], layout: 'dashboard', breadcrumb: 'Lead Discovery' },
  { name: 'HACP', path: '/hacp', component: HACPIntegration, private: true, roles: ['enterprise'], layout: 'dashboard', breadcrumb: 'HACP' },
  { name: 'Referral Bot', path: '/referral-bot', component: ReferralBot, private: true, roles: ['pro', 'enterprise'], layout: 'dashboard', breadcrumb: 'Referral Bot' },
  { name: 'Analytics', path: '/analytics', component: AnalyticsDashboard, private: true, roles: ['admin'], layout: 'dashboard', breadcrumb: 'Analytics' },
  { name: 'Dedication', path: '/dedication', component: Dedication, layout: 'default', breadcrumb: 'Dedication' },
  { name: 'HACP Showcase', path: '/hacp-showcase', component: HACPShowcase, layout: 'default', breadcrumb: 'HACP Showcase' }
  ,{ name: 'War Room', path: '/war-room', component: WarRoom, layout: 'dashboard', breadcrumb: 'War Room' }
  ,{ name: 'Conversion', path: '/conversion', component: Conversion, layout: 'default', breadcrumb: 'Conversion' }
  ,{ name: 'Upgrade', path: '/upgrade', component: Upgrade, layout: 'default', breadcrumb: 'Upgrade' }
];
