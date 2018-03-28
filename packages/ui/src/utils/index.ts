import { readableColor, darken, lighten } from 'polished';
import { ColorPalette } from '@tasky/ui';

export const getTextColor = (color: string): string => readableColor(darken(0.25, color));
export const getTones = (color: string): ColorPalette => ({
    light: lighten(0.02, color),
    medium: color,
    strong: darken(0.02, color)
});
