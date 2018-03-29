import { Theme } from '../interfaces';
import { matColor } from '../mat-color';

export function matButtonTheme(theme: Theme): Object {
    const primaryDefault: string = matColor(theme.primary, 'default');
    const accentDefault: string = matColor(theme.accent, 'default');
    const warnDefault: string = matColor(theme.warn, 'default');
    const primaryDefaultContrast: string = matColor(theme.primary, 'default-contrast', 0.2);
    const accentDefaultContrast: string = matColor(theme.accent, 'default-contrast', 0.2);
    const warnDefaultContrast: string = matColor(theme.warn, 'default-contrast', 0.2);
    const backgroundDisabledButton: string = matColor(theme.background, 'disabled-button');
    const backgroundRaisedButton: string = matColor(theme.background, 'raised-button');
    const foregroundText: string = matColor(theme.foreground, 'text');
    const colorDefaultContrast: Object = matButtonThemeColor(theme, 'color', 'default-contrast');

    return {
        '.mat-button, .mat-icon-button, .mat-stroked-button': {
            background: 'transparent',
            ...matButtonFocusColor(theme),
            ...matButtonThemeColor(theme, 'color')
        },
        '.mat-raised-button, .mat-fab, .mat-mini-fab': {
            // Default properties when not using any [color] value.
            color: foregroundText,
            'background-color': backgroundRaisedButton,
            ...colorDefaultContrast
        },
        '.mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary': {
            'background-color': primaryDefault
        },
        '.mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent': {
            'background-color': accentDefault
        },
        '.mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn': {
            'background-color': warnDefault
        },
        '.mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled]': {
            'background-color': backgroundDisabledButton
        },
        // Add ripple effect with contrast color to buttons that don't have a focus overlay.
        '.mat-raised-button.mat-primary .mat-ripple-element, .mat-fab.mat-primary .mat-ripple-element, .mat-mini-fab.mat-primary .mat-ripple-element': {
            'background-color': primaryDefaultContrast
        },
        '.mat-raised-button.mat-accent .mat-ripple-element, .mat-fab.mat-accent .mat-ripple-element, .mat-mini-fab.mat-accent .mat-ripple-element': {
            'background-color': accentDefaultContrast
        },
        '.mat-raised-button.mat-warn .mat-ripple-element, .mat-fab.mat-warn .mat-ripple-element, .mat-mini-fab.mat-warn .mat-ripple-element': {
            'background-color': warnDefaultContrast
        },
        // Add ripple effect with default color to flat buttons, which also have a focus overlay.
        '.mat-button': {
            ...matButtonRippleColor(theme, 'default', 0.1)
        },
        '.mat-flat-button': {
            // Default properties when not using any [color] value.
            color: foregroundText,
            'background-color': backgroundRaisedButton,
            ...colorDefaultContrast
        },
        '.mat-flat-button.mat-primary': {
            'background-color': primaryDefault
        },
        '.mat-flat-button.mat-accent': {
            'background-color': accentDefault
        },
        '.mat-flat-button.mat-warn': {
            'background-color': warnDefault
        },
        '.mat-flat-button.mat-primary[disabled], .mat-flat-button.mat-accent[disabled], .mat-flat-button.mat-warn[disabled], .mat-flat-button[disabled][disabled]': {
            'background-color': backgroundDisabledButton
        },
        // Add ripple effect with contrast color to buttons that don't have a focus overlay.
        '.mat-flat-button.mat-primary .mat-ripple-element': {
            'background-color': primaryDefaultContrast
        },
        '.mat-flat-button.mat-accent .mat-ripple-element': {
            'background-color': accentDefaultContrast
        },
        '.mat-flat-button.mat-warn .mat-ripple-element': {
            'background-color': warnDefaultContrast
        },
        // Add ripple effect with default color to the icon button. Ripple color needs to be stronger
        // since the icon button doesn't have a focus overlay.
        '.mat-icon-button': {
            ...matButtonRippleColor(theme, 'default')
        }
    };
}

// Applies a property to an mat-button element for each of the supported palettes.
function matButtonThemeColor(theme: Theme, property: string, color: string = 'default'): Object {
    return {
        '&.mat-primary': {
            [property]: matColor(theme.primary, color)
        },
        '&.mat-accent': {
            [property]: matColor(theme.accent, color)
        },
        '&.mat-warn': {
            [property]: matColor(theme.warn, color)
        },
        '&.mat-primary, &.mat-accent, &.mat-warn, &[disabled]': {
            '&[disabled]': {
                [property]: matColor(property === 'color' ? theme.foreground : theme.background, 'disabled-button')
            }
        }
    };
}

// Applies a focus style to an mat-button element for each of the supported palettes.
function matButtonFocusColor(theme: Theme): Object {
    return {
        '&.mat-primary .mat-button-focus-overlay': {
            'background-color': matColor(theme.primary, 0.12)
        },
        '&.mat-accent .mat-button-focus-overlay': {
            'background-color': matColor(theme.accent, 0.12)
        },
        '&.mat-warn .mat-button-focus-overlay': {
            'background-color': matColor(theme.warn, 0.12)
        },
        '&[disabled] .mat-button-focus-overlay': {
            'background-color': 'transparent'
        }
    };
}

function matButtonRippleColor(theme: Theme, hue: string | number, opacity: number = 0.2): Object {
    return {
        '&.mat-primary .mat-ripple-element': {
            'background-color': matColor(theme.primary, hue, opacity)
        },
        '&.mat-accent .mat-ripple-element': {
            'background-color': matColor(theme.accent, hue, opacity)
        },
        '&.mat-warn .mat-ripple-element': {
            'background-color': matColor(theme.warn, hue, opacity)
        }
    };
}
