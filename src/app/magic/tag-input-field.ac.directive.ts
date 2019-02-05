import {Directive, ElementRef, Renderer2, Input, forwardRef, Self, HostListener, Optional, Inject} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, FormControlName, DefaultValueAccessor, COMPOSITION_BUFFER_MODE} from '@angular/forms';


export const DEFAULT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TagInputFieldValueAccessor),
  multi: true
};


@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'tag-edit-field[formControlName]',
  host: {
    '(valueChange)'     : '$any(this)._handleInput($event.target.value)',
    '(blur)'            : 'onTouched()',
    '(compositionstart)': '$any(this)._compositionStart()',
    '(compositionend)'  : '$any(this)._compositionEnd($event.target.value)'
  },
  providers: [DEFAULT_VALUE_ACCESSOR]
})
export class TagInputFieldValueAccessor extends  DefaultValueAccessor {

  // tslint:disable-next-line:no-input-rename
  @Input('formControlName') magicId: string;
}

//
// @Directive({
//   // tslint:disable-next-line:directive-selector
//   selector: 'tag-combobox[formControlName]',
//   host: {
//     '(valueChange)'     : '$any(this)._handleInput($event.target.value)',
//     '(blur)'            : 'onTouched()',
//     '(compositionstart)': '$any(this)._compositionStart()',
//     '(compositionend)'  : '$any(this)._compositionEnd($event.target.value)'
//   },
//   providers: [DEFAULT_VALUE_ACCESSOR]
// })
// export class TagComboBoxValueAccessor extends  DefaultValueAccessor {
//
//   // tslint:disable-next-line:no-input-rename
//   @Input('formControlName') magicId: string;
//   elementRef: ElementRef;
//   constructor(
//     _renderer: Renderer2,  _elementRef: ElementRef,
//     @Optional() @Inject(COMPOSITION_BUFFER_MODE)  _compositionMode: boolean) {
//     super(_renderer, _elementRef, _compositionMode);
//     this.elementRef = _elementRef;
//   }
//
//   writeValue(value: any): void {
//     const normalizedValue = value == null ? '' : value;
//
//     this.elementRef.nativeElement.setValue(value, false, true);
//     //this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
//   }
// }
