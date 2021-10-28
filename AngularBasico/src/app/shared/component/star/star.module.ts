import {NgModule} from "@angular/core";
import {StarComponet} from "./star.componet";

@NgModule({
  declarations:[
    StarComponet
  ],
  exports:[
    StarComponet
  ]
})
export class StarModule{}
