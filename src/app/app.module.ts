import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { MyCustom } from './my-custom/my-custom.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';

import { OutputChildComponent } from './output-binding/output-child/child.component';
import { ChildComponent } from './input-binding/input-child/child.component';
import { ParentComponent } from './input-binding/input-parent/parent.component';
import { ItemDetailsComponent } from './my-custom/items/item-details/item-details.component';
import { ItemsComponent } from './my-custom/items/items/items.component';
import { OutputParentComponent } from './output-binding/output-parent/parent.component';
import { FormsModule } from '@angular/forms';
import { NgModelDemoComponent } from './two-way-binding/built-in-ngModel/ngmodel-demo.component';
import { TwoChildComponent } from './two-way-binding/custom-two-way/two-child.component';
import { TwoParentComponent } from './two-way-binding/custom-two-way/two-way-parent.component';
import { FontInccomponent } from './font-inc-dec/font-size.compoent';
import { FontChnagecomponent } from './font-inc-dec/font-change.compoent copy';
import { NgContentChild } from './ng-content/ng-content-child';
import { NgContentparent } from './ng-content/ng-content-parent';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { CardDetailComponent } from './my-custom/items/card-item.component';
import { AddCardComponent } from './my-custom/items/items/add-card.component';
import { HttpCallComponent } from './http-call/http-call.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DataBindingComponent,
    MyCustom,
    ClassBindingComponent,
    EventBindingComponent,
    NgIfComponent,
    NgForComponent,

    NgSwitchComponent,
    ParentComponent,
    ChildComponent,
    OutputChildComponent,
    OutputParentComponent,
    ItemsComponent,
    ItemDetailsComponent,
    NgModelDemoComponent,
    TwoParentComponent,
    TwoChildComponent,
    FontInccomponent,
    FontChnagecomponent,
    NgContentChild,
    NgContentparent,
    NgContainerComponent,
    CardDetailComponent,
    AddCardComponent,
    HttpCallComponent
  ],
  imports: [BrowserModule, FormsModule , HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
