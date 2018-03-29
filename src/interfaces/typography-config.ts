import { TypographyLevel } from './typography-level';

export interface TypographyConfig {
    readonly 'display-4': TypographyLevel;
    readonly 'display-3': TypographyLevel;
    readonly 'display-2': TypographyLevel;
    readonly 'display-1': TypographyLevel;
    readonly headline: TypographyLevel;
    readonly title: TypographyLevel;
    readonly 'subheading-2': TypographyLevel;
    readonly 'subheading-1': TypographyLevel;
    readonly 'body-2': TypographyLevel;
    readonly 'body-1': TypographyLevel;
    readonly caption: TypographyLevel;
    readonly button: TypographyLevel;
    readonly input: TypographyLevel;
    readonly 'font-family'?: string;
}
