import { Component, Input } from '@angular/core';
import { Album } from 'src/app/core/models/interface/Album';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent {

  @Input()
  album: Album

}
