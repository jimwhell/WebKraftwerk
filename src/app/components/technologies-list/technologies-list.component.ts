import { Component } from '@angular/core';
import { Technology } from '../../interfaces/technology';
import { TechnologyCardComponent } from '../technology-card/technology-card.component';

@Component({
  selector: 'app-technologies-list',
  standalone: true,
  imports: [TechnologyCardComponent],
  templateUrl: './technologies-list.component.html',
  styleUrl: './technologies-list.component.css',
})
export class TechnologiesListComponent {
  technologies: Technology[] = [
    {
      name: 'expressJS',
      iconSrc: '/icons/express-js-black.svg',
    },
    {
      name: 'nodeJS',
      iconSrc: '/icons/node-js-black.svg',
    },
    {
      name: 'mongoDB',
      iconSrc: '/icons/mongodb-black.svg',
    },
    {
      name: 'postgresql',
      iconSrc: '/icons/icons8-postgresql.svg',
    },
    {
      name: 'postman',
      iconSrc: '/icons/postman-svgrepo-com.svg',
    },
    {
      name: 'angular',
      iconSrc: '/icons/angular-black.svg',
    },
    {
      name: 'javascript',
      iconSrc: '/icons/icons8-javascript.svg',
    },
    {
      name: 'typescript',
      iconSrc: '/icons/icons8-typescript.svg',
    },
    {
      name: 'html5',
      iconSrc: '/icons/icons8-html-5.svg',
    },
    {
      name: 'css',
      iconSrc: '/icons/icons8-css-logo.svg',
    },
    {
      name: 'tailwindcss',
      iconSrc: '/icons/icons8-tailwind-css.svg',
    },
    {
      name: 'git',
      iconSrc: '/icons/icons8-git-logo.svg',
    },
  ];
}
