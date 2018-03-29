import { Theme } from '../interfaces';
import {
    matColor,
    invert
} from '../mat-color';

export function matSidenavTheme(theme: Theme): Object {
    const backgroundDialog: string = matColor(theme.background, 'dialog');
    const foregroundText: string = matColor(theme.foreground, 'text');

    return {
        '.mat-drawer-container': {
            'background-color': matColor(theme.background, 'background'),
            color: foregroundText
        },
        '.mat-drawer': {
            'background-color': backgroundDialog,
            color: foregroundText,
            '&.mat-drawer-push': {
                'background-color': backgroundDialog
            }
        },
        '.mat-drawer-backdrop.mat-drawer-shown': {
            // We use invert() here to have the darken the background color expected to be used. If the
            // background is light, we use a dark backdrop. If the background is dark,
            // we use a light backdrop.
            'background-color': invert(matColor(theme.background, 'card', 0.6))
        }
    };
}
