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
    const navbartoggle = document.getElementById('navcontent');
    this.renderer.addClass(navbartoggle, 'nav_hide');
  }
  openNav(): void{
    const mySidenav = document.getElementById("navcontent");
    this.renderer.setStyle(mySidenav, 'width', '40%');
  }
  closeNav(): void{
    const sidenav = document.getElementById("navcontent");
    if (sidenav) {
      sidenav.style.width = "0%";
    }
  }

}
