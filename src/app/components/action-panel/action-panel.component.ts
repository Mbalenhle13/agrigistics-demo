import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-action-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './action-panel.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ActionPanelComponent {}
