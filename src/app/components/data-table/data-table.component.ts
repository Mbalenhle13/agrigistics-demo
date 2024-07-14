import {Component, EventEmitter, HostListener, Output, ViewEncapsulation} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { OrderModule } from 'ngx-order-pipe';
import { FilterPipeModule } from 'ngx-filter-pipe'; //TODO: Debug this

export type EmployeeDetails = {
  name: string,
  description: string,
  type: 'Group 1' | 'Group 2' | 'Group 3',
  quantity: number,
  rate: string //TODO: Update this
}

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule, FormsModule,OrderModule, FilterPipeModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class DataTableComponent {
  sortType: string = 'name';
  sortReverse: boolean = false;
  searchEmployee: string = '';

  employees: EmployeeDetails[] = [
    {name: 'Cali M', description: 'Lorem Ipsum', type: 'Group 1', quantity: 2, rate: 'R20.00'},
    {name: 'Mbali K', description: '-', type: 'Group 3', quantity: 4, rate: 'R80.00'},
    {name: 'Thabo D', description: 'Lorem Ipsum', type: 'Group 2', quantity: 7, rate: 'R400.00'},
    {name: 'Sindi D', description: '-', type: 'Group 1', quantity: 6, rate: 'R350.00'},
    {name: 'Cameron W', description: 'Lorem Ipsum', type: 'Group 1', quantity: 10, rate: 'R1000.00'},
    {name: 'Jonathan T', description: '-', type: 'Group 3', quantity: 1, rate: 'R10.00'},
  ];

  @Output() itemSelected: EventEmitter<EmployeeDetails> = new EventEmitter<EmployeeDetails>();

  selectItem(item: EmployeeDetails) {
    this.itemSelected.emit(item);
  }
}
