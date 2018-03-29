import { Theme } from '../interfaces';
import { matColor } from '../mat-color';

// Figures out the color of the placeholder for a form control.
// Used primarily to prevent the various form controls from
// becoming out of sync since these colors aren't in a pallette.
export function matControlPlaceholderColor(theme: Theme): string {
    return matColor(theme.foreground, 'secondary-text', theme['is-dark'] ? 0.5 : 0.42);
}
