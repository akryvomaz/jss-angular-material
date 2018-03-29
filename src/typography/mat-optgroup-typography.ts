import { matTypographyLevelToStyles } from './mat-typography-level-to-styles';

import { TypographyConfig } from '../interfaces';

export function matOptgroupTypography(config: TypographyConfig): Object {
    return {
        '.mat-optgroup-label': matTypographyLevelToStyles(config, 'body-2')
    };
}
