import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Cn as t,En as n,Ft as r,Gn as i,H as a,J as o,Kn as s,Pt as c,Xn as l,Yn as u,an as d,cn as f,dn as p,fn as m,ln as h,nn as g,q as _,sn as v,vn as y,wn as b}from"./vendor-streamdown-DmUo3sTi.js";import{g as x,m as S,x as C}from"./vendor-infographic-B-c8yls1.js";import{z as w}from"./vendor-mermaid-d3-CFeYfBqf.js";import{n as T,t as E}from"./chunk-JWPE2WC7-CV9mVX-y.js";import{n as D,r as O}from"./vendor-mermaid-render-B7JHQE9h.js";var k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{E(),c(),_(),y(),i(),l(),D(),S(),k=v.pie,A={sections:new Map,showData:!1,config:k},j=A.sections,M=A.showData,N=structuredClone(k),P={getConfig:u(()=>structuredClone(N),`getConfig`),clear:u(()=>{j=new Map,M=A.showData,g()},`clear`),setDiagramTitle:n,getDiagramTitle:m,setAccTitle:b,getAccTitle:h,setAccDescription:t,getAccDescription:f,addSection:u(({label:e,value:t})=>{if(t<0)throw Error(`"${e}" has invalid value: ${t}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);j.has(e)||(j.set(e,t),s.debug(`added new section: ${e}, with value: ${t}`))},`addSection`),getSections:u(()=>j,`getSections`),setShowData:u(e=>{M=e},`setShowData`),getShowData:u(()=>M,`getShowData`)},F=u((e,t)=>{T(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},`populateDb`),I={parse:u(async e=>{let t=await O(`pie`,e);s.debug(t),F(t,P)},`parse`)},L=u(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,`getStyles`),R=u(e=>{let t=[...e.values()].reduce((e,t)=>e+t,0),n=[...e.entries()].map(([e,t])=>({label:e,value:t})).filter(e=>e.value/t*100>=1);return x().value(e=>e.value).sort(null)(n)},`createPieArcs`),z={parser:I,db:P,renderer:{draw:u((e,t,n,i)=>{s.debug(`rendering pie chart
`+e);let c=i.db,l=p(),u=a(c.getConfig(),l.pie),f=r(t),m=f.append(`g`);m.attr(`transform`,`translate(225,225)`);let{themeVariables:h}=l,[g]=o(h.pieOuterStrokeWidth);g??=2;let _=u.legendPosition,v=u.textPosition,y=u.donutHole>0&&u.donutHole<=.9?u.donutHole:0,b=C().innerRadius(y*185).outerRadius(185),x=C().innerRadius(185*v).outerRadius(185*v),S=m.append(`g`);S.append(`circle`).attr(`cx`,0).attr(`cy`,0).attr(`r`,185+g/2).attr(`class`,`pieOuterCircle`);let T=c.getSections(),E=R(T),D=[h.pie1,h.pie2,h.pie3,h.pie4,h.pie5,h.pie6,h.pie7,h.pie8,h.pie9,h.pie10,h.pie11,h.pie12],O=0;T.forEach(e=>{O+=e});let k=E.filter(e=>(e.data.value/O*100).toFixed(0)!==`0`),A=w(D).domain([...T.keys()]);S.selectAll(`mySlices`).data(k).enter().append(`path`).attr(`d`,b).attr(`fill`,e=>A(e.data.label)).attr(`class`,e=>{let t=`pieCircle`;return u.highlightSlice===`hover`?t+=` highlightedOnHover`:u.highlightSlice===e.data.label&&(t+=` highlighted`),t}),S.selectAll(`mySlices`).data(k).enter().append(`text`).text(e=>(e.data.value/O*100).toFixed(0)+`%`).attr(`transform`,e=>`translate(`+x.centroid(e)+`)`).style(`text-anchor`,`middle`).attr(`class`,`slice`);let j=m.append(`text`).text(c.getDiagramTitle()).attr(`x`,0).attr(`y`,-200).attr(`class`,`pieTitleText`),M=[...T.entries()].map(([e,t])=>({label:e,value:t})),N=m.selectAll(`.legend`).data(M).enter().append(`g`).attr(`class`,`legend`);N.append(`rect`).attr(`width`,18).attr(`height`,18).style(`fill`,e=>A(e.label)).style(`stroke`,e=>A(e.label)),N.append(`text`).attr(`x`,22).attr(`y`,14).text(e=>c.getShowData()?`${e.label} [${e.value}]`:e.label);let P=Math.max(...N.selectAll(`text`).nodes().map(e=>e?.getBoundingClientRect().width??0)),F=450,I=490,L=M.length*22;switch(_){case`center`:N.attr(`transform`,(e,t)=>{let n=22*M.length/2,r=-P/2-22,i=t*22-n;return`translate(`+r+`,`+i+`)`});break;case`top`:F+=L,N.attr(`transform`,(e,t)=>`translate(${-P/2-22}, ${t*22-185})`),S.attr(`transform`,()=>`translate(0, ${L+22})`);break;case`bottom`:F+=L,N.attr(`transform`,(e,t)=>{let n=-P/2-22,r=t*22- -207;return`translate(`+n+`,`+r+`)`});break;case`left`:I+=22+P,N.attr(`transform`,(e,t)=>{let n=22*M.length/2;return`translate(-207,`+(t*22-n)+`)`}),S.attr(`transform`,()=>`translate(${P+18+4}, 0)`);break;default:I+=22+P,N.attr(`transform`,(e,t)=>{let n=22*M.length/2;return`translate(216,`+(t*22-n)+`)`})}let z=j.node()?.getBoundingClientRect().width??0,B=225-z/2,V=225+z/2,H=Math.min(0,B),U=Math.max(I,V)-H;f.attr(`viewBox`,`${H} 0 ${U} ${F}`),d(f,F,U,u.useMaxWidth)},`draw`)},styles:L}})))()}B();export{z as diagram};