import { Routes } from '@angular/router';
import { LicenciaComponent } from './Pages/Components/licencia/licencia';
import { MainLayoutComponent } from './layout/main-layout/main-layout';


export const routes: Routes = [

  {
    path: '',
    loadComponent: () =>
      import('./layout/main-layout/main-layout').then(m => m.MainLayoutComponent),
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: 'licencia',
        loadComponent: () =>
          import('./Pages/Components/licencia/licencia').then(m => m.LicenciaComponent),
      },
      // {
      //   path: 'diagnosis',
      //   loadComponent: () =>
      //     import('./pages/diagnosis/diagnosis.component').then(m => m.DiagnosisComponent),
      // },
      // {
      //   path: 'payroll',
      //   loadComponent: () =>
      //     import('./pages/payroll/payroll.component').then(m => m.PayrollComponent),
      // },
      // ...otras rutas
    ],
  },


];
