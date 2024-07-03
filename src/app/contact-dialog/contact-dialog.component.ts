import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css']
})
export class ContactDialogComponent {
contactForm:FormGroup;
constructor(private fb: FormBuilder,public dialog:MatDialog, ) {
  this.contactForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  
    });
    
 /* onNoClick(): void {
    this.dialogRef.close();
  }
  data(){
    console.log("hello world")
  }*/
}

onClick() {
  if (this.contactForm.valid) {
    console.log('Validation succesfully', this.contactForm.value);
    alert("Login Successfully");
    
  }
  alert("plz contact me")
}
}
