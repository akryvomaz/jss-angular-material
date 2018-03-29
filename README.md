# JSS Material Design styles for Angular
[![Build Status](https://travis-ci.org/akryvomaz/jss-angular-material.svg?branch=master)](https://travis-ci.org/akryvomaz/jss-angular-material)

This is the copy of [Angular Material](#https://github.com/angular/material2) style theme based on [JSS](#https://github.com/cssinjs/jss).

[More information about Angular Material theme](#https://material.angular.io/guide/theming).

Supported Angular Material version - *__5.2.4__*.
## Features
- Dynamic Angular Material styles.
- Access to Angular Material styles from JS.
- Overriding default Angular Material styles.
## Installation
```bash
npm install -S jss-angular-material
```
## Example
```ts
import { NgModule } from '@angular/core';
import { StyleSheet } from 'jss';
import { Observable } from 'rxjs/Observable';

import {
    createMaterialCoreStyles,
    createMaterialThemeStyles,
    matPalette,
    matLightTheme,
    Palette,
    Theme,

} from 'jss-angular-material';

@NgModule({})
export class JssModule {
    constructor() {
        const typographyConfig: TypographyConfig = null; // use the default typography config
        const coreOverrides: Object = {}; // do not override any core styles (optional parameter)
        const dynamicCoreStyles = false; // static core styles

        // create Angular Material core css from provided config and attach it to the head of document
        createMaterialCoreStyles(typographyConfig, coreOverrides, dynamicCoreStyles).attach();

        // https://material.io/guidelines/style/color.html#color-color-palette
        const primary: Palette = matPalette(primaryPalette, 500, 100, 900);
        const accent: Palette = matPalette(accentPalette, 500, 100, 900);
        const warn: Palette = matPalette(warnPalette, 500, 100, 900);

        const theme: Theme = matLightTheme(primary, accent, warn);

        const stream$ = Observable.create(observer => observer.next('red'));

        // Angular Material styles to override.
        const themeOverrides: Object = {
            '.mat-snack-bar-container': stream$,
            '.mat-toolbar': {
                background: 'green'
            }
        };

        // to support rxjs observables, styles have to be dynamic
        const dynamicThemeStyles: boolean = true;

        // create Angular Material theme css from provided config and attach it to the head of document
        createMaterialThemeStyles(theme, themeOverrides, dynamicThemeStyles).attach();
    }
}

const primaryPalette: Palette = {
    50: '#E3F2FD',
    100: '#BBDEFB',
    200: '#90CAF9',
    300: '#64B5F6',
    400: '#42A5F5',
    500: '#2196F3',
    600: '#1E88E5',
    700: '#1976D2',
    800: '#1565C0',
    900: '#0D47A1',
    contrast: {
        50: 'black',
        100: 'black',
        150: 'black',
        200: 'black',
        225: 'black',
        250: 'black',
        300: 'black',
        350: 'black',
        400: 'black',
        500: 'black',
        600: 'black',
        700: 'black',
        800: 'black',
        900: 'black'
    }
};

const accentPalette: Palette = {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    contrast: {
        50: 'black',
        100: 'black',
        150: 'black',
        200: 'black',
        225: 'black',
        250: 'black',
        300: 'black',
        350: 'black',
        400: 'black',
        500: 'black',
        600: 'black',
        700: 'black',
        800: 'black',
        900: 'black'
    }
};

const warnPalette: Palette = {
    50: '#FFEBEE',
    100: '#FFCDD2',
    200: '#EF9A9A',
    300: '#E57373',
    400: '#EF5350',
    500: '#F44336',
    600: '#E53935',
    700: '#D32F2F',
    800: '#C62828',
    900: '#B71C1C',
    contrast: {
        50: 'black',
        100: 'black',
        150: 'black',
        200: 'black',
        225: 'black',
        250: 'black',
        300: 'black',
        350: 'black',
        400: 'black',
        500: 'black',
        600: 'black',
        700: 'black',
        800: 'black',
        900: 'black'
    }
};
```
## Testing
```bash
npm test
```
## License
MIT
