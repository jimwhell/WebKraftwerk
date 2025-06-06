import { CommonModule } from '@angular/common';
import { Component, input, InputSignal, OnInit } from '@angular/core';
import { Skill } from '../../interfaces/skill';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-skill-card',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollModule],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.css',
})
export class SkillCardComponent implements OnInit {
  skillInput: InputSignal<Skill | undefined> = input<Skill>();
  skill!: any;
  isClicked: boolean = false;

  ngOnInit(): void {
    const skillValue = this.skillInput();
    if (skillValue !== undefined) {
      this.skill = skillValue;
    }
  }

  showDescription(): void {
    this.isClicked = this.isClicked === false ? true : false;
  }

  revertToName(): void {
    if (this.isClicked) {
      this.isClicked = false;
      return;
    }
    return;
  }
}
