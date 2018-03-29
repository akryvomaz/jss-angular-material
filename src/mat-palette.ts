import { Palette } from './interfaces';

// Creates a map of hues to colors for a theme. This is used to define a theme palette in terms
// of the Material Design hues.
// @param $color-map
// @param $primary
// @param $lighter
export function matPalette(basePalette: Palette, defaultColor: number | string = 500, lighter: number | string = 100, darker: number | string = 700): Palette {
    const result: Palette = { ...basePalette };

    result['default'] = basePalette[defaultColor];
    result['lighter'] = basePalette[lighter];
    result['darker'] = basePalette[darker];
    result['default-contrast'] = matContrast(basePalette, defaultColor);
    result['lighter-contrast'] = matContrast(basePalette, lighter);
    result['darker-contrast'] = matContrast(basePalette, darker);

    // For each hue in the palette, add a "-contrast" color to the map.
    Object.keys(basePalette).map((key: string) => {
        if (key !== 'contrast') {
            result[`${key}-contrast`] = matContrast(basePalette, key);
        }
    });

    return result;
}

// For a given hue in a palette, return the contrast color from the map of contrast palettes.
// @param $color-map
// @param $hue
function matContrast(palette: Palette, hue: number | string): string {
    return palette.contrast[hue];
}
