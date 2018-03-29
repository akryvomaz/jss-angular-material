import { Theme } from '../interfaces';
import { matColor } from '../mat-color';

export function matCheckboxTheme(theme: Theme): Object {
    // The color of the checkbox's checkmark / mixedmark.
    const checkboxMarkColor: string = matColor(theme.background, 'background');

    // NOTE(traviskaufman): While the spec calls for translucent blacks/whites for disabled colors,
    // this does not work well with elements layered on top of one another. To get around this we
    // blend the colors together based on the base color and the theme background.
    const disabledColor: string = theme['is-dark'] ? '#686868' : '#b0b0b0';

    return {
        '.mat-checkbox-frame': {
            'border-color': matColor(theme.foreground, 'secondary-text')
        },
        '.mat-checkbox-checkmark': {
            fill: checkboxMarkColor
        },
        '.mat-checkbox-checkmark-path': {
            // !important is needed here because a stroke must be set as an attribute on the SVG in order
            // for line animation to work properly.
            stroke: `${checkboxMarkColor} !important`
        },
        '.mat-checkbox-mixedmark': {
            'background-color': checkboxMarkColor
        },
        '.mat-checkbox-indeterminate, .mat-checkbox-checked': {
            '&.mat-primary .mat-checkbox-background': {
                'background-color': matColor(theme.primary)
            },
            '&.mat-accent .mat-checkbox-background': {
                'background-color': matColor(theme.accent)
            },
            '&.mat-warn .mat-checkbox-background': {
                'background-color': matColor(theme.warn)
            }
        },
        '.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background, .mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background': {
            'background-color': disabledColor
        },
        '.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame': {
            'border-color': disabledColor
        },
        '.mat-checkbox-disabled .mat-checkbox-label': {
            color: disabledColor
        },
        '.mat-checkbox:not(.mat-checkbox-disabled)': {
            '&.mat-primary .mat-checkbox-ripple .mat-ripple-element': {
                'background-color': matColor(theme.primary, 0.26)
            },
            '&.mat-accent .mat-checkbox-ripple .mat-ripple-element': {
                'background-color': matColor(theme.accent, 0.26)
            },
            '&.mat-warn .mat-checkbox-ripple .mat-ripple-element': {
                'background-color': matColor(theme.warn, 0.26)
            }
        }
    };
}
