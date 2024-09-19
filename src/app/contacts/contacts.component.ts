import { Component, OnInit } from '@angular/core';

import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  
constructor(){

}


  ngOnInit(): void {
 
    
  }
  userName: any;
  userSubject: any;
 SubjectList :any []=[]

  contactList: any[] = [];
  onShow=false;
  editingContactId: number | null = null;  // To track which contact is being edited


  userContact:FormGroup=new FormGroup({
   
    name:new FormControl('',[Validators.required  ]),
    subject:new FormControl('',[Validators.required  ]),
    subjectList: new FormArray([])
  })

 

  onSubmit(){
    const obj=this.userContact.value
    console.log(obj);
    this.contactList.push(obj)
    console.log(this.contactList)
    this.userContact.reset()
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

    this.editingContactId=null;

  }
  onCancel(){
    this.editingContactId=null;
  }

  onReset(){
    this.contactList=[];
  }



    onAdd() {
      const newSub=this.userContact.value.subject;
      const obj=this.userContact.value.subjectList.push(newSub);
      this.SubjectList.push(newSub)
      
      console.log(this.userContact.value.subjectList)
  
    console.log("ok")
  }
  onRemove(index:any){
    this.SubjectList.splice(index,1)

  }
   
  

}
