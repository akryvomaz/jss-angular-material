import {
    Theme,
    Palette
} from '../interfaces';
import { matColor } from '../mat-color';

export function matSliderTheme(theme: Theme): Object {
    const matSliderOffColor: string = matColor(theme.foreground, 'slider-off');
    const matSliderOffFocusedColor: string = matColor(theme.foreground, 'slider-off-active');
    const matSliderTickColor: string = matColor(theme.foreground, 'base', 0.7);
    const matSliderTickSize: string = '2px';

    return {
        '.mat-slider-track-background': {
            'background-color': matSliderOffColor
        },
        '.mat-primary': matSliderInnerContentTheme(theme.primary),
        '.mat-accent': matSliderInnerContentTheme(theme.accent),
        '.mat-warn': matSliderInnerContentTheme(theme.warn),
        '.mat-slider-focus-ring': {
            'background-color': matColor(theme.accent, 'default', 0.2)
        },
        '.mat-slider:hover, .cdk-focused': {
            '& .mat-slider-track-background': {
                'background-color': matSliderOffFocusedColor
            }
        },
        '.mat-slider-disabled': {
            '& .mat-slider-track-background, .mat-slider-track-fill, .mat-slider-thumb': {
                'background-color': matSliderOffColor
            },
            '&:hover': {
                '& .mat-slider-track-background': {
                    'background-color': matSliderOffColor
                }
            }
        },
        '.mat-slider-min-value': {
            '& .mat-slider-focus-ring': {
                'background-color': matColor(theme.foreground, 'base', 0.12)
            },
            '&.mat-slider-thumb-label-showing': {
                '& .mat-slider-thumb, .mat-slider-thumb-label': {
                    'background-color': matColor(theme.foreground, 'slider-min')
                },
                '&.cdk-focused': {
                    '& .mat-slider-thumb, .mat-slider-thumb-label': {
                        'background-color': matSliderOffColor
                    }
                }
            }
        },
        '.mat-slider-min-value:not(.mat-slider-thumb-label-showing)': {
            '& .mat-slider-thumb': {
                'border-color': matSliderOffColor,
                'background-color': 'transparent'
            },
            '&:hover, &.cdk-focused': {
                '& .mat-slider-thumb': {
                    'border-color': matSliderOffFocusedColor
                },
                '&.mat-slider-disabled .mat-slider-thumb': {
                    'border-color': matSliderOffColor
                }
            }
        },
        '.mat-slider-has-ticks .mat-slider-wrapper::after': {
            'border-color': matSliderTickColor
        },
        '.mat-slider-horizontal .mat-slider-ticks': {
            'background-image': `-moz-repeating-linear-gradient(0.0001deg, ${matSliderTickColor}, ${matSliderTickColor} ${matSliderTickSize}, transparent 0, transparent)`,
            fallbacks: {
                // Firefox doesn't draw the gradient correctly with 'to right'
                // (see https://bugzilla.mozilla.org/show_bug.cgi?id=1314319).
                'background-image': `repeating-linear-gradient(to right, ${matSliderTickColor}, ${matSliderTickColor} ${matSliderTickSize}, transparent 0, transparent)`
            }
        },
        '.mat-slider-vertical .mat-slider-ticks': {
            'background-image': `repeating-linear-gradient(to bottom, ${matSliderTickColor}, ${matSliderTickColor} ${matSliderTickSize}, transparent 0, transparent)`
        }
    };
}

function matSliderInnerContentTheme(palette: Palette): Object {
    return {
        '& .mat-slider-track-fill, .mat-slider-thumb, .mat-slider-thumb-label': {
            'background-color': matColor(palette)
        },
        '& .mat-slider-thumb-label-text': {
            color: matColor(palette, 'default-contrast')
        }
    };
}
