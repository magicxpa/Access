import { Directive, ElementRef, Renderer2, Input, forwardRef, Self, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControlName, DefaultValueAccessor } from '@angular/forms';


export const DEFAULT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TagEditFielValueAccessor),
  multi: true
};


@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'tag-edit-field[formControlName], tag-combobox[formControlName]',
  host: {
    '(valueChange)'     : '$any(this)._handleInput($event.target.value)',
    '(blur)'            : 'onTouched()',
    '(compositionstart)': '$any(this)._compositionStart()',
    '(compositionend)'  : '$any(this)._compositionEnd($event.target.value)'
  },
  providers: [DEFAULT_VALUE_ACCESSOR]
})
export class TagEditFielValueAccessor extends  DefaultValueAccessor {

  // tslint:disable-next-line:no-input-rename
  @Input('formControlName') magicId: string;
}
