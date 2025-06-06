import { LocationUpgradeModule } from '@angular/common/upgrade';
import { Component } from '@angular/core';
import { SkillCardComponent } from '../skill-card/skill-card.component';
import { Skill } from '../../interfaces/skill';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-skills-list',
  standalone: true,
  imports: [SkillCardComponent, AnimateOnScrollModule],
  templateUrl: './skills-list.component.html',
  styleUrl: './skills-list.component.css',
})
export class SkillsListComponent {
  skills: Skill[] = [
    {
      name: 'authentication',
      description: `Session-based and JWT (access & refresh tokens) authentication in Express.js for user login and securing APIs. `,
    },
    {
      name: 'authorization',
      description: `Role-based route protection using Express middleware, complemented by frontend route guards and conditional rendering to manage user access.`,
    },
    {
      name: 'client and server side validation',
      description: `Client-side validation using Angular reactive form validators and server-side validation with Express-validator to handle data integrity and user input.`,
    },
    {
      name: 'component-based ui development',
      description: `Built client-side apps with modular components, lifecycle hooks, and component communication using inputs and events. Used services and dependency injection to share logic and data.`,
    },
  ];
}
