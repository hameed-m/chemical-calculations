import { Routes } from '@angular/router';
import { TdsComponent } from './tds/tds.component';
import { TssComponent } from './tss/tss.component';
import { ApiSgComponent } from './api-sg/api-sg.component';
import { PcComponent } from './pc/pc.component';
import { SulfiteComponent } from './sulfite/sulfite.component';
import { BulkChemicalsComponent } from './bulk-chemicals/bulk-chemicals.component';
import { SandCrudeComponent } from './sand-crude/sand-crude.component';
import { GeochemicalsComponent } from './geochemicals/geochemicals.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'tds', component: TdsComponent},
    { path: 'tss', component: TssComponent},
    { path: 'api-sg', component: ApiSgComponent},
    { path: 'pc', component: PcComponent},
    { path: 'sulfite', component: SulfiteComponent},
    { path: 'bulk-chemicals', component: BulkChemicalsComponent},
    { path: 'sand-crude', component: SandCrudeComponent},
    { path: 'geochemicals', component: GeochemicalsComponent},
    { path: '**', redirectTo: ''}
];
