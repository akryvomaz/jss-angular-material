import { TypographyConfig } from '../interfaces';

export function matLineHeight(config: TypographyConfig, level: string): number | string {
    return config[level]['line-height'];
}
