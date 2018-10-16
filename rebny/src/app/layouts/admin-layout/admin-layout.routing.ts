import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { BuyersComponent } from '../../buyers/buyers.component';
import { SellersComponent } from '../../sellers/sellers.component';
import { ApplyComponent } from '../../apply/apply.component';
import { RegistryComponent } from '../../registry/registry.component';
import { ChallengesComponent } from '../../challenges/challenges.component';
import { VotesComponent } from '../../votes/votes.component';
import { ReportsComponent } from '../../reports/reports.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },

    { path: 'buyers',          component: BuyersComponent },
    { path: 'sellers',          component: SellersComponent },
    { path: 'apply',          component: ApplyComponent },
    { path: 'registry',          component: RegistryComponent },
    { path: 'challenges',          component: ChallengesComponent },
    { path: 'votes',          component: VotesComponent },
    { path: 'reports',          component: ReportsComponent },

    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
];
