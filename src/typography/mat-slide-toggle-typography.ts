import { matTypographyLevelToStyles } from './mat-typography-level-to-styles';

import { TypographyConfig } from '../interfaces';

export function matSlideToggleTypography(config: TypographyConfig): Object {
    return {
        '.mat-slide-toggle-content': matTypographyLevelToStyles(config, 'body-1')
    };
}
