import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DataTableComponent, EmployeeDetails} from "./components/data-table/data-table.component";
import {NavigationPanelComponent} from "./components/navigation-panel/navigation-panel.component";
import {ActionPanelComponent} from "./components/action-panel/action-panel.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataTableComponent, NavigationPanelComponent, ActionPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'agrigistics';

  currentEmployee: EmployeeDetails = {name: '', description: '', type: 'Group 1', quantity: 2, rate: ''};

  onItemSelected(item: any) {
    this.currentEmployee = item
  }
}
