import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{n,t as r}from"./vendor~note-print-Dnf_vEjQ.js";import{n as i,r as a}from"./vendor~note-print-Bjkt1Wjx.js";function o(e){if(!e)return;let t;if(e.getBoundingClientRect!==void 0)t=e.getBoundingClientRect();else{let n=document.createRange();n.selectNode(e),t=n.getBoundingClientRect()}return t}function s(e){if(!e)return;let t;if(e.getClientRects!==void 0)t=e.getClientRects();else{let n=document.createRange();n.selectNode(e),t=n.getClientRects()}return t}function c(){var e=new Date().getTime();return typeof performance<`u`&&typeof performance.now==`function`&&(e+=performance.now()),`xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g,function(t){var n=(e+Math.random()*16)%16|0;return e=Math.floor(e/16),(t===`x`?n:n&3|8).toString(16)})}function l(e,t){for(var n=0;n<t.length;n++)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])}function u(e){if(arguments.length==0)throw TypeError("`CSS.escape` requires an argument.");for(var t=String(e),n=t.length,r=-1,i,a=``,o=t.charCodeAt(0);++r<n;)i=t.charCodeAt(r),i==0?a+=`�`:i>=1&&i<=31||i==127||r==0&&i>=48&&i<=57||r==1&&i>=48&&i<=57&&o==45?a+=`\\`+i.toString(16)+` `:r==0&&n==1&&i==45?a+=`\\`+t.charAt(r):i==46&&t.charAt(0)==`#`?a+=`\\.`:a+=i>=128||i==45||i==95||i==35||i==46||i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122?t.charAt(r):`\\`+t.charAt(r);return a}function d(){this.resolve=null,this.reject=null,this.id=c(),this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t}),Object.freeze(this)}function f(e){return e.value+(e.unit||``)}var p;function m(){return(m=e((()=>{p=typeof window<`u`&&(`requestIdleCallback`in window?window.requestIdleCallback:window.requestAnimationFrame)})))()}function h(e){return e&&e.nodeType===1}function g(e){return e&&e.nodeType===3}function*_(e,t){let n=e;for(;n;)if(yield n,n.childNodes.length)n=n.firstChild;else if(n.nextSibling){if(t&&n===t){n=void 0;break}n=n.nextSibling}else for(;n;){if(n=n.parentNode,t&&n===t){n=void 0;break}if(n&&n.nextSibling){n=n.nextSibling;break}}}function v(e,t){if(t&&e===t)return;let n=M(e);if(n)return n;if(e.parentNode)for(;e=e.parentNode;){if(t&&e===t)return;if(n=M(e),n)return n}}function y(e,t){if(t&&e===t)return;let n=A(e);if(n)return n;if(e.parentNode)for(;e=e.parentNode;){if(t&&e===t)return;if(n=A(e),n)return n}}function b(e,t){let n=v(e,t);for(;n&&n.nodeType!==1;)n=v(n,t);return n}function x(e,t){let n=y(e,t);for(;n&&n.nodeType!==1;)n=y(n,t);return n}function S(e,t){let n=b(e,t);for(;n&&n.dataset.undisplayed;)n=b(n,t);return n}function C(e,t){let n=x(e,t);for(;n&&n.dataset.undisplayed;)n=x(n,t);return n}function w(e){let t,n,r=[],i=[],a=document.createDocumentFragment();if(e.nodeName===`TR`){let t=e.previousElementSibling,n=1;for(;t;){if(t.childElementCount>e.childElementCount){let r=Array.from(e.children);for(;e.firstChild;)e.firstChild.remove();let i=0;for(let a=0;a<t.children.length;a++){let o=t.children[a];if(o.rowSpan&&o.rowSpan>n){let t=o.cloneNode(!0);t.rowSpan=o.rowSpan-n,e.appendChild(t)}else{let t=r[i++];t&&e.appendChild(t)}}}t=t.previousElementSibling,n++}}let o=e;for(;o.parentNode&&o.parentNode.nodeType===1;)r.unshift(o.parentNode),o=o.parentNode;for(var s=0;s<r.length;s++){if(n=r[s],t=n.cloneNode(!1),t.setAttribute(`data-split-from`,t.getAttribute(`data-ref`)),t.hasAttribute(`id`)){let e=t.getAttribute(`id`);t.setAttribute(`data-id`,e),t.removeAttribute(`id`)}if(t.hasAttribute(`data-break-before`)&&t.removeAttribute(`data-break-before`),t.hasAttribute(`data-previous-break-after`)&&t.removeAttribute(`data-previous-break-after`),i.length?i[i.length-1].appendChild(t):a.appendChild(t),i.push(t),t.nodeName===`TD`&&n.parentElement.contains(n)){let e=n,r=t;for(;e=e.previousElementSibling;){let n=e.cloneNode(!1);t.parentElement.insertBefore(n,r),r=n}}}return i=void 0,a}function T(e){return!(e===void 0||e.dataset===void 0||e.dataset.breakBefore===void 0||e.dataset.breakBefore!==`always`&&e.dataset.breakBefore!==`page`&&e.dataset.breakBefore!==`left`&&e.dataset.breakBefore!==`right`&&e.dataset.breakBefore!==`recto`&&e.dataset.breakBefore!==`verso`)}function ee(e){return!(e===void 0||e.dataset===void 0||e.dataset.previousBreakAfter===void 0||e.dataset.previousBreakAfter!==`always`&&e.dataset.previousBreakAfter!==`page`&&e.dataset.previousBreakAfter!==`left`&&e.dataset.previousBreakAfter!==`right`&&e.dataset.previousBreakAfter!==`recto`&&e.dataset.previousBreakAfter!==`verso`)}function te(e,t){if(e===void 0||!t||k(e)||e.dataset&&e.dataset.undisplayed)return!1;let n=t.dataset?t.dataset.page:void 0;if(n===void 0){let e=fe(t);e&&(n=e.dataset.page)}let r=e.dataset?e.dataset.page:void 0;if(r===void 0){let n=fe(e,t);n&&(r=n.dataset.page)}return r!==n}function*ne(e){let t=e.nodeValue,n=t.length,r=0,i,a,o=e.parentElement&&e.parentElement.nodeName===`PRE`;for(;r<n;)i=t[r],/^[\S\u202F\u00A0]$/.test(i)||o?a||(a=document.createRange(),a.setStart(e,r)):a&&=(a.setEnd(e,r),yield a,void 0),r+=1;a&&(a.setEnd(e,r),yield a)}function*re(e){let t=e.startContainer,n=t.length,r=e.startOffset,i;for(;r<n;)i=document.createRange(),i.setStart(t,r),i.setEnd(t,r+1),yield i,r+=1}function ie(e){let t;if(e.tagName===void 0)return!0;if(e.style&&e.style.display===`none`)return!1;switch(e.tagName){case`A`:case`ABBR`:case`ACRONYM`:case`B`:case`BDO`:case`BIG`:case`BR`:case`BUTTON`:case`CITE`:case`CODE`:case`DFN`:case`EM`:case`I`:case`IMG`:case`INPUT`:case`KBD`:case`LABEL`:case`MAP`:case`OBJECT`:case`Q`:case`SAMP`:case`SCRIPT`:case`SELECT`:case`SMALL`:case`SPAN`:case`STRONG`:case`SUB`:case`SUP`:case`TEXTAREA`:case`TIME`:case`TT`:case`VAR`:case`P`:case`H1`:case`H2`:case`H3`:case`H4`:case`H5`:case`H6`:case`FIGCAPTION`:case`BLOCKQUOTE`:case`PRE`:case`LI`:case`TD`:case`DT`:case`DD`:case`VIDEO`:case`CANVAS`:t=!1;break;default:t=!0}return t}function ae(e,t=!1){return e.cloneNode(t)}function E(e,t,n){return oe(e.getAttribute(`data-ref`),t,n)}function oe(e,t,n){return!n&&t.indexOfRefs&&t.indexOfRefs[e]?t.indexOfRefs[e]:t.querySelector(`[data-ref='${e}']`)}function se(e){return!!(g(e)||h(e)&&e.dataset.ref)}function D(e){for(;!se(e)&&(e=e.previousSibling?e.previousSibling:e.parentNode,e););return e}function ce(e){let t=e.parentNode;return t?Array.prototype.indexOf.call(t.childNodes,e):0}function O(e,t){return e.childNodes[t]}function le(e){return!!(h(e)||g(e)&&e.textContent.trim().length)}function ue(e,t){if(!g(e))return-1;let n=e.textContent,r,i=-1;for(var a=0;a<t.childNodes.length;a++)if(r=t.childNodes[a],r.nodeType===3&&t.childNodes[a].textContent.includes(n)){i=a;break}return i}function k(e){return e.nodeType===8||e.nodeType===3&&de(e)}function de(e){return!/[^\t\n\r ]/.test(e.textContent)}function A(e){for(;e=e.previousSibling;)if(!k(e))return e;return null}function fe(e,t){if(e&&e.dataset&&e.dataset.page)return e;if(e.parentNode)for(;e=e.parentNode;){if(t&&e===t)return;if(e.dataset&&e.dataset.page)return e}return null}function pe(e){for(;e=e.parentNode;)if(e&&e.dataset&&e.dataset.breakInside===`avoid`)return e;return null}function j(e,t,n){if(!(n&&e===n)&&e.parentNode)for(;e=e.parentNode;){if(n&&e===n)return;if(e.nodeName===t)return e}}function M(e){for(;e=e.nextSibling;)if(!k(e))return e;return null}function me(e,t,n){let r=document.createTreeWalker(e||this.dom,n||NodeFilter.SHOW_ALL,t?{acceptNode:t}:null,!1),i,a;for(i=r.nextNode();i;)a=i,i=r.nextNode(),a.parentNode.removeChild(a)}var N;function he(){return(he=e((()=>{N=class{constructor(e,t){this.node=e,this.offset=t}equals(e){return!(!e||this.node&&e.node&&this.node!==e.node||this.offset&&e.offset&&this.offset!==e.offset)}toJSON(e){let t,n=0;return this.node?(h(this.node)&&this.node.dataset.ref?t=this.node.dataset.ref:e&&(t=this.node.parentElement.dataset.ref),this.node.parentElement&&(n=Array.from(this.node.parentElement.childNodes).indexOf(this.node)),JSON.stringify({node:t,index:n,offset:this.offset})):{}}}})))()}var P,F;function ge(){return(ge=e((()=>{P=class{constructor(e,t){this.breakToken=e,this.error=t}},F=class extends Error{constructor(e,t){super(e),this.items=t}}})))()}var I;function L(){return(L=e((()=>{I=class{constructor(e){this.context=e||this,this.hooks=[]}register(){for(var e=0;e<arguments.length;++e)if(typeof arguments[e]==`function`)this.hooks.push(arguments[e]);else for(var t=0;t<arguments[e].length;++t)this.hooks.push(arguments[e][t])}trigger(){var e=arguments,t=this.context,n=[];return this.hooks.forEach(function(r){var i=r.apply(t,e);i&&typeof i.then==`function`?n.push(i):n.push(new Promise((e,t)=>{e(i)}))}),Promise.all(n)}triggerSync(){var e=arguments,t=this.context,n=[];return this.hooks.forEach(function(r){var i=r.apply(t,e);n.push(i)}),n}list(){return this.hooks}clear(){return this.hooks=[]}}})))()}var _e,ve,R;function z(){return(z=e((()=>{m(),he(),ge(),_e=t(n(),1),L(),ve=1500,R=class{constructor(e,t,n){this.element=e,this.bounds=this.element.getBoundingClientRect(),this.parentBounds=this.element.offsetParent.getBoundingClientRect();let r=parseFloat(window.getComputedStyle(this.element).columnGap);if(r){let e=this.bounds.left-this.parentBounds.left;this.gap=r-e}else this.gap=0;t?this.hooks=t:(this.hooks={},this.hooks.onPageLayout=new I,this.hooks.layout=new I,this.hooks.renderNode=new I,this.hooks.layoutNode=new I,this.hooks.beforeOverflow=new I,this.hooks.onOverflow=new I,this.hooks.afterOverflowRemoved=new I,this.hooks.onBreakToken=new I,this.hooks.beforeRenderResult=new I),this.settings=n||{},this.maxChars=this.settings.maxChars||ve,this.forceRenderBreak=!1}async renderTo(e,t,n,r=this.bounds){let i=this.getStart(t,n),a=_(i,t),o,s,c,l,u=!1,d,f=0,p=n||new N(i);for(this.hooks&&this.hooks.onPageLayout.trigger(e,p,this);!c&&!d;){if(l=a.next(),s=o,o=l.value,c=l.done,!o){this.hooks&&this.hooks.layout.trigger(e,this);let n=e.querySelectorAll(`img`);return n.length&&await this.waitForImages(n),d=this.findBreakToken(e,t,r,p),d&&d.equals(p)?(console.warn(`Unable to layout item: `,s),this.hooks&&this.hooks.beforeRenderResult.trigger(void 0,e,this),new P(void 0,new F(`Unable to layout item`,[s]))):(this.rebuildTableFromBreakToken(d,e),this.hooks&&this.hooks.beforeRenderResult.trigger(d,e,this),new P(d))}if(this.hooks&&this.hooks.layoutNode.trigger(o),u&&this.shouldBreak(o,i)){this.hooks&&this.hooks.layout.trigger(e,this);let n=e.querySelectorAll(`img`);if(n.length&&await this.waitForImages(n),d=this.findBreakToken(e,t,r,p),d?this.rebuildTableFromBreakToken(d,e):d=this.breakAt(o),d&&d.equals(p)){console.warn(`Unable to layout item: `,o);let e=d.node&&v(d.node);if(e)d=new N(e);else return new P(void 0,new F(`Unable to layout item`,[o]))}f=0;break}if(o.dataset&&o.dataset.page){let e=o.dataset.page,t=this.element.closest(`.pagedjs_page`);t.classList.add(`pagedjs_named_page`),t.classList.add(`pagedjs_`+e+`_page`),o.dataset.splitFrom||t.classList.add(`pagedjs_`+e+`_first_page`)}let m=ie(o),h=this.append(o,e,n,m);if(f+=h.textContent.length,u||=le(o),m||(a=_(v(o,t),t)),this.forceRenderBreak){this.hooks&&this.hooks.layout.trigger(e,this),d=this.findBreakToken(e,t,r,p),d?this.rebuildTableFromBreakToken(d,e):d=this.breakAt(o),f=0,this.forceRenderBreak=!1;break}if(f>=this.maxChars){this.hooks&&this.hooks.layout.trigger(e,this);let n=e.querySelectorAll(`img`);if(n.length&&await this.waitForImages(n),d=this.findBreakToken(e,t,r,p),d&&(f=0,this.rebuildTableFromBreakToken(d,e)),d&&d.equals(p)){console.warn(`Unable to layout item: `,o);let t=d.node&&v(d.node);if(t)d=new N(t);else return this.hooks&&this.hooks.beforeRenderResult.trigger(void 0,e,this),new P(void 0,new F(`Unable to layout item`,[o]))}}}return this.hooks&&this.hooks.beforeRenderResult.trigger(d,e,this),new P(d)}breakAt(e,t=0){let n=new N(e,t);return this.hooks.onBreakToken.triggerSync(n,void 0,e,this).forEach(e=>{e!==void 0&&(n=e)}),n}shouldBreak(e,t){let n=y(e,t),r=e.parentNode,i=T(e)&&r&&!n&&T(r),a;return i&&(a=e.dataset.breakBefore===r.dataset.breakBefore),!a&&T(e)||ee(e)||te(e,n)}forceBreak(){this.forceRenderBreak=!0}getStart(e,t){let n;return n=t&&t.node||e.firstChild,n}append(e,t,n,r=!0,i=!0){let a=ae(e,!r);if(e.parentNode&&h(e.parentNode)){let r=E(e.parentNode,t);if(r)r.appendChild(a);else if(i){let i=w(e);r=E(e.parentNode,i),r?(n&&g(n.node)&&n.offset>0&&(a.textContent=a.textContent.substring(n.offset)),r.appendChild(a)):t.appendChild(a),t.appendChild(i)}else t.appendChild(a)}else t.appendChild(a);return a.dataset&&a.dataset.ref&&(t.indexOfRefs||={},t.indexOfRefs[a.dataset.ref]=a),this.hooks.renderNode.triggerSync(a,e,this).forEach(e=>{e!==void 0&&(a=e)}),a}rebuildTableFromBreakToken(e,t){if(!e||!e.node)return;let n=e.node,r=h(n)?n.closest(`td`):n.parentElement.closest(`td`);if(r){if(!E(r,t,!0))return;for(;r=r.nextElementSibling;)this.append(r,t,null,!0)}}async waitForImages(e){let t=Array.from(e).map(async e=>this.awaitImageLoaded(e));await Promise.all(t)}async awaitImageLoaded(e){return new Promise(t=>{if(e.complete!==!0)e.onload=function(){let{width:n,height:r}=window.getComputedStyle(e);t(n,r)},e.onerror=function(n){let{width:r,height:i}=window.getComputedStyle(e);t(r,i,n)};else{let{width:n,height:r}=window.getComputedStyle(e);t(n,r)}})}avoidBreakInside(e,t){let n;if(e!==t){for(;e.parentNode&&(e=e.parentNode,e!==t);)if(window.getComputedStyle(e)[`break-inside`]===`avoid`){n=e;break}return n}}createBreakToken(e,t,n){let r=e.startContainer,i=e.startOffset,a,o,s,c,l;if(h(r)){if(l=O(r,i),h(l)){if(o=E(l,t),o)a=E(o,n),i=0;else{let e=D(l);if(h(e)||(e=e.parentElement),o=E(e,t),!l.nextSibling){let e=E(o,n);if(!E(document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT).lastChild(),t))return}a=E(o,n).nextSibling,i=0}}else o=E(r,t),o||=E(D(r),t),s=E(o,n),c=ue(l,s),c===0?(a=s,i=0):(a=O(s,c),i=0)}else{if(o=E(r.parentNode,t),o||=E(D(r.parentNode),t),s=E(o,n),c=ue(r,s),c===-1)return;a=O(s,c),i+=a.textContent.indexOf(r.textContent)}if(a)return new N(a,i)}findBreakToken(e,t,n=this.bounds,r,i=!0){let a=this.findOverflow(e,n),o,s;if(this.hooks.onOverflow.triggerSync(a,e,n,this).forEach(e=>{e!==void 0&&(a=e)}),a){if(o=this.createBreakToken(a,e,t),this.hooks.onBreakToken.triggerSync(o,a,e,this).forEach(e=>{e!==void 0&&(o=e)}),o&&o.equals(r))return o;if(s=o&&o.node&&o.offset&&o.node.textContent?o.node.textContent.charAt(o.offset):void 0,o&&o.node&&i){let t=this.removeOverflow(a,s);this.hooks&&this.hooks.afterOverflowRemoved.trigger(t,e,this)}}return o}hasOverflow(e,t=this.bounds){let n=e&&e.parentNode,{width:r,height:i}=e.getBoundingClientRect(),a=n?n.scrollWidth:0,o=n?n.scrollHeight:0;return Math.max(Math.floor(r),a)>Math.round(t.width)||Math.max(Math.floor(i),o)>Math.round(t.height)}findOverflow(e,t=this.bounds,n=this.gap){if(!this.hasOverflow(e,t))return;let r=Math.floor(t.left),i=Math.round(t.right+n),a=Math.round(t.top),c=Math.round(t.bottom),l,u=_(e.firstChild,e),d,f,p,m,b,x,S,C;for(;!f;)if(d=u.next(),f=d.done,p=d.value,b=!1,x=!1,S=void 0,C=void 0,p){let t=o(p),n=Math.round(t.left),f=Math.floor(t.right),T=Math.round(t.top),ee=Math.floor(t.bottom);if(!l&&(n>=i||T>=c)){let t=!1,n=j(p,`TD`,e);if(n&&window.getComputedStyle(n)[`break-inside`]===`avoid`)S=n.parentElement;else if(h(p)){let n=window.getComputedStyle(p);t=n.getPropertyValue(`float`)!==`none`,b=n.getPropertyValue(`break-inside`)===`avoid`,x=p.dataset.breakBefore===`avoid`||p.dataset.previousBreakAfter===`avoid`,S=x&&y(p,e),C=p.tagName===`BR`||p.tagName===`WBR`}let r;if(r=p.nodeName===`TR`?p:j(p,`TR`,e),r){let t=r.parentElement;[`TBODY`,`THEAD`].includes(t.nodeName)&&window.getComputedStyle(t).getPropertyValue(`break-inside`)===`avoid`&&(S=t);let n=j(r,`TABLE`,e),i=n.querySelector(`[colspan]`);if(n&&i){let e=0;for(let t of Array.from(n.rows[0].cells))e+=parseInt(t.getAttribute(`colspan`)||`1`);if(r.cells.length!==e){let t=r.previousElementSibling,n;for(;t!==null;){n=0;for(let e of Array.from(t.cells))n+=parseInt(e.getAttribute(`colspan`)||`1`);if(n===e)break;t=t.previousElementSibling}n===e&&(S=t)}}}if(S){l=document.createRange(),l.selectNode(S);break}if(!C&&!t&&h(p)||g(p)&&p.textContent.trim().length){l=document.createRange(),l.selectNode(p);break}}if(!l&&g(p)&&p.textContent.trim().length&&!pe(p.parentNode)){let e=s(p),t;n=0,T=0;for(var w=0;w!=e.length;w++)t=e[w],t.width>0&&(!n||t.left>n)&&(n=t.left),t.height>0&&(!T||t.top>T)&&(T=t.top);if(n>=i||T>=c){l=document.createRange(),m=this.textBreak(p,r,i,a,c),m?l.setStart(p,m):l=void 0;break}}(b||f<=i&&ee<=c)&&(d=v(p,e),d&&(u=_(d,e)))}if(l)return l.setEndAfter(e.lastChild),l}findEndToken(e,t){if(e.childNodes.length===0)return;let n=e.lastChild,r;for(;n&&n.lastChild;)if(!se(n))n=n.previousSibling;else if(se(n.lastChild))n=n.lastChild;else{n=D(n.lastChild);break}g(n)&&(n.parentNode.dataset.ref?(r=ce(n),n=n.parentNode):n=n.previousSibling);let i=E(n,t);r&&(i=i.childNodes[r]);let a=v(i);return this.breakAt(a)}textBreak(e,t,n,r,i){let a=ne(e),s=0,c=0,l=0,u=0,d,f,p,m,h;for(;!p&&(f=a.next(),d=f.value,p=f.done,d);){if(m=o(d),s=Math.floor(m.left),c=Math.floor(m.right),l=Math.floor(m.top),u=Math.floor(m.bottom),s>=n||l>=i){h=d.startOffset;break}if(c>n||u>i){let e=re(d),t,r,a;for(;!a&&(r=e.next(),t=r.value,a=r.done,t);)if(m=o(t),s=Math.floor(m.left),l=Math.floor(m.top),s>=n||l>=i){h=t.startOffset,p=!0;break}}}return h}removeOverflow(e,t){let{startContainer:n}=e,r=e.extractContents();return this.hyphenateAtBreak(n,t),r}hyphenateAtBreak(e,t){if(g(e)){let n=e.textContent,r=n[n.length-1];(t&&/^\w|\u00AD$/.test(r)&&/^\w|\u00AD$/.test(t)||!t&&/^\w|\u00AD$/.test(r))&&(e.parentNode.classList.add(`pagedjs_hyphen`),e.textContent+=this.settings.hyphenGlyph||`‑`)}}equalTokens(e,t){return!(!e||!t||e.node&&t.node&&e.node!==t.node||e.offset&&t.offset&&e.offset!==t.offset)}},(0,_e.default)(R.prototype)})))()}var ye,B;function be(){return(be=e((()=>{z(),ye=t(n(),1),B=class{constructor(e,t,n,r,i){this.pagesArea=e,this.pageTemplate=t,this.blank=n,this.width=void 0,this.height=void 0,this.hooks=r,this.settings=i||{}}create(e,t){let n=document.importNode(this.pageTemplate.content,!0),r,i;t?(this.pagesArea.insertBefore(n,t.nextElementSibling),i=Array.prototype.indexOf.call(this.pagesArea.children,t.nextElementSibling),r=this.pagesArea.children[i]):(this.pagesArea.appendChild(n),r=this.pagesArea.lastChild);let a=r.querySelector(`.pagedjs_pagebox`),o=r.querySelector(`.pagedjs_page_content`),s=r.querySelector(`.pagedjs_footnote_area`),c=o.getBoundingClientRect();return o.style.columnWidth=Math.round(c.width)+`px`,o.style.columnGap=`calc(var(--pagedjs-margin-right) + var(--pagedjs-margin-left) + var(--pagedjs-bleed-right) + var(--pagedjs-bleed-left) + var(--pagedjs-column-gap-offset))`,this.width=Math.round(c.width),this.height=Math.round(c.height),this.element=r,this.pagebox=a,this.area=o,this.footnotesArea=s,r}createWrapper(){let e=document.createElement(`div`);return this.area.appendChild(e),this.wrapper=e,e}index(e){this.position=e;let t=this.element,n=e+1,r=`page-${n}`;this.id=r,t.dataset.pageNumber=n,t.setAttribute(`id`,r),this.name&&t.classList.add(`pagedjs_`+this.name+`_page`),this.blank&&t.classList.add(`pagedjs_blank_page`),e===0&&t.classList.add(`pagedjs_first_page`),e%2==1?(t.classList.remove(`pagedjs_right_page`),t.classList.add(`pagedjs_left_page`)):(t.classList.remove(`pagedjs_left_page`),t.classList.add(`pagedjs_right_page`))}async layout(e,t,n){this.clear(),this.startToken=t;let r=this.settings;!r.maxChars&&n&&(r.maxChars=n),this.layoutMethod=new R(this.area,this.hooks,r);let i=(await this.layoutMethod.renderTo(this.wrapper,e,t)).breakToken;return this.addListeners(e),this.endToken=i,i}async append(e,t){if(!this.layoutMethod)return this.layout(e,t);let n=(await this.layoutMethod.renderTo(this.wrapper,e,t)).breakToken;return this.endToken=n,n}getByParent(e,t){let n;for(var r=0;r<t.length;r++)if(n=t[r],n.dataset.ref===e)return n}onOverflow(e){this._onOverflow=e}onUnderflow(e){this._onUnderflow=e}clear(){this.removeListeners(),this.wrapper&&this.wrapper.remove(),this.createWrapper()}addListeners(e){return typeof ResizeObserver<`u`?this.addResizeObserver(e):(this._checkOverflowAfterResize=this.checkOverflowAfterResize.bind(this,e),this.element.addEventListener(`overflow`,this._checkOverflowAfterResize,!1),this.element.addEventListener(`underflow`,this._checkOverflowAfterResize,!1)),this._onScroll=function(){this.listening&&(this.element.scrollLeft=0)}.bind(this),this.element.addEventListener(`scroll`,this._onScroll),this.listening=!0,!0}removeListeners(){this.listening=!1,typeof ResizeObserver<`u`&&this.ro?this.ro.disconnect():this.element&&(this.element.removeEventListener(`overflow`,this._checkOverflowAfterResize,!1),this.element.removeEventListener(`underflow`,this._checkOverflowAfterResize,!1)),this.element&&this.element.removeEventListener(`scroll`,this._onScroll)}addResizeObserver(e){let t=this.wrapper,n=t.getBoundingClientRect().height;this.ro=new ResizeObserver(r=>{this.listening&&requestAnimationFrame(()=>{for(let i of r){let r=i.contentRect;r.height>n?(this.checkOverflowAfterResize(e),n=t.getBoundingClientRect().height):r.height<n&&(this.checkUnderflowAfterResize(e),n=r.height)}})}),this.ro.observe(t)}checkOverflowAfterResize(e){if(!this.listening||!this.layoutMethod)return;let t=this.layoutMethod.findBreakToken(this.wrapper,e,this.startToken);t&&(this.endToken=t,this._onOverflow&&this._onOverflow(t))}checkUnderflowAfterResize(e){if(!this.listening||!this.layoutMethod)return;let t=this.layoutMethod.findEndToken(this.wrapper,e);t&&this._onUnderflow&&this._onUnderflow(t)}destroy(){this.removeListeners(),this.element.remove(),this.element=void 0,this.wrapper=void 0}},(0,ye.default)(B.prototype)})))()}var xe;function Se(){return(Se=e((()=>{m(),xe=class{constructor(e,t){return e&&e.nodeType?this.dom=this.add(e):typeof e==`string`&&(this.dom=this.parse(e)),this.dom}parse(e,t){let n=document.createRange().createContextualFragment(e);return this.addRefs(n),n}add(e){return this.addRefs(e),e}addRefs(e){var t=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,null,!1);let n=t.nextNode();for(;n;){if(!n.hasAttribute(`data-ref`)){let e=c();n.setAttribute(`data-ref`,e)}n.id&&n.setAttribute(`data-id`,n.id),n=t.nextNode()}}find(e){return this.refs[e]}destroy(){this.refs=void 0,this.dom=void 0}}})))()}var Ce;function we(){return(we=e((()=>{m(),Ce=class{constructor(e){this._q=[],this.context=e,this.tick=requestAnimationFrame,this.running=!1,this.paused=!1}enqueue(){var e,t,n,r=[].shift.call(arguments),i=arguments;if(!r)throw Error(`No Task Provided`);return typeof r==`function`?(e=new d,t=e.promise,n={task:r,args:i,deferred:e,promise:t}):n={promise:r},this._q.push(n),this.paused==0&&!this.running&&this.run(),n.promise}dequeue(){var e,t,n;if(this._q.length&&!this.paused){if(e=this._q.shift(),t=e.task,t)return n=t.apply(this.context,e.args),n&&typeof n.then==`function`?n.then(function(){e.deferred.resolve.apply(this.context,arguments)}.bind(this),function(){e.deferred.reject.apply(this.context,arguments)}.bind(this)):(e.deferred.resolve.apply(this.context,n),e.promise);if(e.promise)return e.promise}else return e=new d,e.deferred.resolve(),e.promise}dump(){for(;this._q.length;)this.dequeue()}run(){return this.running||(this.running=!0,this.defered=new d),this.tick.call(window,()=>{this._q.length?this.dequeue().then(function(){this.run()}.bind(this)):(this.defered.resolve(),this.running=void 0)}),this.paused==1&&(this.paused=!1),this.defered.promise}flush(){if(this.running)return this.running;if(this._q.length)return this.running=this.dequeue().then(function(){return this.running=void 0,this.flush()}.bind(this)),this.running}clear(){this._q=[]}length(){return this._q.length}pause(){this.paused=!0}stop(){this._q=[],this.running=!1,this.paused=!0}}})))()}var Te,Ee,V;function H(){return(H=e((()=>{be(),Se(),Te=t(n(),1),L(),we(),m(),ge(),Ee=`
<div class="pagedjs_page">
	<div class="pagedjs_sheet">
		<div class="pagedjs_bleed pagedjs_bleed-top">
			<div class="pagedjs_marks-crop"></div>
			<div class="pagedjs_marks-middle">
				<div class="pagedjs_marks-cross"></div>
			</div>
			<div class="pagedjs_marks-crop"></div>
		</div>
		<div class="pagedjs_bleed pagedjs_bleed-bottom">
			<div class="pagedjs_marks-crop"></div>
			<div class="pagedjs_marks-middle">
				<div class="pagedjs_marks-cross"></div>
			</div>		<div class="pagedjs_marks-crop"></div>
		</div>
		<div class="pagedjs_bleed pagedjs_bleed-left">
			<div class="pagedjs_marks-crop"></div>
			<div class="pagedjs_marks-middle">
				<div class="pagedjs_marks-cross"></div>
			</div>		<div class="pagedjs_marks-crop"></div>
		</div>
		<div class="pagedjs_bleed pagedjs_bleed-right">
			<div class="pagedjs_marks-crop"></div>
			<div class="pagedjs_marks-middle">
				<div class="pagedjs_marks-cross"></div>
			</div>
			<div class="pagedjs_marks-crop"></div>
		</div>
		<div class="pagedjs_pagebox">
			<div class="pagedjs_margin-top-left-corner-holder">
				<div class="pagedjs_margin pagedjs_margin-top-left-corner"><div class="pagedjs_margin-content"></div></div>
			</div>
			<div class="pagedjs_margin-top">
				<div class="pagedjs_margin pagedjs_margin-top-left"><div class="pagedjs_margin-content"></div></div>
				<div class="pagedjs_margin pagedjs_margin-top-center"><div class="pagedjs_margin-content"></div></div>
				<div class="pagedjs_margin pagedjs_margin-top-right"><div class="pagedjs_margin-content"></div></div>
			</div>
			<div class="pagedjs_margin-top-right-corner-holder">
				<div class="pagedjs_margin pagedjs_margin-top-right-corner"><div class="pagedjs_margin-content"></div></div>
			</div>
			<div class="pagedjs_margin-right">
				<div class="pagedjs_margin pagedjs_margin-right-top"><div class="pagedjs_margin-content"></div></div>
				<div class="pagedjs_margin pagedjs_margin-right-middle"><div class="pagedjs_margin-content"></div></div>
				<div class="pagedjs_margin pagedjs_margin-right-bottom"><div class="pagedjs_margin-content"></div></div>
			</div>
			<div class="pagedjs_margin-left">
				<div class="pagedjs_margin pagedjs_margin-left-top"><div class="pagedjs_margin-content"></div></div>
				<div class="pagedjs_margin pagedjs_margin-left-middle"><div class="pagedjs_margin-content"></div></div>
				<div class="pagedjs_margin pagedjs_margin-left-bottom"><div class="pagedjs_margin-content"></div></div>
			</div>
			<div class="pagedjs_margin-bottom-left-corner-holder">
				<div class="pagedjs_margin pagedjs_margin-bottom-left-corner"><div class="pagedjs_margin-content"></div></div>
			</div>
			<div class="pagedjs_margin-bottom">
				<div class="pagedjs_margin pagedjs_margin-bottom-left"><div class="pagedjs_margin-content"></div></div>
				<div class="pagedjs_margin pagedjs_margin-bottom-center"><div class="pagedjs_margin-content"></div></div>
				<div class="pagedjs_margin pagedjs_margin-bottom-right"><div class="pagedjs_margin-content"></div></div>
			</div>
			<div class="pagedjs_margin-bottom-right-corner-holder">
				<div class="pagedjs_margin pagedjs_margin-bottom-right-corner"><div class="pagedjs_margin-content"></div></div>
			</div>
			<div class="pagedjs_area">
				<div class="pagedjs_page_content"></div>
				<div class="pagedjs_footnote_area">
					<div class="pagedjs_footnote_content pagedjs_footnote_empty">
						<div class="pagedjs_footnote_inner_content"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>`,V=class{constructor(e,t,n){this.settings=n||{},this.hooks={},this.hooks.beforeParsed=new I(this),this.hooks.filter=new I(this),this.hooks.afterParsed=new I(this),this.hooks.beforePageLayout=new I(this),this.hooks.onPageLayout=new I(this),this.hooks.layout=new I(this),this.hooks.renderNode=new I(this),this.hooks.layoutNode=new I(this),this.hooks.onOverflow=new I(this),this.hooks.afterOverflowRemoved=new I(this),this.hooks.onBreakToken=new I,this.hooks.beforeRenderResult=new I(this),this.hooks.afterPageLayout=new I(this),this.hooks.finalizePage=new I(this),this.hooks.afterRendered=new I(this),this.pages=[],this.total=0,this.q=new Ce(this),this.stopped=!1,this.rendered=!1,this.content=e,this.charsPerBreak=[],this.maxChars,e&&this.flow(e,t)}setup(e){this.pagesArea=document.createElement(`div`),this.pagesArea.classList.add(`pagedjs_pages`),e?e.appendChild(this.pagesArea):document.querySelector(`body`).appendChild(this.pagesArea),this.pageTemplate=document.createElement(`template`),this.pageTemplate.innerHTML=Ee}async flow(e,t){let n;await this.hooks.beforeParsed.trigger(e,this),n=new xe(e),this.hooks.filter.triggerSync(n),this.source=n,this.breakToken=void 0,this.pagesArea&&this.pageTemplate?(this.q.clear(),this.removePages()):this.setup(t),this.emit(`rendering`,n),await this.hooks.afterParsed.trigger(n,this),await this.loadFonts();let r=await this.render(n,this.breakToken);for(;r.canceled;)this.start(),r=await this.render(n,this.breakToken);return this.rendered=!0,this.pagesArea.style.setProperty(`--pagedjs-page-count`,this.total),await this.hooks.afterRendered.trigger(this.pages,this),this.emit(`rendered`,this.pages),this}async render(e,t){let n=this.layout(e,t),r=!1,i;for(;!r;)i=await this.q.enqueue(()=>this.renderAsync(n)),r=i.done;return i}start(){this.rendered=!1,this.stopped=!1}stop(){this.stopped=!0}renderOnIdle(e){return new Promise(t=>{p(async()=>{if(this.stopped)return t({done:!0,canceled:!0});let n=await e.next();this.stopped?t({done:!0,canceled:!0}):t(n)})})}async renderAsync(e){if(this.stopped)return{done:!0,canceled:!0};let t=await e.next();return this.stopped?{done:!0,canceled:!0}:t}async handleBreaks(e,t){let n=this.total+1,r=n%2==0?`left`:`right`,i=n%2==0?`verso`:`recto`,a,o,s;n!==1&&(e&&e.dataset!==void 0&&e.dataset.previousBreakAfter!==void 0&&(a=e.dataset.previousBreakAfter),e&&e.dataset!==void 0&&e.dataset.breakBefore!==void 0&&(o=e.dataset.breakBefore),(t||a&&(a===`left`||a===`right`)&&a!==r||a&&(a===`verso`||a===`recto`)&&a!==i||o&&(o===`left`||o===`right`)&&o!==r||o&&(o===`verso`||o===`recto`)&&o!==i)&&(s=this.addPage(!0)),s&&(await this.hooks.beforePageLayout.trigger(s,void 0,void 0,this),this.emit(`page`,s),await this.hooks.afterPageLayout.trigger(s.element,s,void 0,this),await this.hooks.finalizePage.trigger(s.element,s,void 0,this),this.emit(`renderedPage`,s)))}async*layout(e,t){let n=t||!1,r=[];for(;n!==void 0;){n&&n.node?await this.handleBreaks(n.node):await this.handleBreaks(e.firstChild);let t=this.addPage();if(await this.hooks.beforePageLayout.trigger(t,e,n,this),this.emit(`page`,t),n=await t.layout(e,n,this.maxChars),n){let e=n.toJSON(!0);if(r.lastIndexOf(e)>-1){let e=new F(`Layout repeated`,[n.node]);return console.error(`Layout repeated at: `,n.node),e}r.push(e)}await this.hooks.afterPageLayout.trigger(t.element,t,n,this),await this.hooks.finalizePage.trigger(t.element,t,void 0,this),this.emit(`renderedPage`,t),this.recoredCharLength(t.wrapper.textContent.length),yield n}}recoredCharLength(e){e!==0&&(this.charsPerBreak.push(e),this.charsPerBreak.length>4&&this.charsPerBreak.shift(),this.maxChars=this.charsPerBreak.reduce((e,t)=>e+t,0)/this.charsPerBreak.length)}removePages(e=0){if(!(e>=this.pages.length)){for(let t=e;t<this.pages.length;t++)this.pages[t].destroy();e>0?this.pages.splice(e):this.pages=[],this.total=this.pages.length}}addPage(e){let t=this.pages[this.pages.length-1],n=new B(this.pagesArea,this.pageTemplate,e,this.hooks,this.settings);return this.pages.push(n),n.create(void 0,t&&t.element),n.index(this.total),e||(n.onOverflow(e=>{if(console.warn(`overflow on`,n.id,e),this.rendered)return;let t=this.pages.indexOf(n)+1;this.stop(),this.breakToken=e,this.removePages(t),this.rendered===!0&&(this.rendered=!1,this.q.enqueue(async()=>{this.start(),await this.render(this.source,this.breakToken),this.rendered=!0}))}),n.onUnderflow(e=>{})),this.total=this.pages.length,n}async clonePage(e){let t=this.pages[this.pages.length-1],n=new B(this.pagesArea,this.pageTemplate,!1,this.hooks);this.pages.push(n),n.create(void 0,t&&t.element),n.index(this.total),await this.hooks.beforePageLayout.trigger(n,void 0,void 0,this),this.emit(`page`,n);for(let t of e.element.classList)t!==`pagedjs_left_page`&&t!==`pagedjs_right_page`&&n.element.classList.add(t);await this.hooks.afterPageLayout.trigger(n.element,n,void 0,this),await this.hooks.finalizePage.trigger(n.element,n,void 0,this),this.emit(`renderedPage`,n)}loadFonts(){let e=[];return(document.fonts||[]).forEach(t=>{if(t.status!==`loaded`){let n=t.load().then(e=>t.family,e=>(console.warn(`Failed to preload font-family:`,t.family),t.family));e.push(n)}}),Promise.all(e).catch(e=>{console.warn(e)})}destroy(){this.pagesArea.remove(),this.pageTemplate.remove()}},(0,Te.default)(V.prototype)})))()}var U,De;function Oe(){return(Oe=e((()=>{U=t(a(),1),m(),L(),De=class{constructor(e,t){t?this.hooks=t:(this.hooks={},this.hooks.onUrl=new I(this),this.hooks.onAtPage=new I(this),this.hooks.onAtMedia=new I(this),this.hooks.onRule=new I(this),this.hooks.onDeclaration=new I(this),this.hooks.onSelector=new I(this),this.hooks.onPseudoSelector=new I(this),this.hooks.onContent=new I(this),this.hooks.onImport=new I(this),this.hooks.beforeTreeParse=new I(this),this.hooks.beforeTreeWalk=new I(this),this.hooks.afterTreeWalk=new I(this));try{this.url=new URL(e,window.location.href)}catch{this.url=new URL(window.location.href)}}async parse(e){return this.text=e,await this.hooks.beforeTreeParse.trigger(this.text,this),this.ast=U.default.parse(this._text),await this.hooks.beforeTreeWalk.trigger(this.ast),this.replaceUrls(this.ast),this.id=c(),this.replaceIds(this.ast),this.imported=[],this.urls(this.ast),this.rules(this.ast),this.atrules(this.ast),await this.hooks.afterTreeWalk.trigger(this.ast,this),this.ast}insertRule(e){let t=this.ast.children.appendData(e);return this.declarations(e),t}urls(e){U.default.walk(e,{visit:`Url`,enter:(e,t,n)=>{this.hooks.onUrl.trigger(e,t,n)}})}atrules(e){U.default.walk(e,{visit:`Atrule`,enter:(e,t,n)=>{let r=U.default.keyword(e.name).basename;r===`page`&&(this.hooks.onAtPage.trigger(e,t,n),this.declarations(e,t,n)),r===`media`&&(this.hooks.onAtMedia.trigger(e,t,n),this.declarations(e,t,n)),r===`import`&&(this.hooks.onImport.trigger(e,t,n),this.imports(e,t,n))}})}rules(e){U.default.walk(e,{visit:`Rule`,enter:(e,t,n)=>{this.hooks.onRule.trigger(e,t,n),this.declarations(e,t,n),this.onSelector(e,t,n)}})}declarations(e,t,n){U.default.walk(e,{visit:`Declaration`,enter:(r,i,a)=>{this.hooks.onDeclaration.trigger(r,i,a,{ruleNode:e,ruleItem:t,rulelist:n}),r.property===`content`&&U.default.walk(r,{visit:`Function`,enter:(o,s,c)=>{this.hooks.onContent.trigger(o,s,c,{declarationNode:r,dItem:i,dList:a},{ruleNode:e,ruleItem:t,rulelist:n})}})}})}onSelector(e,t,n){U.default.walk(e,{visit:`Selector`,enter:(r,i,a)=>{this.hooks.onSelector.trigger(r,i,a,{ruleNode:e,ruleItem:t,rulelist:n}),r.children.forEach(o=>{o.type===`PseudoElementSelector`&&U.default.walk(o,{visit:`PseudoElementSelector`,enter:(o,s,c)=>{this.hooks.onPseudoSelector.trigger(o,s,c,{selectNode:r,selectItem:i,selectList:a},{ruleNode:e,ruleItem:t,rulelist:n})}})})}})}replaceUrls(e){U.default.walk(e,{visit:`Url`,enter:(e,t,n)=>{let r=e.value.value;if(!(e.value.type===`Raw`&&r.startsWith(`data:`)||e.value.type===`String`&&(r.startsWith(`"data:`)||r.startsWith(`'data:`)))){let t=r.replace(/["']/g,``),n=new URL(t,this.url);e.value.value=n.toString()}}})}addScope(e,t){U.default.walk(e,{visit:`Selector`,enter:(e,n,r)=>{let i=e.children;i.prepend(i.createItem({type:`WhiteSpace`,value:` `})),i.prepend(i.createItem({type:`IdSelector`,name:t,loc:null,children:null}))}})}getNamedPageSelectors(e){let t={};return U.default.walk(e,{visit:`Rule`,enter:(e,n,r)=>{U.default.walk(e,{visit:`Declaration`,enter:(n,r,i)=>{if(n.property===`page`){let r=n.value.children.first(),i=r.name,a=U.default.generate(e.prelude);t[i]={name:i,selector:a},n.property=`break-before`,r.type=`Identifier`,r.name=`always`}}})}}),t}replaceIds(e){U.default.walk(e,{visit:`Rule`,enter:(e,t,n)=>{U.default.walk(e,{visit:`IdSelector`,enter:(e,t,n)=>{let r=e.name;e.flags=null,e.matcher=`=`,e.name={type:`Identifier`,loc:null,name:`data-id`},e.type=`AttributeSelector`,e.value={type:`String`,loc:null,value:`"${r}"`}}})}})}imports(e,t,n){let r=[];U.default.walk(e,{visit:`MediaQuery`,enter:(e,t,n)=>{U.default.walk(e,{visit:`Identifier`,enter:(e,t,n)=>{r.push(e.name)}})}}),!r.some((e,t)=>{let n=e;return n===`not`?(n=r[t+1],n!==`screen`&&n!==`speech`):n===`screen`||n===`speech`})&&U.default.walk(e,{visit:`String`,enter:(e,r,i)=>{let a=e.value.replace(/["']/g,``),o=new URL(a,this.url).toString();this.imported.push(o),n.remove(t)}})}set text(e){this._text=e}get text(){return this._text}toString(e){return U.default.generate(e||this.ast)}}})))()}var ke;function Ae(){return(Ae=e((()=>{ke=`
:root {
	--pagedjs-width: 8.5in;
	--pagedjs-height: 11in;
	--pagedjs-width-right: 8.5in;
	--pagedjs-height-right: 11in;
	--pagedjs-width-left: 8.5in;
	--pagedjs-height-left: 11in;
	--pagedjs-pagebox-width: 8.5in;
	--pagedjs-pagebox-height: 11in;
	--pagedjs-footnotes-height: 0mm;
	--pagedjs-margin-top: 1in;
	--pagedjs-margin-right: 1in;
	--pagedjs-margin-bottom: 1in;
	--pagedjs-margin-left: 1in;
	--pagedjs-padding-top: 0mm;
	--pagedjs-padding-right: 0mm;
	--pagedjs-padding-bottom: 0mm;
	--pagedjs-padding-left: 0mm;
	--pagedjs-border-top: 0mm;
	--pagedjs-border-right: 0mm;
	--pagedjs-border-bottom: 0mm;
	--pagedjs-border-left: 0mm;
	--pagedjs-bleed-top: 0mm;
	--pagedjs-bleed-right: 0mm;
	--pagedjs-bleed-bottom: 0mm;
	--pagedjs-bleed-left: 0mm;
	--pagedjs-bleed-right-top: 0mm;
	--pagedjs-bleed-right-right: 0mm;
	--pagedjs-bleed-right-bottom: 0mm;
	--pagedjs-bleed-right-left: 0mm;
	--pagedjs-bleed-left-top: 0mm;
	--pagedjs-bleed-left-right: 0mm;
	--pagedjs-bleed-left-bottom: 0mm;
	--pagedjs-bleed-left-left: 0mm;
	--pagedjs-crop-color: black;
	--pagedjs-crop-shadow: white;
	--pagedjs-crop-offset: 2mm;
	--pagedjs-crop-stroke: 1px;
	--pagedjs-cross-size: 5mm;
	--pagedjs-mark-cross-display: none;
	--pagedjs-mark-crop-display: none;
	--pagedjs-page-count: 0;
	--pagedjs-page-counter-increment: 1;
	--pagedjs-footnotes-count: 0;
	--pagedjs-column-gap-offset: 1000px;
}

@page {
	size: letter;
	margin: 0;
}

.pagedjs_sheet {
	box-sizing: border-box;
	width: var(--pagedjs-width);
	height: var(--pagedjs-height);
	overflow: hidden;
	position: relative;
	display: grid;
	grid-template-columns: [bleed-left] var(--pagedjs-bleed-left) [sheet-center] calc(var(--pagedjs-width) - var(--pagedjs-bleed-left) - var(--pagedjs-bleed-right)) [bleed-right] var(--pagedjs-bleed-right);
	grid-template-rows: [bleed-top] var(--pagedjs-bleed-top) [sheet-middle] calc(var(--pagedjs-height) - var(--pagedjs-bleed-top) - var(--pagedjs-bleed-bottom)) [bleed-bottom] var(--pagedjs-bleed-bottom);
}

.pagedjs_right_page .pagedjs_sheet {
	width: var(--pagedjs-width-right);
	height: var(--pagedjs-height-right);
	grid-template-columns: [bleed-left] var(--pagedjs-bleed-right-left) [sheet-center] calc(var(--pagedjs-width) - var(--pagedjs-bleed-right-left) - var(--pagedjs-bleed-right-right)) [bleed-right] var(--pagedjs-bleed-right-right);
	grid-template-rows: [bleed-top] var(--pagedjs-bleed-right-top) [sheet-middle] calc(var(--pagedjs-height) - var(--pagedjs-bleed-right-top) - var(--pagedjs-bleed-right-bottom)) [bleed-bottom] var(--pagedjs-bleed-right-bottom);
}

.pagedjs_left_page .pagedjs_sheet {
	width: var(--pagedjs-width-left);
	height: var(--pagedjs-height-left);
	grid-template-columns: [bleed-left] var(--pagedjs-bleed-left-left) [sheet-center] calc(var(--pagedjs-width) - var(--pagedjs-bleed-left-left) - var(--pagedjs-bleed-left-right)) [bleed-right] var(--pagedjs-bleed-left-right);
	grid-template-rows: [bleed-top] var(--pagedjs-bleed-left-top) [sheet-middle] calc(var(--pagedjs-height) - var(--pagedjs-bleed-left-top) - var(--pagedjs-bleed-left-bottom)) [bleed-bottom] var(--pagedjs-bleed-left-bottom);
}

.pagedjs_bleed {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: nowrap;
	overflow: hidden;
}

.pagedjs_bleed-top {
	grid-column: bleed-left / -1;
	grid-row: bleed-top;
	flex-direction: row;
}

.pagedjs_bleed-bottom {
	grid-column: bleed-left / -1;
	grid-row: bleed-bottom;
	flex-direction: row;
}

.pagedjs_bleed-left {
	grid-column: bleed-left;
	grid-row: bleed-top / -1;
	flex-direction: column;
}

.pagedjs_bleed-right {
	grid-column: bleed-right;
	grid-row: bleed-top / -1;
	flex-direction: column;
}

.pagedjs_marks-crop {
	display: var(--pagedjs-mark-crop-display);
	flex-grow: 0;
	flex-shrink: 0;
	z-index: 9999999999;
}

.pagedjs_bleed-top .pagedjs_marks-crop:nth-child(1),
.pagedjs_bleed-bottom .pagedjs_marks-crop:nth-child(1) {
	width: calc(var(--pagedjs-bleed-left) - var(--pagedjs-crop-stroke));
	border-right: var(--pagedjs-crop-stroke) solid var(--pagedjs-crop-color);
	box-shadow: 1px 0px 0px 0px var(--pagedjs-crop-shadow);
}

.pagedjs_right_page .pagedjs_bleed-top .pagedjs_marks-crop:nth-child(1),
.pagedjs_right_page .pagedjs_bleed-bottom .pagedjs_marks-crop:nth-child(1) {
	width: calc(var(--pagedjs-bleed-right-left) - var(--pagedjs-crop-stroke));
}

.pagedjs_left_page .pagedjs_bleed-top .pagedjs_marks-crop:nth-child(1),
.pagedjs_left_page .pagedjs_bleed-bottom .pagedjs_marks-crop:nth-child(1) {
	width: calc(var(--pagedjs-bleed-left-left) - var(--pagedjs-crop-stroke));
}

.pagedjs_bleed-top .pagedjs_marks-crop:nth-child(3),
.pagedjs_bleed-bottom .pagedjs_marks-crop:nth-child(3) {
	width: calc(var(--pagedjs-bleed-right) - var(--pagedjs-crop-stroke));
	border-left: var(--pagedjs-crop-stroke) solid var(--pagedjs-crop-color);
	box-shadow: -1px 0px 0px 0px var(--pagedjs-crop-shadow);
}

.pagedjs_right_page .pagedjs_bleed-top .pagedjs_marks-crop:nth-child(3),
.pagedjs_right_page .pagedjs_bleed-bottom .pagedjs_marks-crop:nth-child(3) {
	width: calc(var(--pagedjs-bleed-right-right) - var(--pagedjs-crop-stroke));
}

.pagedjs_left_page .pagedjs_bleed-top .pagedjs_marks-crop:nth-child(3),
.pagedjs_left_page .pagedjs_bleed-bottom .pagedjs_marks-crop:nth-child(3) {
	width: calc(var(--pagedjs-bleed-left-right) - var(--pagedjs-crop-stroke));
}

.pagedjs_bleed-top .pagedjs_marks-crop {
	align-self: flex-start;
	height: calc(var(--pagedjs-bleed-top) - var(--pagedjs-crop-offset));
}

.pagedjs_right_page .pagedjs_bleed-top .pagedjs_marks-crop {
	height: calc(var(--pagedjs-bleed-right-top) - var(--pagedjs-crop-offset));
}

.pagedjs_left_page .pagedjs_bleed-top .pagedjs_marks-crop {
	height: calc(var(--pagedjs-bleed-left-top) - var(--pagedjs-crop-offset));
}

.pagedjs_bleed-bottom .pagedjs_marks-crop {
	align-self: flex-end;
	height: calc(var(--pagedjs-bleed-bottom) - var(--pagedjs-crop-offset));
}

.pagedjs_right_page .pagedjs_bleed-bottom .pagedjs_marks-crop {
	height: calc(var(--pagedjs-bleed-right-bottom) - var(--pagedjs-crop-offset));
}

.pagedjs_left_page .pagedjs_bleed-bottom .pagedjs_marks-crop {
	height: calc(var(--pagedjs-bleed-left-bottom) - var(--pagedjs-crop-offset));
}

.pagedjs_bleed-left .pagedjs_marks-crop:nth-child(1),
.pagedjs_bleed-right .pagedjs_marks-crop:nth-child(1) {
	height: calc(var(--pagedjs-bleed-top) - var(--pagedjs-crop-stroke));
	border-bottom: var(--pagedjs-crop-stroke) solid var(--pagedjs-crop-color);
	box-shadow: 0px 1px 0px 0px var(--pagedjs-crop-shadow);
}

.pagedjs_right_page .pagedjs_bleed-left .pagedjs_marks-crop:nth-child(1),
.pagedjs_right_page .pagedjs_bleed-right .pagedjs_marks-crop:nth-child(1) {
	height: calc(var(--pagedjs-bleed-right-top) - var(--pagedjs-crop-stroke));
}

.pagedjs_left_page .pagedjs_bleed-left .pagedjs_marks-crop:nth-child(1),
.pagedjs_left_page .pagedjs_bleed-right .pagedjs_marks-crop:nth-child(1) {
	height: calc(var(--pagedjs-bleed-left-top) - var(--pagedjs-crop-stroke));
}

.pagedjs_bleed-left .pagedjs_marks-crop:nth-child(3),
.pagedjs_bleed-right .pagedjs_marks-crop:nth-child(3) {
	height: calc(var(--pagedjs-bleed-bottom) - var(--pagedjs-crop-stroke));
	border-top: var(--pagedjs-crop-stroke) solid var(--pagedjs-crop-color);
	box-shadow: 0px -1px 0px 0px var(--pagedjs-crop-shadow);
}

.pagedjs_right_page .pagedjs_bleed-left .pagedjs_marks-crop:nth-child(3),
.pagedjs_right_page .pagedjs_bleed-right .pagedjs_marks-crop:nth-child(3) {
	height: calc(var(--pagedjs-bleed-right-bottom) - var(--pagedjs-crop-stroke));
}

.pagedjs_left_page .pagedjs_bleed-left .pagedjs_marks-crop:nth-child(3),
.pagedjs_left_page .pagedjs_bleed-right .pagedjs_marks-crop:nth-child(3) {
	height: calc(var(--pagedjs-bleed-left-bottom) - var(--pagedjs-crop-stroke));
}

.pagedjs_bleed-left .pagedjs_marks-crop {
	width: calc(var(--pagedjs-bleed-left) - var(--pagedjs-crop-offset));
	align-self: flex-start;
}

.pagedjs_right_page .pagedjs_bleed-left .pagedjs_marks-crop {
	width: calc(var(--pagedjs-bleed-right-left) - var(--pagedjs-crop-offset));
}

.pagedjs_left_page .pagedjs_bleed-left .pagedjs_marks-crop {
	width: calc(var(--pagedjs-bleed-left-left) - var(--pagedjs-crop-offset));
}

.pagedjs_bleed-right .pagedjs_marks-crop {
	width: calc(var(--pagedjs-bleed-right) - var(--pagedjs-crop-offset));
	align-self: flex-end;
}

.pagedjs_right_page .pagedjs_bleed-right .pagedjs_marks-crop {
	width: calc(var(--pagedjs-bleed-right-right) - var(--pagedjs-crop-offset));
}

.pagedjs_left_page .pagedjs_bleed-right .pagedjs_marks-crop {
	width: calc(var(--pagedjs-bleed-left-right) - var(--pagedjs-crop-offset));
}

.pagedjs_marks-middle {
	display: flex;
	flex-grow: 1;
	flex-shrink: 0;
	align-items: center;
	justify-content: center;
}

.pagedjs_marks-cross {
	display: var(--pagedjs-mark-cross-display);
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIzMi41MzdweCIgaGVpZ2h0PSIzMi41MzdweCIgdmlld0JveD0iMC4xMDQgMC4xMDQgMzIuNTM3IDMyLjUzNyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwLjEwNCAwLjEwNCAzMi41MzcgMzIuNTM3IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMy4zODkzIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0yOS45MzEsMTYuMzczYzAsNy40ODktNi4wNjgsMTMuNTYtMTMuNTU4LDEzLjU2Yy03LjQ4MywwLTEzLjU1Ny02LjA3Mi0xMy41NTctMTMuNTZjMC03LjQ4Niw2LjA3NC0xMy41NTQsMTMuNTU3LTEzLjU1NEMyMy44NjIsMi44MTksMjkuOTMxLDguODg3LDI5LjkzMSwxNi4zNzN6Ii8+PGxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjMuMzg5MyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB4MT0iMC4xMDQiIHkxPSIxNi4zNzMiIHgyPSIzMi42NDIiIHkyPSIxNi4zNzMiLz48bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMy4zODkzIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHgxPSIxNi4zNzMiIHkxPSIwLjEwNCIgeDI9IjE2LjM3MyIgeTI9IjMyLjY0MiIvPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIzLjM4OTMiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTI0LjUwOCwxNi4zNzNjMCw0LjQ5Ni0zLjYzOCw4LjEzNS04LjEzNSw4LjEzNWMtNC40OTEsMC04LjEzNS0zLjYzOC04LjEzNS04LjEzNWMwLTQuNDg5LDMuNjQ0LTguMTM1LDguMTM1LTguMTM1QzIwLjg2OSw4LjIzOSwyNC41MDgsMTEuODg0LDI0LjUwOCwxNi4zNzN6Ii8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuNjc3OCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMjkuOTMxLDE2LjM3M2MwLDcuNDg5LTYuMDY4LDEzLjU2LTEzLjU1OCwxMy41NmMtNy40ODMsMC0xMy41NTctNi4wNzItMTMuNTU3LTEzLjU2YzAtNy40ODYsNi4wNzQtMTMuNTU0LDEzLjU1Ny0xMy41NTRDMjMuODYyLDIuODE5LDI5LjkzMSw4Ljg4NywyOS45MzEsMTYuMzczeiIvPjxsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjY3NzgiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgeDE9IjAuMTA0IiB5MT0iMTYuMzczIiB4Mj0iMzIuNjQyIiB5Mj0iMTYuMzczIi8+PGxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuNjc3OCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB4MT0iMTYuMzczIiB5MT0iMC4xMDQiIHgyPSIxNi4zNzMiIHkyPSIzMi42NDIiLz48cGF0aCBkPSJNMjQuNTA4LDE2LjM3M2MwLDQuNDk2LTMuNjM4LDguMTM1LTguMTM1LDguMTM1Yy00LjQ5MSwwLTguMTM1LTMuNjM4LTguMTM1LTguMTM1YzAtNC40ODksMy42NDQtOC4xMzUsOC4xMzUtOC4xMzVDMjAuODY5LDguMjM5LDI0LjUwOCwxMS44ODQsMjQuNTA4LDE2LjM3MyIvPjxsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIwLjY3NzgiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgeDE9IjguMjM5IiB5MT0iMTYuMzczIiB4Mj0iMjQuNTA4IiB5Mj0iMTYuMzczIi8+PGxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjAuNjc3OCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB4MT0iMTYuMzczIiB5MT0iOC4yMzkiIHgyPSIxNi4zNzMiIHkyPSIyNC41MDgiLz48L3N2Zz4=);
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: var(--pagedjs-cross-size);

  z-index: 2147483647;
	width: var(--pagedjs-cross-size);
	height: var(--pagedjs-cross-size);
}

.pagedjs_pagebox {
	box-sizing: border-box;
	width: var(--pagedjs-pagebox-width);
	height: var(--pagedjs-pagebox-height);
	position: relative;
	display: grid;
	grid-template-columns: [left] var(--pagedjs-margin-left) [center] calc(var(--pagedjs-pagebox-width) - var(--pagedjs-margin-left) - var(--pagedjs-margin-right)) [right] var(--pagedjs-margin-right);
	grid-template-rows: [header] var(--pagedjs-margin-top) [page] calc(var(--pagedjs-pagebox-height) - var(--pagedjs-margin-top) - var(--pagedjs-margin-bottom)) [footer] var(--pagedjs-margin-bottom);
	grid-column: sheet-center;
	grid-row: sheet-middle;
}

.pagedjs_pagebox * {
	box-sizing: border-box;
}

.pagedjs_margin-top {
	width: calc(var(--pagedjs-pagebox-width) - var(--pagedjs-margin-left) - var(--pagedjs-margin-right));
	height: var(--pagedjs-margin-top);
	grid-column: center;
	grid-row: header;
	flex-wrap: nowrap;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 100%;
}

.pagedjs_margin-top-left-corner-holder {
	width: var(--pagedjs-margin-left);
	height: var(--pagedjs-margin-top);
	display: flex;
	grid-column: left;
	grid-row: header;
}

.pagedjs_margin-top-right-corner-holder {
	width: var(--pagedjs-margin-right);
	height: var(--pagedjs-margin-top);
	display: flex;
	grid-column: right;
	grid-row: header;
}

.pagedjs_margin-top-left-corner {
	width: var(--pagedjs-margin-left);
}

.pagedjs_margin-top-right-corner {
	width: var(--pagedjs-margin-right);
}

.pagedjs_margin-right {
	height: calc(var(--pagedjs-pagebox-height) - var(--pagedjs-margin-top) - var(--pagedjs-margin-bottom));
	width: var(--pagedjs-margin-right);
	right: 0;
	grid-column: right;
	grid-row: page;
	display: grid;
	grid-template-rows: repeat(3, 33.3333%);
	grid-template-columns: 100%;
}

.pagedjs_margin-bottom {
	width: calc(var(--pagedjs-pagebox-width) - var(--pagedjs-margin-left) - var(--pagedjs-margin-right));
	height: var(--pagedjs-margin-bottom);
	grid-column: center;
	grid-row: footer;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 100%;
}

.pagedjs_margin-bottom-left-corner-holder {
	width: var(--pagedjs-margin-left);
	height: var(--pagedjs-margin-bottom);
	display: flex;
	grid-column: left;
	grid-row: footer;
}

.pagedjs_margin-bottom-right-corner-holder {
	width: var(--pagedjs-margin-right);
	height: var(--pagedjs-margin-bottom);
	display: flex;
	grid-column: right;
	grid-row: footer;
}

.pagedjs_margin-bottom-left-corner {
	width: var(--pagedjs-margin-left);
}

.pagedjs_margin-bottom-right-corner {
	width: var(--pagedjs-margin-right);
}



.pagedjs_margin-left {
	height: calc(var(--pagedjs-pagebox-height) - var(--pagedjs-margin-top) - var(--pagedjs-margin-bottom));
	width: var(--pagedjs-margin-left);
	grid-column: left;
	grid-row: page;
	display: grid;
	grid-template-rows: repeat(3, 33.33333%);
	grid-template-columns: 100%;
}

.pagedjs_pages .pagedjs_pagebox .pagedjs_margin:not(.hasContent) {
	visibility: hidden;
}

.pagedjs_pagebox > .pagedjs_area {
	grid-column: center;
	grid-row: page;
	width: 100%;
	height: 100%;
	padding: var(--pagedjs-padding-top) var(--pagedjs-padding-right) var(--pagedjs-padding-bottom) var(--pagedjs-padding-left);
	border-top: var(--pagedjs-border-top);
	border-right: var(--pagedjs-border-right);
	border-bottom: var(--pagedjs-border-bottom);
	border-left: var(--pagedjs-border-left);
}

.pagedjs_pagebox > .pagedjs_area > .pagedjs_page_content {
	width: 100%;
	height: calc(100% - var(--pagedjs-footnotes-height));
	position: relative;
	column-fill: auto;
}

.pagedjs_pagebox > .pagedjs_area > .pagedjs_page_content > div {
	height: inherit;
}

.pagedjs_pagebox > .pagedjs_area > .pagedjs_footnote_area {
	position: relative;
	overflow: hidden;
	height: var(--pagedjs-footnotes-height);
	display: flex;
    justify-content: flex-end;
    flex-flow: column;
}

.pagedjs_pagebox > .pagedjs_area > .pagedjs_footnote_area > .pagedjs_footnote_content {
	overflow: hidden;
}

.pagedjs_pagebox > .pagedjs_area > .pagedjs_footnote_area > .pagedjs_footnote_inner_content {
	overflow: hidden;
}

.pagedjs_area [data-footnote-call] {
	all: unset;
	counter-increment: footnote;
}

.pagedjs_area [data-split-from] {
	counter-increment: unset;
	counter-reset: unset;
}

[data-footnote-call]::after {
	vertical-align: super;
	font-size: 65%;
	line-height: normal;
	content: counter(footnote);
}

@supports ( font-variant-position: super ) {
	[data-footnote-call]::after {
		vertical-align: baseline;
		font-size: 100%;
		line-height: inherit;
		font-variant-position: super;
	}
}

.pagedjs_footnote_empty {
	display: none;
}

.pagedjs_area [data-split-from] {
	counter-increment: unset;
	counter-reset: unset;
}

[data-footnote-marker] {
	text-indent: 0;
	display: list-item;
	list-style-position: inside;
}

[data-footnote-marker][data-split-from] {
	list-style: none;
}

[data-footnote-marker]:not([data-split-from]) {
	counter-increment: footnote-marker;
}

[data-footnote-marker]::marker {
	content: counter(footnote-marker) ". ";
}

[data-footnote-marker][data-split-from]::marker {
	content: unset;
}

.pagedjs_area .pagedjs_footnote_inner_content [data-note-display="inline"] {
 	display: inline;
}

.pagedjs_page {
	counter-increment: page var(--pagedjs-page-counter-increment);
	width: var(--pagedjs-width);
	height: var(--pagedjs-height);
}

.pagedjs_page.pagedjs_right_page {
	width: var(--pagedjs-width-right);
	height: var(--pagedjs-height-right);
}

.pagedjs_page.pagedjs_left_page {
	width: var(--pagedjs-width-left);
	height: var(--pagedjs-height-left);
}

.pagedjs_pages {
	counter-reset: pages var(--pagedjs-page-count) footnote var(--pagedjs-footnotes-count) footnote-marker var(--pagedjs-footnotes-count);
}

.pagedjs_pagebox .pagedjs_margin-top-left-corner,
.pagedjs_pagebox .pagedjs_margin-top-right-corner,
.pagedjs_pagebox .pagedjs_margin-bottom-left-corner,
.pagedjs_pagebox .pagedjs_margin-bottom-right-corner,
.pagedjs_pagebox .pagedjs_margin-top-left,
.pagedjs_pagebox .pagedjs_margin-top-right,
.pagedjs_pagebox .pagedjs_margin-bottom-left,
.pagedjs_pagebox .pagedjs_margin-bottom-right,
.pagedjs_pagebox .pagedjs_margin-top-center,
.pagedjs_pagebox .pagedjs_margin-bottom-center,
.pagedjs_pagebox .pagedjs_margin-top-center,
.pagedjs_pagebox .pagedjs_margin-bottom-center,
.pagedjs_margin-right-middle,
.pagedjs_margin-left-middle  {
	display: flex;
	align-items: center;
}

.pagedjs_margin-right-top,
.pagedjs_margin-left-top  {
	display: flex;
	align-items: flex-top;
}


.pagedjs_margin-right-bottom,
.pagedjs_margin-left-bottom  {
	display: flex;
	align-items: flex-end;
}



/*
.pagedjs_pagebox .pagedjs_margin-top-center,
.pagedjs_pagebox .pagedjs_margin-bottom-center {
	height: 100%;
	display: none;
	align-items: center;
	flex: 1 0 33%;
	margin: 0 auto;
}

.pagedjs_pagebox .pagedjs_margin-top-left-corner,
.pagedjs_pagebox .pagedjs_margin-top-right-corner,
.pagedjs_pagebox .pagedjs_margin-bottom-right-corner,
.pagedjs_pagebox .pagedjs_margin-bottom-left-corner {
	display: none;
	align-items: center;
}

.pagedjs_pagebox .pagedjs_margin-left-top,
.pagedjs_pagebox .pagedjs_margin-right-top {
	display: none;
	align-items: flex-start;
}

.pagedjs_pagebox .pagedjs_margin-right-middle,
.pagedjs_pagebox .pagedjs_margin-left-middle {
	display: none;
	align-items: center;
}

.pagedjs_pagebox .pagedjs_margin-left-bottom,
.pagedjs_pagebox .pagedjs_margin-right-bottom {
	display: none;
	align-items: flex-end;
}
*/

.pagedjs_pagebox .pagedjs_margin-top-left,
.pagedjs_pagebox .pagedjs_margin-top-right-corner,
.pagedjs_pagebox .pagedjs_margin-bottom-left,
.pagedjs_pagebox .pagedjs_margin-bottom-right-corner { text-align: left; }

.pagedjs_pagebox .pagedjs_margin-top-left-corner,
.pagedjs_pagebox .pagedjs_margin-top-right,
.pagedjs_pagebox .pagedjs_margin-bottom-left-corner,
.pagedjs_pagebox .pagedjs_margin-bottom-right { text-align: right; }

.pagedjs_pagebox .pagedjs_margin-top-center,
.pagedjs_pagebox .pagedjs_margin-bottom-center,
.pagedjs_pagebox .pagedjs_margin-left-top,
.pagedjs_pagebox .pagedjs_margin-left-middle,
.pagedjs_pagebox .pagedjs_margin-left-bottom,
.pagedjs_pagebox .pagedjs_margin-right-top,
.pagedjs_pagebox .pagedjs_margin-right-middle,
.pagedjs_pagebox .pagedjs_margin-right-bottom { text-align: center; }

.pagedjs_pages .pagedjs_margin .pagedjs_margin-content {
	width: 100%;
}

.pagedjs_pages .pagedjs_margin-left .pagedjs_margin-content::after,
.pagedjs_pages .pagedjs_margin-top .pagedjs_margin-content::after,
.pagedjs_pages .pagedjs_margin-right .pagedjs_margin-content::after,
.pagedjs_pages .pagedjs_margin-bottom .pagedjs_margin-content::after {
	display: block;
}

.pagedjs_pages > .pagedjs_page > .pagedjs_sheet > .pagedjs_pagebox > .pagedjs_area > div [data-split-to] {
	margin-bottom: unset;
	padding-bottom: unset;
}

.pagedjs_pages > .pagedjs_page > .pagedjs_sheet > .pagedjs_pagebox > .pagedjs_area > div [data-split-from] {
	text-indent: unset;
	margin-top: unset;
	padding-top: unset;
	initial-letter: unset;
}

.pagedjs_pages > .pagedjs_page > .pagedjs_sheet > .pagedjs_pagebox > .pagedjs_area > div [data-split-from] > *::first-letter,
.pagedjs_pages > .pagedjs_page > .pagedjs_sheet > .pagedjs_pagebox > .pagedjs_area > div [data-split-from]::first-letter {
	color: unset;
	font-size: unset;
	font-weight: unset;
	font-family: unset;
	color: unset;
	line-height: unset;
	float: unset;
	padding: unset;
	margin: unset;
}

.pagedjs_pages > .pagedjs_page > .pagedjs_sheet > .pagedjs_pagebox > .pagedjs_area > div [data-split-to]:not([data-footnote-call]):after,
.pagedjs_pages > .pagedjs_page > .pagedjs_sheet > .pagedjs_pagebox > .pagedjs_area > div [data-split-to]:not([data-footnote-call])::after {
	content: unset;
}

.pagedjs_pages > .pagedjs_page > .pagedjs_sheet > .pagedjs_pagebox > .pagedjs_area > div [data-split-from]:not([data-footnote-call]):before,
.pagedjs_pages > .pagedjs_page > .pagedjs_sheet > .pagedjs_pagebox > .pagedjs_area > div [data-split-from]:not([data-footnote-call])::before {
	content: unset;
}

.pagedjs_pages > .pagedjs_page > .pagedjs_sheet > .pagedjs_pagebox > .pagedjs_area > div li[data-split-from]:first-of-type {
	list-style: none;
}

/*
[data-page]:not([data-split-from]),
[data-break-before="page"]:not([data-split-from]),
[data-break-before="always"]:not([data-split-from]),
[data-break-before="left"]:not([data-split-from]),
[data-break-before="right"]:not([data-split-from]),
[data-break-before="recto"]:not([data-split-from]),
[data-break-before="verso"]:not([data-split-from])
{
	break-before: column;
}

[data-page]:not([data-split-to]),
[data-break-after="page"]:not([data-split-to]),
[data-break-after="always"]:not([data-split-to]),
[data-break-after="left"]:not([data-split-to]),
[data-break-after="right"]:not([data-split-to]),
[data-break-after="recto"]:not([data-split-to]),
[data-break-after="verso"]:not([data-split-to])
{
	break-after: column;
}
*/

.pagedjs_clear-after::after {
	content: none !important;
}

[data-align-last-split-element='justify'] {
	text-align-last: justify;
}


@media print {
	html {
		width: 100%;
		height: 100%;
		-webkit-print-color-adjust: exact;
		print-color-adjust: exact;
	}
	body {
		margin: 0;
		padding: 0;
		width: 100% !important;
		height: 100% !important;
		min-width: 100%;
		max-width: 100%;
		min-height: 100%;
		max-height: 100%;
	}
	.pagedjs_pages {
		width: auto;
		display: block !important;
		transform: none !important;
		height: 100% !important;
		min-height: 100%;
		max-height: 100%;
		overflow: visible;
	}
	.pagedjs_page {
		margin: 0;
		padding: 0;
		max-height: 100%;
		min-height: 100%;
		height: 100% !important;
		page-break-after: always;
		break-after: page;
	}
	.pagedjs_sheet {
		margin: 0;
		padding: 0;
		max-height: 100%;
		min-height: 100%;
		height: 100% !important;
	}
}
`})))()}async function je(e,t={}){return new Promise(function(n,r){let i=new XMLHttpRequest;i.open(t.method||`get`,e,!0);for(let e in t.headers)i.setRequestHeader(e,t.headers[e]);i.withCredentials=t.credentials===`include`,i.onload=()=>{let t=i.status===0&&e.startsWith(`file://`)?200:i.status;n(new Response(i.responseText,{status:t}))},i.onerror=r,i.send(t.body||null)})}var Me;function W(){return(W=e((()=>{Oe(),Ae(),L(),Me=class{constructor(e){this.sheets=[],this.inserted=[],this.hooks={},this.hooks.onUrl=new I(this),this.hooks.onAtPage=new I(this),this.hooks.onAtMedia=new I(this),this.hooks.onRule=new I(this),this.hooks.onDeclaration=new I(this),this.hooks.onContent=new I(this),this.hooks.onSelector=new I(this),this.hooks.onPseudoSelector=new I(this),this.hooks.onImport=new I(this),this.hooks.beforeTreeParse=new I(this),this.hooks.beforeTreeWalk=new I(this),this.hooks.afterTreeWalk=new I(this),e!==!1&&this.setup()}setup(){return this.base=this.insert(ke),this.styleEl=document.createElement(`style`),document.head.appendChild(this.styleEl),this.styleSheet=this.styleEl.sheet,this.styleSheet}async add(){let e=[],t=[];for(var n=0;n<arguments.length;n++){let r;if(typeof arguments[n]==`object`)for(let e in arguments[n]){let i=arguments[n];r=new Promise(function(n,r){t.push(e),n(i[e])})}else t.push(arguments[n]),r=je(arguments[n]).then(e=>e.text());e.push(r)}return await Promise.all(e).then(async e=>{let n=``;for(let r=0;r<e.length;r++)n=await this.convertViaSheet(e[r],t[r]),this.insert(n);return n})}async convertViaSheet(e,t){let n=new De(t,this.hooks);await n.parse(e);for(let e of n.imported){let t=await je(e).then(e=>e.text()),n=await this.convertViaSheet(t,e);this.insert(n)}return this.sheets.push(n),n.width!==void 0&&(this.width=n.width),n.height!==void 0&&(this.height=n.height),n.orientation!==void 0&&(this.orientation=n.orientation),n.toString()}insert(e){let t=document.querySelector(`head`),n=document.createElement(`style`);return n.setAttribute(`data-pagedjs-inserted-styles`,`true`),n.appendChild(document.createTextNode(e)),t.appendChild(n),this.inserted.push(n),n}destroy(){this.styleEl.remove(),this.inserted.forEach(e=>{e.remove()}),this.sheets=[]}}})))()}var Ne,G;function K(){return(K=e((()=>{Ne=t(n(),1),G=class{constructor(e,t,n){let r=Object.assign({},e&&e.hooks,t&&t.hooks,n&&n.hooks);this.chunker=e,this.polisher=t,this.caller=n;for(let e in r)e in this&&r[e].register(this[e].bind(this))}},(0,Ne.default)(G.prototype)})))()}var Pe;function Fe(){return(Fe=e((()=>{Pe={A0:{width:{value:841,unit:`mm`},height:{value:1189,unit:`mm`}},A1:{width:{value:594,unit:`mm`},height:{value:841,unit:`mm`}},A2:{width:{value:420,unit:`mm`},height:{value:594,unit:`mm`}},A3:{width:{value:297,unit:`mm`},height:{value:420,unit:`mm`}},A4:{width:{value:210,unit:`mm`},height:{value:297,unit:`mm`}},A5:{width:{value:148,unit:`mm`},height:{value:210,unit:`mm`}},A6:{width:{value:105,unit:`mm`},height:{value:148,unit:`mm`}},A7:{width:{value:74,unit:`mm`},height:{value:105,unit:`mm`}},A8:{width:{value:52,unit:`mm`},height:{value:74,unit:`mm`}},A9:{width:{value:37,unit:`mm`},height:{value:52,unit:`mm`}},A10:{width:{value:26,unit:`mm`},height:{value:37,unit:`mm`}},B4:{width:{value:250,unit:`mm`},height:{value:353,unit:`mm`}},B5:{width:{value:176,unit:`mm`},height:{value:250,unit:`mm`}},letter:{width:{value:8.5,unit:`in`},height:{value:11,unit:`in`}},legal:{width:{value:8.5,unit:`in`},height:{value:14,unit:`in`}},ledger:{width:{value:11,unit:`in`},height:{value:17,unit:`in`}}}})))()}var q,Ie;function Le(){return(Le=e((()=>{K(),q=t(a(),1),Fe(),m(),Ie=class extends G{constructor(e,t,n){super(e,t,n),this.pages={},this.width=void 0,this.height=void 0,this.orientation=void 0,this.marginalia={}}pageModel(e){return{selector:e,name:void 0,psuedo:void 0,nth:void 0,marginalia:{},width:void 0,height:void 0,orientation:void 0,margin:{top:{},right:{},left:{},bottom:{}},padding:{top:{},right:{},left:{},bottom:{}},border:{top:{},right:{},left:{},bottom:{}},backgroundOrigin:void 0,block:{},marks:void 0,notes:void 0,added:!1}}onAtPage(e,t,n){let r,i,a=``,o,s,c,l=!1;e.prelude?(o=this.getTypeSelector(e),s=this.getPsuedoSelector(e),c=this.getNthSelector(e),a=q.default.generate(e.prelude)):a=`*`,a in this.pages?(r=this.pages[a],i=this.replaceMarginalia(e),l=!0,r.added=!1):(r=this.pageModel(a),i=this.replaceMarginalia(e),this.pages[a]=r),r.name=o,r.psuedo=s,r.nth=c,l?r.marginalia=Object.assign(r.marginalia,i):r.marginalia=i;let u=this.replaceNotes(e);r.notes=u;let d=this.replaceDeclarations(e);if(d.size&&(r.size=d.size,r.width=d.size.width,r.height=d.size.height,r.orientation=d.size.orientation,r.format=d.size.format),d.bleed&&d.bleed[0]!=`auto`)switch(d.bleed.length){case 4:r.bleed={top:d.bleed[0],right:d.bleed[1],bottom:d.bleed[2],left:d.bleed[3]};break;case 3:r.bleed={top:d.bleed[0],right:d.bleed[1],bottom:d.bleed[2],left:d.bleed[1]};break;case 2:r.bleed={top:d.bleed[0],right:d.bleed[1],bottom:d.bleed[0],left:d.bleed[1]};break;default:r.bleed={top:d.bleed[0],right:d.bleed[0],bottom:d.bleed[0],left:d.bleed[0]}}d.marks&&((!d.bleed||d.bleed&&d.bleed[0]===`auto`)&&(r.bleed={top:{value:6,unit:`mm`},right:{value:6,unit:`mm`},bottom:{value:6,unit:`mm`},left:{value:6,unit:`mm`}}),r.marks=d.marks),d.margin&&(r.margin=d.margin),d.padding&&(r.padding=d.padding),d.border&&(r.border=d.border),d.marks&&(r.marks=d.marks),l?r.block.children.appendList(e.block.children):r.block=e.block,n.remove(t)}afterTreeWalk(e,t){let n=`*`in this.pages&&this.pages[`*`].added===!1;if(this.addPageClasses(this.pages,e,t),n){let t=this.pages[`*`].width,n=this.pages[`*`].height,r=this.pages[`*`].format,i=this.pages[`*`].orientation,a=this.pages[`*`].bleed,o=this.pages[`*`].marks,s,c;`:left`in this.pages&&(s=this.pages[`:left`].bleed),`:right`in this.pages&&(c=this.pages[`:right`].bleed),t&&n&&(this.width!==t||this.height!==n)&&(this.width=t,this.height=n,this.format=r,this.orientation=i,this.addRootVars(e,t,n,i,a,c,s,o),this.addRootPage(e,this.pages[`*`].size,a,c,s),this.emit(`size`,{width:t,height:n,orientation:i,format:r,bleed:a}),this.emit(`atpages`,this.pages))}}getTypeSelector(e){let t;return q.default.walk(e,{visit:`TypeSelector`,enter:(e,n,r)=>{t=e.name}}),t}getPsuedoSelector(e){let t;return q.default.walk(e,{visit:`PseudoClassSelector`,enter:(e,n,r)=>{e.name!==`nth`&&(t=e.name)}}),t}getNthSelector(e){let t;return q.default.walk(e,{visit:`PseudoClassSelector`,enter:(e,n,r)=>{e.name===`nth`&&e.children&&(t=e.children.first().value)}}),t}replaceMarginalia(e){let t={},n=[`top-left-corner`,`top-left`,`top`,`top-center`,`top-right`,`top-right-corner`,`bottom-left-corner`,`bottom-left`,`bottom`,`bottom-center`,`bottom-right`,`bottom-right-corner`,`left-top`,`left-middle`,`left`,`left-bottom`,`top-right-corner`,`right-top`,`right-middle`,`right`,`right-bottom`,`right-right-corner`];return q.default.walk(e.block,{visit:`Atrule`,enter:(e,r,i)=>{let a=e.name;n.includes(a)&&(a===`top`&&(a=`top-center`),a===`right`&&(a=`right-middle`),a===`left`&&(a=`left-middle`),a===`bottom`&&(a=`bottom-center`),t[a]=e.block,i.remove(r))}}),t}replaceNotes(e){let t={};return q.default.walk(e.block,{visit:`Atrule`,enter:(e,n,r)=>{let i=e.name;i===`footnote`&&(t[i]=e.block,r.remove(n))}}),t}replaceDeclarations(e){let t={};return q.default.walk(e.block,{visit:`Declaration`,enter:(e,n,r)=>{let i=q.default.property(e.property).name;if(i===`marks`)t.marks=[],q.default.walk(e,{visit:`Identifier`,enter:e=>{t.marks.push(e.name)}}),r.remove(n);else if(i===`margin`)t.margin=this.getMargins(e),r.remove(n);else if(i.indexOf(`margin-`)===0){let a=i.substring(7);t.margin||={top:{},right:{},left:{},bottom:{}},t.margin[a]=e.value.children.first(),r.remove(n)}else if(i===`padding`)t.padding=this.getPaddings(e.value),r.remove(n);else if(i.indexOf(`padding-`)===0){let a=i.substring(8);t.padding||={top:{},right:{},left:{},bottom:{}},t.padding[a]=e.value.children.first(),r.remove(n)}else if(i===`border`)t.border||={top:{},right:{},left:{},bottom:{}},t.border.top=q.default.generate(e.value),t.border.right=q.default.generate(e.value),t.border.left=q.default.generate(e.value),t.border.bottom=q.default.generate(e.value),r.remove(n);else if(i.indexOf(`border-`)===0){t.border||={top:{},right:{},left:{},bottom:{}};let a=i.substring(7);t.border[a]=q.default.generate(e.value),r.remove(n)}else i===`size`?(t.size=this.getSize(e),r.remove(n)):i===`bleed`&&(t.bleed=[],q.default.walk(e,{enter:e=>{switch(e.type){case`String`:e.value.indexOf(`auto`)>-1&&t.bleed.push(`auto`);break;case`Dimension`:t.bleed.push({value:e.value,unit:e.unit});break;case`Number`:t.bleed.push({value:e.value,unit:`px`})}}}),r.remove(n))}}),t}getSize(e){let t,n,r,i;return q.default.walk(e,{visit:`Dimension`,enter:(e,r,i)=>{let{value:a,unit:o}=e;t===void 0?t={value:a,unit:o}:n===void 0&&(n={value:a,unit:o})}}),q.default.walk(e,{visit:`String`,enter:(e,r,i)=>{let a=e.value.replace(/["|']/g,``),o=Pe[a];o&&(t=o.width,n=o.height)}}),q.default.walk(e,{visit:`Identifier`,enter:(e,a,o)=>{let s=e.name;if(s===`landscape`||s===`portrait`)r=e.name;else if(s!==`auto`){let e=Pe[s];e&&(t=e.width,n=e.height),i=s}}}),{width:t,height:n,orientation:r,format:i}}getMargins(e){let t=[],n={top:{},right:{},left:{},bottom:{}};if(q.default.walk(e,{enter:e=>{switch(e.type){case`Dimension`:t.push(e);break;case`Number`:t.push({value:e.value,unit:`px`})}}}),t.length===1)for(let e in n)n[e]=t[0];else t.length===2?(n.top=t[0],n.right=t[1],n.bottom=t[0],n.left=t[1]):t.length===3?(n.top=t[0],n.right=t[1],n.bottom=t[2],n.left=t[1]):t.length===4&&(n.top=t[0],n.right=t[1],n.bottom=t[2],n.left=t[3]);return n}getPaddings(e){let t=[],n={top:{},right:{},left:{},bottom:{}};if(q.default.walk(e,{enter:e=>{switch(e.type){case`Dimension`:t.push(e);break;case`Number`:t.push({value:e.value,unit:`px`})}}}),t.length===1)for(let e in n)n[e]=t[0];else t.length===2?(n.top=t[0],n.right=t[1],n.bottom=t[0],n.left=t[1]):t.length===3?(n.top=t[0],n.right=t[1],n.bottom=t[2],n.left=t[1]):t.length===4&&(n.top=t[0],n.right=t[1],n.bottom=t[2],n.left=t[3]);return n}getBorders(e){let t={top:{},right:{},left:{},bottom:{}};return e.prop==`border`?(t.top=q.default.generate(e.value),t.right=q.default.generate(e.value),t.bottom=q.default.generate(e.value),t.left=q.default.generate(e.value)):e.prop==`border-top`?t.top=q.default.generate(e.value):e.prop==`border-right`?t.right=q.default.generate(e.value):e.prop==`border-bottom`?t.bottom=q.default.generate(e.value):e.prop==`border-left`&&(t.left=q.default.generate(e.value)),t}addPageClasses(e,t,n){if(`*`in e&&e[`*`].added===!1){let r=this.createPage(e[`*`],t.children,n);n.insertRule(r),e[`*`].added=!0}if(`:left`in e&&e[`:left`].added===!1){let r=this.createPage(e[`:left`],t.children,n);n.insertRule(r),e[`:left`].added=!0}if(`:right`in e&&e[`:right`].added===!1){let r=this.createPage(e[`:right`],t.children,n);n.insertRule(r),e[`:right`].added=!0}if(`:first`in e&&e[`:first`].added===!1){let r=this.createPage(e[`:first`],t.children,n);n.insertRule(r),e[`:first`].added=!0}if(`:blank`in e&&e[`:blank`].added===!1){let r=this.createPage(e[`:blank`],t.children,n);n.insertRule(r),e[`:blank`].added=!0}for(let r in e)if(e[r].nth&&e[r].added===!1){let i=this.createPage(e[r],t.children,n);n.insertRule(i),e[r].added=!0}for(let r in e)if(e[r].name&&e[r].added===!1){let i=this.createPage(e[r],t.children,n);n.insertRule(i),e[r].added=!0}}createPage(e,t,n){let r=this.selectorsForPage(e),i=e.block.children.copy(),a={type:`Block`,loc:0,children:i},o=this.createRule(r,a);return this.addMarginVars(e.margin,i,i.first()),this.addPaddingVars(e.padding,i,i.first()),this.addBorderVars(e.border,i,i.first()),e.width&&this.addDimensions(e.width,e.height,e.orientation,i,i.first()),e.marginalia&&(this.addMarginaliaStyles(e,t,o,n),this.addMarginaliaContent(e,t,o,n)),e.notes&&this.addNotesStyles(e.notes,e,t,o,n),o}addMarginVars(e,t,n){for(let r in e)if(e[r].value!==void 0){let i=e[r].value+(e[r].unit||``),a=t.createItem({type:`Declaration`,property:`--pagedjs-margin-`+r,value:{type:`Raw`,value:i}});t.append(a,n)}}addPaddingVars(e,t,n){for(let r in e)if(e[r].value!==void 0){let i=e[r].value+(e[r].unit||``),a=t.createItem({type:`Declaration`,property:`--pagedjs-padding-`+r,value:{type:`Raw`,value:i}});t.append(a,n)}}addBorderVars(e,t,n){for(let r of Object.keys(e)){let i=e[r];if(typeof i==`string`){let e=t.createItem({type:`Declaration`,property:`--pagedjs-border-`+r,value:{type:`Raw`,value:i}});t.append(e,n)}}}addDimensions(e,t,n,r,i){let a,o;a=f(e),o=f(t),n&&n!==`portrait`&&([a,o]=[o,a]);let s=this.createVariable(`--pagedjs-pagebox-width`,a);r.appendData(s);let c=this.createVariable(`--pagedjs-pagebox-height`,o);r.appendData(c)}addMarginaliaStyles(e,t,n,r){for(let n in e.marginalia){let r=q.default.clone(e.marginalia[n]),i=!1;if(r.children.isEmpty())continue;q.default.walk(r,{visit:`Declaration`,enter:(e,t,r)=>{if(e.property===`content`&&(i=!(e.value.children&&e.value.children.first().name===`none`),r.remove(t)),e.property===`vertical-align`&&(q.default.walk(e,{visit:`Identifier`,enter:(e,t,n)=>{let r=e.name;r===`top`?e.name=`flex-start`:r===`middle`?e.name=`center`:r===`bottom`&&(e.name=`flex-end`)}}),e.property=`align-items`),e.property===`width`&&(n===`top-left`||n===`top-center`||n===`top-right`||n===`bottom-left`||n===`bottom-center`||n===`bottom-right`)){let t=q.default.clone(e);t.property=`max-width`,r.appendData(t)}if(e.property===`height`&&(n===`left-top`||n===`left-middle`||n===`left-bottom`||n===`right-top`||n===`right-middle`||n===`right-bottom`)){let t=q.default.clone(e);t.property=`max-height`,r.appendData(t)}}});let a=this.selectorsForPageMargin(e,n),o=this.createRule(a,r);t.appendData(o);let s=q.default.generate({type:`Selector`,children:a});this.marginalia[s]={page:e,selector:s,block:e.marginalia[n],hasContent:i}}}addMarginaliaContent(e,t,n,r){let i;for(let t in e.marginalia){let n=q.default.clone(e.marginalia[t]);if(q.default.walk(n,{visit:`Declaration`,enter:(e,t,n)=>{e.property!==`content`&&n.remove(t),e.value.children&&e.value.children.first().name===`none`&&(i=!0)}}),n.children.isEmpty())continue;let a=this.selectorsForPageMargin(e,t),o;a.insertData({type:`Combinator`,name:`>`}),a.insertData({type:`ClassSelector`,name:`pagedjs_margin-content`}),a.insertData({type:`Combinator`,name:`>`}),a.insertData({type:`TypeSelector`,name:`*`}),o=i?this.createDeclaration(`display`,`none`):this.createDeclaration(`display`,`block`);let s=this.createRule(a,[o]);r.insertRule(s);let c=this.selectorsForPageMargin(e,t);c.insertData({type:`Combinator`,name:`>`}),c.insertData({type:`ClassSelector`,name:`pagedjs_margin-content`}),c.insertData({type:`PseudoElementSelector`,name:`after`,children:null});let l=this.createRule(c,n);r.insertRule(l)}}addRootVars(e,t,n,r,i,a,o,s){let c=[],l=new q.default.List;l.insertData({type:`PseudoClassSelector`,name:`root`,children:null});let u,d,p,m,h,g;if(!i)u=f(t),d=f(n),p=f(t),m=f(n),h=f(t),g=f(n);else{u=`calc( ${f(t)} + ${f(i.left)} + ${f(i.right)} )`,d=`calc( ${f(n)} + ${f(i.top)} + ${f(i.bottom)} )`,p=`calc( ${f(t)} + ${f(i.left)} + ${f(i.right)} )`,m=`calc( ${f(n)} + ${f(i.top)} + ${f(i.bottom)} )`,h=`calc( ${f(t)} + ${f(i.left)} + ${f(i.right)} )`,g=`calc( ${f(n)} + ${f(i.top)} + ${f(i.bottom)} )`;let e=this.createVariable(`--pagedjs-bleed-top`,f(i.top)),r=this.createVariable(`--pagedjs-bleed-right`,f(i.right)),s=this.createVariable(`--pagedjs-bleed-bottom`,f(i.bottom)),l=this.createVariable(`--pagedjs-bleed-left`,f(i.left)),_=this.createVariable(`--pagedjs-bleed-right-top`,f(i.top)),v=this.createVariable(`--pagedjs-bleed-right-right`,f(i.right)),y=this.createVariable(`--pagedjs-bleed-right-bottom`,f(i.bottom)),b=this.createVariable(`--pagedjs-bleed-right-left`,f(i.left)),x=this.createVariable(`--pagedjs-bleed-left-top`,f(i.top)),S=this.createVariable(`--pagedjs-bleed-left-right`,f(i.right)),C=this.createVariable(`--pagedjs-bleed-left-bottom`,f(i.bottom)),w=this.createVariable(`--pagedjs-bleed-left-left`,f(i.left));a&&(_=this.createVariable(`--pagedjs-bleed-right-top`,f(a.top)),v=this.createVariable(`--pagedjs-bleed-right-right`,f(a.right)),y=this.createVariable(`--pagedjs-bleed-right-bottom`,f(a.bottom)),b=this.createVariable(`--pagedjs-bleed-right-left`,f(a.left)),p=`calc( ${f(t)} + ${f(a.left)} + ${f(a.right)} )`,m=`calc( ${f(n)} + ${f(a.top)} + ${f(a.bottom)} )`),o&&(x=this.createVariable(`--pagedjs-bleed-left-top`,f(o.top)),S=this.createVariable(`--pagedjs-bleed-left-right`,f(o.right)),C=this.createVariable(`--pagedjs-bleed-left-bottom`,f(o.bottom)),w=this.createVariable(`--pagedjs-bleed-left-left`,f(o.left)),h=`calc( ${f(t)} + ${f(o.left)} + ${f(o.right)} )`,g=`calc( ${f(n)} + ${f(o.top)} + ${f(o.bottom)} )`);let T=this.createVariable(`--pagedjs-width`,f(t)),ee=this.createVariable(`--pagedjs-height`,f(n));c.push(e,r,s,l,_,v,y,b,x,S,C,w,T,ee)}if(s&&s.forEach(e=>{let t=this.createVariable(`--pagedjs-mark-`+e+`-display`,`block`);c.push(t)}),r){let e=this.createVariable(`--pagedjs-orientation`,r);c.push(e),r!==`portrait`&&([u,d]=[d,u],[p,m]=[m,p],[h,g]=[g,h])}let _=this.createVariable(`--pagedjs-width`,u),v=this.createVariable(`--pagedjs-height`,d),y=this.createVariable(`--pagedjs-width-right`,p),b=this.createVariable(`--pagedjs-height-right`,m),x=this.createVariable(`--pagedjs-width-left`,h),S=this.createVariable(`--pagedjs-height-left`,g);c.push(_,v,y,b,x,S);let C=this.createRule(l,c);e.children.appendData(C)}addNotesStyles(e,t,n,r,i){for(let r in e){let i=this.selectorsForPage(t);i.insertData({type:`Combinator`,name:` `}),i.insertData({type:`ClassSelector`,name:`pagedjs_`+r+`_content`});let a=this.createRule(i,e[r]);n.appendData(a)}}addRootPage(e,t,n,r,i){let{width:a,height:o,orientation:s,format:c}=t,l=new q.default.List,u=new q.default.List,d=new q.default.List,f=new q.default.List,p=new q.default.List,m=new q.default.List;if(n){let e=new q.default.List,t=new q.default.List;e.appendData({type:`Dimension`,unit:a.unit,value:a.value}),e.appendData({type:`WhiteSpace`,value:` `}),e.appendData({type:`Operator`,value:`+`}),e.appendData({type:`WhiteSpace`,value:` `}),e.appendData({type:`Dimension`,unit:n.left.unit,value:n.left.value}),e.appendData({type:`WhiteSpace`,value:` `}),e.appendData({type:`Operator`,value:`+`}),e.appendData({type:`WhiteSpace`,value:` `}),e.appendData({type:`Dimension`,unit:n.right.unit,value:n.right.value}),t.appendData({type:`Dimension`,unit:o.unit,value:o.value}),t.appendData({type:`WhiteSpace`,value:` `}),t.appendData({type:`Operator`,value:`+`}),t.appendData({type:`WhiteSpace`,value:` `}),t.appendData({type:`Dimension`,unit:n.top.unit,value:n.top.value}),t.appendData({type:`WhiteSpace`,value:` `}),t.appendData({type:`Operator`,value:`+`}),t.appendData({type:`WhiteSpace`,value:` `}),t.appendData({type:`Dimension`,unit:n.bottom.unit,value:n.bottom.value}),f.appendData({type:`Function`,name:`calc`,children:e}),f.appendData({type:`WhiteSpace`,value:` `}),f.appendData({type:`Function`,name:`calc`,children:t})}else c?(f.appendData({type:`Identifier`,name:c}),s&&(f.appendData({type:`WhiteSpace`,value:` `}),f.appendData({type:`Identifier`,name:s}))):(f.appendData({type:`Dimension`,unit:a.unit,value:a.value}),f.appendData({type:`WhiteSpace`,value:` `}),f.appendData({type:`Dimension`,unit:o.unit,value:o.value}));l.appendData({type:`Declaration`,property:`size`,loc:null,value:{type:`Value`,children:f}}),l.appendData({type:`Declaration`,property:`margin`,loc:null,value:{type:`Value`,children:[{type:`Dimension`,unit:`px`,value:0}]}}),l.appendData({type:`Declaration`,property:`padding`,loc:null,value:{type:`Value`,children:[{type:`Dimension`,unit:`px`,value:0}]}}),l.appendData({type:`Declaration`,property:`padding`,loc:null,value:{type:`Value`,children:[{type:`Dimension`,unit:`px`,value:0}]}});let h=e.children.createItem({type:`Atrule`,prelude:null,name:`page`,block:{type:`Block`,loc:null,children:l}});if(e.children.append(h),i){let t=new q.default.List,n=new q.default.List;t.appendData({type:`Dimension`,unit:a.unit,value:a.value}),t.appendData({type:`WhiteSpace`,value:` `}),t.appendData({type:`Operator`,value:`+`}),t.appendData({type:`WhiteSpace`,value:` `}),t.appendData({type:`Dimension`,unit:i.left.unit,value:i.left.value}),t.appendData({type:`WhiteSpace`,value:` `}),t.appendData({type:`Operator`,value:`+`}),t.appendData({type:`WhiteSpace`,value:` `}),t.appendData({type:`Dimension`,unit:i.right.unit,value:i.right.value}),n.appendData({type:`Dimension`,unit:o.unit,value:o.value}),n.appendData({type:`WhiteSpace`,value:` `}),n.appendData({type:`Operator`,value:`+`}),n.appendData({type:`WhiteSpace`,value:` `}),n.appendData({type:`Dimension`,unit:i.top.unit,value:i.top.value}),n.appendData({type:`WhiteSpace`,value:` `}),n.appendData({type:`Operator`,value:`+`}),n.appendData({type:`WhiteSpace`,value:` `}),n.appendData({type:`Dimension`,unit:i.bottom.unit,value:i.bottom.value}),p.appendData({type:`Function`,name:`calc`,children:t}),p.appendData({type:`WhiteSpace`,value:` `}),p.appendData({type:`Function`,name:`calc`,children:n}),u.appendData({type:`Declaration`,property:`size`,loc:null,value:{type:`Value`,children:p}});let r=e.children.createItem({type:`Atrule`,prelude:null,name:`page :left`,block:{type:`Block`,loc:null,children:u}});e.children.append(r)}if(r){let t=new q.default.List,n=new q.default.List;t.appendData({type:`Dimension`,unit:a.unit,value:a.value}),t.appendData({type:`WhiteSpace`,value:` `}),t.appendData({type:`Operator`,value:`+`}),t.appendData({type:`WhiteSpace`,value:` `}),t.appendData({type:`Dimension`,unit:r.left.unit,value:r.left.value}),t.appendData({type:`WhiteSpace`,value:` `}),t.appendData({type:`Operator`,value:`+`}),t.appendData({type:`WhiteSpace`,value:` `}),t.appendData({type:`Dimension`,unit:r.right.unit,value:r.right.value}),n.appendData({type:`Dimension`,unit:o.unit,value:o.value}),n.appendData({type:`WhiteSpace`,value:` `}),n.appendData({type:`Operator`,value:`+`}),n.appendData({type:`WhiteSpace`,value:` `}),n.appendData({type:`Dimension`,unit:r.top.unit,value:r.top.value}),n.appendData({type:`WhiteSpace`,value:` `}),n.appendData({type:`Operator`,value:`+`}),n.appendData({type:`WhiteSpace`,value:` `}),n.appendData({type:`Dimension`,unit:r.bottom.unit,value:r.bottom.value}),m.appendData({type:`Function`,name:`calc`,children:t}),m.appendData({type:`WhiteSpace`,value:` `}),m.appendData({type:`Function`,name:`calc`,children:n}),d.appendData({type:`Declaration`,property:`size`,loc:null,value:{type:`Value`,children:m}});let i=e.children.createItem({type:`Atrule`,prelude:null,name:`page :right`,block:{type:`Block`,loc:null,children:d}});e.children.append(i)}}getNth(e){let t=e.indexOf(`n`),n=e.indexOf(`+`),r=e.split(`n`),i=e.split(`+`),a=null,o=null;return t>-1?(a=r[0],n>-1&&(o=i[1])):o=e,{type:`Nth`,loc:null,selector:null,nth:{type:`AnPlusB`,loc:null,a,b:o}}}addPageAttributes(e,t,n){let r=[t.dataset.page];if(r&&r.length)for(let n of r)n&&(e.name=n,e.element.classList.add(`pagedjs_named_page`),e.element.classList.add(`pagedjs_`+n+`_page`),t.dataset.splitFrom||e.element.classList.add(`pagedjs_`+n+`_first_page`))}getStartElement(e,t){let n=t&&t.node;if(!e&&!t)return;if(!n)return e.children[0];if(n.nodeType===1&&n.parentNode.nodeType===11||n.nodeType===1&&n.dataset.page)return n;let r=w(n),i=r.querySelectorAll(`[data-page]`);return i.length?i[i.length-1]:r.children[0]}beforePageLayout(e,t,n,r){let i=this.getStartElement(t,n);i&&this.addPageAttributes(e,i,r.pages)}finalizePage(e,t,n,r){for(let e in this.marginalia){let n=this.marginalia[e],r=e.split(` `),i;t.element.matches(r[0])&&n.hasContent&&(i=t.element.querySelector(r[1]),i.classList.add(`hasContent`))}[`top`,`bottom`].forEach(e=>{let n=t.element.querySelector(`.pagedjs_margin-`+e),r=t.element.querySelector(`.pagedjs_margin-`+e+`-center`),i=t.element.querySelector(`.pagedjs_margin-`+e+`-left`),a=t.element.querySelector(`.pagedjs_margin-`+e+`-right`),o=r.classList.contains(`hasContent`),s=i.classList.contains(`hasContent`),c=a.classList.contains(`hasContent`),l,u,d;if(s&&(u=window.getComputedStyle(i)[`max-width`]),c&&(d=window.getComputedStyle(a)[`max-width`]),o){if(l=window.getComputedStyle(r)[`max-width`],l===`none`||l===`auto`){if(!s&&!c)n.style[`grid-template-columns`]=`0 1fr 0`;else if(s){if(!c){if(u!==`none`&&u!==`auto`)n.style[`grid-template-columns`]=u+` 1fr `+u;else{n.style[`grid-template-columns`]=`auto auto 1fr`,i.style[`white-space`]=`nowrap`,r.style[`white-space`]=`nowrap`;let e=i.offsetWidth,t=r.offsetWidth,a=e+t,o=t*100/a;n.style[`grid-template-columns`]=`minmax(16.66%, 1fr) minmax(33%, `+o+`%) minmax(16.66%, 1fr)`,i.style[`white-space`]=`normal`,r.style[`white-space`]=`normal`}}else if(u!==`none`&&u!==`auto`)d!==`none`&&d!==`auto`?n.style[`grid-template-columns`]=u+` 1fr `+d:n.style[`grid-template-columns`]=u+` 1fr `+u;else if(d!==`none`&&d!==`auto`)n.style[`grid-template-columns`]=d+` 1fr `+d;else{n.style[`grid-template-columns`]=`auto auto 1fr`,i.style[`white-space`]=`nowrap`,r.style[`white-space`]=`nowrap`,a.style[`white-space`]=`nowrap`;let e=i.offsetWidth,t=r.offsetWidth,o=a.offsetWidth,s=e+t+o,c=t*100/s;c>40?n.style[`grid-template-columns`]=`minmax(16.66%, 1fr) minmax(33%, `+c+`%) minmax(16.66%, 1fr)`:n.style[`grid-template-columns`]=`repeat(3, 1fr)`,i.style[`white-space`]=`normal`,r.style[`white-space`]=`normal`,a.style[`white-space`]=`normal`}}else if(d!==`none`&&d!==`auto`)n.style[`grid-template-columns`]=d+` 1fr `+d;else{n.style[`grid-template-columns`]=`auto auto 1fr`,a.style[`white-space`]=`nowrap`,r.style[`white-space`]=`nowrap`;let e=a.offsetWidth,t=r.offsetWidth,i=e+t,o=t*100/i;n.style[`grid-template-columns`]=`minmax(16.66%, 1fr) minmax(33%, `+o+`%) minmax(16.66%, 1fr)`,a.style[`white-space`]=`normal`,r.style[`white-space`]=`normal`}}else l!==`none`&&l!==`auto`&&(s&&u!==`none`&&u!==`auto`?n.style[`grid-template-columns`]=u+` `+l+` 1fr`:c&&d!==`none`&&d!==`auto`?n.style[`grid-template-columns`]=`1fr `+l+` `+d:n.style[`grid-template-columns`]=`1fr `+l+` 1fr`)}else if(s){if(!c)n.style[`grid-template-columns`]=`1fr 0 0`;else if(u!==`none`&&u!==`auto`)d!==`none`&&d!==`auto`?n.style[`grid-template-columns`]=u+` 1fr `+d:n.style[`grid-template-columns`]=u+` 0 1fr`;else if(d!==`none`&&d!==`auto`)n.style[`grid-template-columns`]=`1fr 0 `+d;else{n.style[`grid-template-columns`]=`auto 1fr auto`,i.style[`white-space`]=`nowrap`,a.style[`white-space`]=`nowrap`;let e=i.offsetWidth,t=e+a.offsetWidth,r=e*100/t;n.style[`grid-template-columns`]=`minmax(16.66%, `+r+`%) 0 1fr`,i.style[`white-space`]=`normal`,a.style[`white-space`]=`normal`}}else d!==`none`&&d!==`auto`?n.style[`grid-template-columns`]=`1fr 0 `+d:n.style[`grid-template-columns`]=`0 0 1fr`}),[`left`,`right`].forEach(e=>{let n=t.element.querySelector(`.pagedjs_margin-`+e+`-middle.hasContent`),r=t.element.querySelector(`.pagedjs_margin-`+e),i=t.element.querySelector(`.pagedjs_margin-`+e+`-top`),a=t.element.querySelector(`.pagedjs_margin-`+e+`-bottom`),o=i.classList.contains(`hasContent`),s=a.classList.contains(`hasContent`),c,l,u;o&&(l=window.getComputedStyle(i)[`max-height`]),s&&(u=window.getComputedStyle(a)[`max-height`]),n?(c=window.getComputedStyle(n)[`max-height`],c===`none`||c===`auto`?!o&&!s?r.style[`grid-template-rows`]=`0 1fr 0`:o?s?l!==`none`&&l!==`auto`?u!==`none`&&u!==`auto`?r.style[`grid-template-rows`]=l+` calc(100% - `+l+` - `+u+`) `+u:r.style[`grid-template-rows`]=l+` calc(100% - `+l+`*2) `+l:u!==`none`&&u!==`auto`&&(r.style[`grid-template-rows`]=u+` calc(100% - `+u+`*2) `+u):l!==`none`&&l!==`auto`&&(r.style[`grid-template-rows`]=l+` calc(100% - `+l+`*2) `+l):u!==`none`&&u!==`auto`&&(r.style[`grid-template-rows`]=u+` calc(100% - `+u+`*2) `+u):o&&l!==`none`&&l!==`auto`?r.style[`grid-template-rows`]=l+` `+c+` calc(100% - (`+l+` + `+c+`))`:s&&u!==`none`&&u!==`auto`?r.style[`grid-template-rows`]=`1fr `+c+` `+u:r.style[`grid-template-rows`]=`calc((100% - `+c+`)/2) `+c+` calc((100% - `+c+`)/2)`):o?s?l!==`none`&&l!==`auto`?u!==`none`&&u!==`auto`?r.style[`grid-template-rows`]=l+` 1fr `+u:r.style[`grid-template-rows`]=l+` 0 1fr`:u!==`none`&&u!==`auto`?r.style[`grid-template-rows`]=`1fr 0 `+u:r.style[`grid-template-rows`]=`1fr 0 1fr`:r.style[`grid-template-rows`]=`1fr 0 0`:u!==`none`&&u!==`auto`?r.style[`grid-template-rows`]=`1fr 0 `+u:r.style[`grid-template-rows`]=`0 0 1fr`})}selectorsForPage(e){let t,n,r=new q.default.List;return r.insertData({type:`ClassSelector`,name:`pagedjs_page`}),e.name&&(r.insertData({type:`ClassSelector`,name:`pagedjs_named_page`}),r.insertData({type:`ClassSelector`,name:`pagedjs_`+e.name+`_page`})),e.psuedo&&!(e.name&&e.psuedo===`first`)&&r.insertData({type:`ClassSelector`,name:`pagedjs_`+e.psuedo+`_page`}),e.name&&e.psuedo===`first`&&r.insertData({type:`ClassSelector`,name:`pagedjs_`+e.name+`_`+e.psuedo+`_page`}),e.nth&&(t=new q.default.List,n=this.getNth(e.nth),t.insertData(n),r.insertData({type:`PseudoClassSelector`,name:`nth-of-type`,children:t})),r}selectorsForPageMargin(e,t){let n=this.selectorsForPage(e);return n.insertData({type:`Combinator`,name:` `}),n.insertData({type:`ClassSelector`,name:`pagedjs_margin-`+t}),n}createDeclaration(e,t,n){let r=new q.default.List;return r.insertData({type:`Identifier`,loc:null,name:t}),{type:`Declaration`,loc:null,important:n,property:e,value:{type:`Value`,loc:null,children:r}}}createVariable(e,t){return{type:`Declaration`,loc:null,property:e,value:{type:`Raw`,value:t}}}createCalculatedDimension(e,t,n,r=`+`){let i=new q.default.List,a=new q.default.List;return t.forEach((e,n)=>{a.appendData({type:`Dimension`,unit:e.unit,value:e.value}),a.appendData({type:`WhiteSpace`,value:` `}),n+1<t.length&&(a.appendData({type:`Operator`,value:r}),a.appendData({type:`WhiteSpace`,value:` `}))}),i.insertData({type:`Function`,loc:null,name:`calc`,children:a}),{type:`Declaration`,loc:null,important:n,property:e,value:{type:`Value`,loc:null,children:i}}}createDimension(e,t,n){let r=new q.default.List;return r.insertData({type:`Dimension`,loc:null,value:t.value,unit:t.unit}),{type:`Declaration`,loc:null,important:n,property:e,value:{type:`Value`,loc:null,children:r}}}createBlock(e){let t=new q.default.List;return e.forEach(e=>{t.insertData(e)}),{type:`Block`,loc:null,children:t}}createRule(e,t){let n=new q.default.List;return n.insertData({type:`Selector`,children:e}),Array.isArray(t)&&(t=this.createBlock(t)),{type:`Rule`,prelude:{type:`SelectorList`,children:n},block:t}}}})))()}var Re,ze;function Be(){return(Be=e((()=>{K(),Re=t(a(),1),ze=class extends G{constructor(e,t,n){super(e,t,n),this.breaks={}}onDeclaration(e,t,n,r){let i=e.property;if(i===`page`){let a=e.value.children.first().name,o=Re.default.generate(r.ruleNode.prelude),s={property:i,value:a,selector:o,name:a};o.split(`,`).forEach(e=>{this.breaks[e]?this.breaks[e].push(s):this.breaks[e]=[s]}),n.remove(t)}if(i===`break-before`||i===`break-after`||i===`page-break-before`||i===`page-break-after`){let a=e.value.children.first().name,o=Re.default.generate(r.ruleNode.prelude);i===`page-break-before`?i=`break-before`:i===`page-break-after`&&(i=`break-after`);let s={property:i,value:a,selector:o};o.split(`,`).forEach(e=>{this.breaks[e]?this.breaks[e].push(s):this.breaks[e]=[s]}),n.remove(t)}}afterParsed(e){this.processBreaks(e,this.breaks)}processBreaks(e,t){for(let r in t){let i=e.querySelectorAll(r);for(var n=0;n<i.length;n++)for(let a of t[r])if(a.property===`break-after`){let t=S(i[n],e);i[n].setAttribute(`data-break-after`,a.value),t&&t.setAttribute(`data-previous-break-after`,a.value)}else if(a.property===`break-before`){let t=C(i[n],e);if(t){if(a.value===`page`&&te(i[n],t))continue;i[n].setAttribute(`data-break-before`,a.value),t.setAttribute(`data-next-break-before`,a.value)}}else if(a.property===`page`){i[n].setAttribute(`data-page`,a.value);let t=S(i[n],e);t&&t.setAttribute(`data-after-page`,a.value)}else i[n].setAttribute(`data-`+a.property,a.value)}}mergeBreaks(e,t){for(let n in t)e[n]=n in e?e[n].concat(t[n]):t[n];return e}addBreakAttributes(e,t){let n=e.querySelector(`[data-break-before]`),r=e.querySelector(`[data-break-after]`),i=e.querySelector(`[data-previous-break-after]`);n&&(n.dataset.splitFrom?(t.splitFrom=n.dataset.splitFrom,e.setAttribute(`data-split-from`,n.dataset.splitFrom)):n.dataset.breakBefore&&n.dataset.breakBefore!==`avoid`&&(t.breakBefore=n.dataset.breakBefore,e.setAttribute(`data-break-before`,n.dataset.breakBefore))),r&&r.dataset&&(r.dataset.splitTo?(t.splitTo=r.dataset.splitTo,e.setAttribute(`data-split-to`,r.dataset.splitTo)):r.dataset.breakAfter&&r.dataset.breakAfter!==`avoid`&&(t.breakAfter=r.dataset.breakAfter,e.setAttribute(`data-break-after`,r.dataset.breakAfter))),i&&i.dataset&&i.dataset.previousBreakAfter&&i.dataset.previousBreakAfter!==`avoid`&&(t.previousBreakAfter=i.dataset.previousBreakAfter)}afterPageLayout(e,t){this.addBreakAttributes(e,t)}}})))()}var Ve,He;function Ue(){return(Ue=e((()=>{K(),Ve=t(a(),1),He=class extends G{constructor(e,t,n){super(e,t,n)}onAtMedia(e,t,n){let r=this.getMediaName(e),i;r.includes(`print`)?(i=e.block.children,n.appendList(i),n.remove(t)):!r.includes(`all`)&&!r.includes(`pagedjs-ignore`)&&n.remove(t)}getMediaName(e){let t=[];if(e.prelude!==void 0&&e.prelude.type===`AtrulePrelude`)return Ve.default.walk(e.prelude,{visit:`Identifier`,enter:(e,n,r)=>{t.push(e.name)}}),t}}})))()}var We;function Ge(){return(Ge=e((()=>{K(),We=class extends G{constructor(e,t,n){super(e,t,n)}afterPageLayout(e,t,n,r){let i=Array.from(e.querySelectorAll(`[data-split-from]`)),a=e.parentNode,o=Array.prototype.indexOf.call(a.children,e),s;if(o===0)return;s=a.children[o-1];let c;i.forEach(e=>{let t=e.dataset.ref;c=s.querySelector(`[data-ref='`+t+`']:not([data-split-to])`),c&&(c.dataset.splitTo=t,c.dataset.splitFrom||(c.dataset.splitOriginal=!0))}),c&&this.handleAlignment(c)}handleAlignment(e){let t=window.getComputedStyle(e),n=t[`text-align`],r=t[`text-align-last`];e.dataset.lastSplitElement=`true`,n===`justify`&&r===`auto`?e.dataset.alignLastSplitElement=`justify`:e.dataset.alignLastSplitElement=r}}})))()}var J,Ke;function qe(){return(qe=e((()=>{K(),J=t(a(),1),Ke=class extends G{constructor(e,t,n){super(e,t,n),this.styleSheet=t.styleSheet,this.counters={},this.resetCountersMap=new Map}onDeclaration(e,t,n,r){let i=e.property;if(i===`counter-increment`){this.handleIncrement(e,r);let i=!1;e.value.children.forEach(e=>{e.type&&e.type!==`WhiteSpace`&&(i=!0)}),i||n.remove(t)}else if(i===`counter-reset`){this.handleReset(e,r);let i=!1;e.value.children.forEach(e=>{e.type&&e.type!==`WhiteSpace`&&(i=!0)}),i||n.remove(t)}}afterParsed(e){this.processCounters(e,this.counters),this.scopeCounters(this.counters)}addCounter(e){return e in this.counters||(this.counters[e]={name:e,increments:{},resets:{}}),this.counters[e]}handleIncrement(e,t){let n=[],r=e.value.children;return r.forEach((e,i)=>{if(e.type&&e.type===`Identifier`){let a=e.name;if(a===`page`||a.indexOf(`target-counter-`)===0)return;let o,s,c;i.next&&i.next.data.type===`WhiteSpace`&&(o=i.next),o&&o.next&&o.next.data.type===`Number`&&(s=o.next,c=parseInt(s.data.value));let l=J.default.generate(t.ruleNode.prelude),u;u=a in this.counters?this.counters[a]:this.addCounter(a);let d={selector:l,number:c||1};u.increments[l]=d,n.push(d),r.remove(i),o&&r.remove(o),s&&r.remove(s)}}),n}handleReset(e,t){let n=e.value.children;n.forEach((r,i)=>{if(r.type&&r.type===`Identifier`){let a=r.name,o,s,c;i.next&&i.next.data.type===`WhiteSpace`&&(o=i.next),o&&o.next&&(o.next.data.type===`Number`?(s=o.next,c=parseInt(s.data.value)):o.next.data.type===`Function`&&o.next.data.name===`var`&&(s=o.next,c=o.next.data.children.head.data.name));let l,u,d=t.ruleNode.prelude;u=t.ruleNode.type===`Atrule`&&t.ruleNode.name===`page`?`.pagedjs_page`:J.default.generate(d||t.ruleNode),a===`footnote`&&this.addFootnoteMarkerCounter(e.value.children),l=a in this.counters?this.counters[a]:this.addCounter(a);let f={selector:u,number:c||0};l.resets[u]=f,u!==`.pagedjs_page`&&(n.remove(i),o&&n.remove(o),s&&n.remove(s))}})}processCounters(e,t){let n;for(let r in t)n=this.counters[r],this.processCounterIncrements(e,n),this.processCounterResets(e,n),r!==`page`&&this.addCounterValues(e,n)}scopeCounters(e){let t=[];for(let n in e)n!==`page`&&t.push(`${e[n].name} 0`);this.insertRule(`.pagedjs_pages { counter-reset: ${t.join(` `)} page 0 pages var(--pagedjs-page-count) footnote var(--pagedjs-footnotes-count) footnote-marker var(--pagedjs-footnotes-count)}`)}insertRule(e){this.styleSheet.insertRule(e,this.styleSheet.cssRules.length)}processCounterIncrements(e,t){let n;for(let r in t.increments){n=t.increments[r];let i=e.querySelectorAll(n.selector);for(let e=0;e<i.length;e++)i[e].setAttribute(`data-counter-`+t.name+`-increment`,n.number),i[e].getAttribute(`data-counter-increment`)?i[e].setAttribute(`data-counter-increment`,i[e].getAttribute(`data-counter-increment`)+` `+t.name):i[e].setAttribute(`data-counter-increment`,t.name)}}processCounterResets(e,t){let n;for(let i in t.resets){n=t.resets[i];let a=e.querySelectorAll(n.selector);for(var r=0;r<a.length;r++){let e=n.number;typeof e==`string`&&e.startsWith(`--`)&&(e=a[r].style.getPropertyValue(e)||0),a[r].setAttribute(`data-counter-`+t.name+`-reset`,e),a[r].getAttribute(`data-counter-reset`)?a[r].setAttribute(`data-counter-reset`,a[r].getAttribute(`data-counter-reset`)+` `+t.name):a[r].setAttribute(`data-counter-reset`,t.name)}}}addCounterValues(e,t){let n=t.name;if(n===`page`||n===`footnote`)return;let r=e.querySelectorAll(`[data-counter-`+n+`-reset], [data-counter-`+n+`-increment]`),i=0,a,o,s,c,l,u,d;for(let e=0;e<r.length;e++)a=r[e],u=0,d=[],a.hasAttribute(`data-counter-`+n+`-reset`)&&(s=a.getAttribute(`data-counter-`+n+`-reset`),c=parseInt(s),u=c-i,d.push(`${n} ${u}`),i=c),a.hasAttribute(`data-counter-`+n+`-increment`)&&(o=a.getAttribute(`data-counter-`+n+`-increment`),l=parseInt(o),i+=l,a.setAttribute(`data-counter-`+n+`-value`,i),d.push(`${n} ${l}`)),d.length>0&&this.incrementCounterForElement(a,d)}addFootnoteMarkerCounter(e){let t=[];J.default.walk(e,{visit:`Identifier`,enter:(e,n,r)=>{t.push(e.name)}}),!t.includes(`footnote-maker`)&&(e.insertData({type:`WhiteSpace`,value:` `}),e.insertData({type:`Identifier`,name:`footnote-marker`}),e.insertData({type:`WhiteSpace`,value:` `}),e.insertData({type:`Number`,value:0}))}incrementCounterForElement(e,t){if(!e||!t||t.length===0)return;let n=e.dataset.ref,r=Array.from(this.styleSheet.cssRules).filter(t=>t.selectorText===`[data-ref="${e.dataset.ref}"]:not([data-split-from])`&&t.style[0]===`counter-increment`).map(e=>e.style.counterIncrement);r.push(this.mergeIncrements(t,(e,t)=>(parseInt(e)||0)+(parseInt(t)||0)));let i=this.mergeIncrements(r,(e,t)=>t);this.insertRule(`[data-ref="${n}"]:not([data-split-from]) { counter-increment: ${i} }`)}mergeIncrements(e,t){let n={};return e.forEach(e=>{let r=e.split(` `);for(let e=0;e<r.length;e+=2)n[r[e]]=t(n[r[e]],r[e+1])}),Object.entries(n).map(([e,t])=>`${e} ${t}`).join(` `)}afterPageLayout(e,t){let n=[];e.querySelectorAll(`[data-counter-page-reset]:not([data-split-from])`).forEach(e=>{let t=e.dataset&&e.dataset.ref;if(!(t&&this.resetCountersMap.has(t))){t&&this.resetCountersMap.set(t,``);let r=e.dataset.counterPageReset;n.push(`page ${r}`)}}),e.querySelectorAll(`[data-counter-footnote-reset]:not([data-split-from])`).forEach(e=>{let t=e.dataset.counterFootnoteReset;n.push(`footnote ${t}`),n.push(`footnote-marker ${t}`)}),n.length&&this.styleSheet.insertRule(`[data-page-number="${e.dataset.pageNumber}"] { counter-increment: none; counter-reset: ${n.join(` `)} }`,this.styleSheet.cssRules.length)}}})))()}var Je;function Ye(){return(Ye=e((()=>{K(),Je=class extends G{constructor(e,t,n){super(e,t,n)}afterParsed(e){for(var t of e.querySelectorAll(`ol`))this.addDataNumbers(t)}afterPageLayout(e,t,n,r){for(var i of e.getElementsByTagName(`ol`))i.firstElementChild&&(i.start=i.firstElementChild.dataset.itemNum)}addDataNumbers(e){let t=1;e.hasAttribute(`start`)&&(t=parseInt(e.getAttribute(`start`),10),isNaN(t)&&(t=1));let n=e.children;for(var r=0;r<n.length;r++)n[r].setAttribute(`data-item-num`,r+t)}}})))()}var Xe,Ze;function Qe(){return(Qe=e((()=>{K(),Xe=t(a(),1),Ze=class extends G{constructor(e,t,n){super(e,t,n),this.styleSheet=t.styleSheet,this.fixedElementsSelector=[],this.fixedElements=[]}onDeclaration(e,t,n,r){if(e.property===`position`&&e.value.children.first().name===`fixed`){let e=Xe.default.generate(r.ruleNode.prelude);this.fixedElementsSelector.push(e),n.remove(t)}}afterParsed(e){this.fixedElementsSelector.forEach(t=>{e.querySelectorAll(`${t}`).forEach(e=>{e.style.setProperty(`position`,`absolute`),this.fixedElements.push(e),e.remove()})})}afterPageLayout(e,t,n){this.fixedElements.forEach(t=>{let n=t.cloneNode(!0);e.querySelector(`.pagedjs_pagebox`).insertAdjacentElement(`afterbegin`,n)})}}})))()}var $e,et;function tt(){return(tt=e((()=>{K(),$e=t(a(),1),et=class extends G{constructor(e,t,n){super(e,t,n),this.styleSheet=t.styleSheet,this.pageCounter={name:`page`,increments:{},resets:{}}}onDeclaration(e,t,n,r){e.property===`counter-increment`&&this.handleIncrement(e,r)&&n.remove(t)}afterParsed(e){for(let e in this.pageCounter.increments){let t=this.pageCounter.increments[e];this.insertRule(`${t.selector} { --pagedjs-page-counter-increment: ${t.number} }`)}}handleIncrement(e,t){let n=e.value.children.first(),r=e.value.children.getSize()>1?e.value.children.last().value:1,i=n&&n.name;if(i&&i.indexOf(`target-counter-`)===0||i!==`page`||t.ruleNode.name===`page`&&t.ruleNode.type===`Atrule`)return;let a=$e.default.generate(t.ruleNode.prelude);return this.pageCounter.increments[a]={selector:a,number:r}}insertRule(e){this.styleSheet.insertRule(e,this.styleSheet.cssRules.length)}}})))()}var nt,rt;function it(){return(it=e((()=>{K(),nt=t(a(),1),m(),rt=class extends G{constructor(e,t,n){super(e,t,n),this.styleSheet=t.styleSheet,this.selectors={}}onRule(e,t,n){let r=nt.default.generate(e.prelude);if(r.match(/:(first|last|nth)-of-type/)){let i=nt.default.generate(e.block);i=i.replace(/[{}]/g,``);let a=`nth-of-type-`+c();r.split(`,`).forEach(e=>{this.selectors[e]?this.selectors[e][1]=`${this.selectors[e][1]};${i}`:this.selectors[e]=[a,i]}),n.remove(t)}}afterParsed(e){this.processSelectors(e,this.selectors)}processSelectors(e,t){for(let r in t){let i=e.querySelectorAll(r);for(var n=0;n<i.length;n++){let e=i[n].getAttribute(`data-nth-of-type`);e&&e!=``?(e=`${e},${t[r][0]}`,i[n].setAttribute(`data-nth-of-type`,e)):i[n].setAttribute(`data-nth-of-type`,t[r][0])}let a=`*[data-nth-of-type*='${t[r][0]}'] { ${t[r][1]}; }`;this.styleSheet.insertRule(a,this.styleSheet.cssRules.length)}}}})))()}var at,ot;function st(){return(st=e((()=>{K(),at=t(a(),1),m(),ot=class extends G{constructor(e,t,n){super(e,t,n),this.styleSheet=t.styleSheet,this.selectors={}}onRule(e,t,n){let r=at.default.generate(e.prelude);if(r.match(/\+/)){let i=at.default.generate(e.block);i=i.replace(/[{}]/g,``);let a=`following-`+c();r.split(`,`).forEach(e=>{this.selectors[e]?this.selectors[e][1]=`${this.selectors[e][1]};${i}`:this.selectors[e]=[a,i]}),n.remove(t)}}afterParsed(e){this.processSelectors(e,this.selectors)}processSelectors(e,t){for(let r in t){let i=e.querySelectorAll(r);for(var n=0;n<i.length;n++){let e=i[n].getAttribute(`data-following`);e&&e!=``?(e=`${e},${t[r][0]}`,i[n].setAttribute(`data-following`,e)):i[n].setAttribute(`data-following`,t[r][0])}let a=`*[data-following*='${t[r][0]}'] { ${t[r][1]}; }`;this.styleSheet.insertRule(a,this.styleSheet.cssRules.length)}}}})))()}var Y,ct;function lt(){return(lt=e((()=>{K(),z(),Y=t(a(),1),ct=class extends G{constructor(e,t,n){super(e,t,n),this.footnotes={},this.needsLayout=[]}onDeclaration(e,t,n,r){let i=e.property;if(i===`float`){let i=e.value.children&&e.value.children.first();if((i&&i.name)===`footnote`){let e=Y.default.generate(r.ruleNode.prelude);this.footnotes[e]={selector:e,policy:`auto`,display:`block`},n.remove(t)}}if(i===`footnote-policy`){let t=e.value.children&&e.value.children.first(),n=t&&t.name;if(n){let e=Y.default.generate(r.ruleNode.prelude),t=this.footnotes[e];t&&(t.policy=n)}}if(i===`footnote-display`){let t=e.value.children&&e.value.children.first(),n=t&&t.name,i=Y.default.generate(r.ruleNode.prelude);if(n&&this.footnotes[i]){let e=this.footnotes[i];e&&(e.display=n)}}}onPseudoSelector(e,t,n,r,i){let a=e.name;if(a===`footnote-marker`){let e=i.ruleNode.prelude,t=new Y.default.List;e.children.first().children.each(e=>{e.type!==`PseudoElementSelector`&&t.appendData(e)}),t.appendData({type:`AttributeSelector`,name:{type:`Identifier`,name:`data-footnote-marker`},flags:null,loc:null,matcher:null,value:null}),t.appendData({type:`PseudoElementSelector`,name:`marker`,loc:null,children:null}),e.children.first().children=t}if(a===`footnote-call`){let e=i.ruleNode.prelude,t=new Y.default.List;e.children.first().children.each(e=>{e.type!==`PseudoElementSelector`&&t.appendData(e)}),t.appendData({type:`AttributeSelector`,name:{type:`Identifier`,name:`data-footnote-call`},flags:null,loc:null,matcher:null,value:null}),t.appendData({type:`PseudoElementSelector`,name:`after`,loc:null,children:null}),e.children.first().children=t}}afterParsed(e){this.processFootnotes(e,this.footnotes)}processFootnotes(e,t){for(let r in t){let i=e.querySelectorAll(r),a,o=t[r];for(var n=0;n<i.length;n++)a=i[n],a.setAttribute(`data-note`,`footnote`),a.setAttribute(`data-break-before`,`avoid`),a.setAttribute(`data-note-policy`,o.policy||`auto`),a.setAttribute(`data-note-display`,o.display||`block`),this.processFootnoteContainer(a)}}processFootnoteContainer(e){let t=e.parentElement,n=t;for(;t;){if(ie(t)){n.setAttribute(`data-has-notes`,`true`);break}n=t,t=t.parentElement,t||n.setAttribute(`data-has-notes`,`true`)}}renderNode(e){if(e.nodeType==1){let t;if(!e.dataset)return;e.dataset.note===`footnote`?t=[e]:(e.dataset.hasNotes||e.querySelectorAll(`[data-note='footnote']`))&&(t=e.querySelectorAll(`[data-note='footnote']`)),t&&t.length&&this.findVisibleFootnotes(t,e)}}findVisibleFootnotes(e,t){let n,r,i;n=t.closest(`.pagedjs_page_content`),r=n.getBoundingClientRect(),i=r.left+r.width;for(let n=0;n<e.length;++n){let r=e[n];r.getBoundingClientRect().left<i&&this.moveFootnote(r,t.closest(`.pagedjs_area`),!0)}}moveFootnote(e,t,n){let r=t.querySelector(`.pagedjs_footnote_area`),i=r.querySelector(`.pagedjs_footnote_content`),a=i.querySelector(`.pagedjs_footnote_inner_content`);if(!h(e))return;let o;if(n&&(o=this.createFootnoteCall(e)),e.removeAttribute(`data-break-before`),a.querySelector(`[data-ref="${e.dataset.ref}"]`)){e.remove();return}a.appendChild(e),i.classList.contains(`pagedjs_footnote_empty`)&&i.classList.remove(`pagedjs_footnote_empty`),e.dataset.footnoteMarker=e.dataset.ref,e.id=`note-${e.dataset.ref}`;let s=i.scrollHeight,c=t.querySelector(`.pagedjs_page_content`).getBoundingClientRect(),l=c.left+c.width,u=o&&o.getBoundingClientRect(),d=r.getBoundingClientRect(),f=this.marginsHeight(i),p=this.paddingHeight(i),m=this.borderHeight(i),g=f+p+m,_=Math.floor(d.top);d.height===0&&(_-=this.marginsHeight(i,!1),_-=this.paddingHeight(i,!1),_-=this.borderHeight(i,!1));let v=e.dataset.notePolicy,y=0,b=0;if(o){let e=o.previousSibling,t=new Range;e?t.setStartBefore(e):t.setStartBefore(o),t.setEndAfter(o);let n=t.getBoundingClientRect();if(y=n.bottom,!v||v===`auto`)b=Math.ceil(n.bottom);else if(v===`line`)b=Math.ceil(n.top);else if(v===`block`){let e=o.closest(`p`).previousElementSibling;b=Math.ceil(e?e.getBoundingClientRect().bottom:n.bottom)}}let x=s+g-d.height,S=y?_-y:0,C=y?Math.floor(d.top)-b:0,w=r.querySelector(`[data-note='footnote']`);if(n&&u.left>l)e.remove();else if(!w&&n&&g>S){t.style.setProperty(`--pagedjs-footnotes-height`,`0px`);let n=document.createElement(`div`);n.appendChild(e),this.needsLayout.push(n)}else n?y<d.top-x?t.style.setProperty(`--pagedjs-footnotes-height`,`${s+f+m}px`):(t.style.setProperty(`--pagedjs-footnotes-height`,`${d.height+C}px`),a.style.height=d.height+C-g+`px`):t.style.setProperty(`--pagedjs-footnotes-height`,`${s+g}px`)}createFootnoteCall(e){let t=e.parentElement,n=document.createElement(`a`);for(let t of e.classList)n.classList.add(`${t}`);return n.dataset.footnoteCall=e.dataset.ref,n.dataset.ref=e.dataset.ref,n.dataset.dataCounterFootnoteIncrement=1,n.href=`#note-${e.dataset.ref}`,t.insertBefore(n,e),n}afterPageLayout(e,t,n,r){let i=e.querySelector(`.pagedjs_area`),a=t.footnotesArea,o=a.querySelector(`.pagedjs_footnote_content`),s=a.querySelector(`.pagedjs_footnote_inner_content`),c=o.getBoundingClientRect(),{width:l}=c;s.style.columnWidth=Math.round(l)+`px`,s.style.columnGap=`calc(var(--pagedjs-margin-right) + var(--pagedjs-margin-left))`;let u=new R(a,void 0,r.settings).findOverflow(s,c);if(u){let{startContainer:e,startOffset:a}=u,c;if(h(e)){let t=e.childNodes[a];c=h(t)&&t.hasAttribute(`data-footnote-marker`)}let l=u.extractContents();if(!c){let e=l.firstElementChild;e.dataset.splitFrom=e.dataset.ref,this.handleAlignment(s.lastElementChild)}this.needsLayout.push(l),o.style.removeProperty(`height`),s.style.removeProperty(`height`);let{height:d}=s.getBoundingClientRect(),f=this.marginsHeight(o),p=this.paddingHeight(o),m=this.borderHeight(o);if(i.style.setProperty(`--pagedjs-footnotes-height`,`${d+f+m+p}px`),s.childNodes.length===0&&o.classList.add(`pagedjs_footnote_empty`),!n)r.clonePage(t);else{let e,i;n.node&&n.node.dataset!==void 0&&n.node.dataset.previousBreakAfter!==void 0&&(i=n.node.dataset.previousBreakAfter),n.node&&n.node.dataset!==void 0&&n.node.dataset.breakBefore!==void 0&&(e=n.node.dataset.breakBefore),(e||i)&&r.clonePage(t)}}s.style.height=`auto`}handleAlignment(e){let t=window.getComputedStyle(e)[`text-align-last`];e.dataset.lastSplitElement=`true`,t===`auto`?e.dataset.alignLastSplitElement=`justify`:e.dataset.alignLastSplitElement=t}beforePageLayout(e){for(;this.needsLayout.length;){let t=this.needsLayout.shift();Array.from(t.childNodes).forEach(t=>{this.moveFootnote(t,e.element.querySelector(`.pagedjs_area`),!1)})}}afterOverflowRemoved(e,t){let n=t.closest(`.pagedjs_area`),r=n.querySelectorAll(`.pagedjs_footnote_area [data-note='footnote']`);for(let t=0;t<r.length;t++){let n=r[t];e.querySelector(`[data-footnote-call="${n.dataset.ref}"]`)&&n.remove()}let i=n.querySelector(`.pagedjs_footnote_inner_content`);i&&i.childNodes.length===0&&i.parentElement.classList.add(`pagedjs_footnote_empty`)}marginsHeight(e,t=!0){let n=window.getComputedStyle(e),r=parseInt(n.marginTop),i=parseInt(n.marginBottom),a=0;return r&&(a+=r),i&&t&&(a+=i),a}paddingHeight(e,t=!0){let n=window.getComputedStyle(e),r=parseInt(n.paddingTop),i=parseInt(n.paddingBottom),a=0;return r&&(a+=r),i&&t&&(a+=i),a}borderHeight(e,t=!0){let n=window.getComputedStyle(e),r=parseInt(n.borderTop),i=parseInt(n.borderBottom),a=0;return r&&(a+=r),i&&t&&(a+=i),a}}})))()}var ut;function dt(){return(dt=e((()=>{Le(),Be(),Ue(),Ge(),qe(),Ye(),Qe(),tt(),it(),st(),lt(),ut=[He,Ie,ze,We,Ke,Je,Ze,et,rt,ot,ct]})))()}var X,ft;function pt(){return(pt=e((()=>{K(),X=t(a(),1),ft=class extends G{constructor(e,t,n){super(e,t,n),this.runningSelectors={},this.elements={}}onDeclaration(e,t,n,r){if(e.property===`position`){let t=X.default.generate(r.ruleNode.prelude),n=e.value.children.first().name;if(n===`running`){let r;X.default.walk(e,{visit:`Function`,enter:(e,t,n)=>{r=e.children.first().name}}),this.runningSelectors[r]={identifier:n,value:r,selector:t}}}e.property===`content`&&X.default.walk(e,{visit:`Function`,enter:(e,t,n)=>{if(e.name.indexOf(`element`)>-1){let t=X.default.generate(r.ruleNode.prelude),n=e.name,i=e.children.first().name,a=[i];t.split(`,`).forEach(e=>{e=e.replace(/::after|::before/,``),this.elements[e]={func:n,args:a,value:i,style:`first`,selector:e,fullSelector:t}})}}})}afterParsed(e){for(let t of Object.keys(this.runningSelectors)){let n=this.runningSelectors[t],r=Array.from(e.querySelectorAll(n.selector));if(n.identifier===`running`)for(let e of r)e.style.display=`none`}}afterPageLayout(e){for(let t of Object.keys(this.runningSelectors)){let n=this.runningSelectors[t],r=e.querySelector(n.selector);r&&(n.identifier===`running`?n.first=r:console.warn(n.value+`needs css replacement`))}this.orderedSelectors||=this.orderSelectors(this.elements);for(let t of this.orderedSelectors)if(t){let n=this.elements[t],r=e.querySelector(t);if(r){let e=this.runningSelectors[n.args[0]];if(e&&e.first){r.innerHTML=``;let t=e.first.cloneNode(!0);t.style.display=null,r.appendChild(t)}}}}pageWeight(e){let t=1,n=e.split(` `),r=n.length&&n[0].split(`.`);switch(r.shift(),r.length){case 4:/^pagedjs_[\w-]+_first_page$/.test(r[3])?t=7:(r[3]===`pagedjs_left_page`||r[3]===`pagedjs_right_page`)&&(t=6);break;case 3:r[1]===`pagedjs_named_page`&&(t=r[2].indexOf(`:nth-of-type`)>-1?7:5);break;case 2:r[1]===`pagedjs_first_page`?t=4:r[1]===`pagedjs_blank_page`?t=3:(r[1]===`pagedjs_left_page`||r[1]===`pagedjs_right_page`)&&(t=2);break;default:t=r[0].indexOf(`:nth-of-type`)>-1?4:1}return t}orderSelectors(e){let t=Object.keys(e),n={1:[],2:[],3:[],4:[],5:[],6:[],7:[]},r=[];for(let e of t)n[this.pageWeight(e)].unshift(e);for(var i=1;i<=7;i++)r=r.concat(n[i]);return r}beforeTreeParse(e,t){t.text=e.replace(/element[\s]*\(([^|^#)]*)\)/g,`element-ident($1)`)}}})))()}function Z(e,t=`"' `){if(e!=null)return e.replace(RegExp(`^[${t}]+`),``).replace(RegExp(`[${t}]+$`),``).replace(/["']/g,e=>`\\`+e).replace(/[\n]/g,e=>`\\00000A`)}function mt(e){if(e!=null)return e.replace(RegExp(`::footnote-call`,`g`),``).replace(RegExp(`::footnote-marker`,`g`),``)}var ht,gt;function _t(){return(_t=e((()=>{K(),ht=t(a(),1),gt=class extends G{constructor(e,t,n){super(e,t,n),this.stringSetSelectors={},this.type,this.pageLastString}onDeclaration(e,t,n,r){if(e.property===`string-set`){let t=ht.default.generate(r.ruleNode.prelude),n=[],i=[],a=[];e.value.children.forEach(e=>{e.type===`Identifier`&&n.push(e.name),e.type===`Function`&&(i.push(e.name),e.children.forEach(e=>{e.type===`Identifier`&&a.push(e.name)}))}),n.forEach((e,n)=>{let r=i[n],o=a[n];this.stringSetSelectors[e]={identifier:e,func:r,value:o,selector:t}})}}onContent(e,t,n,r,i){if(e.name===`string`){let t=e.children&&e.children.first().name;this.type=e.children.last().name,e.name=`var`,e.children=new ht.default.List,this.type===`first`||this.type===`last`||this.type===`start`||this.type===`first-except`?e.children.append(e.children.createItem({type:`Identifier`,loc:null,name:`--pagedjs-string-`+this.type+`-`+t})):e.children.append(e.children.createItem({type:`Identifier`,loc:null,name:`--pagedjs-string-first-`+t}))}}afterPageLayout(e){this.pageLastString===void 0&&(this.pageLastString={});for(let t of Object.keys(this.stringSetSelectors)){let n=this.stringSetSelectors[t],r=n.value,i=n.func,a=e.querySelectorAll(n.selector),o=t in this.pageLastString?this.pageLastString[t]:``,s,c,l,u;a.length==0?(s=o,c=o,l=o,u=o):(a.forEach(e=>{i===`content`&&(this.pageLastString[t]=a[a.length-1].textContent),i===`attr`&&(this.pageLastString[t]=a[a.length-1].getAttribute(r)||``)}),i===`content`&&(s=a[0].textContent),i===`attr`&&(s=a[0].getAttribute(r)||``),i===`content`&&(c=a[a.length-1].textContent),i===`attr`&&(c=a[a.length-1].getAttribute(r)||``),l=a[0].getBoundingClientRect().top==a[0].closest(`.pagedjs_page_content`).getBoundingClientRect().top?s:o,u=``),e.style.setProperty(`--pagedjs-string-first-${t}`,`"${Z(s)}`),e.style.setProperty(`--pagedjs-string-last-${t}`,`"${Z(c)}`),e.style.setProperty(`--pagedjs-string-start-${t}`,`"${Z(l)}`),e.style.setProperty(`--pagedjs-string-first-except-${t}`,`"${Z(u)}`)}}}})))()}var Q,vt;function yt(){return(yt=e((()=>{K(),m(),Q=t(a(),1),vt=class extends G{constructor(e,t,n){super(e,t,n),this.styleSheet=t.styleSheet,this.counterTargets={}}onContent(e,t,n,r,i){if(e.name===`target-counter`){let t=Q.default.generate(i.ruleNode.prelude),n=e.children.first(),r=n.name,a=Q.default.generate(e),o=[];n.children.forEach(e=>{e.type===`Identifier`&&o.push(e.name)});let s,l,u;e.children.forEach(e=>{e.type===`Identifier`&&(s?l||=(u=Q.default.clone(e),e.name):s=e.name)});let d=`target-counter-`+c();t.split(`,`).forEach(e=>{this.counterTargets[e]={func:r,args:o,value:a,counter:s,style:l,selector:e,fullSelector:t,variable:d}}),e.name=`counter`,e.children=new Q.default.List,e.children.appendData({type:`Identifier`,loc:0,name:d}),u&&(e.children.appendData({type:`Operator`,loc:null,value:`,`}),e.children.appendData(u))}}afterPageLayout(e,t,n,r){Object.keys(this.counterTargets).forEach(e=>{let t=this.counterTargets[e],n=t.selector.split(/::?/g),i=n[0];r.pagesArea.querySelectorAll(i+`:not([data-`+t.variable+`])`).forEach((e,i)=>{if(t.func!==`attr`)return;let a=l(e,t.args),o=r.pagesArea.querySelector(u(a));if(o){let i=c();e.setAttribute(`data-`+t.variable,i);let a=``;if(n.length>1&&(a+=`::`+n[1]),t.counter===`page`){let e=r.pagesArea.querySelectorAll(`.pagedjs_page`),n=0;for(let t=0;t<e.length;t++){let r=e[t],i=window.getComputedStyle(r),a=i[`counter-reset`].replace(`page`,``).trim(),s=i[`counter-increment`].replace(`page`,``).trim();if(a!==`none`&&(n=parseInt(a)),s!==`none`&&(n+=parseInt(s)),r.contains(o))break}this.styleSheet.insertRule(`[data-${t.variable}="${i}"]${a} { counter-reset: ${t.variable} ${n}; }`,this.styleSheet.cssRules.length)}else{let e=o.getAttribute(`data-counter-${t.counter}-value`);e&&this.styleSheet.insertRule(`[data-${t.variable}="${i}"]${a} { counter-reset: ${t.variable} ${t.variable} ${parseInt(e)}; }`,this.styleSheet.cssRules.length)}let s=document.querySelector(`[data-${t.variable}="${i}"]`);s&&(s.style.display=`none`,s.clientHeight,s.style.removeProperty(`display`))}})})}}})))()}var $,bt;function xt(){return(xt=e((()=>{K(),m(),$=t(a(),1),bt=class extends G{constructor(e,t,n){super(e,t,n),this.styleSheet=t.styleSheet,this.textTargets={},this.beforeContent=``,this.afterContent=``,this.selector={}}onContent(e,t,n,r,i){if(e.name===`target-text`){this.selector=$.default.generate(i.ruleNode.prelude);let t=e.children.first(),n=e.children.last(),r=t.name,a=$.default.generate(e),o=[];t.children.forEach(e=>{e.type===`Identifier`&&o.push(e.name)});let s;n!==t&&(s=n.name);let l=`--pagedjs-`+c();this.selector.split(`,`).forEach(e=>{this.textTargets[e]={func:r,args:o,value:a,style:s||`content`,selector:e,fullSelector:this.selector,variable:l}}),e.name=`var`,e.children=new $.default.List,e.children.appendData({type:`Identifier`,loc:0,name:l})}}onPseudoSelector(e,t,n,r,i){i.ruleNode.block.children.forEach(t=>{e.name===`before`&&t.property===`content`?t.value.children.forEach(e=>{e.type===`String`&&(this.beforeContent=e.value)}):e.name===`after`&&t.property===`content`&&t.value.children.forEach(e=>{e.type===`String`&&(this.afterContent=e.value)})})}afterParsed(e){Object.keys(this.textTargets).forEach(t=>{let n=this.textTargets[t],r=n.selector.split(`::`),i=r[0],a=e.querySelectorAll(i),o;a.forEach((t,i)=>{let a=l(t,n.args),s=e.querySelector(u(a));if(s){if(n.style){this.selector=c(),t.setAttribute(`data-target-text`,this.selector);let e=``;if(r.length>1&&(e+=`::`+r[1]),n.style===`before`||n.style===`after`){let e=`${n.style}Content`;o=Z(this[e])}else o=Z(s.textContent,` `);o=n.style===`first-letter`?o.charAt(0):o,this.styleSheet.insertRule(`[data-target-text="${this.selector}"]${e} { ${n.variable}: "${o}" }`)}else console.warn(`missed target`,a)}})})}}})))()}var St;function Ct(){return(Ct=e((()=>{pt(),_t(),yt(),xt(),St=[ft,gt,vt,bt]})))()}var wt;function Tt(){return(Tt=e((()=>{K(),wt=class extends G{constructor(e,t,n){super(e,t,n)}filter(e){me(e,e=>this.filterEmpty(e),NodeFilter.SHOW_TEXT)}filterEmpty(e){if(e.textContent.length>1&&k(e)){let t=e.parentNode;if(h(t)&&t.closest(`pre`))return NodeFilter.FILTER_REJECT;let n=A(e),r=M(e);return r===null&&n===null?(e.textContent=` `,NodeFilter.FILTER_REJECT):r===null||n===null?NodeFilter.FILTER_ACCEPT:(e.textContent=` `,NodeFilter.FILTER_REJECT)}return NodeFilter.FILTER_REJECT}}})))()}var Et;function Dt(){return(Dt=e((()=>{K(),Et=class extends G{constructor(e,t,n){super(e,t,n)}filter(e){me(e,null,NodeFilter.SHOW_COMMENT)}}})))()}var Ot;function kt(){return(kt=e((()=>{K(),Ot=class extends G{constructor(e,t,n){super(e,t,n)}filter(e){e.querySelectorAll(`script`).forEach(e=>{e.remove()})}}})))()}var At,jt,Mt;function Nt(){return(Nt=e((()=>{K(),At=t(a(),1),jt=i(),Mt=class extends G{constructor(e,t,n){super(e,t,n),this.displayRules={}}onDeclaration(e,t,n,r){if(e.property===`display`){let t=At.default.generate(r.ruleNode.prelude),n=e.value.children.first().name;t.split(`,`).forEach(t=>{this.displayRules[t]={value:n,selector:t,specificity:(0,jt.calculateSpecificity)(t),important:e.important}})}}filter(e){let{matches:t,selectors:n}=this.sortDisplayedSelectors(e,this.displayRules);for(let e=0;e<t.length;e++){let r=t[e],i=n[e],a=i[i.length-1].value;this.removable(r)&&a===`none`&&(r.dataset.undisplayed=`undisplayed`)}let r=e.querySelectorAll(`[style]`);for(let e=0;e<r.length;e++){let t=r[e];this.removable(t)&&(t.dataset.undisplayed=`undisplayed`)}}sorter(e,t){return e.important&&!t.important?1:t.important&&!e.important?-1:e.specificity-t.specificity}sortDisplayedSelectors(e,t=[]){let n=[],r=[];for(let i in t){let a=t[i],o=a.selector,s=[];try{try{s=e.querySelectorAll(o)}catch{s=e.querySelectorAll(mt(o))}}catch{s=[]}let c=Array.from(s);for(let e of c)if(n.includes(e)){let t=n.indexOf(e);r[t].push(a),r[t]=r[t].sort(this.sorter)}else n.push(e),r.push([a])}return{matches:n,selectors:r}}removable(e){return!(e.style&&e.style.display!==``&&e.style.display!==`none`)}}})))()}var Pt;function Ft(){return(Ft=e((()=>{Tt(),Dt(),kt(),Nt(),Pt=[wt,Et,Ot,Mt]})))()}function It(){for(var e=0;e<arguments.length;e++)Bt.push(arguments[e])}function Lt(e,t,n){return new Vt(e,t,n)}var Rt,zt,Bt,Vt;function Ht(){return(Ht=e((()=>{dt(),Ct(),Ft(),Rt=t(n(),1),zt=t(r(),1),Bt=[...ut,...St,...Pt],Vt=class{constructor(e,t,n){let r=[];Bt.forEach(i=>{let a=new i(e,t,n);r.push(a),(0,zt.default)(a,this)})}},(0,Rt.default)(Vt.prototype)})))()}var Ut,Wt;function Gt(){return(Gt=e((()=>{Ut=t(n(),1),L(),H(),W(),Ht(),Wt=class{constructor(e){this.settings=e||{},this.polisher=new Me(!1),this.chunker=new V(void 0,void 0,this.settings),this.hooks={},this.hooks.beforePreview=new I(this),this.hooks.afterPreview=new I(this),this.size={width:{value:8.5,unit:`in`},height:{value:11,unit:`in`},format:void 0,orientation:void 0},this.chunker.on(`page`,e=>{this.emit(`page`,e)}),this.chunker.on(`rendering`,()=>{this.emit(`rendering`,this.chunker)})}initializeHandlers(){let e=Lt(this.chunker,this.polisher,this);return e.on(`size`,e=>{this.size=e,this.emit(`size`,e)}),e.on(`atpages`,e=>{this.atpages=e,this.emit(`atpages`,e)}),e}registerHandlers(){return It.apply(It,arguments)}getParams(e){let t,n=new URL(window.location);for(var r of new URLSearchParams(n.search).entries())r[0]===e&&(t=r[1]);return t}wrapContent(){let e=document.querySelector(`body`),t;return t=e.querySelector(`:scope > template[data-ref='pagedjs-content']`),t||(t=document.createElement(`template`),t.dataset.ref=`pagedjs-content`,t.innerHTML=e.innerHTML,e.innerHTML=``,e.appendChild(t)),t.content}removeStyles(e=document){let t=Array.from(e.querySelectorAll(`link[rel='stylesheet']:not([data-pagedjs-ignore], [media~='screen'])`)),n=Array.from(e.querySelectorAll(`style:not([data-pagedjs-inserted-styles], [data-pagedjs-ignore], [media~='screen'])`));return[...t,...n].sort(function(e,t){let n=e.compareDocumentPosition(t);return n===Node.DOCUMENT_POSITION_PRECEDING?1:n===Node.DOCUMENT_POSITION_FOLLOWING?-1:0}).map(e=>{if(e.nodeName===`STYLE`){let t={};return t[window.location.href]=e.textContent,e.remove(),t}if(e.nodeName===`LINK`)return e.remove(),e.href;console.warn(`Unable to process: ${e}, ignoring.`)})}async preview(e,t,n){await this.hooks.beforePreview.trigger(e,n),e||=this.wrapContent(),t||=this.removeStyles(),this.polisher.setup(),this.handlers=this.initializeHandlers(),await this.polisher.add(...t);let r=performance.now(),i=await this.chunker.flow(e,n);return i.performance=performance.now()-r,i.size=this.size,this.emit(`rendered`,i),await this.hooks.afterPreview.trigger(i.pages),i}},(0,Ut.default)(Wt.prototype)})))()}function Kt(){return(Kt=e((()=>{H(),W(),Gt(),K(),Ht()})))()}export{Wt as n,Gt as r,Kt as t};