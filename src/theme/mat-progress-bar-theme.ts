import { Theme } from '../interfaces';
import { matColor } from '../mat-color';

export function matProgressBarTheme(theme: Theme): Object {
    const primaryLighter: string = matColor(theme.primary, 'lighter');
    const accentLighter: string = matColor(theme.accent, 'lighter');
    const warnLighter: string = matColor(theme.warn, 'lighter');

    return {
        '.mat-progress-bar-background': {
            fill: primaryLighter
        },
        '.mat-progress-bar-buffer': {
            'background-color': primaryLighter
        },
        '.mat-progress-bar-fill::after': {
            'background-color': matColor(theme.primary)
        },
        '.mat-progress-bar.mat-accent': {
            '& .mat-progress-bar-background': {
                fill: accentLighter
            },
            '& .mat-progress-bar-buffer': {
                'background-color': accentLighter
            },
            '& .mat-progress-bar-fill::after': {
                'background-color': matColor(theme.accent)
            }
        },
        '.mat-progress-bar.mat-warn': {
            '& .mat-progress-bar-background': {
                fill: warnLighter
            },
            '& .mat-progress-bar-buffer': {
                'background-color': warnLighter
            },
            '& .mat-progress-bar-fill::after': {
                'background-color': matColor(theme.warn)
            }
        }
    };
}
