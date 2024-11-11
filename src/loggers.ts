import { ono } from "./main.ts";
import type { OnoFunction } from "./main.ts";

/**
 * Info logger: Use this for user-faced messages
 */
export const info: OnoFunction = ono({
    name: "INFO",
    color: "cyan"
})

/**
 * Debug logger: Use this for developer-faced messages
 */
export const debug: OnoFunction = ono({
    name: "DEBUG",
    color: "green"
})

/**
 * Warning logger: Use this for when an error happens, but the 
 * application can keep working
 */
export const warn: OnoFunction = ono({
    name: "WARN",
    color: {
	back: "bgYellow",
	fore: "black"
    }
})

/**
 * Fatal logger: Use this for when the application cannot
 * continue working
 */
export const fatal: OnoFunction = ono({
    name: "FATAL",
    color: {
	back: "bgRed",
	fore: "black"
    }
})
