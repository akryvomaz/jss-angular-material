import {
    matFontSize,
    matFontWeight,
    matFontFamily
} from '../utils';

import { TypographyConfig } from '../interfaces';

export function matSliderTypography(config: TypographyConfig): Object {
    return {
        '.mat-slider-thumb-label-text': {
            'font-family': matFontFamily(config),
            'font-size': matFontSize(config, 'caption'),
            'font-weight': matFontWeight(config, 'body-2')
        }
    };
}
