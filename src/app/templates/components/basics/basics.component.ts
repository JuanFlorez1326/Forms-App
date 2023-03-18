import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  @ViewChild('formProducts') formProducts!: NgForm;

  save() {
    console.log( this.formProducts );
  }

  nameValid(): boolean {
    return this.formProducts?.controls['product']?.invalid &&
    this.formProducts?.controls['product']?.touched
  }
}