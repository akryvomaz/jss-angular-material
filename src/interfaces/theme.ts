import { Palette } from './palette';
import { Foreground } from './foreground';
import { Background } from './background';

export interface Theme {
    readonly primary: Palette;
    readonly accent: Palette;
    readonly warn: Palette;
    readonly 'is-dark': boolean;
    readonly foreground: Foreground;
    readonly background: Background;
}
