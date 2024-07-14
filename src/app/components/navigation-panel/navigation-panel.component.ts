import {Component, Input, ViewEncapsulation} from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmployeeDetails} from "../data-table/data-table.component";

export type Employee = {
  name: string;
  groupType: string;
  earnings: number;
}

@Component({
  selector: 'app-navigation-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation-panel.component.html',
  encapsulation: ViewEncapsulation.None
})
export class NavigationPanelComponent {
  @Input() currentEmployee: EmployeeDetails = {name: '', description: '', type: 'Group 1', quantity: 2, rate: ''};
}
