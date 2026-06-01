import { Component } from '@angular/core';
import {BaseNodeComponent} from '@visuallyjs/browser-ui-angular';

@Component({
  selector: 'app-default-node',
  template: `
    <div
        data-vjs-source="true"
        data-vjs-target="true"
        class="vjs-lm-node">
        <div class="vjs-lm-node-header">
            <span class="vjs-lm-node-icon">{{data.icon}}</span>
            <span class="vjs-lm-node-label">{{data.label}}</span>
        </div>
        <div class="vjs-lm-node-type">
            {{data.type}}
        </div>
    </div>
  `
})
export class DefaultNodeComponent extends BaseNodeComponent {
}
