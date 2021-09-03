import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestService } from '../rest.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  alert:boolean=false;
  addNewUser = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    salary: new FormControl('')
    
  })
  constructor(private Users:RestService) { }

  ngOnInit(): void {
  }
  createData(){
    this.Users.addUsers(this.addNewUser.value).subscribe((result)=>{
      this.alert=true;
      this.addNewUser.reset({});
      console.log("get data from Service",result)
    })

  }

 
  closeAlert(){
    this.alert= false;
  }

}
