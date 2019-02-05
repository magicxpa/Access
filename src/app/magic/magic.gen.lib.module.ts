import { NgModule, CUSTOM_ELEMENTS_SCHEMA }             from '@angular/core';
import { RouterModule }         from '@angular/router';
import { ReactiveFormsModule }  from '@angular/forms';
import { CommonModule }         from "@angular/common";

import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatRadioModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule
} from "@angular/material";

import { DynamicModule } from 'ng-dynamic-component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { ComponentListMagicService, MagicModule, ExitMagicService } from "@magic-xpa/angular";
import {magicGenComponents, magicGenCmpsHash, title} from './component-list.g';
import { MagicAngularMaterialModule } from "@magic-xpa/angular-material-core";
import {TagInputFieldValueAccessor} from './tag-input-field.ac.directive';
import {TagComboboxMagicDirective} from './tag-combobox.magic.directive';
import {TagComboBoxValueAccessor} from './tag-combo-field.ac.directive';

@NgModule({
  declarations: [
    ...magicGenComponents, TagInputFieldValueAccessor, TagComboboxMagicDirective, TagComboBoxValueAccessor
  ],
  exports : [
    ...magicGenComponents, TagInputFieldValueAccessor, TagComboboxMagicDirective, TagComboBoxValueAccessor,
    MagicModule
  ],
  imports: [
    // Angular Modules
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

    // Magic Modules
    MagicModule,
    DynamicModule.withComponents(magicGenComponents),
    InfiniteScrollModule,

    // Material Modules
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatCheckboxModule,
    MatTabsModule,
    MatDialogModule,
    MatSelectModule,
    MatSortModule,
    MatTooltipModule,
    MatCardModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MagicAngularMaterialModule,

  ],
  providers: [ExitMagicService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MagicGenLibModule {
  constructor(componentList: ComponentListMagicService) {
    componentList.addComponents(magicGenCmpsHash);
    componentList.title = title;
  }
}
