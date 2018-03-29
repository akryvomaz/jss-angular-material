import {
    matLineHeight,
    multiplyRule,
    divideRule,
    addRule,
    subtractRule,
    roundRule
} from '../utils';

import { TypographyConfig } from '../interfaces';

import { matTypographyLevelToStyles } from './mat-typography-level-to-styles';

export function matFormFieldTypography(config: TypographyConfig): Object {
    // The unit-less line-height from the font config.
    const lineHeight: number = matLineHeight(config, 'input') as number;
    // The amount to scale the font for the floating label and subscript.
    const subscriptFontScale: number = 0.75;
    // The amount to scale the font for the prefix and suffix icons.
    const prefixSuffixIconFontScale: number = 1.5;
    // The amount of space between the top of the line and the top of the actual text
    // (as a fraction of the font-size).
    const lineSpacing: number = (lineHeight - 1) / 2;
    // The padding on the infix. Mocks show half of the text size, but seem to measure from the edge
    // of the text itself, not the edge of the line; therefore we subtract off the line spacing.
    const infixPadding: string = `${roundRule(0.5 - lineSpacing)}em`;
    // The margin applied to the form-field-infix to reserve space for the floating label.
    const infixMarginTop: string = `${roundRule(lineHeight * subscriptFontScale)}em`;
    // Font size to use for the label and subscript text.
    const subscriptFontSize: string = `${subscriptFontScale * 100}%`;
    // Font size to use for the for the prefix and suffix icons.
    const prefixSuffixIconFontSize: string = `${prefixSuffixIconFontScale * 100}%`;
    // The space between the bottom of the .mat-form-field-flex area and the subscript wrapper.
    // Mocks show half of the text size, but this margin is applied to an element with the subscript
    // text font size, so we need to divide by the scale factor to make it half of the original text
    // size. We again need to subtract off the line spacing since the mocks measure to the edge of the
    // text, not the  edge of the line.
    // TODO: hard coded fixed
    const subscriptMarginTop: string = `${roundRule(0.5 / subscriptFontScale - (lineSpacing * 2))}em`;
    // The padding applied to the form-field-wrapper to reserve space for the subscript, since it's
    // absolutely positioned. This is a combination of the subscript's margin and line-height, but we
    // need to multiply by the subscript font scale factor since the wrapper has a larger font size.
    // TODO: hard coded fixed
    const wrapperPaddingBottom: string = roundRule(multiplyRule(addRule(subscriptMarginTop, lineHeight), subscriptFontScale));

    return {
        '.mat-form-field': matTypographyLevelToStyles(config, 'input'),
        '.mat-form-field-wrapper': {
            'padding-bottom': wrapperPaddingBottom
        },
        '.mat-form-field-prefix .mat-icon, .mat-form-field-suffix .mat-icon': {
            // Allow icons in a prefix or suffix to adapt to the correct size.
            'font-size': prefixSuffixIconFontSize,
            'line-height': lineHeight
        },
        '.mat-form-field-prefix .mat-icon-button, .mat-form-field-suffix .mat-icon-button': {
            // Allow icon buttons in a prefix or suffix to adapt to the correct size.
            height: multiplyRule('1em', prefixSuffixIconFontScale),
            width: multiplyRule('1em', prefixSuffixIconFontScale)
        },
        '.mat-form-field-prefix .mat-icon-button .mat-icon, .mat-form-field-suffix .mat-icon-button .mat-icon': {
            height: multiplyRule('1em', lineHeight),
            'line-height': lineHeight
        },
        '.mat-form-field-infix': {
            padding: `${infixPadding} 0`,
            // Throws off the baseline if we do it as a real margin, so we do it as a border instead.
            'border-top': `${infixMarginTop} solid transparent`
        },
        '.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label, .mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label': matFormFieldLabelFloating(subscriptFontScale, infixPadding, infixMarginTop),
        '.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill + .mat-form-field-label-wrapper .mat-form-field-label': matFormFieldLabelFloating(subscriptFontScale, infixPadding, infixMarginTop),
        // Server-side rendered matInput with a label attribute but label not shown
        // (used as a pure CSS stand-in for mat-form-field-should-float).
        '.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper .mat-form-field-label': matFormFieldLabelFloating(subscriptFontScale, infixPadding, infixMarginTop),
        '.mat-form-field-label-wrapper': {
            top: roundRule(multiplyRule(infixMarginTop, -1)),
            'padding-top': infixMarginTop
        },
        '.mat-form-field-label': {
            top: addRule(infixMarginTop, parseFloat(infixPadding))
        },
        '.mat-form-field-underline': {
            // We want the underline to start at the end of the content box, not the padding box,
            // so we move it up by the padding amount.
            bottom: wrapperPaddingBottom
        },
        '.mat-form-field-subscript-wrapper': {
            'font-size': subscriptFontSize,
            'margin-top': subscriptMarginTop,
            // We want the subscript to start at the end of the content box, not the padding box,
            // so we move it up by the padding amount (adjusted for the smaller font size);
            top: `calc(100% - ${roundRule(divideRule(wrapperPaddingBottom, subscriptFontScale))})`
        }
    };
}

let dedupe: number = 0;

// Applies a floating label above the form field control itself.
function matFormFieldLabelFloating(fontScale: number, infixPadding: string, infixMarginTop: string): Object {
    const result: Object = {
        // We use perspective to fix the text blurriness as described here:
        // http://www.useragentman.com/blog/2014/05/04/fixing-typography-inside-of-2-d-css-transforms/
        // This results in a small jitter after the label floats on Firefox, which the
        // translateZ fixes.
        transform: `translateY(${subtractRule(multiplyRule(infixMarginTop, -1), parseFloat(infixPadding))}) scale(${fontScale}) perspective(100px) translateZ(0.001px + ${dedupe})`,
        // The tricks above used to smooth out the animation on chrome and firefox actually make things
        // worse on IE, so we don't include them in the IE version.
        '-ms-transform': `translateY(${addRule(subtractRule(multiplyRule(infixMarginTop, -1), parseFloat(infixPadding)), dedupe)}) scale(${fontScale})`,
        width: addRule(roundRule(divideRule('100%', fontScale)), dedupe)
    };

    dedupe = dedupe + 0.00001;

    return result;
}
