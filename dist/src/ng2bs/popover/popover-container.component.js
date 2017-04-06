var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ChangeDetectionStrategy, Input, Component } from '@angular/core';
import { PopoverConfig } from './popover.config';
import { isBs3 } from '../utils/ng2-bootstrap-config';
var PopoverContainerComponent = (function () {
    function PopoverContainerComponent(config) {
        Object.assign(this, config);
    }
    Object.defineProperty(PopoverContainerComponent.prototype, "isBs3", {
        get: function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    return PopoverContainerComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], PopoverContainerComponent.prototype, "placement", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PopoverContainerComponent.prototype, "title", void 0);
PopoverContainerComponent = __decorate([
    Component({
        selector: 'popover-container',
        changeDetection: ChangeDetectionStrategy.OnPush,
        // tslint:disable-next-line
        host: {
            '[class]': '"popover in popover-" + placement + " " + placement',
            '[class.show]': '!isBs3',
            role: 'tooltip',
            style: 'display:block;'
        },
        template: "\n<div class=\"popover-arrow arrow\"></div>\n<h3 class=\"popover-title\" *ngIf=\"title\">{{title}}</h3><div class=\"popover-content\"><ng-content></ng-content></div>\n    "
    }),
    __metadata("design:paramtypes", [PopoverConfig])
], PopoverContainerComponent);
export { PopoverContainerComponent };
//# sourceMappingURL=popover-container.component.js.map