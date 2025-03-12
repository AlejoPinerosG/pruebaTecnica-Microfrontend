import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuariosService } from '../../service/usuarios.service';
import { usuario } from '../../interfaces/usersDetail';
import { ActivatedRoute, Router } from '@angular/router';
import { FollowersPipe } from '../../pipe/followers.pipe';


@Component({
  selector: 'app-usuariosDetail',
  standalone: true,
  imports: [CommonModule, FormsModule, FollowersPipe],
  templateUrl: './usuariosDetail.component.html',
  styleUrls: ['./usuariosDetail.component.css'],
})
export class usuariosDetailComponent implements OnInit {

  public loginUser = 'octocat';
  public usuarioDetail: usuario = { avatar: '', login: '', followers: 0, following: 0 };
  constructor(private httpUsuarioService: UsuariosService, private route: ActivatedRoute, private router: Router) {

   }

  ngOnInit(): void {
    this.captureLogin();
  }

  captureLogin(): void {
    this.route.params.subscribe(params => {
      this.loginUser = params['login'];
      this.usuarioDetails();
    });
  }

  usuarioDetails(): void {
    this.usuarioDetail = { avatar: '', login: '', followers: 0, following: 0 };
    this.httpUsuarioService.getUsuarioDetails(this.loginUser).subscribe(
      {
        next: (res) => {
          this.usuarioDetail = res;
        },
        error: (error) => {
          console.log('getConsultCont', error);
        }
      }
    );
  }

  navigateToFollowers(login: string) {
    if(this.usuarioDetail.followers !== 0) {
      this.router.navigate(['/followers', login]);
    }
  }


}
