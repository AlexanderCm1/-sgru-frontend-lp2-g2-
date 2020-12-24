import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { FormControl, NgForm, Validators,  FormBuilder, FormGroup, FormGroupDirective  } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    hide = true;
    titulo ='Autentificar...!';
    usuario:Usuario;

    loginFormGroup= this._formBuilder.group({
      username:['', Validators.required],
      password: ['', Validators.required],
    });




    constructor(private authService:AuthService, private router:Router, private _formBuilder: FormBuilder) { 
      this.usuario = new Usuario();
    }





    ngOnInit(): void {    
      if(this.authService.isAuthenticated()){
        swal.fire('Login',`Hola ${this.authService.usuario.username} ya estas autenticado!`,'info');
        this.router.navigate(['/']);
      }



    }






  onLogin(form){
    if (this.loginFormGroup.invalid){
      return;
    }

    this.usuario.username = form.value.username;
    this.usuario.password = form.value.password;
    if(this.usuario.username==null || this.usuario.password==null){
      swal.fire('Error Login', 'Username o password vacías!', 'error');
      return;
    }
    this.authService.login(this.usuario).subscribe(response =>{
      console.log(response);
      this.authService.guadarUser(response.access_token);
      this.authService.guadarToken(response.access_token);
      let usuario = this.authService.usuario;
      this.router.navigate(['/menu']);    
      swal.fire('Login', `Hola ${usuario.username}, has iniciado sesion con éxito`, 'success');
    },err =>{
      if(err.status==400){
        swal.fire('Error Login', 'Username o password incorrectos!', 'error');
      }
    });
  }

  //validacion

  getErrorMessage(field:string){
    let message;
    if(this.loginFormGroup.get(field).errors.required){
      message = "Necesitas llenar este campo";
    }
    return message;
  }
  isValidField(field:string):boolean{
      return ( (this.loginFormGroup.get(field).touched || this.loginFormGroup.get(field).dirty ) 
      && !this.loginFormGroup.get(field).valid
      
  )};


}
