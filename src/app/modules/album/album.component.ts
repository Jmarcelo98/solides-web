import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthGuardService } from 'src/app/core/auth/can-active.service';
import { Paginator } from 'src/app/core/models/interface/Paginator';
import { IPaginator } from 'src/app/shared/components/paginacao/paginacao.component';
import { AlbumService } from 'src/app/shared/services/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute, private albumService: AlbumService,
    private authGuardService: AuthGuardService) {
    this.albuns = this.activatedRoute.snapshot.data.albumResolver;
  }

  formFiltro = new FormGroup({
    titulo: new FormControl(null, []),
    meusAlbuns: new FormControl(null, []),
  });

  albuns: any

  logado: boolean

  paginator: Paginator = {
    pageIndex: 0,
    totalElements: 0,
    pageSize: 4,
  }

  filtrar() {

    this.albumService.buscarTodos(this.formFiltro.getRawValue(), this.paginator).subscribe(res => {
      this.paginator.pageIndex = res.number;
      this.paginator.totalElements = res.totalElements;
      this.albuns = res

    }, err => {
      console.log(err);

    })

  }

  ngOnInit(): void {
    this.logado = this.authGuardService.isUsuarioAuthenticated()
    this.paginator.pageIndex = this.albuns.number;
    this.paginator.totalElements = this.albuns.totalElements;
  }

  public pageClick(paginator?: IPaginator) {
    this.paginator = paginator!
    this.filtrar();
  }

}
