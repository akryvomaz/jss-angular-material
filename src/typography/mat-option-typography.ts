import {
    matFontFamily,
    matFontSize
} from '../utils';

import { TypographyConfig } from '../interfaces';

export function matOptionTypography(config: TypographyConfig): Object {
    return {
        '.mat-option': {
            'font-family': matFontFamily(config, 'subheading-2'),
            'font-size': matFontSize(config, 'subheading-2')
        }
    };
}
