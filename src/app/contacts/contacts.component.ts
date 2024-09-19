import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  styles:[`
    .myForm{
    box-shadow: 33px 28px 23px -2px rgba(0,0,0,0.44);
-webkit-box-shadow: 33px 28px 23px -2px rgba(0,0,0,0.44);
-moz-box-shadow: 33px 28px 23px -2px rgba(0,0,0,0.44);
}
    `]
})
export class ContactsComponent implements OnInit {
  userName: any;
  userSubject: any;


  contactList: any[] = [];
  onShow=false;
  editingContactId: number | null = null;  // To track which contact is being edited


  userContact:FormGroup=new FormGroup({
   
    name:new FormControl(''),
    subject:new FormControl('')
  })

 

  onSubmit(){
    const obj=this.userContact.value
    console.log(obj);
    this.contactList.push(obj)
    console.log(this.contactList)
  }

  onEdit(contact: any, index: number) {
    this.editingContactId = index;
  
    this.userName = contact.name
    this.userSubject = contact.subject
  }

  onDelete(index:any){
    this.contactList.splice(index,1)
  }
  onSave(index:any ){
  
      const newData = {
        name: this.userName,
        subject: this.userSubject
      };
    
    console.log(newData);
    this.contactList.splice(index,1,newData);
    console.log(this.contactList)
  //  alert("save succesful")
    this.editingContactId=null;

  }
  onCancel(){
    this.editingContactId=null;
  }

  onReset(){
    this.contactList=[];
  }
  
  constructor() { }

  ngOnInit(): void {
 
    
  }

}
