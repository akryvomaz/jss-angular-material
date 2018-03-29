import { Theme } from '../interfaces';
import { matColor } from '../mat-color';

export function matExpansionPanelTheme(theme: Theme): Object {
    const foregroundText: string = matColor(theme.foreground, 'text');

    return {
        '.mat-expansion-panel': {
            background: matColor(theme.background, 'card'),
            color: foregroundText
        },
        '.mat-action-row': {
            'border-top-color': matColor(theme.foreground, 'divider')
        },
        '.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header': {
            '&:not([aria-disabled=\'true\'])': {
                '&.cdk-keyboard-focused, &.cdk-program-focused, &:hover': {
                    background: matColor(theme.background, 'hover')
                }
            }
        },
        '.mat-expansion-panel-header-title': {
            color: foregroundText
        },
        '.mat-expansion-panel-header-description, .mat-expansion-indicator::after': {
            color: matColor(theme.foreground, 'secondary-text')
        },
        '.mat-expansion-panel-header[aria-disabled=\'true\']': {
            color: matColor(theme.foreground, 'disabled-button'),
            '& .mat-expansion-panel-header-title, .mat-expansion-panel-header-description': {
                color: 'inherit'
            }
        }
    };
}
