import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visualizar-post',
  templateUrl: './visualizar-post.component.html',
  styleUrls: ['./visualizar-post.component.css']
})
export class VisualizarPostComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private domSanitizer: DomSanitizer) {
    this.post = this.activatedRoute.snapshot.data.visualizarPostResolver;
  }

  post: any;

  image: any;

  ngOnInit(): void {
    this.renderizarImg();
  }

  renderizarImg() {
    if (this.post.imagem != null) {
      let objectURL = 'data:image/png;base64,' + this.post.imagem;
      this.image = this.domSanitizer.bypassSecurityTrustUrl(objectURL);
    }
  }


}
