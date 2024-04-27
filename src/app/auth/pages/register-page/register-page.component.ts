import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cantBeStrider } from 'src/app/shared/validators/validators.helpers';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html'
})
export class RegisterPageComponent {

  constructor(
    private fb: FormBuilder
  ) {}

  public myForm: FormGroup =  this.fb.group({
    name: ['', [ Validators.required ]],
    email: ['', [ Validators.required ]],
    username: ['', [ Validators.required, cantBeStrider ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
    password2: ['', [ Validators.required ]]
  })

  public isValidField(field: string) {}

  public onSubmit() {
    this.myForm.markAllAsTouched();
  }
}