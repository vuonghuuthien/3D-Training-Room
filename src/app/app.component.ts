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
    width: 2750 * this.scale,
    height: 30 * this.scale,
    depth: 260 * this.scale,
    space: 100 * this.scale,
  };

  // Table Mini Detail
  table_mini_size = {
    width: 400 * this.scale,
    height: 600 * this.scale,
    height_back: 280 * this.scale,
    depth: 600 * this.scale,
    thick: 20 * this.scale,
    border: 20 * this.scale,
  };

  // Cabinet Detail
  cabinet_cont_start_z = this.step_lg_size.height * this.step_lg_num;
  cabinet_size = {
    width: 500 * this.scale,
    height: 1220 * this.scale,
    depth: 280 * this.scale,
    thick: 10 * this.scale,
  };

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
