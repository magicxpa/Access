import { NgModule } from '@angular/core';
import {TagInputFieldValueAccessor} from './tag-input-field.ac.directive';
import {TagComboboxMagicDirective} from './tag-combobox.magic.directive';
import {TagComboBoxValueAccessor} from './tag-combo-field.ac.directive';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MagicModule} from '@magic-xpa/angular';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [TagInputFieldValueAccessor, TagComboboxMagicDirective, TagComboBoxValueAccessor],
  imports: [  CommonModule,
    FormsModule,
    MagicModule ,
    BrowserModule],
  exports: [TagInputFieldValueAccessor, TagComboboxMagicDirective, TagComboBoxValueAccessor]
})
export class TagMagicComponentsModule { }
