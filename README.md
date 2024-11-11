# @dunno/ono - Really simple loggers

```ts
import { info, debug, warn, fatal } from "jsr:@dunno/ono/loggers";

info("Hello, World!");
debug("Running some stuff...");
warn("Stuff failed!");
debug("Running some other stuff...");
fatal("Other stuff, that was critical, failed!");

// NOTE: fatal does not work like die(), it simply logs
```
