import { Theme } from '../interfaces';
import { matColor } from '../mat-color';
import { matGrey } from '../palettes';

export function matTooltipTheme(theme: Theme): Object {
    return {
        '.mat-tooltip': {
            background: matColor(matGrey, 700, 0.9)
        }
    };
}
