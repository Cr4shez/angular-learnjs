import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

interface IGalleryContext<T> {
  $implicit: T;
  next: () => void;
  back: () => void;
}

@Directive({
  selector: '[appGallery]',
})
export class GalleryDirective<T> implements OnInit {
  @Input() appGalleryFrom!: T[];

  private readonly currentIndex$ = new BehaviorSubject<number>(0);

  constructor(
    private template: TemplateRef<IGalleryContext<T>>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit() {
    this.listenCurrentIndexChange();
  }

  private listenCurrentIndexChange() {
    this.currentIndex$
      .pipe(map((currentIndex) => this.getContext(currentIndex)))
      .subscribe((context) => {
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.template, context);
      });
  }

  private getContext(currentIndex: number): IGalleryContext<T> {
    return {
      $implicit: this.appGalleryFrom[currentIndex],
      next: () => this.next(),
      back: () => this.back(),
    };
  }

  private next() {
    const nextIndex = this.currentIndex$.value + 1;
    const galleryLength = this.appGalleryFrom.length;

    if (nextIndex < galleryLength) {
      this.currentIndex$.next(nextIndex);
      return;
    }

    this.currentIndex$.next(0);
  }

  private back() {
    const prevIndex = this.currentIndex$.value - 1;
    const galleryLength = this.appGalleryFrom.length;

    if (prevIndex >= 0) {
      this.currentIndex$.next(prevIndex);
      return;
    }

    this.currentIndex$.next(galleryLength - 1);
  }
}
