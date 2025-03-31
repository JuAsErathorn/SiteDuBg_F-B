import { Routes } from '@angular/router';
import { SummaryComponent } from '../pages/summary/summary.component';
import { EthogramComponent } from '../pages/ethogram/ethogram.component';

export const routes: Routes = [
    {path: "summary", component: SummaryComponent},
    {path: "ethogram", component: EthogramComponent}
];
