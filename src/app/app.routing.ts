import { RouterModule } from '@angular/router';
import {ArtistListComponent } from './artist/artist-list.component';

export const routing = RouterModule.forRoot([
  {
      path: 'artists',
      component: ArtistListComponent
  },
  {
    path: '',
    redirectTo: '/artists',
    pathMatch: 'full'
  }
]);
