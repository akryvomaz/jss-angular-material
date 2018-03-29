import { matFontFamily } from '../utils';

import { TypographyConfig } from '../interfaces';

export function matRadioTypography(config: TypographyConfig): Object {
    return {
        '.mat-radio-button': {
            'font-family': matFontFamily(config)
        }
    };
}
