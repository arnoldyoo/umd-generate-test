var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Input, ViewContainerRef, Output, EventEmitter, Renderer, ElementRef } from '@angular/core';
import { TooltipContainerComponent } from './tooltip-container.component';
import { TooltipConfig } from './tooltip.config';
import { ComponentLoaderFactory } from '../component-loader';
import { OnChange } from '../utils/decorators';
var TooltipDirective = (function () {
    // tslint:disable-next-line
    function TooltipDirective(_viewContainerRef, _renderer, _elementRef, cis, config) {
        /** Fired when tooltip content changes */
        this.tooltipChange = new EventEmitter();
        /** @deprecated - removed, will be added to configuration */
        this._animation = true;
        /** @deprecated */
        this._delay = 0;
        /** @deprecated */
        this._fadeDuration = 150;
        /** @deprecated */
        this.tooltipStateChanged = new EventEmitter();
        this._tooltip = cis
            .createLoader(_elementRef, _viewContainerRef, _renderer)
            .provide({ provide: TooltipConfig, useValue: config });
        Object.assign(this, config);
        this.onShown = this._tooltip.onShown;
        this.onHidden = this._tooltip.onHidden;
    }
    Object.defineProperty(TooltipDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the tooltip is currently being shown
         */
        get: function () { return this._tooltip.isShown; },
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
    Object.defineProperty(TooltipDirective.prototype, "htmlContent", {
        /* tslint:disable */
        /** @deprecated - please use `tooltip` instead */
        set: function (value) {
            console.warn('tooltipHtml was deprecated, please use `tooltip` instead');
            this.tooltip = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_placement", {
        /** @deprecated - please use `placement` instead */
        set: function (value) {
            console.warn('tooltipPlacement was deprecated, please use `placement` instead');
            this.placement = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_isOpen", {
        get: function () {
            console.warn('tooltipIsOpen was deprecated, please use `isOpen` instead');
            return this.isOpen;
        },
        /** @deprecated - please use `isOpen` instead*/
        set: function (value) {
            console.warn('tooltipIsOpen was deprecated, please use `isOpen` instead');
            this.isOpen = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_enable", {
        get: function () {
            console.warn('tooltipEnable was deprecated, please use `isDisabled` instead');
            return this.isDisabled === true;
        },
        /** @deprecated - please use `isDisabled` instead */
        set: function (value) {
            console.warn('tooltipEnable was deprecated, please use `isDisabled` instead');
            this.isDisabled = value === true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_appendToBody", {
        get: function () {
            console.warn('tooltipAppendToBody was deprecated, please use `container="body"` instead');
            return this.container === 'body';
        },
        /** @deprecated - please use `container="body"` instead */
        set: function (value) {
            console.warn('tooltipAppendToBody was deprecated, please use `container="body"` instead');
            this.container = value ? 'body' : this.container;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_popupClass", {
        /** @deprecated - will replaced with customClass */
        set: function (value) {
            console.warn('tooltipClass deprecated');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipContext", {
        /** @deprecated - removed */
        set: function (value) {
            console.warn('tooltipContext deprecated');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipTrigger", {
        /** @deprecated -  please use `triggers` instead */
        get: function () {
            console.warn('tooltipTrigger was deprecated, please use `triggers` instead');
            return this.triggers;
        },
        set: function (value) {
            console.warn('tooltipTrigger was deprecated, please use `triggers` instead');
            this.triggers = (value || '').toString();
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    TooltipDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._tooltip.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        this.tooltipChange.subscribe(function (value) {
            if (!value) {
                _this._tooltip.hide();
            }
        });
    };
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    TooltipDirective.prototype.toggle = function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    TooltipDirective.prototype.show = function () {
        var _this = this;
        if (this.isOpen || this.isDisabled || this._delayTimeoutId || !this.tooltip) {
            return;
        }
        var showTooltip = function () { return _this._tooltip
            .attach(TooltipContainerComponent)
            .to(_this.container)
            .position({ attachment: _this.placement })
            .show({
            content: _this.tooltip,
            placement: _this.placement
        }); };
        if (this._delay) {
            this._delayTimeoutId = setTimeout(function () { showTooltip(); }, this._delay);
        }
        else {
            showTooltip();
        }
    };
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    TooltipDirective.prototype.hide = function () {
        var _this = this;
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (!this._tooltip.isShown) {
            return;
        }
        this._tooltip.instance.classMap.in = false;
        setTimeout(function () {
            _this._tooltip.hide();
        }, this._fadeDuration);
    };
    TooltipDirective.prototype.ngOnDestroy = function () {
        this._tooltip.dispose();
    };
    return TooltipDirective;
}());
__decorate([
    OnChange(),
    Input(),
    __metadata("design:type", Object)
], TooltipDirective.prototype, "tooltip", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TooltipDirective.prototype, "tooltipChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TooltipDirective.prototype, "placement", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TooltipDirective.prototype, "triggers", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TooltipDirective.prototype, "container", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TooltipDirective.prototype, "isOpen", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TooltipDirective.prototype, "isDisabled", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TooltipDirective.prototype, "onShown", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TooltipDirective.prototype, "onHidden", void 0);
__decorate([
    Input('tooltipHtml'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], TooltipDirective.prototype, "htmlContent", null);
__decorate([
    Input('tooltipPlacement'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TooltipDirective.prototype, "_placement", null);
__decorate([
    Input('tooltipIsOpen'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TooltipDirective.prototype, "_isOpen", null);
__decorate([
    Input('tooltipEnable'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TooltipDirective.prototype, "_enable", null);
__decorate([
    Input('tooltipAppendToBody'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TooltipDirective.prototype, "_appendToBody", null);
__decorate([
    Input('tooltipAnimation'),
    __metadata("design:type", Boolean)
], TooltipDirective.prototype, "_animation", void 0);
__decorate([
    Input('tooltipClass'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TooltipDirective.prototype, "_popupClass", null);
__decorate([
    Input('tooltipContext'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], TooltipDirective.prototype, "_tooltipContext", null);
__decorate([
    Input('tooltipPopupDelay'),
    __metadata("design:type", Number)
], TooltipDirective.prototype, "_delay", void 0);
__decorate([
    Input('tooltipFadeDuration'),
    __metadata("design:type", Number)
], TooltipDirective.prototype, "_fadeDuration", void 0);
__decorate([
    Input('tooltipTrigger'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], TooltipDirective.prototype, "_tooltipTrigger", null);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TooltipDirective.prototype, "tooltipStateChanged", void 0);
TooltipDirective = __decorate([
    Directive({
        selector: '[tooltip], [tooltipHtml]',
        exportAs: 'bs-tooltip'
    }),
    __metadata("design:paramtypes", [ViewContainerRef,
        Renderer,
        ElementRef,
        ComponentLoaderFactory,
        TooltipConfig])
], TooltipDirective);
export { TooltipDirective };
//# sourceMappingURL=tooltip.directive.js.map