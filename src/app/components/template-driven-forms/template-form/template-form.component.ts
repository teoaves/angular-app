import { Component, EventEmitter, Output, ViewChild,AfterViewInit } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import{MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule} from '@angular/material/button';
import { EPerson } from '../../../shared/interfaces/person';
@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [MatSelectModule,MatInputModule,MatFormFieldModule,MatButtonModule,FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent implements AfterViewInit {
  @Output() person = new EventEmitter<EPerson>

  @ViewChild('form',{static:false}) form: NgForm | undefined;

  ngAfterViewInit(): void {
    setTimeout(()=>{
      if(this.form) {
        this.form.setValue({
          givenName: "John",
          surname: "Doe",
          age:30,
          email: "john@aueb.gr",
          address:"Road2"
        })
      }
    },0)
  }

  onSubmit(value: any) {
    console.log(value)
    this.person.emit(value as EPerson);
  }

  onSetValue(){
    this.form?.setValue({
      givenName:"lakis",
      surname:"lalakis",
      age:50,
      email:"lakis@aueb.gr",
      address:"Road1"
    })
  }

}
