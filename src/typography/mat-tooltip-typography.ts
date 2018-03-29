import { matFontFamily } from '../utils';

import { TypographyConfig } from '../interfaces';

export function matTooltipTypography(config: TypographyConfig): Object {
    return {
        '.mat-tooltip': {
            'font-family': matFontFamily(config),
            'font-size': '10px',
            'padding-top': '6px',
            'padding-bottom': '6px'
        },
        '.mat-tooltip-handset': {
            'font-size': '14px',
            'padding-top': '9px',
            'padding-bottom': '9px'
        }
    };
}
