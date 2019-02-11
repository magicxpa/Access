import { NgModule } from '@angular/core';
import {TagInputFieldValueAccessor} from './tag-input-field.ac.directive';
import {TagComboboxMagicDirective} from './tag-combobox.magic.directive';
import {TagComboBoxValueAccessor} from './tag-combo-field.ac.directive';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MagicModule} from '@magic-xpa/angular';

@NgModule({
  declarations: [TagInputFieldValueAccessor, TagComboboxMagicDirective, TagComboBoxValueAccessor],
  imports: [  CommonModule,
    FormsModule,
    MagicModule ],
  exports: [TagInputFieldValueAccessor, TagComboboxMagicDirective, TagComboBoxValueAccessor]
})
export class TagMagicComponentsModule { }
