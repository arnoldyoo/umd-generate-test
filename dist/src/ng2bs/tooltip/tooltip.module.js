var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TooltipContainerComponent } from './tooltip-container.component';
import { TooltipDirective } from './tooltip.directive';
import { TooltipConfig } from './tooltip.config';
import { ComponentLoaderFactory } from '../component-loader';
import { PositioningService } from '../positioning';
var TooltipModule = TooltipModule_1 = (function () {
    function TooltipModule() {
    }
    TooltipModule.forRoot = function () {
        return {
            ngModule: TooltipModule_1,
            providers: [TooltipConfig, ComponentLoaderFactory, PositioningService]
        };
    };
    ;
    return TooltipModule;
}());
TooltipModule = TooltipModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [TooltipDirective, TooltipContainerComponent],
        exports: [TooltipDirective],
        entryComponents: [TooltipContainerComponent]
    })
], TooltipModule);
export { TooltipModule };
var TooltipModule_1;
//# sourceMappingURL=tooltip.module.js.map