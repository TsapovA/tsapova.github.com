import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DonorNewComponent} from "./donor-new/donor-new.component";
import {DonorSearchComponent} from "./donor-search/donor-search.component";
import {DonorQuickComponent} from "./donor-quick/donor-quick.component";

const routes: Routes = [
    {
      path: 'new',
      component: DonorNewComponent
    },
    {
      path: 'search',
      component: DonorSearchComponent
    },
  {
    path: 'quickNew',
    component:DonorQuickComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonorRoutingModule { }
