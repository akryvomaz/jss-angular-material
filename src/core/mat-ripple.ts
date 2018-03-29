export function matRipple(): Object {
    // The host element of an mat-ripple directive should always have a position of "absolute" or
    // "relative" so that the ripple divs it creates inside itself are correctly positioned.
    return {
        '.mat-ripple': {
            overflow: 'hidden',
            // In high contrast mode the ripple is opaque, causing it to obstruct the content.
            '@media screen and (-ms-high-contrast: active)': {
                display: 'none'
            }
        },
        '.mat-ripple.mat-ripple-unbounded': {
            overflow: 'visible'
        },
        '.mat-ripple-element': {
            position: 'absolute',
            'border-radius': '50%',
            'pointer-events': 'none',
            transition: 'opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1)',
            transform: 'scale(0)'
        }
    };
}
