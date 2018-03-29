export interface BasePalette {
    readonly 50: string;
    readonly 100: string;
    readonly 200: string;
    readonly 300: string;
    readonly 400: string;
    readonly 500: string;
    readonly 600: string;
    readonly 700: string;
    readonly 800: string;
    readonly 900: string;
    readonly A100?: string;
    readonly A200?: string;
    readonly A400?: string;
    readonly A700?: string;
}

export interface Palette extends BasePalette {
    readonly contrast?: BasePalette;
}
