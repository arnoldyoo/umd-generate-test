var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable: max-classes-per-file */
import { NgModule } from '@angular/core';
import { ModalModule } from './modal/modal.module';
import { TooltipModule } from './tooltip/tooltip.module';
import { PopoverModule } from './popover/popover.module';
export { ModalDirective, ModalBackdropOptions, ModalBackdropComponent, ModalModule } from './modal';
export { TooltipConfig, TooltipContainerComponent, TooltipDirective, TooltipModule } from './tooltip';
export { PopoverConfig, PopoverContainerComponent, PopoverDirective, PopoverModule } from './popover';
export { OnChange, LinkedList, isBs3, Trigger, Utils } from './utils';
export { ComponentLoader, ComponentLoaderFactory, ContentRef } from './component-loader';
export { Positioning, PositioningService, positionElements } from './positioning';
var MODULES = [
    ModalModule,
    PopoverModule,
    TooltipModule
];
var BsRootModule = (function () {
    function BsRootModule() {
    }
    return BsRootModule;
}());
BsRootModule = __decorate([
    NgModule({
        imports: [
            ModalModule.forRoot(),
            PopoverModule.forRoot(),
            TooltipModule.forRoot()
        ],
        exports: MODULES
    })
], BsRootModule);
export { BsRootModule };
var Ng2BootstrapModule = (function () {
    function Ng2BootstrapModule() {
    }
    Ng2BootstrapModule.forRoot = function () {
        return { ngModule: BsRootModule };
    };
    return Ng2BootstrapModule;
}());
Ng2BootstrapModule = __decorate([
    NgModule({ exports: MODULES })
], Ng2BootstrapModule);
export { Ng2BootstrapModule };
//# sourceMappingURL=index.js.map