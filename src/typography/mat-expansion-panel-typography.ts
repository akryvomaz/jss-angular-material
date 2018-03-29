import {
    matFontSize,
    matFontWeight,
    matFontFamily
} from '../utils';

import { matTypographyLevelToStyles } from './mat-typography-level-to-styles';

import { TypographyConfig } from '../interfaces';

export function matExpansionPanelTypography(config: TypographyConfig): Object {
    return {
        '.mat-expansion-panel-header': {
            'font-family': matFontFamily(config, 'subheading-1'),
            'font-size': matFontSize(config, 'subheading-1'),
            'font-weight': matFontWeight(config, 'subheading-1')
        },
        '.mat-expansion-panel-content': matTypographyLevelToStyles(config, 'body-1')
    };
}
