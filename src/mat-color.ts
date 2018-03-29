import * as cssColorToHex from 'colornames';

// Gets a color from a theme palette (the output of mat-palette).
// The hue can be one of the standard values (500, A400, etc.), one of the three preconfigured
// hues (default, lighter, darker), or any of the aforementioned prefixed with "-contrast".
//
// @param $color-map The theme palette (output of mat-palette).
// @param $hue The hue from the palette to use. If this is a value between 0 and 1, it will
//     be treated as opacity.
// @param $opacity The alpha channel value for the color.
export function matColor(palette: Object, hue: string | number = 'default', opacityParam: number = null): string {
    // If hueKey is a number between zero and one, then it actually contains an
    // opacity value, so recall this function with the default hue and that given opacity.
    if (typeof hue === 'number' && hue >= 0 && hue <= 1) {
        return matColor(palette, 'default', hue);
    }

    const color: string = palette[hue];
    const opacity: number = opacityParam === null ? colorToOpacity(color) : opacityParam;

    return rgba(color, opacity);
}

export function rgba(color: string, opacity: number = 1): string {
    if (color.indexOf('#') === 0) {
        const colorValue: string = color.substr(1);

        if (colorValue.length === 3) {
            const red: number = parseInt(colorValue[0] + colorValue[0], 16);
            const green: number = parseInt(colorValue[1] + colorValue[1], 16);
            const blue: number = parseInt(colorValue[2] + colorValue[2], 16);

            return `rgba(${red},${green},${blue},${opacity})`;
        } else {
            const red: number = parseInt(colorValue.substr(0, 2), 16);
            const green: number = parseInt(colorValue.substr(2, 2), 16);
            const blue: number = parseInt(colorValue.substr(4, 2), 16);

            return `rgba(${red},${green},${blue},${opacity})`;
        }
    } else if (color.indexOf('rgba(') === 0) {
        const colorValue: string = color.substring(color.indexOf('(') + 1, color.lastIndexOf(','));

        if (isNaN(parseInt(colorValue, 10))) {
            return rgba(cssColorToHex(colorValue), opacity);
        }

        return `rgba(${colorValue},${opacity})`;
    } else if (color.indexOf('rgb(') === 0) {
        const colorValue: string = color.substring(color.indexOf('(') + 1, color.lastIndexOf(')'));

        if (isNaN(parseInt(colorValue, 10))) {
            return rgba(cssColorToHex(colorValue), opacity);
        }

        return `rgba(${colorValue},${opacity})`;
    } else {
        const hex: string = cssColorToHex(color);
        if (hex) {
            return rgba(hex, opacity);
        }
    }

    return 'rgba(0,0,0,1)';
}

export function invert(color: string): string {
    if (color.indexOf('rgba(') === 0) {
        let colorValue: string = color.substring(color.indexOf('(') + 1, color.lastIndexOf(','));

        if (isNaN(parseInt(colorValue, 10))) {
            return invert(cssColorToHex(colorValue));
        }

        const red: number = 255 - parseInt(colorValue.substring(0, colorValue.indexOf(',')), 10);

        colorValue = colorValue.substring(colorValue.indexOf(',') + 1);
        const green: number = 255 - parseInt(colorValue, 10);

        colorValue = colorValue.substring(colorValue.indexOf(',') + 1);
        const blue: number = 255 - parseInt(colorValue, 10);

        const opacity: number = parseFloat(color.substring(color.lastIndexOf(',') + 1));

        return `rgba(${red},${green},${blue},${opacity})`;
    }

    return color;
}

function colorToOpacity(color: string): number {
    if (color.indexOf('rgba(') === 0) {
        return parseFloat(color.substr(color.lastIndexOf(',') + 1, color.indexOf(')') - 1));
    }

    return 1;
}
