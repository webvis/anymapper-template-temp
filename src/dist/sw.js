if(!self.define){let e,i={};const s=(s,d)=>(s=new URL(s+".js",d).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(d,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let o={};const a=e=>s(e,n),c={module:{uri:n},exports:o,require:a};i[n]=Promise.all(d.map((e=>c[e]||a(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3ea082d2"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.cd5c863e.js",revision:null},{url:"assets/index.d37d9946.css",revision:null},{url:"data/base0.svg",revision:"748b7a29f3e59149e2bd2ef61916aad5"},{url:"data/base1.svg",revision:"44946d89dab58598077a538ba5c71d70"},{url:"data/floor0.svg",revision:"a05d5c6bb18d74f405301125375707d5"},{url:"data/floor1.svg",revision:"e219429089cf94bd368a16b72ea63a69"},{url:"data/floor2.svg",revision:"a4f07fb19b1542eb2dd07e5095ea40d1"},{url:"data/pois.json",revision:"26ec635f66787937895505389884aa40"},{url:"icon.png",revision:"a04bb3ed329c3d787119fe5cc5ad0121"},{url:"icon.svg",revision:"506d67a27560b260edc6d6c58135bb69"},{url:"index.html",revision:"189a7969c96d002eefb3df8347c8f587"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"theme-dark.css",revision:"abf30beb7291ae19e58a6488d303fb9f"},{url:"theme-light.css",revision:"67ced1d71e21add8d2964d449cd29f86"},{url:"icon.svg",revision:"506d67a27560b260edc6d6c58135bb69"},{url:"icon.png",revision:"a04bb3ed329c3d787119fe5cc5ad0121"},{url:"manifest.webmanifest",revision:"11f765fda86b70230d0565ec64b6d396"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
