import {Directive, ElementRef, forwardRef, Renderer2} from '@angular/core';
import {NG_VALUE_ACCESSOR, CheckboxControlValueAccessor} from "@angular/forms";

/**
 * @ignore
 */
export const CHECKBOX_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TagCheckboxValueAccessor),
  multi: true,
};

/**
 * Value accessor for Checkbox without a FormControl
 */
@Directive({
  selector:
    `tag-checkbox[magic]`,
  host: {'(change)': 'valueChange($event.detail.value)', '(blur)': 'onTouched()'},
  providers: [CHECKBOX_VALUE_ACCESSOR]
})
export class  TagCheckboxValueAccessor extends CheckboxControlValueAccessor {

}
