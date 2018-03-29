import {
    create,
    StyleSheet
} from 'jss';
import global from 'jss-global';
import nested from 'jss-nested';

import { matCore } from './mat-core';

import { angularMaterialTheme } from './angular-material-theme';

import {
    Theme,
    TypographyConfig
} from './interfaces';

const jss: { createStyleSheet: <T>(styles: T, options?: { readonly link: boolean }) => StyleSheet<T> } = create({ plugins: [global(), nested()] });

export function createMaterialCoreStyles(typographyConfig: TypographyConfig = null, override: Object = {}, dynamic: boolean = false): StyleSheet<Object> {
    const styles: Object = {
        '@global': {
            ...matCore(typographyConfig),
            ...override
        }
    };

    return jss.createStyleSheet(styles, { link: dynamic });
}

export function createMaterialThemeStyles(theme: Theme, override: Object = {}, dynamic: boolean = false): StyleSheet<Object> {
    const styles: Object = {
        '@global': {
            ...angularMaterialTheme(theme),
            ...override
        }
    };

    return jss.createStyleSheet(styles, { link: dynamic });
}

export * from './interfaces';
export * from './palettes';
export * from './utils/rules-operations';
export * from './constants';
export * from './mat-color';
export * from './mat-dark-theme';
export * from './mat-light-theme';
export * from './mat-palette';
