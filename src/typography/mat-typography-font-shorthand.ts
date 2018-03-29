export function matTypographyFontShorthand(
    fontSize: number | string,
    fontWeight: number | string,
    lineHeight: number | string,
    fontFamily: string
): Object {
    if (
        fontSize === 'inherit' ||
        fontWeight === 'inherit' ||
        lineHeight === 'inherit' ||
        fontFamily === 'inherit' ||
        fontSize === null ||
        fontWeight === null ||
        lineHeight === null ||
        fontFamily === null
    ) {
        return {
            'font-size': fontSize,
            'font-weight': fontWeight,
            'line-height': lineHeight,
            'font-family': fontFamily
        };
    }

    return {
        font: `${fontWeight} ${fontSize}/${lineHeight} ${fontFamily}`
    };
}
