import { Component } from '@angular/core';
import { VisuallyJsModule } from "@visuallyjs/browser-ui-angular";

import renderOptions from "./render-options"
import viewOptions from "./view-options"
import modelOptions from "./model-options"

@Component({
  selector: 'app-root',
  imports: [VisuallyJsModule],
  templateUrl: './app.html'
})
export class App {

  renderOptions = renderOptions
  viewOptions= viewOptions
  modelOptions = modelOptions

}
