import{n as x,b as o,o as V,c as k,d as e,w as l,f as p,e as i,a as w}from"./app.f6bb53e8.js";const E=p("h1",{id:"locators",tabindex:"-1"},[i("Locators "),p("a",{class:"header-anchor",href:"#locators","aria-hidden":"true"},"#")],-1),S=p("p",null,"Locators are the central piece of Playwright's auto-waiting and retry-ability. In a nutshell, locators represent a way to find elements on the page at any moment.",-1),T=p("h2",{style:{"text-align":"center"}},"Form",-1),U=p("span",{class:"text-gray-500"},"-",-1),P=w("",12),q=JSON.parse('{"title":"Locators","description":"","frontmatter":{},"headers":[{"level":2,"title":".get_by_role()","slug":"get-by-role","link":"#get-by-role","children":[]},{"level":2,"title":".get_by_label()","slug":"get-by-label","link":"#get-by-label","children":[]},{"level":2,"title":".get_by_placeholder()","slug":"get-by-placeholder","link":"#get-by-placeholder","children":[]},{"level":2,"title":".get_by_text()","slug":"get-by-text","link":"#get-by-text","children":[]},{"level":2,"title":".get_by_alt_text()","slug":"get-by-alt-text","link":"#get-by-alt-text","children":[]},{"level":2,"title":"Locate by CSS","slug":"locate-by-css","link":"#locate-by-css","children":[]}],"relativePath":"guides/locators.md"}'),N={name:"guides/locators.md"},I=Object.assign(N,{setup(L){const a=x({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),_="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",u=()=>{console.log("submit!")};return(O,s)=>{const b=o("el-image"),n=o("el-form-item"),d=o("el-input"),y=o("el-option"),g=o("el-select"),m=o("el-date-picker"),r=o("el-col"),h=o("el-time-picker"),A=o("el-switch"),c=o("el-checkbox"),f=o("el-checkbox-group"),F=o("el-radio"),C=o("el-radio-group"),D=o("el-button"),v=o("el-form");return V(),k("div",null,[E,S,T,e(v,{model:a,"label-width":"120px"},{default:l(()=>[e(n,{"label-width":"0"},{default:l(()=>[e(b,{style:{"max-width":"100%"},src:_,fit:"contain",alt:"bird"})]),_:1}),e(n,{label:"Activity name"},{default:l(()=>[e(d,{modelValue:a.name,"onUpdate:modelValue":s[0]||(s[0]=t=>a.name=t)},null,8,["modelValue"])]),_:1}),e(n,{label:"Activity zone"},{default:l(()=>[e(g,{modelValue:a.region,"onUpdate:modelValue":s[1]||(s[1]=t=>a.region=t),placeholder:"please select your zone"},{default:l(()=>[e(y,{label:"Zone one",value:"shanghai"}),e(y,{label:"Zone two",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"Activity time"},{default:l(()=>[e(r,{span:11},{default:l(()=>[e(m,{modelValue:a.date1,"onUpdate:modelValue":s[2]||(s[2]=t=>a.date1=t),type:"date",placeholder:"Pick a date",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),e(r,{span:2,style:{"text-align":"center"}},{default:l(()=>[U]),_:1}),e(r,{span:11},{default:l(()=>[e(h,{modelValue:a.date2,"onUpdate:modelValue":s[3]||(s[3]=t=>a.date2=t),placeholder:"Pick a time",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{label:"Instant delivery"},{default:l(()=>[e(A,{modelValue:a.delivery,"onUpdate:modelValue":s[4]||(s[4]=t=>a.delivery=t)},null,8,["modelValue"])]),_:1}),e(n,{label:"Activity type"},{default:l(()=>[e(f,{modelValue:a.type,"onUpdate:modelValue":s[5]||(s[5]=t=>a.type=t)},{default:l(()=>[e(c,{label:"Online activities",name:"type"}),e(c,{label:"Promotion activities",name:"type"}),e(c,{label:"Offline activities",name:"type"}),e(c,{label:"Simple brand exposure",name:"type"})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"Resources"},{default:l(()=>[e(C,{modelValue:a.resource,"onUpdate:modelValue":s[6]||(s[6]=t=>a.resource=t)},{default:l(()=>[e(F,{label:"Sponsor"}),e(F,{label:"Venue"})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"Activity details"},{default:l(()=>[e(d,{modelValue:a.desc,"onUpdate:modelValue":s[7]||(s[7]=t=>a.desc=t),placeholder:"Enter details",type:"textarea"},null,8,["modelValue"])]),_:1}),e(n,null,{default:l(()=>[e(D,{type:"primary",onClick:u},{default:l(()=>[i("Create")]),_:1}),e(D,null,{default:l(()=>[i("Cancel")]),_:1})]),_:1})]),_:1},8,["model"]),P])}}});export{q as __pageData,I as default};