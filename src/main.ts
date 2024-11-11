import type { ColorName, BackgroundColorName, ForegroundColorName } from "npm:chalk@5.3.0";
import { backgroundColorNames, foregroundColorNames } from "npm:chalk@5.3.0";
import chalk from "npm:chalk@5.3.0";

type OnoColor = {
    back: BackgroundColorName,
    fore: ForegroundColorName
}

export type Ono = {
    color: ColorName | OnoColor,
    name: string
};

function isOnoColor(value: any): value is OnoColor {
    return (
	value &&
	typeof value == "object" &&
	value.back &&
	value.fore &&
	backgroundColorNames.includes(value.back) &&
	foregroundColorNames.includes(value.fore)
    )
}

export type OnoFunction = (...message: string[]) => void

/**
 * Ono generator - the main way to make a logger
 * @param ono Options for ono
 */
export function ono(ono: Ono): OnoFunction {
    let colorFunc;
    if (isOnoColor(ono.color)) {
	const color = ono.color as OnoColor;
	colorFunc = (a: string) => chalk[color.back as ColorName](chalk[color.fore as ColorName](a));
    } else {
	colorFunc = (a: string) => chalk[ono.color as ColorName](a);
    }

    return function(...message: string[]) {
	console.log(colorFunc(`[${ono.name}]`), ...message);
    }
}
