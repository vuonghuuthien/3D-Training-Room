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

  img_arrow = 'assets/arrow.png';
  img_logo = 'assets/logo.png';
  img_people_guitarist = 'assets/people_guitarist.png';
  img_people_laptop = 'assets/people_laptop.png';
  img_people_praise = 'assets/people_praise.png';

  title = '3D Training Room';

  scale = 1 / 20;
  face_list = ['top', 'bottom', 'front', 'back', 'left', 'right'];

  // Room Detail
  room_size = {
    width: 3500 * this.scale,
    height: 3400 * this.scale,
    depth: 7300 * this.scale,
  };

  // Base Detail
  base = {
    perspective: 500, //px
    rotateX: 70, //deg
    rotateY: 0, //deg
    rotateZ: 40, //deg
    translateX: 100, //px
    translateY: 0, //px
    translateZ: -50, //px
  };
  base_size = {
    width: this.room_size.width, // room width
    depth: this.room_size.depth, // room depth
  };

  // Wall Detail
  wall_size = {
    thick: 50 * this.scale,
  };
  wall_left_size = {
    width: this.wall_size.thick,
    height: this.room_size.height, // room height
    depth: this.room_size.depth, // room depth
  };
  wall_back_size = {
    width: this.room_size.width, // room width
    height: this.room_size.height, // room height
    depth: this.wall_size.thick,
  };
  draw_wall_size = {
    width: this.room_size.depth, // room depth
    height: this.room_size.width, // room width
  };
  floor_size = {
    width: this.room_size.width, // room width
    height: this.wall_size.thick,
    depth: this.room_size.depth, // room depth
  };

  // Logo Detail
  logo_size = {
    height: 200 * this.scale,
  };

  // Col Detail
  col_size = {
    width: 600 * this.scale,
    height: this.room_size.height, // room height
    depth: 600 * this.scale,
    start_y: 400 * this.scale,
  };

  // Stair Detail
  step_size = {
    thick: 30 * this.scale,
  };
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
  step_lg_top_size = {
    height: this.step_size.thick,
    depth: this.step_lg_size.depth,
  };
  step_lg_front_size = {
    height: this.step_lg_size.height,
    depth: this.step_size.thick,
  };
  // Stair Style
  stair_style = 2;

  // Cabinet Detail
  cabinet_cont_size = {
    depth: 400 * this.scale, // cabinet depth
    start_z: this.step_lg_size.height * this.step_lg_num,
  };
  cabinet_size = {
    width: 500 * this.scale,
    height: 1220 * this.scale,
    // depth: 280 * this.scale,
    depth: 400 * this.scale,
    thick: 10 * this.scale,
  };
  cabinet_top_size = {
    width: this.cabinet_size.width,
    height: this.cabinet_size.thick,
    depth: this.cabinet_size.depth,
  };
  cabinet_left_size = {
    width: this.cabinet_size.thick,
    height: this.cabinet_size.height,
    depth: this.cabinet_size.depth,
  };
  cabinet_right_size = this.cabinet_left_size;
  cabinet_front_size = {
    width: this.cabinet_size.width,
    height: this.cabinet_size.height,
    depth: this.cabinet_size.thick,
  };
  cabinet_back_size = this.cabinet_front_size;

  // Board Detail
  board_size = {
    width: 3200 * this.scale,
    height: 3000 * this.scale,
    depth: 50 * this.scale,
  };

  // People Detail
  people_size = {
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
  table_mini_top_size = {
    width: this.table_mini_size.width,
    height: this.table_mini_size.thick,
    depth: this.table_mini_size.depth,
  };
  table_mini_front_size = {
    width: this.table_mini_size.border,
    height: this.table_mini_size.height,
    depth: this.table_mini_size.thick,
  };
  table_mini_back_size = {
    width: this.table_mini_size.border,
    height: this.table_mini_size.height_back,
    depth: this.table_mini_size.thick,
    diff_height: this.table_mini_size.height - this.table_mini_size.height_back,
  };

  // Door Detail
  door_size = {
    width: 40 * this.scale,
    height: 2000 * this.scale,
    depth: 800 * this.scale,
  };

  // Projector Detail
  projector_size = {
    width: 500 * this.scale,
    height: 100 * this.scale,
    depth: 200 * this.scale,
    start_y: (this.room_size.depth / 100) * 70,
  };

  projector_light_size = {
    width_sm: this.projector_size.width,
    height_sm: this.projector_size.height,
    width: 3000 * this.scale,
    height: 2000 * this.scale,
    depth:
      this.room_size.depth -
      (this.projector_size.start_y + this.projector_size.depth),
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

  // Chair Detail
  chair_size = {
    width: 700 * this.scale,
    height: 600 * this.scale,
    depth: 700 * this.scale,
  };

  // Chair Cushion Detail
  chair_cushion_size = {
    width: 600 * this.scale,
    height: 150 * this.scale,
    depth: 700 * this.scale,
  };

  constructor(private _renderer: Renderer2, private _element: ElementRef) {}

  ngAfterViewInit(): void {
    this.setAllVariableCSS();
    this.setBaseTransform();
  }

  ngOnInit(): void {}

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

  setVariableCSS(selector: string, value: any, suffix = 'px') {
    if (selector) {
      this._element.nativeElement.style.setProperty(
        `--${selector}`,
        value + suffix
      );
    }
  }

  setAllVariableCSS() {
    for (const [key, value] of Object.entries(this.room_size)) {
      this.setVariableCSS(`room-${key}`, value);
    }

    for (const [key, value] of Object.entries(this.base_size)) {
      this.setVariableCSS(`base-${key}`, value);
    }

    for (const [key, value] of Object.entries(this.wall_size)) {
      this.setVariableCSS(`wall-${key}`, value);
    }

    for (const [key, value] of Object.entries(this.wall_left_size)) {
      this.setVariableCSS(`wall-left-${key}`, value);
    }

    for (const [key, value] of Object.entries(this.wall_back_size)) {
      this.setVariableCSS(`wall-back-${key}`, value);
    }

    for (const [key, value] of Object.entries(this.draw_wall_size)) {
      this.setVariableCSS(`draw-wall-${key}`, value);
    }

    for (const [key, value] of Object.entries(this.floor_size)) {
      this.setVariableCSS(`floor-${key}`, value);
    }

    for (const [key, value] of Object.entries(this.logo_size)) {
      this.setVariableCSS(`logo-${key}`, value);
    }

    for (const [key, value] of Object.entries(this.col_size)) {
      this.setVariableCSS(`col-${key}`, value);
    }

    for (const [key, value] of Object.entries(this.step_size)) {
      this.setVariableCSS(`step-${key}`, value);
    }

    for (const [key, value] of Object.entries(this.step_sm_size)) {
      this.setVariableCSS(`step-sm-${key}`, value);
    }

    for (const [key, value] of Object.entries(this.step_lg_size)) {
      this.setVariableCSS(`step-lg-${key}`, value);
    }

    for (const [key, value] of Object.entries(this.step_lg_top_size)) {
      this.setVariableCSS(`step-lg-top-${key}`, value);
    }

    for (const [key, value] of Object.entries(this.step_lg_front_size)) {
      this.setVariableCSS(`step-lg-front-${key}`, value);
    }

    for (const [key, value] of Object.entries(this.cabinet_cont_size)) {
      this.setVariableCSS(`cabinet-cont-${key}`, value);
    }

    for (const [key, value] of Object.entries(this.cabinet_size)) {
      this.setVariableCSS(`cabinet-${key}`, value);
    }

    for (const [key, value] of Object.entries(this.cabinet_top_size)) {
      this.setVariableCSS(`cabinet-top-${key}`, value);
    }

    for (const [key, value] of Object.entries(this.cabinet_left_size)) {
      this.setVariableCSS(`cabinet-left-${key}`, value);
      this.setVariableCSS(`cabinet-right-${key}`, value);
    }

    for (const [key, value] of Object.entries(this.cabinet_front_size)) {
      this.setVariableCSS(`cabinet-front-${key}`, value);
      this.setVariableCSS(`cabinet-back-${key}`, value);
    }

    for (const [key, value] of Object.entries(this.board_size)) {
      this.setVariableCSS(`board-${key}`, value);
    }

    for (const [key, value] of Object.entries(this.people_size)) {
      this.setVariableCSS(`people-${key}`, value);
    }

    for (const [key, value] of Object.entries(this.seat_cushion_size)) {
      this.setVariableCSS(`seat-cushion-${key}`, value);
    }

    for (const [key, value] of Object.entries(this.table_mini_size)) {
      this.setVariableCSS(`table-mini-${key}`, value);
    }

    for (const [key, value] of Object.entries(this.table_mini_top_size)) {
      this.setVariableCSS(`table-mini-top-${key}`, value);
    }

    for (const [key, value] of Object.entries(this.table_mini_front_size)) {
      this.setVariableCSS(`table-mini-front-${key}`, value);
    }

    for (const [key, value] of Object.entries(this.table_mini_back_size)) {
      this.setVariableCSS(`table-mini-back-${key}`, value);
    }

    for (const [key, value] of Object.entries(this.door_size)) {
      this.setVariableCSS(`door-${key}`, value);
    }

    for (const [key, value] of Object.entries(this.projector_size)) {
      this.setVariableCSS(`projector-${key}`, value);
    }

    for (const [key, value] of Object.entries(this.projector_light_size)) {
      this.setVariableCSS(`projector-light-${key}`, value);
    }

    for (const [key, value] of Object.entries(this.projector_light_angle)) {
      this.setVariableCSS(`projector-light-angle-${key}`, value, 'deg');
    }

    for (const [key, value] of Object.entries(
      this.projector_light_depth_face
    )) {
      this.setVariableCSS(`projector-light-depth-face-${key}`, value);
    }

    for (const [key, value] of Object.entries(this.chair_size)) {
      this.setVariableCSS(`chair-${key}`, value);
    }

    for (const [key, value] of Object.entries(this.chair_cushion_size)) {
      this.setVariableCSS(`chair-cushion-${key}`, value);
    }
  }
}
