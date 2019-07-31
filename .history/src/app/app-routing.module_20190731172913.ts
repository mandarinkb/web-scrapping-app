import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule' },
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'results', loadChildren: './tab2/results/results.module#ResultsPageModule' },
  { path: 'fixtures/:id', loadChildren: './tab2/fixtures/fixtures.module#FixturesPageModule' },
  { path: 'team/:league', loadChildren: './tab4/team/team.module#TeamPageModule' },
  { path: 'about', loadChildren: './tab4/about/about.module#AboutPageModule' },
  { path: 'team-detail/:team', loadChildren: './tab4/team/team-detail/team-detail.module#TeamDetailPageModule' },
  { path: 'players-detail', loadChildren: './tab4/team/team-detail/players-detail/players-detail.module#PlayersDetailPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
