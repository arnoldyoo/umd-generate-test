import { ModuleWithProviders } from '@angular/core';
export { ModalDirective, ModalOptions, ModalBackdropOptions, ModalBackdropComponent, ModalModule } from './modal';
export { TooltipConfig, TooltipContainerComponent, TooltipDirective, TooltipModule } from './tooltip';
export { PopoverConfig, PopoverContainerComponent, PopoverDirective, PopoverModule } from './popover';
export { OnChange, LinkedList, isBs3, Trigger, Utils } from './utils';
export { ComponentLoader, ComponentLoaderFactory, ContentRef } from './component-loader';
export { Positioning, PositioningOptions, PositioningService, positionElements } from './positioning';
export declare class BsRootModule {
}
export declare class Ng2BootstrapModule {
    static forRoot(): ModuleWithProviders;
}
