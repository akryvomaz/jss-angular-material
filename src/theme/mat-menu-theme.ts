import { Theme } from '../interfaces';
import { matColor } from '../mat-color';

export function matMenuTheme(theme: Theme): Object {
    return {
        '.mat-menu-panel': {
            background: matColor(theme.background, 'card')
        },
        '.mat-menu-item': {
            background: 'transparent',
            color: matColor(theme.foreground, 'text'),
            '&[disabled]': {
                color: matColor(theme.foreground, 'disabled')
            }
        },
        '.mat-menu-item .mat-icon:not([color]), .mat-menu-item-submenu-trigger::after': {
            color: matColor(theme.foreground, 'icon')
        },
        '.mat-menu-item:hover, .mat-menu-item.cdk-program-focused, .mat-menu-item.cdk-keyboard-focused, .mat-menu-item-highlighted': {
            '&:not([disabled])': {
                background: matColor(theme.background, 'hover')
            }
        }
    };
}
