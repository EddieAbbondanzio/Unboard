import { Component, OnInit, Input } from '@angular/core';

/**
 * Master page for any page that is public facing.
 */
@Component({
  selector: 'ui-public-master-page',
  templateUrl: './public-master-page.component.html',
  styleUrls: ['./public-master-page.component.less']
})
export class PublicMasterPageComponent {
  /**
   * The image to render in the background of the page.
   */
  @Input()
  public backgroundImage: string;
}
