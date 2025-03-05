import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuariosService } from '../../service/followers.service';
import { followers } from '../../interfaces/follower';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-followers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css'],
})
export class followersComponent implements OnInit {

  public loginUser = 'Mateus-Brito';
  public FollowersList: Array<followers> = [];
  constructor(private httpUsuarioService: UsuariosService, private route: ActivatedRoute ) {

   }

  ngOnInit(): void {
    this.getFollowersList();
  }

  captureLogin(): void {
    this.route.params.subscribe(params => {
      this.loginUser = params['login'];
      this.getFollowersList();
    });
  }

  getFollowersList(): void {
    this.FollowersList = [];
    this.httpUsuarioService.getFollowersList(this.loginUser).subscribe(
      {
        next: (res) => {
          this.FollowersList = res;
        },
        error: (error) => {
          console.log('getConsultCont', error);
        }
      }
    );
  }
}
