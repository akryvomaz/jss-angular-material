import { Theme } from '../interfaces';
import { matColor } from '../mat-color';

export function matDatepickerTheme(theme: Theme): Object {
    const foregroundIcon: string = matColor(theme.foreground, 'icon');
    const foregroundText: string = matColor(theme.foreground, 'text');
    const foregroundHintText: string = matColor(theme.foreground, 'hint-text');
    const primaryDefaultContrast: string = matColor(theme.primary, 'default-contrast');
    const primary: string = matColor(theme.primary);

    return {
        '.mat-datepicker-content': {
            'background-color': matColor(theme.background, 'card'),
            color: foregroundText
        },
        '.mat-calendar-arrow': {
            'border-top-color': foregroundIcon
        },
        '.mat-calendar-next-button, .mat-calendar-previous-button': {
            color: foregroundIcon
        },
        '.mat-calendar-table-header': {
            color: foregroundHintText
        },
        '.mat-calendar-table-header-divider::after': {
            background: matColor(theme.foreground, 'divider')
        },
        '.mat-calendar-body-label': {
            color: matColor(theme.foreground, 'secondary-text')
        },
        '.mat-calendar-body-cell-content': {
            color: foregroundText,
            'border-color': 'transparent',
            '.mat-calendar-body-disabled > &:not(.mat-calendar-body-selected)': {
                color: matColor(theme.foreground, 'disabled-text')
            }
        },
        ':not(.mat-calendar-body-disabled):hover, .cdk-keyboard-focused .mat-calendar-body-active, .cdk-program-focused .mat-calendar-body-active': {
            '& > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected)': {
                'background-color': matColor(theme.background, 'hover')
            }
        },
        '.mat-calendar-body-selected': {
            'background-color': primary,
            color: primaryDefaultContrast
        },
        '.mat-calendar-body-disabled > .mat-calendar-body-selected': {
            'background-color': `fade-out(${primary}, 0.6)`
        },
        '.mat-calendar-body-today': {
            '&:not(.mat-calendar-body-selected)': {
                // Note: though it's not text, the border is a hint about the fact that this is today's date,
                // so we use the hint color.
                'border-color': foregroundHintText
            },
            '&.mat-calendar-body-selected': {
                'box-shadow': `inset 0 0 0 1px ${primaryDefaultContrast}`
            }
        },
        '.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected)': {
            'border-color': `fade-out(${foregroundHintText}, 0.2)`
        },
        '.mat-datepicker-toggle-active': {
            color: primary
        }
    };
}
