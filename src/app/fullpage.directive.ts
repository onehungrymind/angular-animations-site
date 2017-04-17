import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[fullpage]'
})
export class FullpageDirective {

  constructor(private element: ElementRef) { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resize();
  }

  @HostListener('load', ['$event'])
  onLoad(event) {
    this.resize();
  }

  resize() {
    let bgwidth = this.element.nativeElement.width;
    let bgheight = this.element.nativeElement.height;

    let winwidth = window.innerWidth;
    let winheight = window.innerHeight;

    let widthratio = winwidth / bgwidth;
    let heightratio = winheight / bgheight;

    let widthdiff = heightratio * bgwidth;
    let heightdiff = widthratio * bgheight;

    if (heightdiff > winheight) {
      this.element.nativeElement.width = winwidth;
      this.element.nativeElement.height = heightdiff;
    } else {
      this.element.nativeElement.width = widthdiff;
      this.element.nativeElement.height = winheight;
    }
  }
}
