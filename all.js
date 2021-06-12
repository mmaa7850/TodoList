const txt = document.querySelector(".txt");
const add = document.querySelector(".addList");
const ul = document.querySelector(".ul");
const formFooter = document.querySelector(".form-footer");


let data = [];

// list function
function renderData() {
    let list = "";    
    data.forEach(function (item, index) {
        let undoneHtml = `<li><div value="checkbox" class="checkbox" data-num=${index}><div class="icons"><i class="fas fa-check" data-num=${index}></i></div></div><h2 class="h2">${item.content}</h2><img data-num=${index} class="delete" src="https://hexschool.github.io/js-todo/assets/cancel.jpg" ></li>`;
        let doneHtml = `<li><div value="checkbox" class="checkbox checkboxDone" data-num=${index}><div class="icons"><i class="fas fa-check" data-num=${index}></i></div></div><h2 class="h2 h2Done">${item.content}</h2><img data-num=${index} class="delete" src="https://hexschool.github.io/js-todo/assets/cancel.jpg" ></li>`;
        if(item.status == false){
            list += undoneHtml;
        }
        else{
            list += doneHtml;
        }
        
    });
    ul.innerHTML = list;
    
}


// 點擊增加
add.addEventListener("click", function (e) {
    if (txt.value == "") {
        alert("請輸入內容");
        return;
    }
    let obj = {};
    obj.content = txt.value;
    obj.status = false;
    data.push(obj);
    renderData();
    txt.value = "";
    unfinished();
    addFunction();
    removeFunction();
    switchUnderLine();
})

// 計算待辦事項
function unfinished() {
    let unfinished = 0;
    let formfooter = "";
    data.forEach(function (item, index) {
        if (item.status == false) {
            unfinished += 1;
        }
        formfooter = `<p>${unfinished}個待完成項目</p><input type="button" class="clear" value="清除已完成項目">`;
    })
    // 加入formfooter HTML

    formFooter.innerHTML = formfooter;
}

// 刪除待辦事項
ul.addEventListener("click", function (e) {
    if (e.target.getAttribute("class") !== "delete") {
        return;
    }
    let num = e.target.getAttribute("data-num");
    delData = data.splice(num, 1);
    renderData();
    unfinished();
    switchUnderLine();
})

// 清除已完成事項
const clear = document.querySelector(".clear");

formFooter.addEventListener("click", function (e) {
    
    if (e.target.getAttribute("class") !== "clear") {
        return;
    }   
    data.forEach(function (item, index) {
        if (item.status == true) {
            data.splice(index, 1);
            
        }
        
    });
    renderData();
    switchUnderLine();
})

// 增加class
function addFunction() {
    ul.addEventListener("click", function (e) {
        
        if (e.target.getAttribute("value") !== "checkbox") {
            return;
        }
        else {
            let num = e.target.getAttribute("data-num");
            let checkbox = document.getElementsByClassName("checkbox")[num];
            let h2 = document.getElementsByClassName("h2")[num];
            checkbox.classList.add("checkboxDone");
            h2.classList.add("h2Done");
            
            data[num].status = true;
        }
        unfinished();
    })
    // <div class="checkbox" data-num="2"></div>
    // <h2>整理電腦資料夾</h2>
    
}

// 減少class
function removeFunction() {
    ul.addEventListener("click", function (e) {
        
        if (e.target.getAttribute("class") !== "fas fa-check") {
            return;
        }
        let num = e.target.getAttribute("data-num");
        let checkbox = document.getElementsByClassName("checkbox")[num];
        let h2 = document.getElementsByClassName("h2")[num];
        checkbox.classList.remove("checkboxDone");
        h2.classList.remove("h2Done");
        data[num].status = false;
        unfinished();
    })
    
}



// 選擇項目
const all = document.querySelector(".all");
const undone = document.querySelector(".undone");
const done = document.querySelector(".done");

all.addEventListener("click", function(e){
    renderData();
})

// 選擇項目效果
function switchUnderLine(){
    const progress = document.querySelector(".progress");
            all.classList.add("underline");
            undone.classList.remove("underline");
            done.classList.remove("underline");
    progress.addEventListener("click", function(e){
        if(e.target.getAttribute("class") == "all"){
            all.classList.add("underline");
            undone.classList.remove("underline");
            done.classList.remove("underline"); 
        }
        else if(e.target.getAttribute("class") == "undone"){
            all.classList.remove("underline");
            undone.classList.add("underline");
            done.classList.remove("underline");
        }
        else if(e.target.getAttribute("class") == "done"){
            all.classList.remove("underline");
            undone.classList.remove("underline");
            done.classList.add("underline");
        }
    })
}
switchUnderLine();

undone.addEventListener("click", function(e){
    let list = "";    
    data.forEach(function (item, index) {
        let undoneHtml = `<li><div value="checkbox" class="checkbox" data-num=${index}><div class="icons"><i class="fas fa-check" data-num=${index}></i></div></div><h2 class="h2">${item.content}</h2><img data-num=${index} class="delete" src="https://hexschool.github.io/js-todo/assets/cancel.jpg" ></li>`;
        let doneHtml = `<li class="none"><div value="checkbox" class="checkbox checkboxDone" data-num=${index}><div class="icons"><i class="fas fa-check" data-num=${index}></i></div></div><h2 class="h2 h2Done">${item.content}</h2><img data-num=${index} class="delete" src="https://hexschool.github.io/js-todo/assets/cancel.jpg" ></li>`;
        if(item.status == false){
            list += undoneHtml;
        }
        else{
            list += doneHtml;
        }
    });
    ul.innerHTML = list;
    
})

done.addEventListener("click", function(e){
    let list = "";    
    data.forEach(function (item, index) {
        let undoneHtml = `<li class="none"><div value="checkbox" class="checkbox" data-num=${index}><div class="icons"><i class="fas fa-check" data-num=${index}></i></div></div><h2 class="h2">${item.content}</h2><img data-num=${index} class="delete" src="https://hexschool.github.io/js-todo/assets/cancel.jpg" ></li>`;
        let doneHtml = `<li><div value="checkbox" class="checkbox checkboxDone" data-num=${index}><div class="icons"><i class="fas fa-check" data-num=${index}></i></div></div><h2 class="h2 h2Done">${item.content}</h2><img data-num=${index} class="delete" src="https://hexschool.github.io/js-todo/assets/cancel.jpg" ></li>`;
        if(item.status == true){
            list += doneHtml;
        }
        else{
            list += undoneHtml;
        }
    });
    ul.innerHTML = list;
    
})
