import { Component, Input } from '@angular/core';
import { PositionEnum } from './enums/sidebar.enum';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() position: PositionEnum = PositionEnum.Left;
  @Input() size: string = '300px';

  public isOpen: boolean = false;

  public readonly SIZE_PORCENTAGE: string = '100%';

  public get getSidebarStyle() {
    return this.position === PositionEnum.Left ||
      this.position === PositionEnum.Right
      ? { width: this.size, height: this.SIZE_PORCENTAGE }
      : { width: this.SIZE_PORCENTAGE, height: this.size };
  }

  public OpenCloseSideBar(): void {
    this.isOpen = !this.isOpen;
  }

  public OpenSidebar(): void {
    this.isOpen = true;
  }

  public closeSidebar(): void {
    this.isOpen = false;
  }
}
