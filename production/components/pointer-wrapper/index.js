import{i as l}from"../../assets/scripts/insert-styles-43b34cac.js";function i(r){return p(r)||u(r)||f(r)||c()}function c(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(r,e){if(r){if(typeof r=="string")return o(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(r,e)}}function u(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function p(r){if(Array.isArray(r))return o(r)}function o(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}var y=`.pointer{background:radial-gradient(#fff 80%,#000 100%);background:#fff;mask-image:radial-gradient(#fff 0%,transparent 75%);opacity:.5}.pointer.pointer--light{opacity:1;background:rgba(36,36,36,.4431372549)}
`;l(y);var s={COMPONENT:'[data-component-id="pointer-wrapper"]'},d=i(document.querySelectorAll(s.COMPONENT)),m=function(e){var t=e.clientX,n=e.clientY;d.forEach(function(a){a.style.top="".concat(n,"px"),a.style.left="".concat(t,"px")})},b=function(){window.addEventListener("mousemove",m)};b();