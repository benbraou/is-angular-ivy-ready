import { OnInit, ElementRef, Renderer2 } from '@angular/core';

export abstract class BaseDirective implements OnInit {
  protected _initialized = false;

  constructor(protected _elRef: ElementRef, protected _renderer: Renderer2) {}

  ngOnInit() {
    this._initialized = true;
  }

  protected get parentElement(): any {
    return this._elRef.nativeElement.parentNode;
  }

  protected get nativeElement(): any {
    return this._elRef.nativeElement;
  }

  protected get hasInitialized() {
    return this._initialized;
  }
}
