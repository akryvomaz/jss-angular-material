import {
    matFontSize,
    matFontWeight,
    matFontFamily
} from '../utils';

import { TypographyConfig } from '../interfaces';

export function matMenuTypography(config: TypographyConfig): Object {
    return {
        '.mat-menu-item': {
            'font-family': matFontFamily(config, 'subheading-2'),
            'font-size': matFontSize(config, 'subheading-2'),
            'font-weight': matFontWeight(config, 'subheading-2')
        }
    };
}
