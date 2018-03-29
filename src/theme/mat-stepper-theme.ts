import { Theme } from '../interfaces';
import { matColor } from '../mat-color';

export function matStepperTheme(theme: Theme): Object {
    const primaryDefaultContrast: string = matColor(theme.primary, 'default-contrast');
    const foregroundDivider: string = matColor(theme.foreground, 'divider');
    const disabledText: string = matColor(theme.foreground, 'disabled-text');

    return {
        '.mat-step-header': {
            '&.cdk-keyboard-focused, &.cdk-program-focused, &:hover': {
                'background-color': matColor(theme.background, 'hover')
            },
            '& .mat-step-label, .mat-step-optional': {
                color: disabledText
            },
            '& .mat-step-icon': {
                'background-color': matColor(theme.primary),
                color: primaryDefaultContrast
            },
            '& .mat-step-icon-not-touched': {
                'background-color': disabledText,
                color: primaryDefaultContrast
            },
            '& .mat-step-label.mat-step-label-active': {
                color: matColor(theme.foreground, 'text')
            }
        },
        '.mat-stepper-horizontal, .mat-stepper-vertical': {
            'background-color': matColor(theme.background, 'card')
        },
        '.mat-stepper-vertical-line::before': {
            'border-left-color': foregroundDivider
        },
        '.mat-stepper-horizontal-line': {
            'border-top-color': foregroundDivider
        }
    };
}
