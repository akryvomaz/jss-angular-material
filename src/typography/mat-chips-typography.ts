import { TypographyConfig } from '../interfaces';

export function matChipsTypography(config: TypographyConfig): Object {
    return {
        '.mat-chip': {
            'font-size': '13px',
            'line-height': '18px'
        },
        '.mat-chip .mat-chip-remove.mat-icon': {
            'font-size': '18px'
        }
    };
}
