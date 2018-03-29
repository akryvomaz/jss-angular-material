import { matFontFamily } from '../utils';

import { TypographyConfig } from '../interfaces';

export function matButtonToggleTypography(config: TypographyConfig): Object {
    return {
        '.mat-button-toggle': {
            'font-family': matFontFamily(config)
        }
    };
}
