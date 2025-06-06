import { Component, input, InputSignal, OnInit } from '@angular/core';
import { Project } from '../../interfaces/project';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [AnimateOnScrollModule, CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent implements OnInit {
  projectInput: InputSignal<Project | undefined> = input<Project>();
  project!: Project;

  ngOnInit(): void {
    const projectValue = this.projectInput();
    if (projectValue !== undefined) {
      this.project = projectValue;
    }
  }
}
