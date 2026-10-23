import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{v as t,y as n}from"./vendor-react-FkrQ505E.js";import{V as r,t as i}from"./src-BdLbps5w.js";import{Ht as a,Vt as o,l as s,n as c}from"./diagram-mindmap-style-CM415T72.js";import{t as l}from"./diagram-reader-BDE5CyvR.js";import{f as u,t as d}from"./vendor-x6-BeDWnBdi.js";var f,p,m,h;function g(){return(g=e((()=>{f=n(),d(),i(),p=t(),u.registerConnector(c,s,!0),m=(e,t)=>t===`en-US`?e.kind===`mind-map`?`Mind map`:e.kind===`architecture`?`Architecture diagram`:`Flowchart`:t===`pl`?e.kind===`mind-map`?`Mapa myśli`:e.kind===`architecture`?`Diagram architektury`:`Schemat blokowy`:e.kind===`mind-map`?`思维导图`:e.kind===`architecture`?`架构图`:`流程图`,h=({diagram:e,locale:t,theme:n})=>{let i=(0,f.useRef)(null);return(0,f.useEffect)(()=>{let a=i.current;if(!a)return;let o=a.parentElement,s=()=>{if(!o)return Math.max(1,a.clientWidth);let e=getComputedStyle(o),t=getComputedStyle(a),n=Number.parseFloat(e.paddingLeft||`0`)+Number.parseFloat(e.paddingRight||`0`),r=Number.parseFloat(t.marginLeft||`0`)+Number.parseFloat(t.marginRight||`0`);return Math.max(1,o.clientWidth-n-r)},c=r(e,n),d=new u({container:a,width:s(),height:Math.max(1,a.clientHeight),grid:e.kind===`architecture`||e.kind===`flowchart`?{size:20,visible:!0,type:`dot`,args:{color:n===`dark`?`rgba(255, 255, 255, 0.12)`:`rgba(15, 23, 42, 0.08)`,thickness:1.2}}:!1,interacting:!1,panning:{enabled:!0},mousewheel:{enabled:!0,minScale:.1,maxScale:2.5}});d.addNodes(c.nodes),d.addEdges(c.edges);let f={...e,nodes:e.nodes.map((e,t)=>({...e,width:c.nodes[t].width,height:c.nodes[t].height}))},p=l(d,a,f,t,n===`dark`),m=()=>p.resize(s(),Math.max(1,a.clientHeight)),h=window.requestAnimationFrame(m),g=new ResizeObserver(m);return g.observe(o??a),()=>{window.cancelAnimationFrame(h),g.disconnect(),p.dispose(),d.dispose()}},[e,t,n]),(0,p.jsxs)(`section`,{className:`edgeever-x6-document`,children:[(0,p.jsx)(`style`,{children:`
        .edgeever-x6-document, .edgeever-diagram-reader-host {
          display: flex;
          flex-direction: column;
          min-height: min(78vh, 760px);
          height: min(78vh, 760px);
          padding: 8px 12px 16px;
        }
        .edgeever-diagram-reader-controls { flex: 0 0 auto; }
        .edgeever-x6-diagram {
          flex: 1 1 auto;
          width: 100%;
          height: auto;
          min-height: 240px;
          overflow: hidden;
          border: 1px solid ${n===`dark`?`#26382f`:`#e3ece7`};
          border-radius: 14px;
          background: ${n===`dark`?o:a};
          touch-action: none;
        }
        .edgeever-x6-diagram .x6-graph-svg { overflow: hidden; }
        .edgeever-x6-diagram .x6-node { cursor: pointer; }
      `}),(0,p.jsx)(`div`,{"aria-label":m(e,t),className:`edgeever-x6-diagram`,"data-diagram-kind":e.kind,ref:i,role:`img`},e.kind)]})}})))()}g();export{h as ReadOnlyX6Diagram,h as default};