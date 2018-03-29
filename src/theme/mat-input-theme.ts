import { Theme } from '../interfaces';
import { matColor } from '../mat-color';
import { matControlPlaceholderColor } from './mat-control-placeholder-color';

export function matInputTheme(theme: Theme): Object {
    return {
        '.mat-input-element:disabled': {
            color: matColor(theme.foreground, 'disabled-text')
        },
        '.mat-input-element': {
            'caret-color': matColor(theme.primary),
            ...inputPlaceholder(theme)
        },
        '.mat-accent .mat-input-element': {
            'caret-color': matColor(theme.accent)
        },
        '.mat-warn .mat-input-element, .mat-form-field-invalid .mat-input-element': {
            'caret-color': matColor(theme.warn)
        }
    };
}

function inputPlaceholder(theme: Theme): Object {
    const content: Object = {
        color: matControlPlaceholderColor(theme)
    };

    return {
        '&::placeholder': content,
        '&::-moz-placeholder': content,
        '&::-webkit-input-placeholder': content,
        '&:-ms-input-placeholder': content
    };
}
