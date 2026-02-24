function interview(id) {
     const apl1 = document.getElementById(id);
     apl1.innerText = "Interview";

}
function rejected(id) {
    const apl1 = document.getElementById(id);
    apl1.innerText = "Rejected";

}
function interViewCnt(id) {
    if (!intList.includes(id)) {
        const apl1 = document.getElementById('int-cnt');
        let cnt = Number(apl1.innerText); 
        cnt = cnt + 1;
        console.log(cnt);
        if(cnt > 8) cnt = 8;
        apl1.innerText = cnt;
    }
    
}
function rejectCnt() {
    const apl1 = document.getElementById('rejecti');
    let cnt = Number(apl1.innerText); 
    cnt = cnt + 1;
    console.log(cnt);
    if(cnt > 8) cnt = 8;
    apl1.innerText = cnt;
}
function showOnly(section_id , cnt_id) {
    if(section_id == 'all-jobs') {
        const main = document.getElementById('all-jobs');
        main.classList.remove("hidden");
        const p = document.getElementById('interview-btn');
        p.classList.add("hidden");
        const r = document.getElementById('interview');
        r.classList.add("hidden");
        const q = document.getElementById('reject');
        q.classList.add("hidden");
    }
    else {
        const curr = Number(document.getElementById(cnt_id).innerText);
       
        const main = document.getElementById('all-jobs');
        main.classList.add("hidden");
        if(section_id == 'interview') {
            const p = document.getElementById('reject');
            p.classList.add("hidden");
            if(curr == 0) {
                const r = document.getElementById('interview-btn');
                 r.classList.add("hidden");
                const p = document.getElementById('interview-btn');
                p.classList.remove("hidden");
            }
            else {
                const r = document.getElementById('interview-btn');
                 r.classList.add("hidden");
                const p = document.getElementById('interview');
                p.classList.remove("hidden");
            }
        } 
        else if(section_id == 'reject') {
            const p = document.getElementById('interview');
            p.classList.add("hidden");
            if(curr == 0) {
                const p = document.getElementById('interview-btn');
                p.classList.remove("hidden");
            }
            else {
                const p = document.getElementById('reject');
                p.classList.remove("hidden");
            }
        }
    }
    
}
function jobsAvailable() {
    const curr = document.getElementById('int-cnt');
    const cnt_job = curr.innerText;
    const curri = document.getElementById('curr-job');
    const eli = document.getElementById('tot');
    const v = eli.innerText;
    curri.innerText = cnt_job + " of " + v + " Jobs";

}
function jobsRejected() {
    const curr = document.getElementById('rejecti');
    const cnt_job = curr.innerText;
    const eli = document.getElementById('tot');
    const v = eli.innerText;
    const curri = document.getElementById('curr-job');
    curri.innerText = cnt_job + " of " + v + " Jobs";

}
function jobs() {
    const curri = document.getElementById('curr-job');
    const eli = document.getElementById('tot');
    const v = eli.innerText;
    curri.innerText =  v + " Jobs";
}
const intList = [];
const reList = [];

function addEvent(id) {

    if (!intList.includes(id)) {
         const jobDiv = document.getElementById(id);
        if (!jobDiv) return;

        const clone = jobDiv.cloneNode(true);

        clone.removeAttribute("id");
        const interviewSection = document.getElementById('interview');
        interviewSection.appendChild(clone);
        interviewSection.classList.remove("hidden");

        intList.push(id);
    }
}

function addReject(id) {

    if (!reList.includes(id)) {

        const jobDiv = document.getElementById(id);
        if (!jobDiv) return;
        const clone = jobDiv.cloneNode(true);
        clone.removeAttribute("id");
        const rejectSection = document.getElementById('reject');
        rejectSection.appendChild(clone);
        rejectSection.classList.remove("hidden");

        reList.push(id);
    }
}
function remove(id) {
    const div = document.getElementById(id);
    div.parentNode.removeChild(div);
}
function jobReduce(id) {
    const el = document.getElementById("curr-job"); 
    const text = el.innerText;                       
    let number = Number(text.split(" ")[0]);        
    number = number - 1;                             
    el.innerText = number + " Jobs";                 
    const eli = document.getElementById('tot');
    eli.innerText = number;
}