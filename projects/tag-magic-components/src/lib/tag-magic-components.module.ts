import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {MagicModule} from '@magic-xpa/angular';

import {TagInputFieldValueAccessor} from './control-value-accessors/tag-input-field.ac.directive';
import {TagComboboxMagicDirective} from './tag-combobox.magic.directive';
import {TagComboBoxValueAccessor} from './control-value-accessors/tag-combo-field.ac.directive';

import {TagCheckboxValueAccessor} from './control-value-accessors/tag-checkbox.cva.directive';
import {TagCheckboxMagicDirective} from './tag-checkbox.magic.directive';

const decs = [TagInputFieldValueAccessor, TagComboboxMagicDirective, TagComboBoxValueAccessor, TagCheckboxValueAccessor,
  TagCheckboxMagicDirective];

@NgModule({
  declarations: [...decs],
  imports: [  CommonModule,
    FormsModule,
    MagicModule ,
    BrowserModule],
  exports: [...decs],
})
export class TagMagicComponentsModule { }
