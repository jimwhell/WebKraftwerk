import { Component, InputSignal, OnInit, input } from '@angular/core';
import { Technology } from '../../interfaces/technology';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-technology-card',
  standalone: true,
  imports: [AnimateOnScrollModule],
  templateUrl: './technology-card.component.html',
  styleUrl: './technology-card.component.css',
})
export class TechnologyCardComponent implements OnInit {
  technologyInput: InputSignal<Technology | undefined> = input<Technology>();
  technology!: Technology;

  ngOnInit(): void {
    const technologyValue = this.technologyInput();
    if (technologyValue !== undefined) {
      this.technology = technologyValue;
    }
  }
}
