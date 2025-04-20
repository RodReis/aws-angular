import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  [x: string]: any;

  router = inject(Router);
  http = inject(HttpClient);


  loginObj: any = {
    username: '',
    password: ''
  };

  onLogin(){
    if(this.loginObj.username === 'admin' && this.loginObj.password === 'admin'){
      alert('Login successful!');
      //localStorage.setItem('userId', '123456');
      /*this.http.post('http://localhost:8080/login', this.loginObj).subscribe((res:any) => {
        console.log(res);
      }, error => {
        console.error('Error:', error);
      });*/

      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials!');
    }
  }

  onLogoff(){
    localStorage.removeItem('userId');
    this.router.navigate(['/login']);
  }

}
