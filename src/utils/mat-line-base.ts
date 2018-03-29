export function matLineBase(secondaryFontSize: number | string): Object {
    return {
        '& .mat-line': {
            'white-space': 'nowrap',
            overflow: 'hidden',
            'text-overflow': 'ellipsis',
            display: 'block',
            'box-sizing': 'border-box',
            // all lines but the top line should have smaller text
            '&:nth-child(n+2)': {
                'font-size': secondaryFontSize
            }
        }
    };
}
