import {
    matFontFamily,
    matLineHeight
} from '../utils';

import { TypographyConfig } from '../interfaces';

export function matCheckboxTypography(config: TypographyConfig): Object {
    return {
        '.mat-checkbox': {
            'font-family': matFontFamily(config)
        },
        '.mat-checkbox-layout .mat-checkbox-label': {
            'line-height': matLineHeight(config, 'body-2')
        }
    };
}
