import { TypographyConfig } from '../interfaces';

export function matFontSize(config: TypographyConfig, level: string): number | string {
    return config[level]['font-size'];
}
