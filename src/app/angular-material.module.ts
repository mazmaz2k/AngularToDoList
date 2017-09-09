import { NgModule } from '@angular/core';

/* Angular Materials Modules Import */
import { MdInputModule, MdButtonModule, MdCardModule, MdToolbarModule } from '@angular/material';

@NgModule({
    imports: [
        MdInputModule,
        MdButtonModule,
        MdCardModule,
        MdToolbarModule
    ],
    exports: [
        MdInputModule,
        MdButtonModule,
        MdCardModule,
        MdToolbarModule
    ]
})

export class AngularMaterialModule {}
