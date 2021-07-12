function getAndupdate() 
{
    tit=document.getElementById("tittle").value;
    desc=document.getElementById("description").value;
    if(localStorage.getItem('itemsJson')==null)
    {
        itemJsonArray=[];
        itemJsonArray.push([tit,desc]);
        localStorage.setItem('itemsJson' , JSON.stringify(itemJsonArray));
    }
    else
    {
        itemJsonArraystr=localStorage.getItem('itemsJson');
        itemJsonArray=JSON.parse(itemJsonArraystr);
        itemJsonArray.push([tit,desc]);
        localStorage.setItem('itemsJson' , JSON.stringify(itemJsonArray));
    }
    update();
}
function update() 
{
    // tit=document.getElementById("tittle").value;
    // desc=document.getElementById("description").value;
    if(localStorage.getItem('itemsJson')==null)
    {
        itemJsonArray=[];
        // itemJsonArray.push([tit,desc]);
        localStorage.setItem('itemsJson' , JSON.stringify(itemJsonArray));
    }
    else
    {
        itemJsonArraystr=localStorage.getItem('itemsJson');
        itemJsonArray=JSON.parse(itemJsonArraystr);
        // itemJsonArray.push([tit,desc]);
        // localStorage.setItem('itemsJson' , JSON.stringify(itemJsonArray));
    }
    
    // populating the table
    let tableBody=document.getElementById("tableBody");
    let str="";
    itemJsonArray.forEach((element , index) => {
        str+= 
        `<tr>
                <th scope="row">${index+1}</th>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td>
                    <button  class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button>
                </td>
        </tr>`
    });
    tableBody.innerHTML=str;
}

add = document.getElementById("add");
add.addEventListener("click" ,getAndupdate)
update();

function deleted(itemIndex){
    
    itemJsonArrayStr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    // Delete itemIndex element from the array
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();

}
function clearStorage(){
    if (confirm("Do you areally want to clear?")){
    localStorage.clear();
    update()
    }
}