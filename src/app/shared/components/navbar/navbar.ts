import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LucideAngularModule, User,Stethoscope,Users,DollarSign,Hospital,LogOut,History } from 'lucide-angular';


@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [LucideAngularModule,CommonModule,RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

 private router = inject(Router);
  User = User;
  History = History;
  Stethoscope = Stethoscope;
  Users = Users;
  DollarSign = DollarSign;
  Hospital = Hospital;
  LogOut = LogOut;

  isActive(path: string): boolean {
    return this.router.url === path;
  }

  logout() {
    // lógica de cierre de sesión aquí
    console.log('Sesión cerrada');
  }
}
