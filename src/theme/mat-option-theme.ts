import { Theme } from '../interfaces';
import { matColor } from '../mat-color';

export function matOptionTheme(theme: Theme): Object {
    const foregroundText: string = matColor(theme.foreground, 'text');
    const backgroundHover: string = matColor(theme.background, 'hover');

    return {
        '.mat-option': {
            color: foregroundText,
            '&:hover:not(.mat-option-disabled), &:focus:not(.mat-option-disabled)': {
                background: backgroundHover
            },
            '.mat-primary &.mat-selected:not(.mat-option-disabled)': {
                color: matColor(theme.primary)
            },
            '.mat-accent &.mat-selected:not(.mat-option-disabled)': {
                color: matColor(theme.accent)
            },
            '.mat-warn &.mat-selected:not(.mat-option-disabled)': {
                color: matColor(theme.warn)
            },
            // In multiple mode there is a checkbox to show that the option is selected.
            '&.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled)': {
                background: backgroundHover
            },
            '&.mat-active': {
                background: backgroundHover,
                color: foregroundText
            },
            '&.mat-option-disabled': {
                color: matColor(theme.foreground, 'hint-text')
            }
        }
    };
}
