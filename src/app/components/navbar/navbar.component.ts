import {
  Component,
  input,
  InputSignal,
  OnChanges,
  OnInit,
  output,
  OutputEmitterRef,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('openClose', [
      state('closed', style({ transform: 'translateX(120%)' })),
      state('open', style({ transform: 'translateX(0)' })),
      transition('closed <=> open', [animate('1s ease-in-out')]),
    ]),
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  isInitialized: boolean = false;

  menuStateInput: InputSignal<'open' | 'closed'> = input<'open' | 'closed'>(
    'closed'
  );
  emitToggle: OutputEmitterRef<'open' | 'closed'> = output<'open' | 'closed'>();
  linkClick: OutputEmitterRef<string> = output<string>();

  ngOnInit(): void {
    this.isInitialized = true;
  }

  toggleMenuState(): void {
    const newState = this.menuStateInput() === 'closed' ? 'open' : 'closed';
    this.emitToggle.emit(newState);
  }

  emitLinkClick(link: string, event: MouseEvent): void {
    this.linkClick.emit(link);
  }
}
