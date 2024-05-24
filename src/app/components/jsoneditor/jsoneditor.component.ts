import { Component, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  JsonEditorComponent,
  JsonEditorOptions,
  NgJsonEditorModule,
} from 'ang-jsoneditor';
import { schema } from './schema.value';

@Component({
  selector: 'app-jsoneditor',
  standalone: true,
  imports: [NgJsonEditorModule, FormsModule, ReactiveFormsModule],
  templateUrl: './jsoneditor.component.html',
  styleUrl: './jsoneditor.component.css',
})
export class JsoneditorComponent {
  public editorOptions: JsonEditorOptions;
  public data: any;
  @ViewChild(JsonEditorComponent)
  editor!: JsonEditorComponent;
  form: FormGroup;
  formData!: string;

  constructor(private fb: FormBuilder) {
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.modes = ['code', 'text', 'tree', 'view']; // set all allowed modes
    // this.editorOptions.mode = 'code'; //set only one mode
    this.editorOptions.schema = schema;

    this.initEditorOptions(this.editorOptions);

    this.data = {
      products: [
        {
          name: 'car',
          product: [
            {
              name: 'honda',
              model: [
                { id: 'civic', name: 'civic' },
                { id: 'accord', name: 'accord' },
                { id: 'crv', name: 'crv' },
                { id: 'pilot', name: 'pilot' },
                { id: 'odyssey', name: 'odyssey' },
              ],
            },
          ],
        },
      ],
    };
    this.form = this.fb.group({
      myinput: [this.data],
    });
  }

  submit() {
    this.formData = JSON.stringify(this.form.value, null, 2);
    console.log(this.form.value);
  }

  initEditorOptions(editorOptions: any) {
    // this.editorOptions.mode = 'code'; // set only one mode
    editorOptions.modes = ['code', 'text', 'tree', 'view']; // set all allowed modes
    // this.editorOptions.ace = (<any>window).ace.edit('editor');
    this.editorOptions.mode = 'code';
  }
}
