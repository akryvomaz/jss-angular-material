import {
    matBaseTypography,
    matAutocompleteTypography,
    matButtonTypography,
    matButtonToggleTypography,
    matCardTypography,
    matCheckboxTypography,
    matChipsTypography,
    matTableTypography,
    matDatepickerTypography,
    matDialogTypography,
    matExpansionPanelTypography,
    matFormFieldTypography,
    matGridListTypography,
    matIconTypography,
    matInputTypography,
    matMenuTypography,
    matPaginatorTypography,
    matProgressBarTypography,
    matProgressSpinnerTypography,
    matRadioTypography,
    matSelectTypography,
    matSidenavTypography,
    matSlideToggleTypography,
    matSliderTypography,
    matStepperTypography,
    matTabsTypography,
    matToolbarTypography,
    matTooltipTypography,
    matListTypography,
    matOptionTypography,
    matOptgroupTypography,
    matSnackBarTypography
 } from '../typography';

import { TypographyConfig, TypographyLevel } from '../interfaces';

export function matTypography(config: TypographyConfig = null): Object {
    if (config === null) {
        // tslint:disable-next-line:no-parameter-reassignment
        config = matTypographyConfig();
    }

    return {
        ...matBaseTypography(config),
        ...matAutocompleteTypography(config),
        ...matButtonTypography(config),
        ...matButtonToggleTypography(config),
        ...matCardTypography(config),
        ...matCheckboxTypography(config),
        ...matChipsTypography(config),
        ...matTableTypography(config),
        ...matDatepickerTypography(config),
        ...matDialogTypography(config),
        ...matExpansionPanelTypography(config),
        ...matFormFieldTypography(config),
        ...matGridListTypography(config),
        ...matIconTypography(config),
        ...matInputTypography(config),
        ...matMenuTypography(config),
        ...matPaginatorTypography(config),
        ...matProgressBarTypography(config),
        ...matProgressSpinnerTypography(config),
        ...matRadioTypography(config),
        ...matSelectTypography(config),
        ...matSidenavTypography(config),
        ...matSlideToggleTypography(config),
        ...matSliderTypography(config),
        ...matStepperTypography(config),
        ...matTabsTypography(config),
        ...matToolbarTypography(config),
        ...matTooltipTypography(config),
        ...matListTypography(config),
        ...matOptionTypography(config),
        ...matOptgroupTypography(config),
        ...matSnackBarTypography(config)
    };
}

function matTypographyConfig(
    fontFamily: string = 'Roboto, "Helvetica Neue", sans-serif',
    display4: TypographyLevel = matTypographyLevel('112px', '112px', 300),
    display3: TypographyLevel = matTypographyLevel('56px', '56px', 400),
    display2: TypographyLevel = matTypographyLevel('45px', '48px', 400),
    display1: TypographyLevel = matTypographyLevel('34px', '40px', 400),
    headline: TypographyLevel = matTypographyLevel('24px', '32px', 400),
    title: TypographyLevel = matTypographyLevel('20px', '32px', 500),
    subheading2: TypographyLevel = matTypographyLevel('16px', '28px', 400),
    subheading1: TypographyLevel = matTypographyLevel('15px', '24px', 400),
    body2: TypographyLevel = matTypographyLevel('14px', '24px', 500),
    body1: TypographyLevel = matTypographyLevel('14px', '20px', 400),
    caption: TypographyLevel = matTypographyLevel('12px', '20px', 400),
    button: TypographyLevel = matTypographyLevel('14px', '14px', 500),
    input: TypographyLevel = matTypographyLevel('inherit', 1.125, 400)
): TypographyConfig {
    // Declare an initial map with all of the levels.
    let config: TypographyConfig = {
        'display-4': display4,
        'display-3': display3,
        'display-2': display2,
        'display-1': display1,
        headline,
        title,
        'subheading-2': subheading2,
        'subheading-1': subheading1,
        'body-2': body2,
        'body-1': body1,
        caption,
        button,
        input
    };

    // Loop through the levels and set the `font-family` of the ones that don't have one to the base.
    Object.keys(config).map((key: string) => {
        const level: TypographyLevel = config[key];
        if (!level['font-family']) {
            const newLevel: TypographyLevel = Object.assign(level, { 'font-family': fontFamily });
            config = Object.assign(config, { [key]: newLevel });
        }
    });

    // Add the base font family to the config.
    return Object.assign(config, { 'font-family': fontFamily });
}

function matTypographyLevel(
    fontSize: number | string,
    lineHeight: number | string = fontSize,
    fontWeight: number | string = 400,
    fontFamily: string = null
): TypographyLevel {
    let typographyLevel: TypographyLevel = {
        'font-size': fontSize,
        'line-height': lineHeight,
        'font-weight': fontWeight
    };

    if (fontFamily) {
        typographyLevel = Object.assign(typographyLevel, { 'font-family': fontFamily });
    }

    return typographyLevel;
}
