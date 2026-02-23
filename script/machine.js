function interview(id) {
     const apl1 = document.getElementById(id);
     apl1.innerText = "Interview";

}
function rejected(id) {
    const apl1 = document.getElementById(id);
    apl1.innerText = "Rejected";

}
function interViewCnt() {
    const apl1 = document.getElementById('int-cnt');
    let cnt = Number(apl1.innerText); 
    cnt = cnt + 1;
    console.log(cnt);
    if(cnt > 8) cnt = 8;
    apl1.innerText = cnt;
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
        console.log(curr);
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
    curri.innerText = cnt_job + " of " + 8 + " Jobs";

}
function jobsRejected() {
    const curr = document.getElementById('rejecti');
    const cnt_job = curr.innerText;
    const curri = document.getElementById('curr-job');
    curri.innerText = cnt_job + " of " + 8 + " Jobs";

}
function jobs() {
    const curri = document.getElementById('curr-job');
    curri.innerText =  8 + " Jobs";
}
function addEvent(id) {
    
    const jobDiv = document.getElementById(id);
    const clone = jobDiv.cloneNode(true); // deep clone including child nodes
    const container = document.getElementById('interview');
    container.appendChild(clone); // show the clone in interview section
    container.classList.remove("hidden"); // show the section
    // const inteview_btni = document.getElementById('interview-btn');
    // inteview_btni.classList.add("hidden");
    
   

}
function addReject(id) {
    const jobDiv = document.getElementById(id);
    const clone = jobDiv.cloneNode(true); // deep clone including child nodes
    const container = document.getElementById('reject');
    container.appendChild(clone); // show the clone in interview section
    container.classList.remove("hidden");
    // const inteview_btni = document.getElementById('reject-btn');
    // inteview_btni.classList.add("hidden");
}