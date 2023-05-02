import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '3D Training Room';

  scale = 1 / 20;
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
  wall_thick = 40 * this.scale;

  // Stair Detail
  step_sm_num = 12;
  step_sm_size = {
    width: 600 * this.scale,
    height: 180 * this.scale,
    depth: 280 * this.scale,
  };
  step_lg_num = Math.ceil(this.step_sm_num / 2);
  step_lg_size = {
    height: 180 * 2 * this.scale,
    depth: 280 * 2 * this.scale,
  };
  step_thick = 20 * this.scale;
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
  // step_bg_2_sm_top = '#585855';
  // step_bg_2_sm_left = '#262727';
  // step_bg_2_sm_front = '#1E1F20';
  step_bg_2_sm_top = '#559cfd';
  step_bg_2_sm_left = '#2b83fc';
  step_bg_2_sm_front = '#2269ca';

  // Board Detail
  board_size = {
    width: 3200 * this.scale,
    height: 3000 * this.scale,
  };

  // People Detail
  people = {
    height_xl: 1900 * this.scale,
    height_lg: 1800 * this.scale,
    height_md: 1150 * this.scale,
  };

  // Seat Cushion Detail
  seat_cushion_size = {
    width: 2800 * this.scale,
    height: 30 * this.scale,
    depth: 260 * this.scale,
    space: 100 * this.scale,
  };
  // Seat Cushion Style
  seat_cushion_bg_top = '#FFFFFF';
  seat_cushion_bg_left = '#FB6514';
  seat_cushion_bg_front = '#EC4A0A';

  // Table Mini Detail
  table_mini_size = {
    width: 400 * this.scale,
    height: 600 * this.scale,
    height_back: 280 * this.scale,
    depth: 600 * this.scale,
    thick: 20 * this.scale,
    border: 20 * this.scale,
  };
  // Table Mini Style
  table_mini_bg_top = 'rgba(64,192,87, 0.5)';
  table_mini_bg_left = '#2F9E44';
  table_mini_bg_front = '#2B8A3E';

  // Cabinet Detail
  cabinet_size = {
    width: 200 * this.scale,
    height: 300 * this.scale,
    depth: 260 * this.scale,
    thick: 20 * this.scale,
  };
  // Seat Cushion Style
  cabinet_bg_top = '#FFFFFF';
  cabinet_bg_left = '#FB6514';
  cabinet_bg_front = '#EC4A0A';

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
