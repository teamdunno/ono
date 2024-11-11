import { ono, OnoFunction } from "./main.ts";

export const info: OnoFunction = ono({
    name: "INFO",
    color: "cyan"
})

export const debug: OnoFunction = ono({
    name: "DEBUG",
    color: "green"
})

export const warn: OnoFunction = ono({
    name: "WARN",
    color: {
	back: "bgYellow",
	fore: "black"
    }
})

export const fatal: OnoFunction = ono({
    name: "FATAL",
    color: {
	back: "bgRed",
	fore: "black"
    }
})
