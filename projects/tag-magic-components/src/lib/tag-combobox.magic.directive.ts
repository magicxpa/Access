import {
  Directive,
  ElementRef,
  Renderer2,
  ViewContainerRef,
  Optional
} from '@angular/core';
import {MagicDirective, RowMagicDirective, TaskMagicService} from '@magic-xpa/angular';
import {GuiCommand, CommandType, HtmlProperties} from "@magic-xpa/gui";




@Directive({
  selector: 'tag-combobox[magic]',
})

export class TagComboboxMagicDirective extends MagicDirective {
  constructor(
    _task: TaskMagicService,
    element: ElementRef,
    renderer: Renderer2,
    vcRef: ViewContainerRef,
    @Optional() magicRow: RowMagicDirective) {
    super(_task, element, renderer, vcRef, magicRow);
  }

  handleCommand(command: GuiCommand) {
    if (command.CommandType === CommandType.SET_PROPERTY && command.Operation === HtmlProperties.ItemsList) {
      this.element.nativeElement.data = command.obj1;
    }

  }
}
