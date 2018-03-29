import {
    Theme,
    Palette
} from '../interfaces';
import { matColor } from '../mat-color';

export function matTabsTheme(theme: Theme): Object {
    const headerBorder: string = `1px solid ${matColor(theme.foreground, 'divider')}`;
    const foregroundText: string = matColor(theme.foreground, 'text');
    const foregroundDisabledText: string = matColor(theme.foreground, 'disabled-text');

    const themeColors: Object = {
        primary: theme.primary,
        accent: theme.accent,
        warn: theme.warn
    };

    const result: Object = {
        '.mat-tab-nav-bar, .mat-tab-header': {
            'border-bottom': headerBorder
        },
        '.mat-tab-group-inverted-header': {
            '& .mat-tab-nav-bar, .mat-tab-header': {
                'border-top': headerBorder,
                'border-bottom': 'none'
            }
        },
        '.mat-tab-label, .mat-tab-link': {
            color: foregroundText,
            '&.mat-tab-disabled': {
                color: foregroundDisabledText
            }
        },
        '.mat-tab-header-pagination-chevron': {
            'border-color': foregroundText
        },
        '.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron': {
            'border-color': foregroundDisabledText
        },
        // Remove header border when there is a background color
        '.mat-tab-group[class*=\'mat-background-\'] .mat-tab-header, .mat-tab-nav-bar[class*=\'mat-background-\']': {
            'border-bottom': 'none',
            'border-top': 'none'
        }
    };

    Object.keys(themeColors).map((key: string) => {
        const color: Palette = themeColors[key];

        // Set the foreground color of the tabs
        result[`.mat-tab-group.mat-${key}, .mat-tab-nav-bar.mat-${key}`] = {
            ...matTabLabelFocus(color),
            ...matInkBar(color)
        };
        result[`.mat-tab-group.mat-${key}.mat-background-${key}, .mat-tab-nav-bar.mat-${key}.mat-background-${key}`] = matInkBar(color, 'default-contrast');
    });
    Object.keys(themeColors).map((key: string) => {
        const color: Palette = themeColors[key];

        // Set background color of the tabs and override focus color
        result[`.mat-tab-group.mat-background-${key}, .mat-tab-nav-bar.mat-background-${key}`] = {
            ...matTabLabelFocus(color),
            ...matTabsBackground(color)
        };
    });

    return result;
}

function matTabLabelFocus(tabFocusColor: Palette): Object {
    return {
        '& .mat-tab-label:not(.mat-tab-disabled):focus, .mat-tab-link:not(.mat-tab-disabled):focus': {
            'background-color': matColor(tabFocusColor, 'lighter', 0.3)
        }
    };
}

function matInkBar(color: Palette, hue: string = 'default'): Object {
    return {
        '& .mat-ink-bar': {
            'background-color': matColor(color, hue)
        }
    };
}

function matTabsBackground(backgroundColor: Palette): Object {
    const backgroundDefaultContrast: string = matColor(backgroundColor, 'default-contrast');
    const backgroundDefaultContrast04: string = matColor(backgroundColor, 'default-contrast', 0.4);

    return {
        // Set background color for the tab group
        '& .mat-tab-header, .mat-tab-links': {
            'background-color': matColor(backgroundColor)
        },
        // Set labels to contrast against background
        '& .mat-tab-label, .mat-tab-link': {
            color: backgroundDefaultContrast
        },
        '& .mat-tab-label.mat-tab-disabled, .mat-tab-link.mat-tab-disabled': {
            color: backgroundDefaultContrast04
        },
        // Set pagination chevrons to contrast background
        '& .mat-tab-header-pagination-chevron': {
            'border-color': backgroundDefaultContrast
        },
        '& .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron': {
            'border-color': backgroundDefaultContrast04
        },
        // Set ripples color to be the contrast color of the new background. Otherwise the ripple
        // color will be based on the app background color.
        '& .mat-ripple-element': {
            'background-color': matColor(backgroundColor, 'default-contrast', 0.12)
        }
    };
}
