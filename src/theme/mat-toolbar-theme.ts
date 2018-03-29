import {
    Theme,
    Palette
} from '../interfaces';
import { matColor } from '../mat-color';

export function matToolbarTheme(theme: Theme): Object {
    return {
        '.mat-toolbar': {
            background: matColor(theme.background, 'app-bar'),
            color: matColor(theme.foreground, 'text'),
            '&.mat-primary': matToolbarColor(theme.primary),
            '&.mat-accent': matToolbarColor(theme.accent),
            '&.mat-warn': matToolbarColor(theme.warn)
        }
    };
}

function matToolbarColor(palette: Palette): Object {
    return {
        background: matColor(palette),
        color: matColor(palette, 'default-contrast')
    };
}
