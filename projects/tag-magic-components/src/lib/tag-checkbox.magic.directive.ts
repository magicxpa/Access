 import {Directive,  HostListener} from "@angular/core";
 import {MagicDirective} from '@magic-xpa/angular';

 interface CheckedEvent extends Event {
   checked: boolean;
 }
/**
 * Directive for checkboxes, to handle the 'change' event
 */
@Directive({
  selector:
    `tag-checkbox[magic]`,
 })
export class TagCheckboxMagicDirective {
  /**
   * @ignore
   */
  constructor(
    protected magicDirective: MagicDirective) {
  }

  @HostListener('valueChange', ['$event'])
  onValueChange($event) {
    let checkedEvent: any;
    checkedEvent = {checked: $event.detail.value};
    this.magicDirective.task.onCheckChanged(checkedEvent, this.magicDirective.id, +this.magicDirective.rowId);
  }



}


