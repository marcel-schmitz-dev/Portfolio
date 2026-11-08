import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { LegalNotice } from './features/legal-notice/legal-notice';
import { PrivacyPolicy } from './features/privacy-policy/privacy-policy';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'legal-notice', component: LegalNotice },
    { path: 'privacy-policy', component: PrivacyPolicy },
    { path: '**', redirectTo: '' }
];