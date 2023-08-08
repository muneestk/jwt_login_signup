import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Emitter } from 'src/app/emmiters/emmiter';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
   authenticated = false ;
  

   constructor(private http:HttpClient){}

   ngOnInit(): void {
     Emitter.authEmiter.subscribe((auth:boolean) => {
      this.authenticated = auth
     })
   } 

   logout():void{
    this.http.post('//localhost:5000/api/logout',{},
    {
      withCredentials:true
    }).subscribe(() => this.authenticated = false)
   }
}
