import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() position: 'left' | 'right' | 'top' | 'bottom' = 'left';
  @Input() size: string = '300px';

  public isOpen: boolean = false;

  public get getDrawerStyle() {
    return this.position === 'left' || this.position === 'right' ? { width: this.size, height: '100%' } : { width: '100%', height: this.size };
  }

  public OpenCloseSideBar(): void {
    this.isOpen = !this.isOpen;
  };

  closeDrawer() {
    this.isOpen = false;
  }
}