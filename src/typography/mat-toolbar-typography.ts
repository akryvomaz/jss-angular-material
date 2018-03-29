import { matTypographyLevelToStyles } from './mat-typography-level-to-styles';

import { TypographyConfig } from '../interfaces';

export function matToolbarTypography(config: TypographyConfig): Object {
    return {
        '.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6': {
            ...matTypographyLevelToStyles(config, 'title'),
            margin: 0
        }
    };
}
