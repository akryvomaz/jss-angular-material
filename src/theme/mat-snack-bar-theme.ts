import { Theme } from '../interfaces';
import {
    matColor,
    rgba
} from '../mat-color';
import { matGrey } from '../palettes';
import {
    darkPrimaryText,
    lightPrimaryText
} from '../constants';

export function matSnackBarTheme(theme: Theme): Object {
    return {
        '.mat-snack-bar-container': {
            background: theme['is-dark'] ? matGrey[50] : '#323232',
            color: rgba(theme['is-dark'] ? darkPrimaryText : lightPrimaryText)
        },
        '.mat-simple-snackbar-action': {
            color: theme['is-dark'] ? 'inherit' : matColor(theme.accent)
        }
    };
}
