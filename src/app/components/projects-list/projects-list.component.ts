import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../../interfaces/project';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [ProjectCardComponent, AnimateOnScrollModule],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.css',
})
export class ProjectsListComponent {
  projects: Project[] = [
    {
      name: 'heart of paws',
      role: ['backend | frontend developer'],
      description: `Full-stack web app for a dog shelter with user adoption applications, admin interface, and automated email responses for managing applications.`,
      technologiesSVGs: [
        '/icons/icons8-node-js.svg',
        '/icons/icons8-express-js.svg',
        '/icons/mongodb-svgrepo-com.svg',
        '/icons/icons8-angular.svg',
      ],
      links: {
        repoLink:
          'https://github.com/Heart-of-Paws-Tarlac-Project/Heart-of-Paws-Tarlac-Web-Application.git',
        liveSiteLink: 'https://heartofpawstarlac.netlify.app',
      },
    },
    {
      name: 'code geeks card generator',
      role: ['backend | frontend developer'],
      description: `An ongoing personal project to automate the creation of member cards for Code Geeks, a student school organization.`,
      technologiesSVGs: [
        '/icons/icons8-express-js.svg',
        '/icons/icons8-node-js.svg',
        '/icons/icons8-typescript-white.svg',
        '/icons/icons8-postgresql-white.svg',
        '/icons/icons8-angular.svg',
      ],
      links: {
        repoLink: 'https://github.com/jimwhell/code-geeks-card-maker.git',
        liveSiteLink: 'https://heartofpawstarlac.netlify.app',
      },
    },

    {
      name: 'indu',
      role: ['backend developer'],
      description: `A group project simulating a mock e-commerce site to demonstrate simple CRUD operations with RESTful APIs using Express.js and Firestore.  `,
      technologiesSVGs: [
        '/icons/icons8-node-js.svg',
        '/icons/icons8-express-js.svg',
        '/icons/icons8-firebase.svg',
      ],
      links: {
        repoLink: 'https://github.com/jimwhell/INDU-E-Commerce-Addbase',
        liveSiteLink: 'https://indu-e-commerce-1-0.onrender.com/',
      },
    },
  ];
}
