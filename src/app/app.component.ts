import { Component } from '@angular/core';

export interface ISize {
  width?: number;
  height?: number;
  depth?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '3DTrainingRoom';

  scale = 1 / 10;

  room: ISize = {
    width: 3500 * this.scale,
    depth: 7300 * this.scale,
  };

  step_count = 14;
  step: ISize = {
    height: 180 * this.scale,
    depth: 280 * this.scale,
  };

  step_big_count = Math.ceil(this.step_count / 2);
  step_big: ISize = {
    height: 180 * 2 * this.scale,
    depth: 280 * 2 * this.scale,
  };

  calcZCenter(height: any) {
    return height/2;
  }

  calcStepFrontBack(height: any, depth: any) {
    return {
      top: Math.abs(height - depth) / 2,
      z: -(depth / 2),
    };
  }
}
