import {
    matFontSize,
    matFontWeight,
    matFontFamily
} from '../utils';

import { TypographyConfig } from '../interfaces';

export function matStepperTypography(config: TypographyConfig): Object {
    return {
        '.mat-stepper-vertical, .mat-stepper-horizontal': {
            'font-family': matFontFamily(config)
        },
        '.mat-step-label': {
            'font-size': matFontSize(config, 'body-1'),
            'font-weight': matFontWeight(config, 'body-1')
        },
        '.mat-step-label-selected': {
            'font-size': matFontSize(config, 'body-2'),
            'font-weight': matFontWeight(config, 'body-2')
        }
    };
}
