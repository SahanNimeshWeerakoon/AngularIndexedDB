window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

if(!window.indexedDB){
    alert("Your browser doesnt support indexed DB");
} else {
    var db;
    var request = window.indexedDB.open("codetodo", 1); // version number = 1
    request.onerror = function(e) {
        console.log(`error ${e.target.result}`);
    }
    request.onsuccess = function(e) {
        db = request.result;
        console.log("success" + db);
    }
    request.onupgradeneeded = function(e){
        let db = e.target.result;
        let objectStore = db.createObjectStore("CodeToDo");
    }
}
