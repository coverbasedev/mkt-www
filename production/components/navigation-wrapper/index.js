import{i as _}from"../../assets/scripts/insert-styles-43b34cac.js";import{C as n}from"../../assets/scripts/classes-8a596056.js";function y(r){return N(r)||p(r)||A(r)||b()}function b(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A(r,e){if(r){if(typeof r=="string")return u(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return u(r,e)}}function p(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function N(r){if(Array.isArray(r))return u(r)}function u(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,a=new Array(e);t<e;t++)a[t]=r[t];return a}var S=function(){var e=document.documentElement,t=window.innerWidth-document.documentElement.clientWidth;e.style.setProperty("--js-scrollbar-width","".concat(t,"px"))},E=function(){return document.body.classList.contains(n.LOCKED)},L=function(){E()||(S(),document.body.classList.add(n.LOCKED))},I=function(){document.body.classList.remove(n.LOCKED)},O=`.main-navigation.js--active .main-navigation__background,.secondary-navigation.js--active{transform:translate(0)}.secondary-navigation__inner{scrollbar-width:none}.secondary-navigation__inner::-webkit-scrollbar{width:0}.burger.js--active .burger__line{transform:rotate(0) translate(0)}.burger.js--active .burger__line.burger__line--top{transform:rotate(45deg) translate(2px,2px)}.burger.js--active .burger__line.burger__line--bottom{transform:rotate(-45deg) translate(2px,-3px)}
`,T=function(e,t){var a=e.querySelector(t.MAIN_NAVIGATION),l=e.querySelector(t.SECONDARY_NAVIGATION),o=e.querySelector(t.BURGER),d=y(e.querySelectorAll(t.CLOSE_BUTTONS)),s=[a,d,l,o],g=s.filter(Boolean);if(s.length!==g.length){console.error("Some elements were not found",s);return}var c=function(){a.classList.remove(n.ACTIVE),l.classList.remove(n.ACTIVE),o.classList.remove(n.ACTIVE),I()},f=function(){L(),a.classList.add(n.ACTIVE),l.classList.add(n.ACTIVE),o.classList.add(n.ACTIVE)},m=function(){o.classList.contains(n.ACTIVE)?c():f()};o.addEventListener("click",m),window.addEventListener("resize",c),d.forEach(function(i){i.addEventListener("click",c)})};_(O);var v={COMPONENT:'[data-component-id="navigation-wrapper"]',MAIN_NAVIGATION:'[data-role="main-navigation"]',SECONDARY_NAVIGATION:'[data-role="secondary-navigation"]',CLOSE_BUTTONS:'[data-role="close-navigation"]',BURGER:'[data-role="burger"]'},C=document.querySelector(v.COMPONENT),h=function(){T(C,v)};h();