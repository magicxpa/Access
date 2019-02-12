import { NgModule } from '@angular/core';
import {TagInputFieldValueAccessor} from './tag-input-field.ac.directive';
import {TagComboboxMagicDirective} from './tag-combobox.magic.directive';
import {TagComboBoxValueAccessor} from './tag-combo-field.ac.directive';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MagicModule} from '@magic-xpa/angular';
import {BrowserModule} from '@angular/platform-browser';
import {TagCheckboxValueAccessor} from './tag-checkbox.cva.directive';
import {TagCheckboxMagicDirective} from './tag-checkbox.magic.directive';

const decs = [TagInputFieldValueAccessor, TagComboboxMagicDirective, TagComboBoxValueAccessor, TagCheckboxValueAccessor, TagCheckboxMagicDirective];

@NgModule({
  declarations: [...decs],
  imports: [  CommonModule,
    FormsModule,
    MagicModule ,
    BrowserModule],
  exports: [...decs],
})
export class TagMagicComponentsModule { }
