import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild('baseEl') baseEl: ElementRef | undefined;

  title = '3D Training Room';

  base = {
    perspective: 500, //px
    rotateX: 70, //deg
    rotateY: 0, //deg
    rotateZ: 40, //deg
    translateX: 100, //px
    translateY: 0, //px
    translateZ: -50, //px
  };

  scale = 1 / 20;
  face_list = ['top', 'bottom', 'front', 'back', 'left', 'right'];

  // Room Detail
  room = {
    width: 3500 * this.scale,
    height: 3400 * this.scale,
    depth: 7300 * this.scale,
  };

  // Wall Detail
  wall_thick = 50 * this.scale;

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
    depth: 600 * this.scale,
    height_back: 280 * this.scale,
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

  // Door Detail
  door_size = {
    width: 40 * this.scale,
    height: 2000 * this.scale,
    depth: 800 * this.scale,
  };

  // Projector Detail
  projector_start_y = (this.room.depth / 100) * 70;
  projector_size = {
    width: 500 * this.scale,
    height: 100 * this.scale,
    depth: 200 * this.scale,
  };

  projector_light_start_y = this.projector_start_y;
  projector_light_size = {
    width_sm: this.projector_size.width,
    height_sm: this.projector_size.height,
    width: 2800 * this.scale,
    height: 2000 * this.scale,
    depth:
      this.room.depth - (this.projector_start_y + this.projector_size.depth),
  };
  projector_light_angle = {
    width: this.calcAngle(
      (this.projector_light_size.width - this.projector_light_size.width_sm) /
        2,
      this.projector_light_size.depth
    ),
    height: this.calcAngle(
      this.projector_light_size.height - this.projector_light_size.height_sm,
      this.projector_light_size.depth
    ),
  };
  projector_light_depth_face = {
    lr: Math.sqrt(
      Math.pow(
        (this.projector_light_size.width - this.projector_light_size.width_sm) /
          2,
        2
      ) + Math.pow(this.projector_light_size.depth, 2)
    ),
    bottom: Math.sqrt(
      Math.pow(
        this.projector_light_size.height - this.projector_light_size.height_sm,
        2
      ) + Math.pow(this.projector_light_size.depth, 2)
    ),
  };

  constructor(private _renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.setBaseTransform();
  }

  ngOnInit(): void {
    console.log(this.projector_light_angle);
  }

  calcAngle(dx: any, dy: any) {
    var theta = Math.atan2(dx, dy); // range (-PI, PI]
    theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
    //if (theta < 0) theta = 360 + theta; // range [0, 360)
    return theta;
  }

  changeStair() {
    this.stair_style = this.stair_style == 1 ? 2 : 1;
  }

  setBaseTransform() {
    this._renderer.setStyle(
      this.baseEl?.nativeElement,
      'transform',
      `perspective(${this.base.perspective}px) 
      rotateX(${this.base.rotateX}deg) 
      rotateY(${this.base.rotateY}deg) 
      rotateZ(${this.base.rotateZ}deg) 
      translateX(${this.base.translateX}px)
      translateY(${this.base.translateY}px) 
      translateZ(${this.base.translateZ}px)`
    );
  }

  rotateLeft() {
    this.base.rotateZ -= 10;
    this.setBaseTransform();
  }

  rotateRight() {
    this.base.rotateZ += 10;
    this.setBaseTransform();
  }

  rotateUp() {
    this.base.rotateX += 10;
    this.setBaseTransform();
  }

  rotateDown() {
    this.base.rotateX -= 10;
    this.setBaseTransform();
  }
}
