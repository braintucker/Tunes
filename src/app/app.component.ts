import { Component } from '@angular/core';

@Component({
  selector: 'angular-tunes',
  template: `
    <div class="container">
      <artist-list *ngIf="state === 'artist-list'"
        (artistSelect)="showArtistDetail($event)"></artist-list>
      <artist-detail *ngIf="state === 'artist-detail'"></artist-detail>
    </div>
  `
})
export class AppComponent {

  state = 'artist-list';

  showArtistDetail(artistId) {
    this.state = 'artist-detail';
  }

}
