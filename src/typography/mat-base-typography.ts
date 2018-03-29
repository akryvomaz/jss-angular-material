import { matTypographyLevelToStyles } from './mat-typography-level-to-styles';
import { matTypographyFontShorthand } from './mat-typography-font-shorthand';

import {
    multiplyRule,
    matFontSize,
    matFontWeight,
    matLineHeight,
    matFontFamily
} from '../utils';

import { TypographyConfig } from '../interfaces';

// TODO: selector is not used
export function matBaseTypography(config: TypographyConfig, selector: string = '.mat-typography'): Object {
    return {
        '.mat-h1, .mat-headline, .mat-typography h1': {
            ...matTypographyLevelToStyles(config, 'headline'),
            margin: '0 0 16px'
        },
        '.mat-h2, .mat-title, .mat-typography h2': {
            ...matTypographyLevelToStyles(config, 'title'),
            margin: '0 0 16px'
        },
        '.mat-h3, .mat-subheading-2, .mat-typography h3': {
            ...matTypographyLevelToStyles(config, 'subheading-2'),
            margin: '0 0 16px'
        },
        '.mat-h4, .mat-subheading-1, .mat-typography h4': {
            ...matTypographyLevelToStyles(config, 'subheading-1'),
            margin: '0 0 16px'
        },
        // Note: the spec doesn't have anything that would correspond to h5 and h6, but we add these for
        // consistency. The font sizes come from the Chrome user agent styles which have h5 at 0.83em
        // and h6 at 0.67em.
        '.mat-h5, .mat-typography h5': {
            ...matTypographyFontShorthand(
                multiplyRule(matFontSize(config, 'body-1'), 0.83),
                matFontWeight(config, 'body-1'),
                matLineHeight(config, 'body-1'),
                matFontFamily(config, 'body-1')
            ),
            margin: '0 0 12px'
        },
        '.mat-h6, .mat-typography h6': {
            ...matTypographyFontShorthand(
                multiplyRule(matFontSize(config, 'body-1'), 0.67),
                matFontWeight(config, 'body-1'),
                matLineHeight(config, 'body-1'),
                matFontFamily(config, 'body-1')
            ),
            margin: '0 0 12px'
        },
        '.mat-body-strong, .mat-body-2': matTypographyLevelToStyles(config, 'body-2'),
        '.mat-body, .mat-body-1, .mat-typography': matTypographyLevelToStyles(config, 'body-1'),
        '.mat-body p, .mat-body-1 p, .mat-typography p': {
            margin: '0 0 12px'
        },
        '.mat-small, .mat-caption': matTypographyLevelToStyles(config, 'caption'),
        // Note: The spec doesn't mention letter spacing. The value comes from
        // eyeballing it until it looked exactly like the spec examples.
        '.mat-display-4, .mat-typography .mat-display-4': {
            ...matTypographyLevelToStyles(config, 'display-4'),
            margin: '0 0 56px',
            'letter-spacing': '-0.05em'
        },
        '.mat-display-3, .mat-typography .mat-display-3': {
            ...matTypographyLevelToStyles(config, 'display-3'),
            margin: '0 0 64px',
            'letter-spacing': '-0.02em'
        },
        '.mat-display-2, .mat-typography .mat-display-2': {
            ...matTypographyLevelToStyles(config, 'display-2'),
            margin: '0 0 64px',
            'letter-spacing': '-0.005em'
        },
        '.mat-display-1, .mat-typography .mat-display-1': {
            ...matTypographyLevelToStyles(config, 'display-1'),
            margin: '0 0 64px'
        }
    };
}
