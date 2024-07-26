import { NgModule } from '@angular/core';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  imports: [
    NzLayoutModule,
    NzIconModule,
    NzFlexModule,
    NzDropDownModule,
    NzButtonModule,
    NzTypographyModule,
    NzInputModule,
    NzCardModule,
    NzFormModule,
    NzSelectModule,
    NzCheckboxModule,
    NzSpaceModule,
    NzPaginationModule,
    NzGridModule,
    NzRadioModule,
    NzDividerModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  exports: [
    NzLayoutModule,
    NzIconModule,
    NzFlexModule,
    NzDropDownModule,
    NzButtonModule,
    NzTypographyModule,
    NzInputModule,
    NzCardModule,
    NzFormModule,
    NzSelectModule,
    NzCheckboxModule,
    NzSpaceModule,
    NzPaginationModule,
    NzGridModule,
    NzRadioModule,
    NzDividerModule,
  ],
})
export class NzModule {}
