import {
    matFontSize,
    matFontWeight,
    matFontFamily
} from '../utils';

import { TypographyConfig } from '../interfaces';

export function matTabsTypography(config: TypographyConfig): Object {
    return {
        '.mat-tab-group': {
            'font-family': matFontFamily(config)
        },
        '.mat-tab-label, .mat-tab-link': {
            'font-family': matFontFamily(config, 'button'),
            'font-size': matFontSize(config, 'button'),
            'font-weight': matFontWeight(config, 'button')
        }
    };
}
