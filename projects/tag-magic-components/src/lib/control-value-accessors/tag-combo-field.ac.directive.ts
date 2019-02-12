import {Directive, ElementRef, Renderer2, Input, forwardRef, Self, HostListener, Optional, Inject} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, FormControlName, DefaultValueAccessor, COMPOSITION_BUFFER_MODE} from '@angular/forms';


export const DEFAULT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TagComboBoxValueAccessor),
  multi: true
};



@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'tag-combobox[formControlName]',
  host: {
    '(valueChange)'     : '$any(this)._handleInput($event.target.value)',
    '(blur)'            : 'onTouched()',
    '(compositionstart)': '$any(this)._compositionStart()',
    '(compositionend)'  : '$any(this)._compositionEnd($event.target.value)'
  },
  providers: [DEFAULT_VALUE_ACCESSOR]
})

export class TagComboBoxValueAccessor extends  DefaultValueAccessor {

  // tslint:disable-next-line:no-input-rename
  @Input('formControlName') magicId: string;
  elementRef: ElementRef;
  renderer: Renderer2;
  constructor(
    _renderer: Renderer2,  _elementRef: ElementRef,
    @Optional() @Inject(COMPOSITION_BUFFER_MODE)  _compositionMode: boolean) {
    super(_renderer, _elementRef, _compositionMode);
    this.elementRef = _elementRef;
    this.renderer = _renderer;
  }

  writeValue(value: any): void {
    const normalizedValue = value == null ? '' : value;
    const tagCombobox = this.elementRef.nativeElement;
    tagCombobox.componentOnReady().then(function() {
      tagCombobox.setValue(normalizedValue, false);
    });
  }
}
