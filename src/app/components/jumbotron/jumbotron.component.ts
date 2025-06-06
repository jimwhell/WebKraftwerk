import { Component } from '@angular/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-jumbotron',
  standalone: true,
  imports: [AnimateOnScrollModule],
  templateUrl: './jumbotron.component.html',
  styleUrl: './jumbotron.component.css',
})
export class JumbotronComponent {}
