import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactForm } from "../../components/contact-form/contact-form";

@Component({
  selector: 'app-contact',
  imports: [ContactForm],
  templateUrl: './contact.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Contact {}
