import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form:FormGroup

  constructor(
    private formBuilder:FormBuilder,
    private http:HttpClient,
    private router:Router
  ){}

  ngOnInit():void{
    this.form = this.formBuilder.group({
      name:"",
      email:"",
      password:"",
      mobile:""
    })
  }

  submit():void{
    let user = this.form.getRawValue()
    console.log(user);

    if(user.name.trim() === '' || user.email.trim() === '' || user.password.trim() === ''){
      Swal.fire("Error","Please Enter All The Field","error")
    }else{
      this.http.post("//localhost:5000/api/register",user,{
        withCredentials:true
      })
      .subscribe(() => this.router.navigate(['/']),(err) => {
        Swal.fire("Error",err.error.message,"error")
      })
    }


    
  }


}
