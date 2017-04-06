var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Input, Output, EventEmitter, Renderer, ElementRef, ViewContainerRef } from '@angular/core';
import { PopoverConfig } from './popover.config';
import { ComponentLoaderFactory } from '../component-loader';
import { PopoverContainerComponent } from './popover-container.component';
/**
 * A lightweight, extensible directive for fancy popover creation.
 */
var PopoverDirective = (function () {
    function PopoverDirective(_elementRef, _renderer, _viewContainerRef, _config, cis) {
        this._popover = cis
            .createLoader(_elementRef, _viewContainerRef, _renderer)
            .provide({ provide: PopoverConfig, useValue: _config });
        Object.assign(this, _config);
        this.onShown = this._popover.onShown;
        this.onHidden = this._popover.onHidden;
    }
    Object.defineProperty(PopoverDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the popover is currently being shown
         */
        get: function () { return this._popover.isShown; },
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    PopoverDirective.prototype.show = function () {
        if (this._popover.isShown) {
            return;
        }
        this._popover
            .attach(PopoverContainerComponent)
            .to(this.container)
            .position({ attachment: this.placement })
            .show({
            content: this.popover,
            placement: this.placement,
            title: this.popoverTitle
        });
        this.isOpen = true;
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    PopoverDirective.prototype.hide = function () {
        if (this.isOpen) {
            this._popover.hide();
            this.isOpen = false;
        }
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    PopoverDirective.prototype.toggle = function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    PopoverDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._popover.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
    };
    PopoverDirective.prototype.ngOnDestroy = function () {
        this._popover.dispose();
    };
    return PopoverDirective;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], PopoverDirective.prototype, "popover", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PopoverDirective.prototype, "popoverTitle", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PopoverDirective.prototype, "placement", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PopoverDirective.prototype, "triggers", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PopoverDirective.prototype, "container", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], PopoverDirective.prototype, "isOpen", null);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], PopoverDirective.prototype, "onShown", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], PopoverDirective.prototype, "onHidden", void 0);
PopoverDirective = __decorate([
    Directive({ selector: '[popover]', exportAs: 'bs-popover' }),
    __metadata("design:paramtypes", [ElementRef,
        Renderer,
        ViewContainerRef,
        PopoverConfig,
        ComponentLoaderFactory])
], PopoverDirective);
export { PopoverDirective };
//# sourceMappingURL=popover.directive.js.map