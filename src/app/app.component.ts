import { Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <blockquote>
      <label for="firstname">First Name</label>
      <input id="firstname" #firstNameEl [value]="firstName()" (input)="firstName.set(firstNameEl.value)" />
    </blockquote>
    <blockquote>
      <label for="lastname">Last Name</label>
      <input id="lastname" #lastNameEl [value]="lastName()" (input)="lastName.set(lastNameEl.value)" />
    </blockquote>

    <hr>

    My name is: {{ fullname() }} 
  `,
  styles: [],
})
export class AppComponent {
  firstName = signal('Henrique');
  lastName = signal('Custódia');

  fullname = computed(() => `${this.firstName()} ${this.lastName()}`)

  constructor() {
    effect(() => {
      console.log(this.fullname());
    });
  }

}
