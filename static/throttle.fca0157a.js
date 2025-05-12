let e;const l=(t,o=5e3,s=!0)=>{s?e||(e=!0,typeof t=="function"&&t(),setTimeout(()=>{e=!1},o)):e||(e=!0,setTimeout(()=>{e=!1,typeof t=="function"&&t()},o))};export{l as t};
