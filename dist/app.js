(()=>{"use strict";document.addEventListener("DOMContentLoaded",(()=>{fetch("https://ubrnopsjlvwleakngnmr.supabase.co/rest/v1/todos",{headers:{apiKey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODE5MjQ4MSwiZXhwIjoxOTUzNzY4NDgxfQ.3JdQW11rNZNpvcehhwFVaofXL2agE5LDn_3O4BvSAHw"}}).then((e=>e.json())).then((t=>{t.forEach((t=>e(t)))}))}));const e=e=>{document.querySelector("ul").insertAdjacentHTML("beforeend",`\n        <li>\n            <label>\n                <input type="checkbox" id="${e.id}" ${e.done?"checked":""} /> \n                ${e.text}\n            </label>\n        </li>\n    `)};document.querySelector("form").addEventListener("submit",(t=>{t.preventDefault();const n=document.querySelector('input[name="todo-text"]'),o={text:n.value,done:!1};fetch("https://ubrnopsjlvwleakngnmr.supabase.co/rest/v1/todos",{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json",apiKey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODE5MjQ4MSwiZXhwIjoxOTUzNzY4NDgxfQ.3JdQW11rNZNpvcehhwFVaofXL2agE5LDn_3O4BvSAHw",Prefer:"return=representation"}}).then((e=>e.json())).then((t=>{e(t[0]),n.value="",n.focus()}))}))})();