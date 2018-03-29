import {
    Theme,
    Palette
} from '../interfaces';
import { matColor } from '../mat-color';
import { matGrey } from '../palettes';

export function matSlideToggleTheme(theme: Theme): Object {
    // Color hues based on the specs, which prescribe different hues for dark and light themes
    // https://material.google.com/components/selection-controls.html#selection-controls-switch
    const thumbCheckedHue: number = theme['is-dark'] ? 200 : 500;

    // Ripple colors are based on the current palette and the state of the slide-toggle.
    // See https://material.google.com/components/selection-controls.html#selection-controls-switch
    const rippleCheckedOpacity: number = 0.12;
    const rippleUncheckedColor: string = matColor(theme.foreground, 'base', theme['is-dark'] ? 0.12 : 0.06);

    return {
        '.mat-slide-toggle': {
            '&.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb': {
                'background-color': matColor(theme.accent, thumbCheckedHue)
            },
            '&.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar': {
                'background-color': matColor(theme.accent, thumbCheckedHue, 0.5)
            },
            '&:not(.mat-checked) .mat-ripple-element': {
                'background-color': rippleUncheckedColor
            },
            '& .mat-ripple-element': {
                'background-color': matColor(theme.accent, thumbCheckedHue, rippleCheckedOpacity)
            },
            ...slideToggleChecked('&.mat-primary', theme.primary, thumbCheckedHue),
            ...slideToggleRipple('&.mat-primary', rippleUncheckedColor, matColor(theme.primary, thumbCheckedHue, rippleCheckedOpacity)),
            ...slideToggleChecked('&.mat-warn', theme.warn, thumbCheckedHue),
            ...slideToggleRipple('&.mat-warn', rippleUncheckedColor, matColor(theme.warn, thumbCheckedHue, rippleCheckedOpacity))
        },
        '.mat-disabled': {
            '& .mat-slide-toggle-thumb': {
                // The thumb of the slide-toggle always uses the hue 400 of the grey palette in dark
                // or light themes. Since this is very specific to the slide-toggle component, we're not
                // providing it in the background palette.
                'background-color': matColor(matGrey, theme['is-dark'] ? 800 : 400)
            },
            '& .mat-slide-toggle-bar': {
                'background-color': theme['is-dark'] ? 'rgba(white, 0.12)' : 'rgba(black, 0.1)'
            }
        },
        '.mat-slide-toggle-thumb': {
            'background-color': matColor(matGrey, theme['is-dark'] ? 400 : 50)
        },
        '.mat-slide-toggle-bar': {
            'background-color': matColor(theme.foreground, 'disabled')
        }
    };
}

function slideToggleChecked(key: string, palette: Palette, thumbCheckedHue: number): Object {
    // Do not apply the checked colors if the toggle is disabled, because the
    // specificity would be to high for the disabled styles.
    return {
        [`${key}.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb`]: {
            'background-color': matColor(palette, thumbCheckedHue)
        },
        [`${key}.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar`]: {
            'background-color': matColor(palette, thumbCheckedHue, 0.5)
        }
    };
}

// Applies the specified colors to the slide-toggle ripple elements.
function slideToggleRipple(key: string, rippleUncheckedColor: string, rippleCheckedColor: string): Object {
    return {
        [`${key}:not(.mat-checked) .mat-ripple-element`]: {
            'background-color': rippleUncheckedColor
        },
        [`${key} .mat-ripple-element`]: {
            'background-color': rippleCheckedColor
        }
    };
}
