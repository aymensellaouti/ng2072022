import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @Input() in = 'yellow';
  @Input() out = 'red';
  /*
   Modifie l'apparence + le comportement d'un element du 🇩🇲
  */
  @HostBinding('style.backgroundColor') bgc = 'red';

  constructor() {}
  ngOnInit(): void {
    this.bgc = this.out;
  }
  /*
    voila l evenement que je gere et quand le gérer
  */
  @HostListener('mouseenter') onMouseEnter() {
    this.bgc = this.in;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.bgc = this.out;
  }
}
