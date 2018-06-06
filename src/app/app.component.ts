import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl,ReactiveFormsModule,Validators,FormArray,FormBuilder   } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private fb: FormBuilder){

  }
  myform : FormGroup

  langs: string[] = [
    'English',
    'French',
    'German',
  ]
  ngOnInit(): void {
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        addresses: new FormArray([
          
        ])

      }),
      email:new FormControl('', [ 
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$") 
    ]),
      password: new FormControl('', [
        Validators.minLength(8), 
        Validators.required
    ]),
      language: new FormControl()
    })
    // console.log(this.myform) 
  }
  onSubmit() {
    if (this.myform.valid) {
      console.log(this.myform.value);
      this.myform.reset();
    }
  }
  reset(){
    this.myform.reset();
  }
}
