import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PageRoutingModule } from "./page-routing.module";
import { PageComponent } from "./page.component";


@NgModule({
    declarations: [
        PageComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        PageRoutingModule
    ]
})

export class PageModule {
    
}