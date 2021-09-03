import { Component,OnInit } from '@angular/core';
import { Ng2SearchPipe } from 'ng2-search-filter';
import { RestService } from './rest.service';
import { Users } from './Users';
import { Router } from '@angular/router';



@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {
  public collection:any;
 firstName:any="";
 key:string='id';
 reverse:boolean= false;
 loader:boolean=false;

  constructor(private rs : RestService){}
 
  ngOnInit():void{
    this.rs.getUsers().subscribe((result)=>{
      this.collection=result;
      console.log(this.collection)
    });
  }
  
    search(){
      setTimeout(()=>{
        this.loader = true;  
        }, 1500);
    
      console.log("firstName",this.firstName)
      if(this.firstName == ""){
        this.ngOnInit();
      }else
      setTimeout(()=>{
        this.loader = false;      
        }, 2000);
      this.collection=this.collection.filter((res:any) =>{
        return res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
         
        });

  
      }
  

 sort(key: string){
this.key=key;
this.reverse = !this.reverse;
 }
 
}


