import { Component, Input } from '@angular/core';
import { Album } from 'src/app/core/models/interface/Album';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent {

  @Input()
  listaAlbum: Album[] = []


}
