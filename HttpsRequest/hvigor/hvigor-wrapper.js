"use strict";var e=require("fs"),r=require("path"),n=require("os"),t=require("crypto"),o=require("child_process");function i(e){var r=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var t=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(r,n,t.get?t:{enumerable:!0,get:function(){return e[n]}})}})),r.default=e,Object.freeze(r)}var c=i(e),s=i(r),a=i(n),u=i(t);const l="Windows_NT";function d(){return n.type()===l}const f="@ohos/hvigor",p=d()?"pnpm.cmd":"pnpm",h=d()?"npm.cmd":"npm",v="hvigor-config.json5",g="package.json",y=s.resolve(a.homedir(),".hvigor"),m=s.resolve(y,"wrapper","tools"),S=s.resolve(m,"node_modules",".bin",p),E=s.resolve(y,"caches"),O=s.resolve(y,"project_caches"),w=process.cwd(),b=s.basename(function(e,r="md5"){return u.createHash(r).update(e,"utf-8").digest("hex")}(w)),j=s.resolve(w,"hvigor"),x=s.resolve(O,b,"workspace"),$=s.resolve(x,g);function N(e){e instanceof Error?console.error(e.message):console.error(e),process.exit(-1)}function q(e,r){try{return require.resolve(e,{paths:[...r]}),!0}catch(e){return!1}}function k(e,r,n){0!==o.spawnSync(e,r,n).status&&N(`Error: ${e} execute failed.See above for details.`)}function J(e,r){try{return JSON.parse(e)}catch(e){const n=`Error: ${r} is not the correct JSON/JSON5 format.`;if(e instanceof SyntaxError){const t=e.message.split("at ");2===t.length&&n.concat(`${t[0].trim()}${a.EOL}\t at ${r}:${t[1].trim()}`)}N(n)}}function _(){const e=function(){const e=process.execPath;return s.join(s.dirname(e),h)}();!function(){const e=s.resolve(m,g);try{c.existsSync(m)||c.mkdirSync(m,{recursive:!0});const r={dependencies:{}};c.writeFileSync(e,JSON.stringify(r))}catch(r){N(`Error: EPERM: operation not permitted,create ${e} failed.`)}}(),k(e,["install","pnpm"],{cwd:m,stdio:["inherit","inherit","inherit"]})}let F,P;function H(){F=function(){const e=s.resolve(j,v);if(!c.existsSync(e))throw new Error(`Error: Hvigor config file ${e} does not exist.`);return J(c.readFileSync(s.resolve(e),{encoding:"utf-8"}),e)}(),P=function(){if(c.existsSync($)){return J(c.readFileSync(s.resolve($),{encoding:"utf-8"}),$)}return{dependencies:{}}}();return!(!q(f,[x])||F.hvigorVersion!==P.dependencies[f])||(console.log("Hvigor installing..."),!1)}const T={cwd:x,stdio:["inherit","inherit","inherit"]};function V(){const e={dependencies:{}};e.dependencies[f]=F.hvigorVersion;try{c.mkdirSync(x,{recursive:!0});const r=s.resolve(x,g);c.writeFileSync(r,JSON.stringify(e))}catch(e){N(e)}k(S,["config","set","store-dir",E],T),k(S,["install"],T)}c.existsSync(S)&&q("pnpm",[m])||_(),H()||V(),function(){const e=s.resolve(x,"node_modules","@ohos","hvigor","bin","hvigor.js");try{const r=c.realpathSync(e);require(r)}catch(r){N(`Error: ENOENT: no such file ${e},delete ${x} and retry.`)}}();