import{C as s,D as t}from"../index84476.js";const e=s(),n=()=>e.hideLoader(),i=()=>e.showLoader(),c=function(r,a){let o="";a.data&&a.data.errors?o=Object.values(a.data.errors).join(`
`):a.data.error?o=a.data.error:a.data.info&&(o=a.data.info),t(r,{message:o,error:!0})};export{c as e,n as h,i as s};
