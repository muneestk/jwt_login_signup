import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Emitter } from 'src/app/emmiters/emmiter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  message = ""

  constructor(private http:HttpClient){

  }

  ngOnInit(): void {
    this.http.get('//localhost:5000/api/user',{
      withCredentials:true
    })
    .subscribe((res:any) => {
      console.log(res);
      
        this.message = `Hi ${ res.name }`;
        Emitter.authEmiter.emit(true)
    },
    (err) =>{
      this.message = err
      Emitter.authEmiter.emit(false)

    })
  }

}
