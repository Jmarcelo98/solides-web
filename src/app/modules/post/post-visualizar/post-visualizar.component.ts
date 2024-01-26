import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-visualizar',
  templateUrl: './post-visualizar.component.html',
  styleUrls: ['./post-visualizar.component.css']
})
export class PostVisualizarComponent {

  constructor(private activatedRoute: ActivatedRoute) {
    this.post = this.activatedRoute.snapshot.data.visualizarPostResolver;
  }

  post: any;

}
