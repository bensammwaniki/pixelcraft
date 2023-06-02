import { Component,HostListener,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor( private renderer: Renderer2) {}
  isScrolled = false;
  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolled = window.pageYOffset > 130;
  }
  hideNavbar(): void {
    const navbartoggle = document.getElementById('navdiv');
    this.renderer.addClass(navbartoggle, 'nav_hide');
  }
  openNav(): void{
    const mySidenav = document.getElementById("navdiv");
    this.renderer.setStyle(mySidenav, 'width', '60%');
    this.renderer.removeClass(mySidenav, 'nav_hide');
  }
  closeNav(): void{
    const sidenav = document.getElementById("navdiv");
    if (sidenav) {
      sidenav.style.width = "0%";
    }
  }

}
