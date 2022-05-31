import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

interface IPaginationContext<T> {
  $implicit: T;
  next: () => void;
  back: () => void;
  setIndex: (index: number) => void;
}
@Directive({
  selector: '[appPaginate]',
})
export class PaginateDirective<T> implements OnInit {
  @Input()
  appPaginateOf!: T[];

  private readonly activeIndex$ = new BehaviorSubject<number>(0);

  constructor(
    private template: TemplateRef<IPaginationContext<T>>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit() {
    this.listenActiveIndexChange();
  }

  private listenActiveIndexChange() {
    this.activeIndex$
      .pipe(map((idx) => this.generateContext(idx)))
      .subscribe((context) => {
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.template, context);
      });
  }

  private generateContext(idx: number): IPaginationContext<T> {
    return {
      $implicit: this.appPaginateOf[idx],
      next: () => this.next(),
      back: () => this.back(),
      setIndex: (idx: number) => this.setIndex(idx),
    };
  }

  private next() {
    const nextIdx = this.activeIndex$.value + 1;
    const itemsLength = this.appPaginateOf.length;
    const hasNext = nextIdx < itemsLength;

    hasNext ? this.activeIndex$.next(nextIdx) : this.activeIndex$.next(0);
  }

  private back() {
    const prevIdx = this.activeIndex$.value - 1;
    const itemsLength = this.appPaginateOf.length;
    const hasPrev = prevIdx >= 0;

    hasPrev
      ? this.activeIndex$.next(prevIdx)
      : this.activeIndex$.next(itemsLength - 1);
  }

  private setIndex(idx: number) {
    this.activeIndex$.next(idx);
  }
}
