import { Component, OnInit, ViewChild } from '@angular/core';
import { Board } from 'src/logic/models/board/board';
import { trigger, state, style, animate, transition, query, useAnimation, group, animateChild, stagger, sequence } from '@angular/animations';
import { SIDE_BAR_STATES } from './side-bar-states';
import { bounce, fadeOut, fadeIn, fadeInLeft, fadeOutLeft } from 'ng-animate';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.less'],
  animations: [
    trigger('expandCollapseBar', [
      state('expanded', style({
        width: '240px'
      })),
      state('collapsed', style({
        width: '90px'
      })),
      transition('expanded=>collapsed', sequence([
        group([
          query('@showHideTitle', animateChild()),
          query('@showHideAddLabel', animateChild()),
          query('@positionExpandButton', animateChild())
        ]),
        animate('200ms')
      ])),
      transition('collapsed=>expanded', sequence([
        animate('200ms'),
        group([
          query('@showHideTitle', animateChild()),
          query('@showHideAddLabel', animateChild()),
          query('@positionExpandButton', animateChild())
        ])
      ]))
    ]),
    trigger('showHideTitle', [
      state('expanded', style({
        display: 'inline-block'
      })),
      state('collapsed', style({
        display: 'none'
      })),
      transition('expanded=>collapsed', useAnimation(fadeOut), { params: { timing: 0.1 } }),
      transition('collapsed=>expanded', useAnimation(fadeIn), { params: { timing: 0.1 } })
    ]),
    trigger('showHideAddLabel', [
      state('expanded', style({
        display: 'inline-block'
      })),
      state('collapsed', style({
        display: 'none'
      })),
      transition('expanded=>collapsed', useAnimation(fadeOut), { params: { timing: 0.1 } }),
      transition('collapsed=>expanded', useAnimation(fadeIn), { params: { timing: 0.1 } })
    ]),
    trigger('positionExpandButton', [
      state('expanded', style({
        right: '8px'
      })),
      state('collapsed', style({
        right: 'calc(50% - 24px'
      })),
      transition('expanded=>collapsed', animate('100ms')),
      transition('collapsed=>expanded', animate('100ms'))
    ])
  ]
})
export class SideBarComponent implements OnInit {
  /**
   * The current animation state of the side bar.
   */
  public currentState: string;

  /**
   * The boards to display in the side bar.
   */
  public boards: Board[];

  constructor() {
    this.currentState = SIDE_BAR_STATES.EXPANDED;
  }

  ngOnInit() {
    this.boards = [];
    this.boards.push(new Board('Foo', 'Description'));
    this.boards.push(new Board('Bar', 'Description'));
    this.boards.push(new Board('Baz', 'Description'));
  }

  /**
   * User clicked the Expand / Collapse button of the
   * side bar.
   */
  public onExpandClick(): void {
    if (this.currentState == SIDE_BAR_STATES.EXPANDED) {
      this.currentState = SIDE_BAR_STATES.COLLAPSED;
    }
    else {
      this.currentState = SIDE_BAR_STATES.EXPANDED;
    }
  }

  /**
   * Checks if the sidebar is currently expanded or 
   * not.
   */
  public isExpanded(): boolean {
    return this.currentState == SIDE_BAR_STATES.EXPANDED;
  }

  /**
   * Expand the side bar.
   */
  public expand(): void {
    this.currentState = SIDE_BAR_STATES.EXPANDED;
  }

  /**
   * Collapse the side bar from view.
   */
  public collapse(): void {
    this.currentState = SIDE_BAR_STATES.COLLAPSED;
  }
}
