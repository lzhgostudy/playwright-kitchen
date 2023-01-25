import{r as N,b as n,o as O,c as B,d as a,w as s,_ as R,a as x,u as o,e,f as c,p as j,g as z,h as _,i as C,j as m,k as f,l as h,m as g}from"./app.04572752.js";const v=D=>(j("data-v-4e98d927"),D=D(),z(),D),H=v(()=>c("h1",{id:"actions",tabindex:"-1"},[e("Actions "),c("a",{class:"header-anchor",href:"#actions","aria-hidden":"true"},"#")],-1)),L=v(()=>c("p",null,[e("Playwright can interact with "),c("code",null,"Element-plus"),e(" input elements such as text inputs, checkboxes, radio buttons, select options, mouse clicks, type characters, keys and shortcuts as well as upload files and focus elements.")],-1)),Z=v(()=>c("h2",{id:"form-fill",tabindex:"-1"},[e("Form fill "),c("a",{class:"header-anchor",href:"#form-fill","aria-hidden":"true"},"#")],-1)),M=x("",5),J=v(()=>c("span",{class:"demonstration"},"hover to trigger",-1)),G={class:"el-dropdown-link","data-pw":"hover"},K=v(()=>c("span",{class:"demonstration"},"click to trigger",-1)),Q={class:"el-dropdown-link","data-pw":"click"},W=v(()=>c("span",{class:"demonstration"},"right click to trigger",-1)),X={class:"el-dropdown-link","data-pw":"right-click"},Y=x("",1),ta=JSON.parse('{"title":"Actions","description":"","frontmatter":{},"headers":[{"level":2,"title":"Form fill","slug":"form-fill","link":"#form-fill","children":[]},{"level":2,"title":"Mouse click","slug":"mouse-click","link":"#mouse-click","children":[]}],"relativePath":"python/guides/actions.md"}'),$={name:"python/guides/actions.md"},aa=Object.assign($,{setup(D){const t=N({input:"",datePicker:"",timePicker:"",datetimePicker:"",switch:!1,checkbox:[],radio:"",select:"",textarea:""});return(sa,l)=>{const k=n("el-input"),r=n("el-form-item"),b=n("el-date-picker"),P=n("el-time-picker"),V=n("el-switch"),F=n("el-checkbox"),T=n("el-checkbox-group"),w=n("el-radio"),S=n("el-radio-group"),E=n("el-option"),q=n("el-select"),I=n("el-form"),i=n("el-icon"),p=n("el-dropdown-item"),y=n("el-dropdown-menu"),A=n("el-dropdown"),u=n("el-col"),U=n("el-row");return O(),B("div",null,[H,L,Z,a(I,{model:t.value,"label-width":"120px"},{default:s(()=>[a(r,{label:"Text input"},{default:s(()=>[a(k,{modelValue:t.value.input,"onUpdate:modelValue":l[0]||(l[0]=d=>t.value.input=d),placeholder:"Please input"},null,8,["modelValue"])]),_:1}),a(r,{label:"Date picker"},{default:s(()=>[a(b,{modelValue:t.value.datePicker,"onUpdate:modelValue":l[1]||(l[1]=d=>t.value.datePicker=d),type:"date",placeholder:"Pick a day"},null,8,["modelValue"])]),_:1}),a(r,{label:"Time picker"},{default:s(()=>[a(P,{modelValue:t.value.timePicker,"onUpdate:modelValue":l[2]||(l[2]=d=>t.value.timePicker=d),placeholder:"Pick time"},null,8,["modelValue"])]),_:1}),a(r,{label:"Datetime picker"},{default:s(()=>[a(b,{modelValue:t.value.datetimePicker,"onUpdate:modelValue":l[3]||(l[3]=d=>t.value.datetimePicker=d),type:"datetime",placeholder:"Select date and time"},null,8,["modelValue"])]),_:1}),a(r,{label:"Switch"},{default:s(()=>[a(V,{modelValue:t.value.switch,"onUpdate:modelValue":l[4]||(l[4]=d=>t.value.switch=d)},null,8,["modelValue"])]),_:1}),a(r,{label:"Checkbox"},{default:s(()=>[a(T,{modelValue:t.value.checkbox,"onUpdate:modelValue":l[5]||(l[5]=d=>t.value.checkbox=d)},{default:s(()=>[a(F,{label:"Online activities",name:"type"}),a(F,{label:"Promotion activities",name:"type"}),a(F,{label:"Offline activities",name:"type"}),a(F,{label:"Simple brand exposure",name:"type"})]),_:1},8,["modelValue"])]),_:1}),a(r,{label:"Radio"},{default:s(()=>[a(S,{modelValue:t.value.radio,"onUpdate:modelValue":l[6]||(l[6]=d=>t.value.radio=d)},{default:s(()=>[a(w,{label:"Sponsor"}),a(w,{label:"Venue"})]),_:1},8,["modelValue"])]),_:1}),a(r,{label:"Select"},{default:s(()=>[a(q,{modelValue:t.value.select,"onUpdate:modelValue":l[7]||(l[7]=d=>t.value.select=d),placeholder:"please select your zone"},{default:s(()=>[a(E,{label:"Zone one",value:"shanghai"}),a(E,{label:"Zone two",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),a(r,{label:"Textarea"},{default:s(()=>[a(k,{modelValue:t.value.textarea,"onUpdate:modelValue":l[8]||(l[8]=d=>t.value.textarea=d),type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),M,a(U,{class:"block-col-2"},{default:s(()=>[a(u,{span:8},{default:s(()=>[J,a(A,null,{dropdown:s(()=>[a(y,null,{default:s(()=>[a(p,{icon:o(_)},{default:s(()=>[e("Action 1")]),_:1},8,["icon"]),a(p,{icon:o(C)},{default:s(()=>[e(" Action 2 ")]),_:1},8,["icon"]),a(p,{icon:o(m)},{default:s(()=>[e("Action 3")]),_:1},8,["icon"]),a(p,{icon:o(f)},{default:s(()=>[e("Action 4")]),_:1},8,["icon"]),a(p,{icon:o(h)},{default:s(()=>[e("Action 5")]),_:1},8,["icon"])]),_:1})]),default:s(()=>[c("span",G,[e(" Dropdown List"),a(i,{class:"el-icon--right"},{default:s(()=>[a(o(g))]),_:1})])]),_:1})]),_:1}),a(u,{span:8},{default:s(()=>[K,a(A,{trigger:"click"},{dropdown:s(()=>[a(y,null,{default:s(()=>[a(p,{icon:o(_)},{default:s(()=>[e("Action 1")]),_:1},8,["icon"]),a(p,{icon:o(C)},{default:s(()=>[e(" Action 2 ")]),_:1},8,["icon"]),a(p,{icon:o(m)},{default:s(()=>[e("Action 3")]),_:1},8,["icon"]),a(p,{icon:o(f)},{default:s(()=>[e("Action 4")]),_:1},8,["icon"]),a(p,{icon:o(h)},{default:s(()=>[e("Action 5")]),_:1},8,["icon"])]),_:1})]),default:s(()=>[c("span",Q,[e(" Dropdown List"),a(i,{class:"el-icon--right"},{default:s(()=>[a(o(g))]),_:1})])]),_:1})]),_:1}),a(u,{span:8},{default:s(()=>[W,a(A,{trigger:"contextmenu"},{dropdown:s(()=>[a(y,null,{default:s(()=>[a(p,{icon:o(_)},{default:s(()=>[e("Action 1")]),_:1},8,["icon"]),a(p,{icon:o(C)},{default:s(()=>[e(" Action 2 ")]),_:1},8,["icon"]),a(p,{icon:o(m)},{default:s(()=>[e("Action 3")]),_:1},8,["icon"]),a(p,{icon:o(f)},{default:s(()=>[e("Action 4")]),_:1},8,["icon"]),a(p,{icon:o(h)},{default:s(()=>[e("Action 5")]),_:1},8,["icon"])]),_:1})]),default:s(()=>[c("span",X,[e(" Dropdown List"),a(i,{class:"el-icon--right"},{default:s(()=>[a(o(g))]),_:1})])]),_:1})]),_:1})]),_:1}),Y])}}}),la=R(aa,[["__scopeId","data-v-4e98d927"]]);export{ta as __pageData,la as default};
