var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { ModalBackdropComponent } from './modal-backdrop.component';
import { ModalDirective } from './modal.component';
import { PositioningService } from '../positioning';
import { ComponentLoaderFactory } from '../component-loader';
var ModalModule = ModalModule_1 = (function () {
    function ModalModule() {
    }
    ModalModule.forRoot = function () {
        return { ngModule: ModalModule_1, providers: [ComponentLoaderFactory, PositioningService] };
    };
    return ModalModule;
}());
ModalModule = ModalModule_1 = __decorate([
    NgModule({
        declarations: [ModalBackdropComponent, ModalDirective],
        exports: [ModalBackdropComponent, ModalDirective],
        entryComponents: [ModalBackdropComponent]
    })
], ModalModule);
export { ModalModule };
var ModalModule_1;
//# sourceMappingURL=modal.module.js.map