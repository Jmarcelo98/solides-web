import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-visualizar',
  templateUrl: './album-visualizar.component.html',
  styleUrls: ['./album-visualizar.component.css']
})
export class AlbumVisualizarComponent {

  constructor(private activatedRoute: ActivatedRoute) {
    this.album = this.activatedRoute.snapshot.data.visualizarAlbumResolver;
  }

  album: any;

}
