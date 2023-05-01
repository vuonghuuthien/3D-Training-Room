import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '3D Training Room';

  scale = 1 / 10;
  face_list = ['top', 'bottom', 'front', 'back', 'left', 'right'];

  // Room Detail
  room = {
    width: 3500 * this.scale,
    height: 3400 * this.scale,
    depth: 7300 * this.scale,
  };
  // Room Style
  room_bg_top = '#FCFCFC';
  room_bg_left = '#E8E8E8';
  room_bg_front = '#D6D6D6';

  // Wall Detail
  wall_thick = 2;

  // Stair Detail
  stair_sm_width = 90;
  step_sm_num = 14;
  step_sm_size = {
    height: 180 * this.scale,
    depth: 280 * this.scale,
  };
  step_lg_num = Math.ceil(this.step_sm_num / 2);
  step_lg_size = {
    height: 180 * 2 * this.scale,
    depth: 280 * 2 * this.scale,
  };
  // Stair Style
  stair_style = 2;
  // Stair Style 1
  step_bg_top = '#FCFCFC';
  step_bg_left = '#E8E8E8';
  step_bg_front = '#D6D6D6';
  // Stair Style 2
  step_bg_2_top = '#FCFCFC';
  step_bg_2_left = '#E8E8E8';
  step_bg_2_front = '#D6D6D6';
  step_bg_2_sm_top = '#585855';
  step_bg_2_sm_left = '#262727';
  step_bg_2_sm_front = '#1E1F20';

  constructor() {}

  changeStair() {
    this.stair_style = this.stair_style == 1 ? 2 : 1;
  }

  calcZCenter(height: any) {
    return height / 2;
  }

  calcTop_FB(height: any, depth: any) {
    return (depth - height) / 2;
  }

  calcZ_FB(depth: any) {
    return depth / 2;
  }
}
