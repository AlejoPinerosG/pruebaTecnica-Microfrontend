import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { usuarios } from '../../interfaces/usuariosList';
import { UsuariosService } from '../../service/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {

  public usuarios: Array<usuarios> = [];
  public search: string = '';

  constructor(private httpUsuarioService: UsuariosService, private router: Router) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios() {
    this.usuarios = [];
    const params = { q: this.search };
    if (this.search === '') {
      params.q = 'YOUR_NAME';
    }
    this.httpUsuarioService.getUsuarios(params).subscribe(
      {
        next: (res) => {
          this.usuarios = res;
        },
        error: (error) => {
          console.log('getConsultCont', error);
        }
      }
    );
  }

  navigateToDetail(id: string) {
    this.router.navigate(['/usuario-detail', id]);
  }

}
