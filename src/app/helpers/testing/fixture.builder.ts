import { ComponentFixture, TestBed } from '@angular/core/testing';

export class FixtureBuilder {
  private _componentClass: any;
  private _template: string;

  public withComponentClass(componentClass) {
    this._componentClass = componentClass;
    return this;
  }

  public withTemplate(template: string) {
    this._template = template;
    return this;
  }

  public build(): ComponentFixture<any> {
    return TestBed.overrideComponent(this._componentClass, {
      set: {
        template: this._template,
      },
    }).createComponent(this._componentClass);
  }
}
