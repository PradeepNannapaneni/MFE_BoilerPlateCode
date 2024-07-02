import { Component, Input, OnInit } from '@angular/core';
import { ReadOnlyFormData } from 'src/app/modals/read-only-form.modal';

@Component({
  selector: 'app-readonly-form',
  templateUrl: './readonly-form.component.html',
  styleUrls: ['./readonly-form.component.scss']
})
export class ReadonlyFormComponent implements OnInit {

  @Input() readOnlyFormData: ReadOnlyFormData[] = [];

  constructor() { }
  ngOnInit(): void { }

}
