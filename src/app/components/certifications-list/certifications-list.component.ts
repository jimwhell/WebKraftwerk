import { Component } from '@angular/core';
import { CertificationCardComponent } from '../certification-card/certification-card.component';
import { Certificate } from '../../interfaces/certificate';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-certifications-list',
  standalone: true,
  imports: [CertificationCardComponent, AnimateOnScrollModule],
  templateUrl: './certifications-list.component.html',
  styleUrl: './certifications-list.component.css',
})
export class CertificationsListComponent {
  certifications: Certificate[] = [
    {
      name: 'aws academy cloud foundations',
      providerLogo: '/icons/icons8-aws-logo.svg',
      link: 'https://www.credly.com/badges/1f7790d1-b54b-4177-8671-e74bacacff13',
    },
    {
      name: 'ccna cybersecurity essentials',
      providerLogo: '/icons/download.svg',
      file: '/files/cisco-cybersec-essentials-certification.pdf',
    },
    {
      name: 'fcc javascript algorithms and data structures',
      providerLogo: '/icons/icons8-free-code-camp.svg',
      file: '/files/fcc-javascript-algorithms-certification.pdf',
    },
  ];
}
