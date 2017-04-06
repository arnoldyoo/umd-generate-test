/* tslint:disable: max-classes-per-file */
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ModalModule } from './modal/modal.module';
import { TooltipModule } from './tooltip/tooltip.module';
import { PopoverModule } from './popover/popover.module';


export {
  ModalDirective, ModalOptions, ModalBackdropOptions, ModalBackdropComponent,
  ModalModule
} from './modal';

export {
  TooltipConfig, TooltipContainerComponent, TooltipDirective, TooltipModule
} from './tooltip';


export {
  PopoverConfig, PopoverContainerComponent, PopoverDirective, PopoverModule
} from './popover';

export { OnChange, LinkedList, isBs3, Trigger, Utils } from './utils';

export {
  ComponentLoader, ComponentLoaderFactory, ContentRef
} from './component-loader';
export {
  Positioning, PositioningOptions, PositioningService, positionElements
} from './positioning';

const MODULES = [
  
  
   ModalModule,
  PopoverModule,
   TooltipModule
];

@NgModule({
  imports: [
    ModalModule.forRoot(),
    PopoverModule.forRoot(),
    TooltipModule.forRoot()
  ],
  exports: MODULES
})
export class BsRootModule {
}

@NgModule({exports: MODULES})
export class Ng2BootstrapModule {
  public static forRoot(): ModuleWithProviders {
    return {ngModule: BsRootModule};
  }
}
