import {
    matFontSize,
    matFontWeight,
    matFontFamily
} from '../utils';

import { TypographyConfig } from '../interfaces';

export function matCardTypography(config: TypographyConfig): Object {
    return {
        '.mat-card': {
            'font-family': matFontFamily(config)
        },
        '.mat-card-title': {
            'font-size': matFontSize(config, 'headline'),
            'font-weight': matFontWeight(config, 'headline')
        },
        '.mat-card-subtitle, .mat-card-content, .mat-card-header .mat-card-title': {
            'font-size': matFontSize(config, 'body-1')
        }
    };
}
