import {
    matEvaluation,
    matTypography,
    matRipple,
    cdkA11y,
    cdkOverlay
} from './core';

import { TypographyConfig } from './interfaces';

export function matCore(typographyConfig: TypographyConfig = null): Object {
    return {
        ...matEvaluation(),
        ...matTypography(typographyConfig),
        ...matRipple(),
        ...cdkA11y(),
        ...cdkOverlay()
    };
}
