import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  @ViewChild('searchInput', { read: ElementRef, static: true })
  textInput!: ElementRef<HTMLInputElement>;

  get currentText() {
    return this.textInput.nativeElement.value;
  }
}
