import { TypographyConfig } from '../interfaces';

export function matFontWeight(config: TypographyConfig, level: string): number | string {
    return config[level]['font-weight'];
}
