import { Theme } from '../interfaces';
import { rgba } from '../mat-color';
import { matRippleColorOpacity } from '../constants';

/* Theme for the ripple elements.*/
export function matRippleTheme(theme: Theme): Object {
    return {
        '.mat-ripple-element': {
            'background-color': rgba(theme.foreground.base, matRippleColorOpacity)
        }
    };
}
