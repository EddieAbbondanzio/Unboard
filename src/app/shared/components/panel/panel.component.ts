import { Component, OnInit, Input } from '@angular/core';

/**
 * Panel to provide a nice enclosed "window" around content. Also
 * offers the ability to specify a custom header atop of the panel.
 */
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.less']
})
export class PanelComponent {

  /**
   * The header text to render in the top of the panel.
   */
  @Input()
  public header: string;

  constructor() {
    this.header = '';
  }
}
