import {
    matFontSize,
    matFontWeight,
    matLineHeight,
    matFontFamily
} from '../utils';

import { matTypographyFontShorthand } from './mat-typography-font-shorthand';

import { TypographyConfig } from '../interfaces';

export function matTypographyLevelToStyles(config: TypographyConfig, level: string): Object {
    const fontSize: number | string = matFontSize(config, level);
    const fontWeight: number | string = matFontWeight(config, level);
    const lineHeight: number | string = matLineHeight(config, level);
    const fontFamily: string = matFontFamily(config, level);

    return matTypographyFontShorthand(fontSize, fontWeight, lineHeight, fontFamily);
}
