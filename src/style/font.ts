const fontGenerator = (weight: number, size: number) =>
    `
  font-weight: ${weight};
  font-size: ${size}px;
`;

export const font = {
    header1: fontGenerator(700, 32),
    header2: fontGenerator(500, 30),
    header3: fontGenerator(300, 28),
    title1: fontGenerator(500, 24),
    title2: fontGenerator(500, 22),
    title3: fontGenerator(300, 20),
    body1: fontGenerator(500, 18),
    body2: fontGenerator(400, 18),
    body3: fontGenerator(500, 16),
    body4: fontGenerator(400, 16),
    body5: fontGenerator(500, 14),
    body6: fontGenerator(400, 14),
} as const;

export type fontKeyOfType = keyof typeof font;
