import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  Renderer2,
} from '@angular/core';
import { PositionEnum } from './enums/sidebar.enum';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnDestroy {
  @Input() position: PositionEnum = PositionEnum.Left;
  @Input() size: string = '300px';

  public isOpen: boolean = false;

  public readonly SIZE_PORCENTAGE: string = '100%';
  public readonly CLASS_FULL_WIDTH: string = 'content-full-width';
  public readonly CLASS_HALF_WIDTH: string = 'content-half-width';

  private unlistenDocumentClick: (() => void) | null = null;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnDestroy(): void {
    this.detachClickOutsideListener();
  }

  public get getSidebarStyle() {
    return this.position === PositionEnum.Left ||
      this.position === PositionEnum.Right
      ? { width: this.size, height: this.SIZE_PORCENTAGE }
      : { width: this.SIZE_PORCENTAGE, height: this.size };
  }

  public get getContentWidth(): string {
    return this.position === PositionEnum.Top ||
      this.position === PositionEnum.Bottom
      ? this.CLASS_HALF_WIDTH
      : this.CLASS_FULL_WIDTH;
  }

  public OpenSidebar(): void {
    this.isOpen = true;

    setTimeout(() => {
      this.attachClickOutsideListener();
    }, 0);
  }

  public closeSidebar(): void {
    this.isOpen = false;
    this.detachClickOutsideListener();
  }

  private attachClickOutsideListener(): void {
    this.unlistenDocumentClick = this.renderer.listen(
      'document',
      'click',
      (event: MouseEvent) => {
        const clickedInside = this.elRef.nativeElement.contains(event.target);
        if (!clickedInside) {
          this.closeSidebar();
        }
      }
    );
  }

  private detachClickOutsideListener(): void {
    if (this.unlistenDocumentClick) {
      this.unlistenDocumentClick();
      this.unlistenDocumentClick = null;
    }
  }
}
