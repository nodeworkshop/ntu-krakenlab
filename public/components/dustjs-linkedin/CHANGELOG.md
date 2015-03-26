## Change Log

### v2.6.0 (2015/03/05 18:00 +00:00)
- [#545](https://github.com/linkedin/dustjs/pull/545) New dust command-line compiler (@sethkinast)
- [#536](https://github.com/linkedin/dustjs/pull/536) Add AMD (require.js) compatibility (@sethkinast)
- [#543](https://github.com/linkedin/dustjs/pull/543) Replaced util.print/util.puts with console.log (@hunterchristian)
- [#541](https://github.com/linkedin/dustjs/pull/541) Escape template names (@aredridel)
- [#540](https://github.com/linkedin/dustjs/pull/540) Escape values when using json filter (@jimmyhchan)
- [#531](https://github.com/linkedin/dustjs/pull/531) Fix whitespace in partials not being preserved (@BradEstey)
- [#534](https://github.com/linkedin/dustjs/pull/534) Stringify things before calling escapeHtml on them (@sethkinast)
- [#533](https://github.com/linkedin/dustjs/pull/533) Add dust.version (@sethkinast)
- [#529](https://github.com/linkedin/dustjs/pull/529) Fix IE7 by removing trailing comma (@jrrbru)
- [#526](https://github.com/linkedin/dustjs/pull/526) Don't stringify dust.log messages (@sethkinast)

### v2.5.1 (2014/11/20 00:58 +00:00)
- [#522](https://github.com/linkedin/dustjs/pull/522) Fix the use of a multi-level object key (e.g. foo.bar) as the key for an index lookup inside non-self-closing tags. (@sethkinast)

### v2.5.0 (2014/11/04 00:15 +00:00)
- [#515](https://github.com/linkedin/dustjs/pull/515) Remove the warning log when you attach a new Stream event (@sethkinast)
- [#513](https://github.com/linkedin/dustjs/pull/513) Treat compiled body functions as blocks to render instead of functions to evaluate.   Dust body functions are now flagged with .___dustBody to differentiate them from functions set in the context. (@sethkinast)
- [#511](https://github.com/linkedin/dustjs/pull/511) Treat formats and buffers as interchangeable when they are mixed together in order to prevent stack overflows with large templates and add a whitespace flag to dust.config (@sethkinast)
- [#504](https://github.com/linkedin/dustjs/pull/504) Update README formatting (@NickStefan)
- [#503](https://github.com/linkedin/dustjs/pull/503) Update contributors list (@sethkinast)
- [#502](https://github.com/linkedin/dustjs/pull/502) Don't use the regexp constructor since we are using a regexp literal anyway (@jimmyhchan)

### v2.4.2 (2014/09/09 23:11 +00:00)
- [#497](https://github.com/linkedin/dustjs/pull/497) Upgrade to pegJS 0.8 - This change corresponds to a 90% reduction in template compile time. (@sethkinast)
- [#495](https://github.com/linkedin/dustjs/pull/495) Catch syntax errors in context and fail gracefully (@sethkinast)

### v2.4.1 (2014/09/02 20:33 +00:00)
- [#494](https://github.com/linkedin/dustjs/pull/494) Revert "Merge pull request #472 from jimmyhchan/OPP"  This will allow dust references to look up the object's prototype chain again. (@sethkinast)
- [#493](https://github.com/linkedin/dustjs/pull/493) Update changelog to 2.4.0 (@prashn64)

### v2.4.0 (2014/06/11 01:32 +00:00)
- [#470](https://github.com/linkedin/dustjs/pull/470) Ensure client bundlers load only client-side code (@patrick-steele-idem)
- [#474](https://github.com/linkedin/dustjs/pull/474) travis build fix for minimatch grunt module (@prashn64)
- [#475](https://github.com/linkedin/dustjs/pull/475) remove config set on before install for travis build (@prashn64)
- [#471](https://github.com/linkedin/dustjs/pull/471) Errors thrown from render will now call populate the error in the callback. Previously, thrown errors will immediately fail and not call the callback.  Issue #381,

 Address #468: Errors thrown from stream now will invoke the `error` listener with the error object. Previously, these errors could not be caught and the process will hang.

 Deprecated/remove: `dust.onError`, `dust.silenceErrors`. To see runtime errors, look at the error in the callback.
 breaking change: `dust.log` with an error no longer throws that error (@prashn64)
- [#424](https://github.com/linkedin/dustjs/pull/424) Set up dev flow with grunt and fix coverage report (@kate2753)
- [#447](https://github.com/linkedin/dustjs/pull/447) deprecate the internal property context.isFunction. this is no longer needed. (@prashn64)
- [#441](https://github.com/linkedin/dustjs/pull/441) Make default params type to an object instead of github.com (@prashn64)
- [#472](https://github.com/linkedin/dustjs/pull/472) #469 Prevent references from looking in the prototype.

 Previously, {arr.sort} was possible even if sort was not a function in the arr object, since it was looking in the Array prototype. (@jimmyhchan)

### v2.3.5 (2014/05/08 21:31 +00:00)
- [#463](https://github.com/linkedin/dustjs/pull/463) Rendering performance improvements by simplifying logging (@prashn64)

### v2.3.4 (2014/03/06 22:34 +00:00)
- [#435](https://github.com/linkedin/dustjs/pull/435) indexInArray fix. (@prashn64)

### v2.3.3 (2014/01/31 21:29 +00:00)
- [#416](https://github.com/linkedin/dustjs/pull/416) Lower most errors to warnings. (@prashn64)

### v2.3.2 (2014/01/28 01:12 +00:00)
- [#414](https://github.com/linkedin/dustjs/pull/414) Point dustc to the correct version of server dust (@jimmyhchan)

### v2.3.1 (2014/01/19 22:23 +00:00)
- [#408](https://github.com/linkedin/dustjs/pull/408) dust.compileFn no longer requires the name to be defined. (@jimmyhchan)

### v2.3.0 (2014/01/17 00:26 +00:00)
- [#399](https://github.com/linkedin/dustjs/pull/399) Don't swallow all errors by default (Issue #381).  Deprecate dust.isDebug and dust.onError. Instead, just use debugLevel and dust.log(message, 'ERROR'), respectively.    Add a dust.silenceErrors flag to swallow all errors. (@prashn64)
- [#395](https://github.com/linkedin/dustjs/pull/395) fail hard when a name is not explicitly defined in dust.compile (@prashn64)
- [#403](https://github.com/linkedin/dustjs/pull/403) bump commit does not support tasks (@jimmyhchan)
- [#404](https://github.com/linkedin/dustjs/pull/404) revert package.json back to 2.2.3 (@prashn64)
- [#392](https://github.com/linkedin/dustjs/pull/392) Add Rhino and Rhino unit tests (@kate2753)
- [#405](https://github.com/linkedin/dustjs/pull/405) Fix Grunt release and don't push upstream by default (safer) (@jimmyhchan)

### v2.2.10 (2014/05/07 23:39 +00:00)
- [#444](https://github.com/linkedin/dustjs/pull/444) make console.log available for logging statements in node environment by passing the proper global (@bgmort)

### v2.2.7 (2014/02/24 23:06 +00:00)
- [#419](https://github.com/linkedin/dustjs/pull/419) Fix Context.prototype._get to work with context switching when calling partials and make the 2.2.x+ compiler fully backwards compatible. (@kate2753)

### v2.2.6 (2014/02/13 00:18 +00:00)
- [#420](https://github.com/linkedin/dustjs/pull/420) Make the compiler backwards compatible with runtime versions prior to 2.2.x (@kate2753)

### v2.2.3 (2013/12/06 02:02 +00:00)
- [#372](https://github.com/linkedin/dustjs/pull/372) Regenerate dist files for v2.2.3 to include $idx fixes (@kate2753)
- [#374](https://github.com/linkedin/dustjs/pull/374) Properly generate .min files for 2.2.3 (@kate2753)

### v2.2.2 (2013/11/28 00:10 +00:00)
- [#362](https://github.com/linkedin/dustjs/pull/362) remove node_modules directory (@wizardzloy)
- [#363](https://github.com/linkedin/dustjs/pull/363) Issue #340. Remove old optimization to avoid looking at arrays in get. (@rragan)
- [#368](https://github.com/linkedin/dustjs/pull/368) Add context.getTemplateName. This method now correctly returns the template name even for directly loaded templates being used as partials. For end users please use this api for getting the template name instead of ctx.templatename (@prashn64)

### v2.2.0 (2013/11/08 18:42 +00:00)
- [#360](https://github.com/linkedin/dustjs/pull/360) Use get for all Dust references (@smfoote)

### v2.1.4 (2014/03/06 00:32 +00:00)
- [#429](https://github.com/linkedin/dustjs/pull/429) Patch 2.1.X 2.2.X 2.3.X to fix IE9 and below issues when dust debugging is on. Added a cross-browser/node/rhino version of indexOf and logger.log. (@prashn64)
- [#430](https://github.com/linkedin/dustjs/pull/430) Only have the logger.log call once inside logger.log (@prashn64)
- [#432](https://github.com/linkedin/dustjs/pull/432) add temporary fix for ssl problems with npm until travis itself updates ... (@prashn64)

### v2.1.3 (2014/02/27 08:18 +00:00)
- [#427](https://github.com/linkedin/dustjs/pull/427) Add 2.2.7 which is identical to 2.2.6 for npm (@prashn64)
- [#426](https://github.com/linkedin/dustjs/pull/426) Add changelog (@lalitkapoor)

### v2.1.1 (2014/01/16 01:09 +00:00)
- [#371](https://github.com/linkedin/dustjs/pull/371) Fix our release process + add bower.json + jshint + cleanup master (@jimmyhchan)
- [#334](https://github.com/linkedin/dustjs/pull/334) Issue #332 provide a raw input syntax similar to comments {!...!} where newlines, spaces and braces are kept. (@jimmyhchan)
- [#382](https://github.com/linkedin/dustjs/pull/382) remove the globals and isolate parser and compiler (@jimmyhchan)

### v2.1.0 (2013/10/25 08:44 +00:00)
- [#279](https://github.com/linkedin/dustjs/pull/279) Client Side Debugging (@prashn64)
- [#344](https://github.com/linkedin/dustjs/pull/344) Per discussions, this may be a bit premature. Revert "Merge pull request #279 from prashn64/master" until the api for debugging is more settled. (@prashn64)
- [#347](https://github.com/linkedin/dustjs/pull/347) Dust error logging (@prashn64)
- [#355](https://github.com/linkedin/dustjs/pull/355) add a unit test for inline params with dashes (@prashn64)
- [#350](https://github.com/linkedin/dustjs/pull/350) Support dynamic template names for the context's template name. (@johnsonlei)

### v2.0.3 (2013/09/06 23:23 +00:00)
- [#323](https://github.com/linkedin/dustjs/pull/323) Fix Issue #322. block name in template includes previous text by mistake (@rragan)
- [#328](https://github.com/linkedin/dustjs/pull/328) Put templateName on the context instance instead of the context's globals. (@prashn64)
- [#335](https://github.com/linkedin/dustjs/pull/335) make context.templateName change into version 2.0.3 (@prashn64)
- [#338](https://github.com/linkedin/dustjs/pull/338) update to correct  2.0.3 (@prashn64)

### v2.0.2 (2013/08/01 20:57 +00:00)
- [#318](https://github.com/linkedin/dustjs/pull/318) Fix issue #317. Falsey value at end of path (@rragan)
- [#319](https://github.com/linkedin/dustjs/pull/319) Clarify comments on path search (@rragan)
- [#320](https://github.com/linkedin/dustjs/pull/320) Update parser.js to sync with latest dust.pegjs (@smfoote)

### v2.0.1 (2013/07/24 17:34 +00:00)
- [#312](https://github.com/linkedin/dustjs/pull/312) Remove node_modules/jasmine_node (@smfoote)
- [#309](https://github.com/linkedin/dustjs/pull/309) Add lines and columns to dust.pegjs (@smfoote)

### v2.0.0 (2013/07/17 02:18 +00:00)
- [#2](https://github.com/linkedin/dustjs/pull/2) Fixed jasmine testRunner to understand base and options properties (@rragan)
- [#271](https://github.com/linkedin/dustjs/pull/271) adding support for . path resolution in context get (@carchrae, @rragan)
- [#289](https://github.com/linkedin/dustjs/pull/289) Cache VM context across `dust.loadSource` calls. (@totherik)
- [#304](https://github.com/linkedin/dustjs/pull/304) GH-292 support template name in nested partials, need a stack to store the current name (@vybs)
- [#305](https://github.com/linkedin/dustjs/pull/305) Remove option to control pathScope and remove tests for old getPath (@rragan)
- [#306](https://github.com/linkedin/dustjs/pull/306) add support for GH-292, support the template name in nested partials (@vybs)

### v1.2.6 (2013/06/06 15:54 +00:00)
- [#278](https://github.com/linkedin/dustjs/pull/278) Remove strip from dust.compile, since it wasn't really very good anyway (@smfoote)

### v1.2.5 (2013/06/02 21:25 +00:00)
- [#25](https://github.com/linkedin/dustjs/pull/25) process.binding('evals') is now require('vm') (@stonecobra)
- [#3](https://github.com/linkedin/dustjs/pull/3) Gaurd against browsers (@Raynos)
- [#5](https://github.com/linkedin/dustjs/pull/5) Quote 'if' helper, fixes #4 (@kmiyashiro)
- [#9](https://github.com/linkedin/dustjs/pull/9) Update to 0.4.0 in dist so that docs are correct (@kmiyashiro)
- [#25](https://github.com/linkedin/dustjs/pull/25) pegjs 0.7 compatibility and parser variables removed from section function on dustjs file (@jairodemorais)
- [#13](https://github.com/linkedin/dustjs/pull/13) Issue #8 Support cleaner way to pass arguments to partials (@jimmyhchan)
- [#36](https://github.com/linkedin/dustjs/pull/36) Rhino compatible (@jairodemorais)
- [#34](https://github.com/linkedin/dustjs/pull/34) Escape a single quote apostrophe in escapeHtml (@iamleppert)
- [#31](https://github.com/linkedin/dustjs/pull/31) process.nextTick instead of setTimeout (@zaphod1984)
- [#39](https://github.com/linkedin/dustjs/pull/39) Fixes #28, better error tracking implemented. (@iamleppert)
- [#37](https://github.com/linkedin/dustjs/pull/37) Fixes #7, "Support numbers in the aliases" (@iamleppert)
- [#40](https://github.com/linkedin/dustjs/pull/40) Rebuilding parser and merge to fix failed CI (@iamleppert)
- [#49](https://github.com/linkedin/dustjs/pull/49) dust tool included. (@jairodemorais)
- [#44](https://github.com/linkedin/dustjs/pull/44) Select helper and unit tests, fixes #16 (@iamleppert)
- [#52](https://github.com/linkedin/dustjs/pull/52) Added unit test code coverage report with node-coverage (@iamleppert)
- [#54](https://github.com/linkedin/dustjs/pull/54) preventing dust to crash on non existant if-condition (@zaphod1984)
- [#59](https://github.com/linkedin/dustjs/pull/59) ws relaxed to allow eol (@jairodemorais)
- [#60](https://github.com/linkedin/dustjs/pull/60) dust moved to 0.6.0 version (@jairodemorais)
- [#56](https://github.com/linkedin/dustjs/pull/56) Fix for Issue #50: helper for debugging the context + console log wrapper (@jimmyhchan)
- [#71](https://github.com/linkedin/dustjs/pull/71) Test for pipe function added. (@jairodemorais, @kilianc)
- [#73](https://github.com/linkedin/dustjs/pull/73) dust resolve reference helper created and refactor if to use it (@jairodemorais)
- [#70](https://github.com/linkedin/dustjs/pull/70) fix issue https://github.com/linkedin/dustjs/issues/68 (@jairodemorais)
- [#65](https://github.com/linkedin/dustjs/pull/65) literal params relaxed to allow eol (@jairodemorais)
- [#78](https://github.com/linkedin/dustjs/pull/78) Use the tap method in the select helper (@jairodemorais)
- [#95](https://github.com/linkedin/dustjs/pull/95) helpers removed from Dust core. New npm package created for helpers. (@jairodemorais)
- [#105](https://github.com/linkedin/dustjs/pull/105) merge PR https://github.com/linkedin/dustjs/pull/93 (@jairodemorais)
- [#113](https://github.com/linkedin/dustjs/pull/113) Make $idx/$len work for all array  objects and not leave old values in contexts (@rragan)
- [#99](https://github.com/linkedin/dustjs/pull/99) new math helper method (@sclatter)
- [#126](https://github.com/linkedin/dustjs/pull/126) Removed left-over .DS_Store files (@zzen)
- [#128](https://github.com/linkedin/dustjs/pull/128) Updated README for consistency and readability (@zzen)
- [#108](https://github.com/linkedin/dustjs/pull/108) issue 106, accessing array inside a loop using the current context (@jairodemorais)
- [#132](https://github.com/linkedin/dustjs/pull/132) Partial with parameters was not getting the correct context (@jimmyhchan)
- [#127](https://github.com/linkedin/dustjs/pull/127) Fixed :else in section when iterating over empty array. (@zzen)
- [#139](https://github.com/linkedin/dustjs/pull/139) GH-85, GH-127 improve test coverage (@vybs)
- [#140](https://github.com/linkedin/dustjs/pull/140) GH-134 , remove support for scalar in the block # (@vybs)
- [#141](https://github.com/linkedin/dustjs/pull/141) Fixes for GH-134 (@vybs)
- [#142](https://github.com/linkedin/dustjs/pull/142) add another intersting test case with . and blocks (@vybs)
- [#143](https://github.com/linkedin/dustjs/pull/143) reverse the GH-134 since it is backward incompatible (@vybs)
- [#144](https://github.com/linkedin/dustjs/pull/144) minor: reorganized the section code and documented some more as to how t... (@vybs)
- [#145](https://github.com/linkedin/dustjs/pull/145) rename grammar tests to core tests, since it testing dust.js core functionality, also has GH-133, fix the missing helper case (@vybs)
- [#146](https://github.com/linkedin/dustjs/pull/146) Remove the old grammartests file, since it renamed to coreTests now and guard against missing context head in section (@vybs)
- [#151](https://github.com/linkedin/dustjs/pull/151) add v1.1 files to the dist (@vybs)
- [#152](https://github.com/linkedin/dustjs/pull/152) Really undo 2760048: removing scalar block support (@jimmyhchan)
- [#156](https://github.com/linkedin/dustjs/pull/156) Cleanup the helpers from the dust repo, fix the make test (@vybs)
- [#154](https://github.com/linkedin/dustjs/pull/154) partials with parameters context was missing blocks (@jimmyhchan)
- [#157](https://github.com/linkedin/dustjs/pull/157) Add unit tests for the pull/154 (@vybs)
- [#158](https://github.com/linkedin/dustjs/pull/158) fix the bad merge (@vybs)
- [#159](https://github.com/linkedin/dustjs/pull/159) fix the description on the core tests for $idx and $len for scalar (@vybs)
- [#165](https://github.com/linkedin/dustjs/pull/165) improve description in unit tests (@vybs)
- [#168](https://github.com/linkedin/dustjs/pull/168) Minor README update (@sethmcl)
- [#183](https://github.com/linkedin/dustjs/pull/183) cover, uglify and jasmine move to dev dependencies. GH-183 (@jairodemorais)
- [#166](https://github.com/linkedin/dustjs/pull/166) Add template strip of white space to dust.compile (optional defaults to not strip) (@smfoote)
- [#188](https://github.com/linkedin/dustjs/pull/188) The whitespace grammar rule for partial was a little inconsistent with other tags. issue GH=187 fixed. (@jairodemorais)
- [#216](https://github.com/linkedin/dustjs/pull/216) add semicolons to dust compiler GH=215 (@jairodemorais)
- [#223](https://github.com/linkedin/dustjs/pull/223) Fix for Issue #222. Code change + new test added to verify proper behavior (@rragan)
- [#236](https://github.com/linkedin/dustjs/pull/236) eol added to buffer again. (@jairodemorais)
- [#241](https://github.com/linkedin/dustjs/pull/241) using dust.isArray in place of Array.isArray (@jairodemorais)
- [#243](https://github.com/linkedin/dustjs/pull/243) compiler variable name changed to dustCompiler (@jairodemorais)
- [#245](https://github.com/linkedin/dustjs/pull/245) Gh-208 - solve the incorrect error line reported in peg (@jairodemorais)
- [#249](https://github.com/linkedin/dustjs/pull/249) Remove debugger in dust-full-1.2.1.js (@sethkinast)
- [#253](https://github.com/linkedin/dustjs/pull/253) 2-3000% performance enhancement in IE7 (@jlkonsultab)
- [#263](https://github.com/linkedin/dustjs/pull/263) Add forward slash and unit tests for j filter (@prashn64)
- [#274](https://github.com/linkedin/dustjs/pull/274) GH-266 store rendered template in global (@vybs)