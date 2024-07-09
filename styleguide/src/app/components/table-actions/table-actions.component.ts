import { Component, HostListener, Input, Output, ElementRef, EventEmitter,  } from '@angular/core';
import { RowAction } from 'src/app/modals/table-data.modal';
import { GAEvent } from 'utility';
@Component({
  selector: 'app-table-actions',
  templateUrl: './table-actions.component.html',
  styleUrls: ['./table-actions.component.scss']
})
export class TableActionsComponent {

  @Input() actionItems!: RowAction[];
  @Input() isCardClosed: boolean = true;
  @Output() closeClick = new EventEmitter();
  @Input() moduleName!: string;

  gaEventService = GAEvent;
  constructor(private eRef: ElementRef) { }


  closeActions() {
    this.closeClick.emit();
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (this.isCardClosed && this.eRef.nativeElement.contains(event.target)) {
      this.closeClick.emit();
    }
    this.isCardClosed = true;
  }

  // Tracking GA Event
  onTrack(name: string) {
    this.gaEventService.subscribeEventToGA(
      `$(this.moduleName)_$(GaAction.OPEN)_$(GaEventName.THREE_DOTS)_$(ProjectName.DEMO)`, this.moduleName, '', '');
  }

}
