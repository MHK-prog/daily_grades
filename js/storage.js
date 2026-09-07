const STORAGE_KEY='class_manager_daily_v8';
const OLD_KEYS=['class_manager_daily_v7','class_manager_daily_v6','offline_class_grades_v3'];
function uid(){return 's'+Date.now().toString(36)+Math.random().toString(36).slice(2)}
function emptyRecord(){return {attendance:{present:false,delay:0},scores:{},notes:''}}
function loadState(){try{let x=JSON.parse(localStorage.getItem(STORAGE_KEY)||'null');if(x?.classes?.length)return x;for(const key of OLD_KEYS){let old=JSON.parse(localStorage.getItem(key)||'null');if(old?.classes?.length){const migrated={selected:old.selected||old.selectedClassId||old.classes[0].id,classes:old.classes.map(c=>({id:c.id,name:c.name||'کلاس',students:(c.students||[]).map(s=>({id:s.id,name:s.name||s.fullName||'بدون نام',records:s.records||{}}))})));localStorage.setItem(STORAGE_KEY,JSON.stringify(migrated));return migrated}}}catch(e){}return{selected:null,classes:[]}}
function saveState(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}
