import { Component } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-create-request',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatStepperModule,
    MatRadioModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  templateUrl: './create-request.component.html',
  styleUrl: './create-request.component.scss'
})
export class CreateRequestComponent {
  crewTypeList = [{id: 1, value: 'TNE'},{id: 2, value: 'OBS'}]
  zoneList = [{id: 1, value: 'Zone 1'},{id: 2, value: 'Zone 2'}, {id: 3, value: 'Zone 3'},{id: 4, value: 'Zone 4'},{id: 5, value: 'Zone 5'}]
  // isLinear = true;
  firstFormGroup = this._formBuilder.group({
    crewType: ['', Validators.required],
    zone: ['', Validators.required],
    comments: [''],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  forthFormGroup = this._formBuilder.group({
    forthCtrl: ['', Validators.required],
  });
  fifthFormGroup = this._formBuilder.group({
    fifthCtrl: ['', Validators.required],
  });
  constructor(private _formBuilder: FormBuilder) {}

  onCommentChange() {
    console.log('comment', this.firstFormGroup.value.comments)
  }

  submit() {
    console.log('firstFormGroup', this.firstFormGroup.value);
    console.log('secondFormGroup', this.secondFormGroup.value);
    console.log('thirdFormGroup', this.thirdFormGroup.value);
    console.log('forthFormGroup', this.forthFormGroup.value);
    console.log('fifthFormGroup', this.fifthFormGroup.value);
    if(this.firstFormGroup.valid && this.secondFormGroup.valid && this.thirdFormGroup.valid && this.forthFormGroup.valid && this.fifthFormGroup.valid) {
    let result = Object.assign(
      this.firstFormGroup.value, 
      this.secondFormGroup.value,
      this.thirdFormGroup.value,
      this.forthFormGroup.value,
      this.fifthFormGroup.value,
    );
    console.log('result', result);
    alert(JSON.stringify(result));
    }
  }
}
