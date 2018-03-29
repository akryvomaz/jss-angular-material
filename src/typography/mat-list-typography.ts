import {
    matFontFamily,
    matFontSize,
    matLineBase,
    matFontWeight
} from '../utils';

import { TypographyConfig } from '../interfaces';

export function matListTypography(config: TypographyConfig): Object {
    const fontFamily: string = matFontFamily(config);

    return {
        '.mat-list-item': {
            'font-family': fontFamily
        },
        '.mat-list-option': {
            'font-family': fontFamily
        },
        // Default list
        '.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item': {
            'font-size': matFontSize(config, 'subheading-2'),
            ...matLineBase(matFontSize(config, 'body-1'))
        },
        '.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option': {
            'font-size': matFontSize(config, 'subheading-2'),
            ...matLineBase(matFontSize(config, 'body-1'))
        },
        '.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader': {
            'font-family': matFontFamily(config, 'body-2'),
            'font-size': matFontSize(config, 'body-2'),
            'font-weight': matFontWeight(config, 'body-2')
        },
        // Dense list
        '.mat-list[dense] .mat-list-item, .mat-nav-list[dense] .mat-list-item, .mat-selection-list[dense] .mat-list-item': {
            'font-size': matFontSize(config, 'caption'),
            ...matLineBase(matFontSize(config, 'caption'))
        },
        '.mat-list[dense] .mat-list-option, .mat-nav-list[dense] .mat-list-option, .mat-selection-list[dense] .mat-list-option': {
            'font-size': matFontSize(config, 'caption'),
            ...matLineBase(matFontSize(config, 'caption'))
        },
        '.mat-list[dense] .mat-subheader, .mat-nav-list[dense] .mat-subheader, .mat-selection-list[dense] .mat-subheader': {
            'font-family': fontFamily,
            'font-size': matFontSize(config, 'caption'),
            'font-weight': matFontWeight(config, 'body-2')
        }
    };
}
