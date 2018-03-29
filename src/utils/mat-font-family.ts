import { TypographyConfig } from '../interfaces';

export function matFontFamily(config: TypographyConfig, level: string = null): string {
    let fontFamily: string = config['font-family'];

    if (level !== null) {
        fontFamily = config[level]['font-family'];
    }

    // return fontFamily === null ? fontFamily : fontFamily.replace(/"/g, '');
    return fontFamily;
}
