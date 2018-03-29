import { Theme } from '../interfaces';
import { matColor } from '../mat-color';

export function matPseudoCheckboxTheme(theme: Theme): Object {
    // NOTE(traviskaufman): While the spec calls for translucent blacks/whites for disabled colors,
    // this does not work well with elements layered on top of one another. To get around this we
    // blend the colors together based on the base color and the theme background.
    // const coloredBoxSelector: string = '.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-indeterminate';

    return {
        '.mat-pseudo-checkbox': {
            color: matColor(theme.foreground, 'secondary-text'),
            '&::after': {
                color: matColor(theme.background, 'background')
            }
        },
        // Default to the accent color. Note that the pseudo checkboxes are meant to inherit the
        // theme from their parent, rather than implementing their own theming, which is why we
        // don't attach to the `mat-*` classes.
        '.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-indeterminate, .mat-accent .mat-pseudo-checkbox-checked, .mat-accent .mat-pseudo-checkbox-indeterminate': {
            background: matColor(theme.accent)
        },
        '.mat-primary .mat-pseudo-checkbox-checked, .mat-primary .mat-pseudo-checkbox-indeterminate': {
            background: matColor(theme.primary)
        },
        '.mat-warn .mat-pseudo-checkbox-checked, .mat-warn .mat-pseudo-checkbox-indeterminate': {
            background: matColor(theme.warn)
        },
        '.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-indeterminate': {
            '&.mat-pseudo-checkbox-disabled': {
                background: theme['is-dark'] ? '#686868' : '#b0b0b0'
            }
        }
    };
}
