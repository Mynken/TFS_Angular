import { NgModule } from '@angular/core';
import { FieldsetModule } from 'primeng/components/fieldset/fieldset';
import {DataListModule} from 'primeng/datalist';
import {
  AccordionModule,
  AutoCompleteModule,
  ButtonModule,
  CalendarModule,
  CheckboxModule,
  ConfirmDialogModule,
  DataTableModule,
  DialogModule,
  DropdownModule,
  FileUploadModule,
  InputMaskModule,
  InputTextModule,
  ListboxModule,
  MultiSelectModule,
  OverlayPanelModule,
  PaginatorModule,
  PanelModule,
  ProgressSpinnerModule,
  RadioButtonModule,
  SharedModule,
  TabViewModule,
  TooltipModule,
  SidebarModule,
  EditorModule,
  KeyFilterModule
} from 'primeng/primeng';
import { TableModule } from 'primeng/table';

@NgModule({
  imports: [
    PanelModule,
    TabViewModule,
    AccordionModule,
    ButtonModule,
    AutoCompleteModule,
    TooltipModule,
    InputTextModule,
    CalendarModule,
    RadioButtonModule,
    DropdownModule,
    OverlayPanelModule,
    PaginatorModule,
    MultiSelectModule,
    ListboxModule,
    FileUploadModule,
    DialogModule,
    CheckboxModule,
    InputMaskModule,
    DataTableModule,
    SharedModule,
    FieldsetModule,
    ConfirmDialogModule,
    TableModule,
    ProgressSpinnerModule,
    SidebarModule,
    EditorModule,
    KeyFilterModule,
    DataListModule
  ],
  exports: [
    PanelModule,
    TabViewModule,
    AccordionModule,
    ButtonModule,
    AutoCompleteModule,
    TooltipModule,
    InputTextModule,
    CalendarModule,
    RadioButtonModule,
    DropdownModule,
    OverlayPanelModule,
    PaginatorModule,
    MultiSelectModule,
    ListboxModule,
    FileUploadModule,
    DialogModule,
    CheckboxModule,
    InputMaskModule,
    DataTableModule,
    SharedModule,
    FieldsetModule,
    ConfirmDialogModule,
    TableModule,
    ProgressSpinnerModule,
    SidebarModule,
    EditorModule,
    KeyFilterModule,
    DataListModule
  ]
})

export class AppPrimeNgComponentsModule {}
