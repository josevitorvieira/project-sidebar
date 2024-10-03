import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IColum } from './interfaces/basic-table.interface';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrl: './basic-table.component.scss',
})
export class BasicTableComponent {
  @Input() colums: Array<IColum> = [];
  @Input() items: Array<Object> = [];

  @Output() item: EventEmitter<any> = new EventEmitter<any>();

  public emitItem(item: any): void {
    this.item.emit(item);
  }
}
