(()=>{"use strict";document.addEventListener("DOMContentLoaded",(()=>{fetch("https://ubrnopsjlvwleakngnmr.supabase.co/rest/v1/todos",{headers:{apiKey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODE5MjQ4MSwiZXhwIjoxOTUzNzY4NDgxfQ.3JdQW11rNZNpvcehhwFVaofXL2agE5LDn_3O4BvSAHw"}}).then((e=>e.json())).then((e=>{e.forEach((e=>t(e)))}))}));const e=e=>{const t=+e.target.id.split("-").pop(),n=e.target.checked;e.preventDefault(),fetch("https://ubrnopsjlvwleakngnmr.supabase.co/rest/v1/todos?id=eq."+t,{method:"PATCH",headers:{"Content-Type":"application/json",apiKey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODE5MjQ4MSwiZXhwIjoxOTUzNzY4NDgxfQ.3JdQW11rNZNpvcehhwFVaofXL2agE5LDn_3O4BvSAHw",Prefer:"return=representation"},body:JSON.stringify({done:n})}).then((()=>{e.target.checked=n}))},t=t=>{document.querySelector("ul").insertAdjacentHTML("beforeend",`\n        <li>\n            <label>\n                <input type="checkbox" id="todo-${t.id}" ${t.done?"checked":""} /> \n                ${t.text}\n            </label>\n        </li>\n    `),document.querySelector("input#todo-"+t.id).addEventListener("click",e)};document.querySelector("form").addEventListener("submit",(e=>{e.preventDefault();const n=document.querySelector('input[name="todo-text"]'),o={text:n.value,done:!1};fetch("https://ubrnopsjlvwleakngnmr.supabase.co/rest/v1/todos",{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json",apiKey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODE5MjQ4MSwiZXhwIjoxOTUzNzY4NDgxfQ.3JdQW11rNZNpvcehhwFVaofXL2agE5LDn_3O4BvSAHw",Prefer:"return=representation"}}).then((e=>e.json())).then((e=>{t(e[0]),n.value="",n.focus()}))}))})();