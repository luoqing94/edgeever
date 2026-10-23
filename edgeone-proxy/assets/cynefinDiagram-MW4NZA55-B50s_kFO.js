import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Cn as t,En as n,Ft as r,Gn as i,H as a,Kn as o,Pt as s,Xn as c,Yn as l,an as u,cn as d,fn as f,ln as p,mn as m,nn as h,q as g,sn as _,un as v,vn as y,wn as b}from"./vendor-streamdown-DmUo3sTi.js";import{n as x,t as S}from"./chunk-JWPE2WC7-CV9mVX-y.js";import{n as C,r as w}from"./vendor-mermaid-render-B7JHQE9h.js";function T(e){let t=e+1831565813|0;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function E(e){let t=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t=(t<<5)-t+r,t|=0}return t}function D(e,t){return typeof e==`number`&&Number.isFinite(e)&&e!==0?e:E(t)}function O(e,t,n,r){let i=e/2,a=r??e*.015,o=t/7,s=[];for(let e=0;e<=7;e++){let t=T(n+e*17)*a*2-a;s.push({x:i+t,y:e*o})}let c=`M${s[0].x},${s[0].y}`;for(let e=0;e<s.length-1;e++){let t=s[e],r=s[e+1],i=(t.y+r.y)/2,o=e%2==0?1:-1,l=a*1.5*o*T(n+e*31+7),u=t.x+l,d=i,f=r.x-l;c+=` C${u},${d} ${f},${i} ${r.x},${r.y}`}return c}function k(e,t,n,r){let i=t/2,a=r??t*.015,o=e/7,s=[];for(let e=0;e<=7;e++){let t=T(n+e*23)*a*2-a;s.push({x:e*o,y:i+t})}let c=`M${s[0].x},${s[0].y}`;for(let e=0;e<s.length-1;e++){let t=s[e],r=s[e+1],i=(t.x+r.x)/2,o=e%2==0?1:-1,l=a*1.5*o*T(n+e*37+11),u=i,d=t.y+l,f=i,p=r.y-l;c+=` C${u},${d} ${f},${p} ${r.x},${r.y}`}return c}function A(e,t){let n=e/2,r=t*.5,i=t,a=e*.03;return[`M${n},${r}`,`C${n+a},${r+(i-r)*.2}`,`${n-a*1.5},${r+(i-r)*.55}`,`${n+a*.5},${r+(i-r)*.75}`,`C${n-a},${r+(i-r)*.85}`,`${n+a*.3},${r+(i-r)*.95}`,`${n},${i}`].join(` `)}function j(e,t,n,r){return[`M${e-n},${t}`,`A${n},${r} 0 1,1 ${e+n},${t}`,`A${n},${r} 0 1,1 ${e-n},${t}`,`Z`].join(` `)}var M,N,P,F,I,L,R,z,B,V,H,U;function W(){return(W=e((()=>{S(),s(),g(),y(),i(),c(),C(),M=l(()=>({domains:new Map,transitions:[]}),`createDefaultData`),N=M(),P={getDomains:l(()=>N.domains,`getDomains`),getTransitions:l(()=>N.transitions,`getTransitions`),setDomains:l(e=>{if(e)for(let t of e){let e=t.domain,n=(t.items??[]).map(e=>({label:e.label}));N.domains.set(e,{name:e,items:n})}},`setDomains`),setTransitions:l(e=>{e&&(N.transitions=e.filter(e=>e.from!==e.to||(o.warn(`Cynefin: self-loop transition on domain "${e.from}" is not meaningful and will be skipped.`),!1)).map(e=>({from:e.from,to:e.to,label:e.label||void 0})))},`setTransitions`),getConfig:l(()=>a({..._.cynefin,...v().cynefin}),`getConfig`),clear:l(()=>{h(),N=M()},`clear`),setAccTitle:b,getAccTitle:p,setDiagramTitle:n,getDiagramTitle:f,getAccDescription:d,setAccDescription:t},F=l(e=>{x(e,P),P.setDomains(e.domains),P.setTransitions(e.transitions)},`populate`),I={parse:l(async e=>{let t=await w(`cynefin`,e);o.debug(t),F(t)},`parse`)},l(T,`seededRandom`),l(E,`hashString`),l(D,`resolveSeed`),l(O,`generateFoldPath`),l(k,`generateHorizontalBoundary`),l(A,`generateCliffPath`),l(j,`generateConfusionPath`),L={complex:{model:`Probe → Sense → Respond`,practice:`Emergent Practices`},complicated:{model:`Sense → Analyse → Respond`,practice:`Good Practices`},clear:{model:`Sense → Categorise → Respond`,practice:`Best Practices`},chaotic:{model:`Act → Sense → Respond`,practice:`Novel Practices`},confusion:{model:``,practice:`Disorder`}},R=l((e,t)=>{let n=e/2,r=t/2;return{complex:{cx:n/2,cy:r/2,x:0,y:0,w:n,h:r},complicated:{cx:n+n/2,cy:r/2,x:n,y:0,w:n,h:r},chaotic:{cx:n/2,cy:r+r/2,x:0,y:r,w:n,h:r},clear:{cx:n+n/2,cy:r+r/2,x:n,y:r,w:n,h:r},confusion:{cx:n,cy:r,x:n*.7,y:r*.7,w:n*.6,h:r*.6}}},`getDomainLayouts`),z=l(()=>{let e=m(),t=v();return a(e,t.themeVariables).cynefin},`getCynefinDomainColors`),B=3,V={draw:l((e,t,n,i)=>{let a=i.db,s=a.getDomains(),c=a.getTransitions(),l=a.getDiagramTitle(),d=a.getAccTitle(),f=a.getAccDescription(),p=a.getConfig(),m=z();o.debug(`Rendering Cynefin diagram`);let h=p.width,g=p.height,_=p.padding,v=p.showDomainDescriptions,y=p.boundaryAmplitude,b=h+_*2,x=g+_*2,S={complex:m.complexBg,complicated:m.complicatedBg,clear:m.clearBg,chaotic:m.chaoticBg,confusion:m.confusionBg},C=r(t);u(C,x,b,p.useMaxWidth??!0),C.attr(`viewBox`,`0 0 ${b} ${x}`),d&&C.append(`title`).text(d),f&&C.append(`desc`).text(f);let w=C.append(`g`).attr(`transform`,`translate(${_}, ${_})`),T=R(h,g),E=D(p.seed,t),M=w.append(`g`).attr(`class`,`cynefin-backgrounds`),N=[`complex`,`complicated`,`chaotic`,`clear`];for(let e of N){let t=T[e];M.append(`rect`).attr(`class`,`cynefinDomain`).attr(`x`,t.x).attr(`y`,t.y).attr(`width`,t.w).attr(`height`,t.h).attr(`fill`,S[e]).attr(`fill-opacity`,.4).attr(`stroke`,`none`)}let P=w.append(`g`).attr(`class`,`cynefin-boundaries`);P.append(`path`).attr(`class`,`cynefinBoundary`).attr(`d`,O(h,g,E,y)).attr(`fill`,`none`),P.append(`path`).attr(`class`,`cynefinBoundary`).attr(`d`,k(h,g,E+100,y)).attr(`fill`,`none`),P.append(`path`).attr(`class`,`cynefinCliff`).attr(`d`,A(h,g)).attr(`fill`,`none`);let F=h*.15,I=g*.15;w.append(`path`).attr(`class`,`cynefinConfusion`).attr(`d`,j(h/2,g/2,F,I)).attr(`fill`,S.confusion).attr(`fill-opacity`,.5);let V=w.append(`g`).attr(`class`,`cynefin-labels`);for(let e of N){let t=T[e];V.append(`text`).attr(`class`,`cynefinDomainLabel`).attr(`x`,t.cx).attr(`y`,v?t.cy-30:t.cy).attr(`text-anchor`,`middle`).attr(`dominant-baseline`,`middle`).text(e.charAt(0).toUpperCase()+e.slice(1))}if(V.append(`text`).attr(`class`,`cynefinDomainLabel`).attr(`x`,h/2).attr(`y`,v?g/2-10:g/2).attr(`text-anchor`,`middle`).attr(`dominant-baseline`,`middle`).text(`Confusion`),v){let e=w.append(`g`).attr(`class`,`cynefin-subtitles`);for(let t of N){let n=T[t],r=L[t];e.append(`text`).attr(`class`,`cynefinSubtitle`).attr(`x`,n.cx).attr(`y`,n.cy-10).attr(`text-anchor`,`middle`).attr(`dominant-baseline`,`middle`).text(r.model),e.append(`text`).attr(`class`,`cynefinSubtitle`).attr(`x`,n.cx).attr(`y`,n.cy+5).attr(`text-anchor`,`middle`).attr(`dominant-baseline`,`middle`).text(r.practice)}e.append(`text`).attr(`class`,`cynefinSubtitle`).attr(`x`,h/2).attr(`y`,g/2+8).attr(`text-anchor`,`middle`).attr(`dominant-baseline`,`middle`).text(L.confusion.practice)}let H=w.append(`g`).attr(`class`,`cynefin-items`);for(let e of[`complex`,`complicated`,`chaotic`,`clear`,`confusion`]){let t=s.get(e);if(!t||t.items.length===0)continue;let n=T[e],r=e===`confusion`,i=t.items,a=0;r&&t.items.length>B&&(a=t.items.length-B,i=t.items.slice(0,B));let o;if(r){let e=v?22:14;o=n.cy+e}else o=n.cy+(v?25:15);if([...i].forEach((t,r)=>{let i=o+r*30,a=H.append(`g`),s=a.append(`text`).attr(`class`,`cynefinItemText`).attr(`x`,0).attr(`y`,13).attr(`text-anchor`,`middle`).attr(`dominant-baseline`,`central`).text(t.label),c=t.label.length*7,l=s.node();if(l&&typeof l.getBBox==`function`){let e=l.getBBox();e.width>0&&(c=e.width)}let u=c+20,d=n.cx-u/2;a.attr(`transform`,`translate(${d}, ${i})`),a.insert(`rect`,`text`).attr(`class`,`cynefinItem`).attr(`x`,0).attr(`y`,0).attr(`width`,u).attr(`height`,26).attr(`rx`,4).attr(`ry`,4).attr(`fill`,S[e]).attr(`fill-opacity`,.95),s.attr(`x`,u/2).attr(`y`,13)}),a>0){let t=o+i.length*30,r=`+${a} more`,s=H.append(`g`),c=s.append(`text`).attr(`class`,`cynefinItemText`).attr(`x`,0).attr(`y`,13).attr(`text-anchor`,`middle`).attr(`dominant-baseline`,`central`).text(r),l=r.length*7,u=c.node();if(u&&typeof u.getBBox==`function`){let e=u.getBBox();e.width>0&&(l=e.width)}let d=l+20,f=n.cx-d/2;s.attr(`transform`,`translate(${f}, ${t})`),s.insert(`rect`,`text`).attr(`class`,`cynefinItemOverflow`).attr(`x`,0).attr(`y`,0).attr(`width`,d).attr(`height`,26).attr(`rx`,4).attr(`ry`,4).attr(`fill`,S[e]).attr(`fill-opacity`,.6),c.attr(`x`,d/2).attr(`y`,13)}}if(c.length>0){let e=C.select(`defs`).empty()?C.append(`defs`):C.select(`defs`),n=`cynefin-arrow-${t}`;e.append(`marker`).attr(`id`,n).attr(`viewBox`,`0 0 10 10`).attr(`refX`,9).attr(`refY`,5).attr(`markerWidth`,6).attr(`markerHeight`,6).attr(`orient`,`auto-start-reverse`).append(`path`).attr(`d`,`M 0 0 L 10 5 L 0 10 z`).attr(`class`,`cynefinArrowHead`);let r=w.append(`g`).attr(`class`,`cynefin-arrows`);c.forEach(e=>{let t=T[e.from],i=T[e.to];if(!t||!i)return;if(e.from===e.to){o.warn(`Cynefin renderer: skipping self-loop on domain "${e.from}"`);return}let a=t.cx,s=t.cy,c=i.cx,l=i.cy,u=(a+c)/2,d=(s+l)/2,f=c-a,p=l-s,m=Math.sqrt(f*f+p*p),h=m*.15,g=-p/m,_=f/m,v=u+g*h,y=d+_*h;r.append(`path`).attr(`class`,`cynefinArrowLine`).attr(`d`,`M${a},${s} Q${v},${y} ${c},${l}`).attr(`fill`,`none`).attr(`marker-end`,`url(#${n})`),e.label&&r.append(`text`).attr(`class`,`cynefinArrowLabel`).attr(`x`,v).attr(`y`,y-6).attr(`text-anchor`,`middle`).attr(`dominant-baseline`,`auto`).text(e.label)})}l&&w.append(`text`).attr(`class`,`cynefinTitle`).attr(`x`,h/2).attr(`y`,-_/2).attr(`text-anchor`,`middle`).attr(`dominant-baseline`,`middle`).text(l)},`draw`)},H=l(()=>{let e=m(),t=v();return a(e,t.themeVariables).cynefin},`getCynefinTheme`),U={parser:I,db:P,renderer:V,styles:l(()=>{let e=H();return`
	.cynefinDomain {
		stroke: none;
	}
	.cynefinDomainLabel {
		font-size: ${e.domainFontSize}px;
		font-weight: bold;
		fill: ${e.labelColor};
	}
	.cynefinSubtitle {
		font-size: ${e.itemFontSize-1}px;
		fill: ${e.textColor};
		font-style: italic;
	}
	.cynefinItem {
		fill-opacity: 0.95;
		stroke: ${e.boundaryColor};
		stroke-width: 1;
	}
	.cynefinItemText {
		font-size: ${e.itemFontSize}px;
		fill: ${e.textColor};
	}
	.cynefinItemOverflow {
		fill-opacity: 0.6;
		stroke: ${e.boundaryColor};
		stroke-width: 1;
		stroke-dasharray: 3 2;
	}
	.cynefinBoundary {
		stroke: ${e.boundaryColor};
		stroke-width: ${e.boundaryWidth};
		stroke-dasharray: 6 3;
	}
	.cynefinCliff {
		stroke: ${e.cliffColor};
		stroke-width: ${e.cliffWidth};
	}
	.cynefinConfusion {
		stroke: ${e.boundaryColor};
		stroke-width: 1.5;
		stroke-dasharray: 4 2;
	}
	.cynefinArrowLine {
		stroke: ${e.arrowColor};
		stroke-width: ${e.arrowWidth};
		fill: none;
	}
	.cynefinArrowHead {
		fill: ${e.arrowColor};
		stroke: none;
	}
	.cynefinArrowLabel {
		font-size: ${e.itemFontSize-1}px;
		fill: ${e.textColor};
	}
	.cynefinTitle {
		font-size: ${e.domainFontSize+2}px;
		font-weight: bold;
		fill: ${e.labelColor};
	}
	`},`styles`)}})))()}W();export{U as diagram};