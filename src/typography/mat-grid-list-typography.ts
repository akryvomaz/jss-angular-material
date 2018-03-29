import {
    matFontSize,
    matLineBase
} from '../utils';

import { TypographyConfig } from '../interfaces';

export function matGridListTypography(config: TypographyConfig): Object {
    return {
        '.mat-grid-tile-header, .mat-grid-tile-footer': {
            ...matLineBase(matFontSize(config, 'caption')),
            'font-size': matFontSize(config, 'body-1')
        }
    };
}
