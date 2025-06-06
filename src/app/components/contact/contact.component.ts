import { Component } from '@angular/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ContactForm } from '../../interfaces/contact-form';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [AnimateOnScrollModule, FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  isLoading: boolean = false;
  isFading = false;
  notificationMessage!: string;
  form: ContactForm = {
    name: '',
    email: '',
    message: '',
  };

  submitForm(): void {
    if (
      this.form.name === '' ||
      this.form.email === '' ||
      this.form.message === ''
    ) {
      this.displayMessage('Please fill up all the fields.');
      return;
    }

    this.isLoading = true;
    emailjs
      .send(
        'service_whicztg',
        'template_bnibr5w',
        {
          name: this.form.name,
          email: this.form.email,
          message: this.form.message,
        },
        '68OZZ4vquJYJFi7Y-'
      )
      .then((response) => {
        this.isLoading = false;
        this.displayMessage('Message sent.');
      })
      .catch((error) => {
        this.isLoading = false;
        this.displayMessage('Something went wrong. Please try again.');
      });
    this.form = {
      name: '',
      email: '',
      message: '',
    };
  }

  displayMessage(message: string): void {
    this.notificationMessage = message;

    setTimeout(() => {
      this.isFading = true;
    }, 1500);

    setTimeout(() => {
      this.notificationMessage = '';
      this.isFading = false;
    }, 2500);
  }
}
