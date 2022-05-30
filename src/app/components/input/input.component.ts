import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  @ViewChild('searchInput', { read: ElementRef })
  textInput!: ElementRef;
  @Output()
  textChanged = new EventEmitter<string>();
  constructor() {}
}
