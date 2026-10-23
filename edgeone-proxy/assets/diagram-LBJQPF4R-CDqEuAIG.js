import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Cn as t,En as n,Ft as r,Gn as i,H as a,Kn as o,Pt as s,Xn as c,Yn as l,an as u,cn as d,fn as f,ln as p,nn as m,q as h,sn as g,un as _,vn as v,wn as y}from"./vendor-streamdown-DmUo3sTi.js";import{n as b,t as x}from"./chunk-JWPE2WC7-CV9mVX-y.js";import{n as S,r as C}from"./vendor-mermaid-render-B7JHQE9h.js";var w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{x(),s(),h(),v(),i(),c(),S(),w=g.packet,T=class{constructor(){this.packet=[],this.setAccTitle=y,this.getAccTitle=p,this.setDiagramTitle=n,this.getDiagramTitle=f,this.getAccDescription=d,this.setAccDescription=t}static{l(this,`PacketDB`)}getConfig(){let e=a({...w,..._().packet});return e.showBits&&(e.paddingY+=10),e}getPacket(){return this.packet}pushWord(e){e.length>0&&this.packet.push(e)}clear(){m(),this.packet=[]}},E=1e4,D=l((e,t)=>{b(e,t);let n=-1,r=[],i=1,{bitsPerRow:a}=t.getConfig();for(let{start:s,end:c,bits:l,label:u}of e.blocks){if(s!==void 0&&c!==void 0&&c<s)throw Error(`Packet block ${s} - ${c} is invalid. End must be greater than start.`);if(s??=n+1,s!==n+1)throw Error(`Packet block ${s} - ${c??s} is not contiguous. It should start from ${n+1}.`);if(l===0)throw Error(`Packet block ${s} is invalid. Cannot have a zero bit field.`);for(c??=s+(l??1)-1,l??=c-s+1,n=c,o.debug(`Packet block ${s} - ${n} with label ${u}`);r.length<=a+1&&t.getPacket().length<E;){let[e,n]=O({start:s,end:c,bits:l,label:u},i,a);if(r.push(e),e.end+1===i*a&&(t.pushWord(r),r=[],i++),!n)break;({start:s,end:c,bits:l,label:u}=n)}}t.pushWord(r)},`populate`),O=l((e,t,n)=>{if(e.start===void 0)throw Error(`start should have been set during first phase`);if(e.end===void 0)throw Error(`end should have been set during first phase`);if(e.start>e.end)throw Error(`Block start ${e.start} is greater than block end ${e.end}.`);if(e.end+1<=t*n)return[e,void 0];let r=t*n-1,i=t*n;return[{start:e.start,end:r,label:e.label,bits:r-e.start},{start:i,end:e.end,label:e.label,bits:e.end-i}]},`getNextFittingBlock`),k={parser:{yy:void 0},parse:l(async e=>{let t=await C(`packet`,e),n=k.parser?.yy;if(!(n instanceof T))throw Error(`parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.`);o.debug(t),D(t,n)},`parse`)},A=l((e,t,n,i)=>{let a=i.db,o=a.getConfig(),{rowHeight:s,paddingY:c,bitWidth:l,bitsPerRow:d}=o,f=a.getPacket(),p=a.getDiagramTitle(),m=s+c,h=m*(f.length+1)-(p?0:s),g=l*d+2,_=r(t);_.attr(`viewBox`,`0 0 ${g} ${h}`),u(_,h,g,o.useMaxWidth);for(let[e,t]of f.entries())j(_,t,e,o);_.append(`text`).text(p).attr(`x`,g/2).attr(`y`,h-m/2).attr(`dominant-baseline`,`middle`).attr(`text-anchor`,`middle`).attr(`class`,`packetTitle`)},`draw`),j=l((e,t,n,{rowHeight:r,paddingX:i,paddingY:a,bitWidth:o,bitsPerRow:s,showBits:c})=>{let l=e.append(`g`),u=n*(r+a)+a;for(let e of t){let t=e.start%s*o+1,n=(e.end-e.start+1)*o-i;if(l.append(`rect`).attr(`x`,t).attr(`y`,u).attr(`width`,n).attr(`height`,r).attr(`class`,`packetBlock`),l.append(`text`).attr(`x`,t+n/2).attr(`y`,u+r/2).attr(`class`,`packetLabel`).attr(`dominant-baseline`,`middle`).attr(`text-anchor`,`middle`).text(e.label),!c)continue;let a=e.end===e.start,d=u-2;l.append(`text`).attr(`x`,t+(a?n/2:0)).attr(`y`,d).attr(`class`,`packetByte start`).attr(`dominant-baseline`,`auto`).attr(`text-anchor`,a?`middle`:`start`).text(e.start),a||l.append(`text`).attr(`x`,t+n).attr(`y`,d).attr(`class`,`packetByte end`).attr(`dominant-baseline`,`auto`).attr(`text-anchor`,`end`).text(e.end)}},`drawWord`),M={draw:A},N={byteFontSize:`10px`,startByteColor:`black`,endByteColor:`black`,labelColor:`black`,labelFontSize:`12px`,titleColor:`black`,titleFontSize:`14px`,blockStrokeColor:`black`,blockStrokeWidth:`1`,blockFillColor:`#efefef`},P={parser:k,get db(){return new T},renderer:M,styles:l(({packet:e}={})=>{let t=a(N,e);return`
	.packetByte {
		font-size: ${t.byteFontSize};
	}
	.packetByte.start {
		fill: ${t.startByteColor};
	}
	.packetByte.end {
		fill: ${t.endByteColor};
	}
	.packetLabel {
		fill: ${t.labelColor};
		font-size: ${t.labelFontSize};
	}
	.packetTitle {
		fill: ${t.titleColor};
		font-size: ${t.titleFontSize};
	}
	.packetBlock {
		stroke: ${t.blockStrokeColor};
		stroke-width: ${t.blockStrokeWidth};
		fill: ${t.blockFillColor};
	}
	`},`styles`)}})))()}F();export{P as diagram};