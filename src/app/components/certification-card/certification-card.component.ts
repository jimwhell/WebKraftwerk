import { Component, InputSignal, OnInit, input } from '@angular/core';
import { Certificate } from '../../interfaces/certificate';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-certification-card',
  standalone: true,
  imports: [AnimateOnScrollModule],
  templateUrl: './certification-card.component.html',
  styleUrl: './certification-card.component.css',
})
export class CertificationCardComponent implements OnInit {
  certInput: InputSignal<Certificate | undefined> = input<Certificate>();
  cert!: Certificate;

  ngOnInit(): void {
    const certValue = this.certInput();
    if (certValue !== undefined) {
      this.cert = certValue;
    }
  }
}
