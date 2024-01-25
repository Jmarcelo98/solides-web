import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visualizar-post',
  templateUrl: './visualizar-post.component.html',
  styleUrls: ['./visualizar-post.component.css']
})
export class VisualizarPostComponent implements OnInit{

  constructor(private activatedRoute: ActivatedRoute) {
    this.post = this.activatedRoute.snapshot.data.visualizarPostResolver;


  }
  ngOnInit(): void {
    console.log(this.post);
    
  }

  post: any;

}
