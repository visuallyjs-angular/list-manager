import { Component } from '@angular/core';
import { BaseNodeComponent } from "@visuallyjs/browser-ui-angular";

@Component({
  selector: 'app-default-group',
  template: `
    <div class="vjs-lm-group" data-vjs-list="true">
        <div class="vjs-lm-group-header">
            <span class="vjs-lm-group-title">{{data.label.toUpperCase()}}</span>
            <div class="vjs-lm-group-title-accent"></div>
        </div>
        <div data-vjs-group-content="true" class="vjs-lm-group-content"></div>
    </div>
  `
})
export class DefaultGroupComponent extends BaseNodeComponent {
}
