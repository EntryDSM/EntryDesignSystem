type directionType = 'left' | 'right' | 'top' | 'bottom';

export type marginType =
    | [number, number, number, number]
    | [number | directionType, number | 'auto']
    | [number];

export interface marginCssType {
    margin?: marginType[] | marginType;
}

const mgReturn = (mg: marginType) => {
    if (mg[0] === 0 && mg[1] === 'auto') {
        return `margin: 0 auto;`;
    }

    const unitTransform = (m: 'auto' | number) => (m === 'auto' ? m : `${m}px`);
    let css = 'margin: ';

    switch (mg[0]) {
        case 'top':
        case 'bottom':
        case 'left':
        case 'right':
            return `margin-${mg[0]}: ${unitTransform(mg[1] || 0)};`;
        default:
            for (let j = 0; j < mg.length; j += 1) css += `${mg[j]}px `;
            return `${css};`;
    }
};

export const marginToCss = ({ margin }: marginCssType) => {
    let mgCss = '';

    if (margin) {
        if (Array.isArray(margin[0])) {
            for (let i = 0; i < margin.length; i += 1) {
                // @ts-expect-error because this code can be undefined
                mgCss += mgReturn(margin[i]);
            }
        } else {
            // @ts-expect-error because this code can be undefined
            mgCss = mgReturn(margin);
        }
    }

    return mgCss;
};
