/**
 * I will probably create an advanced SpinnerCaptionDirective in the near future.
 * It will be available in a separate library.
 */

import {
  Directive,
  OnInit,
  OnChanges,
  ElementRef,
  Renderer2,
  Inject,
  PLATFORM_ID,
  Input,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { BaseDirective } from '../base-directive';
import {
  getDefaultDisplayConfig,
  DisplayConfig,
} from './spinner-display-config';

/**
 * This directive wraps the material progress-spinner component in a figure element and adds a
 * caption that corresponds to the spinner value (a percentage)
 */
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'mat-progress-spinner[caption]',
})
export class SpinnerCaptionDirective extends BaseDirective
  implements OnInit, OnChanges {
  /** The diameter of the progress spinner*/
  private _diameter = 0;
  private _displayConfig: DisplayConfig;

  /** Whether the directive should apply a default color to the figcaption element */
  @Input() noDefaultColor: boolean;

  /** Value of the progress circle. */
  @Input() value: string;

  /** The diameter of the progress spinner*/
  @Input('diameter')
  set diameter(val) {
    this._diameter = Number(val);
  }

  constructor(
    elRef: ElementRef,
    renderer: Renderer2,
    @Inject(PLATFORM_ID) private _platformId
  ) {
    super(elRef, renderer);
    this._displayConfig = getDefaultDisplayConfig();
  }

  ngOnInit() {
    this._injectFigure();
  }

  ngOnChanges() {
    if (this.hasInitialized) {
      // this._updateCaption();
    }
  }

  private _injectFigure() {
    if (!isPlatformBrowser(this._platformId)) {
      return;
    }
    const svgCircle = this.nativeElement.querySelector('svg circle');
    if (!svgCircle) {
      return;
    }
    // This will be customizable in the library that I will create (spinner-caption)
    this._renderer.setStyle(svgCircle, 'fill', '#dbdbdb');

    // hacky solution to set the color until a similar feature to this request
    // https://github.com/angular/material2/issues/9069 is implemented
    const color =
      getComputedStyle(svgCircle).stroke ||
      getComputedStyle(this.nativeElement).color;

    const figureElt = this._renderer.createElement('figure');
    const figcaptionElt = this._createFigcaptionEltElement(color);

    this._renderer.appendChild(this.nativeElement, figcaptionElt);
    this._renderer.insertBefore(
      this.parentElement,
      figureElt,
      this.nativeElement
    );
    this._renderer.removeChild(this.parentElement, this.nativeElement);
    this._renderer.appendChild(figureElt, this.nativeElement);
  }

  private _createFigcaptionEltElement(color: string) {
    const figcaptionElt = this._renderer.createElement('figcaption');
    this._updateDisplayConfig(color);

    Object.keys(this._displayConfig.figCaption.styles).forEach(style => {
      this._renderer.setStyle(
        figcaptionElt,
        style,
        this._displayConfig.figCaption.styles[style]
      );
    });

    Object.keys(this._displayConfig.figCaption.properties).forEach(property => {
      this._renderer.setProperty(
        figcaptionElt,
        property,
        this._displayConfig.figCaption.properties[property]
      );
    });

    return figcaptionElt;
  }

  private _updateDisplayConfig(color: string) {
    if (!this.noDefaultColor) {
      this._displayConfig.figCaption.styles.color = color;
    }
    if (this._diameter > 0) {
      this._displayConfig.figCaption.styles.top = `calc(50% - ${Number(
        this._diameter
      ) / 8}px)`;
      this._displayConfig.figCaption.styles['font-size'] = `${this._diameter /
        4}px`;
      this._displayConfig.figCaption.styles['line-height'] = `${this._diameter /
        4}px`;
    }
    this._displayConfig.figCaption.properties.innerHTML = `${this.value || 0}%`;
  }

  private _updateCaption() {}
}
