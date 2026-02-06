
var UlList = document.getElementById('ul1')
function handleKeyUp(e){
    if (e.key === 'Enter'){
    var ListItem = document.createElement('li')
    ListItem.innerHTML = e.target.value;
    UlList.appendChild(ListItem)
    e.target.value = ""
    }
}