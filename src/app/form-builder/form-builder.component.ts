import { FormBuilder, FormGroup, Validators,FormsModule, ReactiveFormsModule,FormArray} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  userForm:FormGroup
  noOfPax:number
  adultRate:number=75
  constructor(private _fb:FormBuilder) { }

  ngOnInit() {
    this.userForm = this._fb.group({
      // name:['suraz',[Validators.required,Validators.minLength(5)]],
      pax:this._fb.array([
        this.initPax(),
      ]),
      payMode:[''],
      pickup:[''],
      drop:[''],
      specialRequest:[''],
      termsCondition:['',Validators.requiredTrue],
    })
    console.log(this.userForm)
  
  }
  initPax(){
    return this._fb.group({
      title:['',Validators.required],
      fullName:['',Validators.required],
      contactNumber:['',Validators.required],
      email:['',Validators.required],
      liscence:['',Validators.required],
      nationality:['',Validators.required],
      weight:['',Validators.required],
      ageGroup:['',Validators.required],
      multiMedia:['',Validators.required],
      transport:['',Validators.required],

    })
  }
  addPax(){
    const control =<FormArray>this.userForm.controls['pax'];
    control.push(this.initPax());
  }
  removePax(i:number){
    const control =<FormArray>this.userForm.controls['pax'];
    control.removeAt(i);
  }
  save(model){
    alert(model.value)
  }

}
