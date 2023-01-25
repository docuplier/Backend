import{D as h}from"./Dropzone.1d097e28.js";import{w as p,r as z,m as I,i as v,n as y,x as w,R as _,j as b}from"./index.a585d9d8.js";import{g as U}from"./getPathsByName.49bfad4e.js";import"./index.d3cfb3a6.js";var S={},c={};Object.defineProperty(c,"__esModule",{value:!0});c.getImageSize=void 0;const j=(i,o={})=>new Promise((e,n)=>{if(typeof window>"u")return n("Window is not defined");if(!i)return n("Url is not defined");let a=null;const t=new Image;t.addEventListener("load",()=>{a&&clearTimeout(a),e({width:t.naturalWidth,height:t.naturalHeight})}),t.addEventListener("error",r=>{a&&clearTimeout(a),n(`${r.type}: ${r.message}`)}),t.src=i,o.timeout&&(a=setTimeout(()=>n("Timeout"),o.timeout))});c.getImageSize=j;var l={},O=p&&p.__awaiter||function(i,o,e,n){function a(t){return t instanceof e?t:new e(function(r){r(t)})}return new(e||(e=Promise))(function(t,r){function m(s){try{u(n.next(s))}catch(f){r(f)}}function d(s){try{u(n.throw(s))}catch(f){r(f)}}function u(s){s.done?t(s.value):a(s.value).then(m,d)}u((n=n.apply(i,o||[])).next())})};Object.defineProperty(l,"__esModule",{value:!0});l.useImageSize=void 0;const g=z.exports,P=c,E=(i,o)=>{const[e,n]=(0,g.useState)(null),[a,t]=(0,g.useState)(!1),[r,m]=(0,g.useState)(null);return(0,g.useEffect)(()=>{(()=>O(void 0,void 0,void 0,function*(){t(!0),n(null);try{const{width:u,height:s}=yield(0,P.getImageSize)(i,o);n({width:u,height:s})}catch(u){m(u.toString())}finally{t(!1)}}))()},[i,o]),[e,{loading:a,error:r}]};l.useImageSize=E;(function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.useImageSize=i.getImageSize=void 0;var o=c;Object.defineProperty(i,"getImageSize",{enumerable:!0,get:function(){return o.getImageSize}});var e=l;Object.defineProperty(i,"useImageSize",{enumerable:!0,get:function(){return e.useImageSize}})})(S);const R=()=>{const i=I(),o=v();y(i.breakpoints.down("sm"));const e=w();return console.log("mam",e.idempotencyKey),_.useEffect(()=>{e==null||e.setCurrentStep(0)},[]),b(h,{accept:{"image/jpeg":[],"image/png":[],".pdf":[]},onUpload:async a=>{const t=URL.createObjectURL(a),{width:r,height:m}=await S.getImageSize(t);e==null||e.setUploaded(d=>({...d,doc:t,image:{src:a,width:r,height:m},dataFile:a})),o(U(e.activeTab,1))},theme:i,title:"PNG, JPEG files are supported"})};export{R as default};
