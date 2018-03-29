import { Theme } from '../interfaces';
import { matColor } from '../mat-color';

export function matFormFieldTheme(theme: Theme): Object {
    const primaryColor: string = matColor(theme.primary);
    const accentColor: string = matColor(theme.accent);
    const warnColor: string = matColor(theme.warn);
    const foregroundSecondaryText: string = matColor(theme.foreground, 'secondary-text');

    // Underline colors.
    const underlineColor: string = matColor(theme.foreground, 'divider', theme['is-dark'] ? 0.7 : 0.42);

    return {
        '.mat-form-field-label': {
            color: foregroundSecondaryText
        },
        '.mat-hint': {
            color: foregroundSecondaryText
        },
        '.mat-focused .mat-form-field-label': {
            color: primaryColor,
            '&.mat-accent': {
                color: accentColor
            },
            '&.mat-warn': {
                color: warnColor
            }
        },
        '.mat-focused .mat-form-field-required-marker': {
            color: accentColor
        },
        '.mat-form-field-underline': {
            'background-color': underlineColor
        },
        '.mat-form-field-disabled .mat-form-field-underline': matControlDisabledUnderline(underlineColor),
        '.mat-form-field-ripple': {
            'background-color': primaryColor,
            '&.mat-accent': {
                'background-color': accentColor
            },
            '&.mat-warn': {
                'background-color': warnColor
            }
        },
        // Styling for the error state of the form field. Note that while the same can be
        // achieved with the ng-* classes, we use this approach in order to ensure that the same
        // logic is used to style the error state and to show the error messages.
        '.mat-form-field-invalid': {
            '& .mat-form-field-label': {
                color: warnColor
            },
            '& .mat-form-field-label.mat-accent, .mat-form-field-label .mat-form-field-required-marker': {
                color: warnColor
            },
            '& .mat-form-field-ripple': {
                'background-color': warnColor
            }
        },
        '.mat-error': {
            color: warnColor
        }
    };
}

// Renders a gradient for showing the dashed line when the input is disabled.
// Unlike using a border, a gradient allows us to adjust the spacing of the dotted line
// to match the Material Design spec.
function matControlDisabledUnderline(color: string): Object {
    return {
        'background-image': `linear-gradient(to right, ${color} 0%, ${color} 33%, transparent 0%)`,
        'background-size': '4px 1px',
        'background-repeat': 'repeat-x'
    };
}
