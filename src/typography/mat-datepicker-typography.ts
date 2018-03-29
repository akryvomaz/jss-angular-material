import {
    matFontSize,
    matFontWeight,
    matFontFamily
} from '../utils';

import { TypographyConfig } from '../interfaces';

export function matDatepickerTypography(config: TypographyConfig): Object {
    return {
        '.mat-calendar': {
            'font-family': matFontFamily(config)
        },
        '.mat-calendar-body': {
            'font-size': '13px'
        },
        '.mat-calendar-body-label, .mat-calendar-period-button': {
            'font-size': matFontSize(config, 'button'),
            'font-weight': matFontWeight(config, 'button')
        },
        '.mat-calendar-table-header th': {
            'font-size': '11px',
            'font-weight': matFontWeight(config, 'body-1')
        }
    };
}
