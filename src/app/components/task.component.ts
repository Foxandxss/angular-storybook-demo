import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html'
})
export class TaskComponent {
  title: string;
  @Input() task: any;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onPinTask: EventEmitter<any> = new EventEmitter();

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onArchiveTask: EventEmitter<any> = new EventEmitter();

  onPin(id: any): void {
    this.onPinTask.emit(id);
  }

  onArchive(id: any): void {
    this.onArchiveTask.emit(id);
  }
}
