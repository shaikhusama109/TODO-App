list = document.getElementById("list");

function add(){
    var val = document.getElementById("val") 
    var li = document.createElement('li')
        li.setAttribute("class", "li")
    var li_text = document.createTextNode(val.value)
    
   
    // Delete Button
    var deleteBtn = document.createElement('button')
    var deleteText = document.createTextNode("Delete")
        deleteBtn.setAttribute("class", "button")
        deleteBtn.setAttribute("onclick", "dlt(this)")
        deleteBtn.appendChild(deleteText)

    // Edit
    var editBtn = document.createElement('button')
    var editText = document.createTextNode("Edit")
        editBtn.setAttribute("class", "button")
        editBtn.setAttribute("onclick", "edit(this)")
        editBtn.appendChild(editText)

   
    
    li.appendChild(li_text)
     li.appendChild(deleteBtn)
     li.appendChild(editBtn)
     
     list.appendChild(li)
     
    
    val.value = ""

}

function dlt(e){
    var list = e.parentNode
    list.remove()
}

function edit(e){
     var list =  e.parentNode.firstChild.nodeValue
    var update = prompt("Update the Value", list)
    e.parentNode.firstChild.nodeValue = update
     
    
}

function deleteAll(){
    list.innerHTML = ""
}