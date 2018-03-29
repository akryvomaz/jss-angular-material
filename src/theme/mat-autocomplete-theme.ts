import { Theme } from '../interfaces';
import { matColor } from '../mat-color';

export function matAutocompleteTheme(theme: Theme): Object {
    return {
        '.mat-autocomplete-panel': {
            background: matColor(theme.background, 'card'),
            color: matColor(theme.foreground, 'text'),
            // Selected options in autocompletes should not be gray, but we
            // only want to override the background for selected options if
            // they are *not* in hover or focus state. This change has to be
            // made here because base option styles are shared between the
            // autocomplete and the select.
            '& .mat-option.mat-selected:not(.mat-active):not(:hover)': {
                background: matColor(theme.background, 'card'),
                '&:not(.mat-option-disabled)': {
                    color: matColor(theme.foreground, 'text')
                }
            }
        }
    };
}
