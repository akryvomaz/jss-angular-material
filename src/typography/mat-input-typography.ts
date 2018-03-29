import {
    matLineHeight,
    roundRule
} from '../utils';

import { TypographyConfig } from '../interfaces';

export function matInputTypography(config: TypographyConfig): Object {
    // The unit-less line-height from the font config.
    const lineHeight: number = matLineHeight(config, 'input') as number;

    // The amount of space between the top of the line and the top of the actual text
    // (as a fraction of the font-size).
    const lineSpacing: number = -(lineHeight - 1) / 2;

    return {
        // <input> elements seem to have their height set slightly too large on Safari causing the text to
        // be misaligned w.r.t. the placeholder. Adding this margin corrects it.
        'input.mat-input-element': {
            'margin-top': `${roundRule(lineSpacing)}em`
        }
    };
}
