# «No matching Component»

+ **Stencil version:** `@stencil/core@0.0.5`
+ **I'm submitting a ...** *bug report*

**Current behavior:**
<!-- Describe how the bug manifests. -->

**Expected behavior:**
<!-- Describe what the behavior would be without the bug. -->

**Steps to reproduce:**
<!-- If you are able to illustrate the bug or feature request with an example, please provide steps to reproduce and if possible a demo
-->

## Related code:
### `@aurora/src/index.html`:
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>‹ ısmo ›</title>
        <script src="dest/app.js" />
    </head>
    <body>
        <k-action>
            Hallo.
        </k-action>
    </body>
</html>
```
### Shell IO:
```sh
% ./node_modules/.bin/stencil build --prerender --debug
[ DEBUG ]  validated build config  MEM: 65.8MB
[18:40.0]  build, prod mode, started ...
[18:40.0]  compile started ...
[ DEBUG ]  compileDirectory, srcDir: /@aurora/src  MEM: 66.1MB
[ DEBUG ]  compileDir: /@aurora/src  MEM: 66.1MB
[ DEBUG ]  compileDir: /@aurora/src/assets  MEM: 66.1MB
[ DEBUG ]  compileDir: /@aurora/src/content  MEM: 66.1MB
[ DEBUG ]  compileDir: /@aurora/src/k  MEM: 66.1MB
[ DEBUG ]  compileDir: /@aurora/src/assets/icon  MEM: 66.1MB
[ DEBUG ]  compileDir: /@aurora/src/content/@sound  MEM: 66.1MB
[18:42.1]  compile finished in 2.11 s
[ DEBUG ]  bundle, srcDir: /@aurora/src  MEM: 152.2MB
[ DEBUG ]  bundle, buildDir: /@aurora/www/dest/  MEM: 152.2MB
[18:42.2]  bundle styles started ...
[18:42.2]  bundle styles finished in less than 1 ms
[ DEBUG ]  copyTasks started ...  MEM: 152.2MB
[ DEBUG ]  copyTasks finished in 15 ms  MEM: 152.5MB
[ DEBUG ]  manifest, serializeAppManifest: /@aurora/dist/collection/collection-manifest.json
            MEM: 152.5MB
[ DEBUG ]  writePhase started, fileUpdates: 0 ...  MEM: 152.5MB
[ DEBUG ]  empty buildDir: /@aurora/www/dest/  MEM: 152.5MB
[ DEBUG ]  copy assets started ...  MEM: 152.5MB
[ DEBUG ]  copy assets finished in less than 1 ms  MEM: 152.5MB
[ DEBUG ]  writePhase finished in 3 ms  MEM: 152.5MB
[18:42.2]  generate service worker started ...
[18:42.3]  generate service worker finished in 101 ms

[ ERROR ]  Component tag "k-action" is defined in a bundle but no matching component was found within this app or its
           collections.

[18:42.3]  build failed in 2.24 s
```

**Other information:**
<!-- List any other information that is relevant to your issue. Stack traces, related issues, suggestions on how to fix, Stack Overflow links, forum links, etc. -->
