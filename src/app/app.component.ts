import { Component } from '@angular/core';

export interface ISize {
  width?: number;
  height?: number;
  depth?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = '3DTrainingRoom';

  scale = 1/10;

  room: ISize = {
    width: 3500 * this.scale,
    depth: 7300 * this.scale
  }

  step_count = 15;
  step: ISize = {
    height: 170 * this.scale,
    depth: 280 * this.scale
  }

  step_big_count = Math.ceil(this.step_count / 2);
  step_big: ISize = {
    height: 170 * 2 * this.scale,
    depth: 280 * 2 * this.scale
  }
}
