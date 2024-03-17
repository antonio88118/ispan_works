const btnPrevDate = document.querySelector(".btn-prevDate");
const btnNextDate = document.querySelector(".btn-nextDate");
const myDate = document.querySelector(".myDate");
const btnAddShow = document.querySelector(".btn-addShow");
const newSet = document.querySelector(".newSet");
const updateSet = document.querySelector(".updateSet");
const bsOffcanvas = new bootstrap.Offcanvas("#inputArea");
const form = document.querySelector("form")
const btnSend = document.querySelector(".btn-send");
const btnUpdate = document.querySelector(".btn-update");
const btnDel = document.querySelector(".btn-del");
// .list雖然是未來產生，但每次更新資料會重新載入頁面，因此可以使用
const lists = document.querySelectorAll(".list");

myDate.addEventListener("change", (e) => {
    let date =  e.currentTarget.value;
    window.location.href = `/expense/d/${date}`;
});

btnPrevDate.addEventListener("click", (e) => {
    // 純js日期加減&設定，先把字串轉為日期格式
    let date = new Date(myDate.value);
    date.setDate(date.getDate() - 1);
    // 2024-01-13T00:00:00.000Z，split()從T開始切割字串，並取第一組[0]字串2024-01-13
    let isoString =  date.toISOString().split("T")[0];
    window.location.href = `/expense/d/${isoString}`;
});

btnNextDate.addEventListener("click", (e) => {
    // 純js日期加減&設定，先把字串轉為日期格式
    let date = new Date(myDate.value);
    date.setDate(date.getDate() + 1);
    // 2024-01-13T00:00:00.000Z
    let isoString =  date.toISOString().split("T")[0];
    window.location.href = `/expense/d/${isoString}`;
});

btnAddShow.addEventListener("click", (e) => {
    document.querySelector("[name=title]").value = "";
    document.querySelector("[name=money]").value = "";
    document.querySelector("[name=id]").value = "";
    document.querySelector("select").selectedIndex = 0;
    newSet.classList.remove("d-none");
    newSet.classList.add("d-flex");
    updateSet.classList.add("d-none");
    updateSet.classList.remove("d-flex");
    bsOffcanvas.show();
});

btnSend.addEventListener("click", (e)=>{
    // 未填入必須資訊時，不允許送出
    if(document.querySelector("[name=title]").value === ""){
        return false;
    }
    if(document.querySelector("[name=money]").value === ""){
        return false;
    }
    if(document.querySelector("select").selectedIndex === 0){
        return false;
    }
    form.submit();
});

btnUpdate.addEventListener("click", (e)=>{
    let url = "/expense";
    const form = document.querySelector("form");
    // 表單資料中的欄位/值建立相對應的的鍵/值對（key/value）集合
    const formData = new FormData(form);

    fetch(url, {
        method: "PUT",
        body: formData
    }).then(response => {
        return response.json();
    }).then(result => {
        // 需要的話會在這裡轉換response格式
        console.log(result);
        if(result.returnNum === 1){
            let date = myDate.value;
            window.location.href = `/expense/d/${date}`;
        }
    }).catch(error => {
        console.log(error);
    });
})

btnDel.addEventListener("click", (e) => {
    let url = "/expense";
    const form = document.querySelector("form");
    const formData = new FormData(form);
    fetch(url, {
        method: "DELETE",
        body: formData
    }).then(response => {
        return response.json();
    }).then(result => {
        if(result.returnNum === 1){
            let date = myDate.value;
            window.location.href = `/expense/d/${date}`;
        }
    }).catch(error => {
        console.log(error);
    });
});

// 在側邊攔顯示點選資料
lists.forEach(list=>{
    list.addEventListener("click", (e)=>{
        let id = e.currentTarget.getAttribute("id");
        document.querySelector("[name=id]").value = id;
        let sort = e.currentTarget.getAttribute("sort");
        document.querySelector("select").selectedIndex = sort;
        let money = e.currentTarget.getAttribute("money");
        document.querySelector("[name=money]").value = money;
        let title = e.currentTarget.getAttribute("title");
        document.querySelector("[name=title]").value = title;
        newSet.classList.add("d-none");
        newSet.classList.remove("d-flex");
        updateSet.classList.remove("d-none");
        updateSet.classList.add("d-flex");
        bsOffcanvas.show();
    })
})