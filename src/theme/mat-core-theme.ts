import { Theme } from '../interfaces';
import { matColor } from '../mat-color';
import { matRippleTheme } from './mat-ripple-theme';
import { matOptionTheme } from './mat-option-theme';
import { matOptgroupTheme } from './mat-optgroup-theme';
import { matPseudoCheckboxTheme } from './mat-pseudo-checkbox-theme';

export function matCoreTheme(theme: Theme): Object {
    return {
        // Wrapper element that provides the theme background when the
        // user's content isn't inside of a `mat-sidenav-container`.
        ...matRippleTheme(theme),
        ...matOptionTheme(theme),
        ...matOptgroupTheme(theme),
        ...matPseudoCheckboxTheme(theme),
        '.mat-app-background': {
            'background-color': matColor(theme.background, 'background'),
            color: matColor(theme.foreground, 'text')
        },
        // Marker that is used to determine whether the user has added a theme to their page.
        '.mat-theme-loaded-marker': {
            display: 'none'
        }
    };
}
