// STORAGE
const Storage = {
    save: (data) => localStorage.setItem("tasks", JSON.stringify(data)),
    load: () => JSON.parse(localStorage.getItem("tasks")) || []
};

// TASK MANAGER
const TaskManager = (() => {

    let tasks = Storage.load();

    const save = () => Storage.save(tasks);

    const add = (t) => { tasks.push(t); save(); };

    const update = (id, data) => {
        const t = tasks.find(x=>x.id===id);
        Object.assign(t,data);
        save();
    };

    const all = () => tasks;

    const frog = () =>
        tasks.filter(t=>!t.done)
        .sort((a,b)=>a.priority==="high"?-1:1)[0];

    return {add,update,all,frog};

})();

// UI
const UI = (() => {

    const view = document.getElementById("view");

    function renderKanban(){
        const t = TaskManager.all();

        view.innerHTML = `
        <div class="kanban">
            ${col("todo","A Fazer",t)}
            ${col("doing","Fazendo",t)}
            ${col("done","Feito",t)}
        </div>`;

        drag();
        frog();
    }

    function col(status,name,tasks){
        const list = tasks.filter(t=>t.status===status);
        return `
        <div class="column" data-status="${status}">
        <h3>${name} (${list.length})</h3>
        ${list.map(card).join("")}
        </div>`;
    }

    function card(t){
        return `
        <div class="task ${t.priority} ${t.done?"done":""}"
        draggable="true" data-id="${t.id}">
        <b>${t.title}</b>
        <div>${t.time||""}</div>
        </div>`;
    }

    function frog(){
        const f = TaskManager.frog();
        document.getElementById("frog").innerText =
            f ? "🐸 "+f.title : "";
    }

    function drag(){
        document.querySelectorAll(".task").forEach(el=>{
            el.ondragstart=e=>{
                e.dataTransfer.setData("id",el.dataset.id);
            }
        });

        document.querySelectorAll(".column").forEach(col=>{
            col.ondragover=e=>e.preventDefault();

            col.ondrop=e=>{
                const id=e.dataTransfer.getData("id");
                const status=col.dataset.status;

                if(status==="doing"){
                    const count=TaskManager.all()
                    .filter(t=>t.status==="doing").length;
                    if(count>=3) return alert("Limite 3");
                }

                TaskManager.update(id,{status});
                renderKanban();
            }
        });
    }

    function renderMatrix(){
        const t = TaskManager.all();

        view.innerHTML=`
        <div class="matrix">
            ${quad("Q1","Fazer",filterQ1(t))}
            ${quad("Q2","Agendar",filterQ2(t))}
            ${quad("Q3","Delegar",filterQ3(t))}
            ${quad("Q4","Eliminar",filterQ4(t))}
        </div>`;
    }

    function quad(title,name,list){
        return `<div class="quad"><h3>${name} (${list.length})</h3>
        ${list.map(card).join("")}</div>`;
    }

    function urgency(t){
        if(!t.due) return false;
        return new Date(t.due)-Date.now()<86400000;
    }

    function filterQ1(t){return t.filter(x=>x.priority==="high"&&urgency(x))}
    function filterQ2(t){return t.filter(x=>x.priority==="high"&&!urgency(x))}
    function filterQ3(t){return t.filter(x=>x.priority!=="high"&&urgency(x))}
    function filterQ4(t){return t.filter(x=>x.priority!=="high"&&!urgency(x))}

    function renderPomodoro(){
        view.innerHTML=`
        <div class="pomodoro">
        <div class="circle">
        <svg width="200" height="200">
        <circle cx="100" cy="100" r="90"
        stroke="#eee" stroke-width="10" fill="none"/>
        <circle id="prog" cx="100" cy="100" r="90"
        stroke="#E5484D" stroke-width="10"
        fill="none" stroke-dasharray="565"
        stroke-dashoffset="565"/>
        </svg>
        </div>
        <div class="time" id="time">25:00</div>
        <button onclick="Pomodoro.start()">Start</button>
        </div>`;
    }

    return {renderKanban,renderMatrix,renderPomodoro};

})();

// POMODORO
const Pomodoro = (() => {

    let time=1500,interval;

    function start(){
        interval=setInterval(()=>{
            time--;
            update();
            if(time<=0) clearInterval(interval);
        },1000);
    }

    function update(){
        const t=document.getElementById("time");
        if(!t) return;

        let m=Math.floor(time/60);
        let s=time%60;
        t.innerText=`${m}:${s<10?"0":""}${s}`;

        const circle=document.getElementById("prog");
        const offset=565-(565*(1500-time)/1500);
        circle.style.strokeDashoffset=offset;
    }

    return {start};

})();

// ROUTER
document.querySelectorAll("nav button").forEach(btn=>{
    btn.onclick=()=>{
        const v=btn.dataset.view;
        if(v==="kanban") UI.renderKanban();
        if(v==="matrix") UI.renderMatrix();
        if(v==="pomodoro") UI.renderPomodoro();
    };
});

// ADD TASK
document.getElementById("add").onclick=()=>{
    const title=document.getElementById("title").value;
    if(!title) return;

    TaskManager.add({
        id:Date.now()+"",
        title,
        priority:document.getElementById("priority").value,
        due:document.getElementById("date").value,
        time:document.getElementById("time").value,
        status:"todo",
        done:false,
        subtasks:[]
    });

    UI.renderKanban();
};

// INIT
UI.renderKanban();