let history = {};

function updateHistory(key, value) {
    history[key] = Number(value);
    let total = 0;
    for (const key in history) {
        total += history[key];
    }

    document.getElementById("totalbox").value = total.toFixed(2) + '%';
}

//inputElemetId - HTML element that contains the users input
//multipyer - the value to multiply the users input by
//outputElementId - HTML element to display the result. 
function calculateValue(inputElementById, multiplyer, outputElementById) {
    let input = document.getElementById(inputElementById).value;
    let result = (input * multiplyer).toFixed(2);
    document.getElementById(outputElementById).textContent = `${result}%`;
    updateHistory(inputElementById, result);
}

//1 job = 6.25% * 1.50% every meter layed
//output percenatge
function serviceLaying(inputElementById1, multiply1, inputElementById2, multipler2, outputElementById) {
    let input1 = document.getElementById(inputElementById1).value
    console.log(input1)
    let times1 = multiply1
    console.log(times1)
    let input2 = document.getElementById(inputElementById2).value
    console.log(input2)
    let times2 = multipler2
    console.log(times2)
    let result = input1 * times1 + input2 * times2;
    console.log(result)
    document.getElementById(outputElementById).textContent = `${result}%`;
    console.log(document.getElementById(outputElementById).textContent = `${result}%`)
    updateHistory(outputElementById, result);

}

function toggleDropdown(mainSubMenuId) {
    var mainSubMenu = document.getElementById(mainSubMenuId);
    mainSubMenu.style.display = (mainSubMenu.style.display === "block") ? "none" : "block";
}

function toggleSubmenu(submenuId) {
    var submenu = document.getElementById(submenuId);
    submenu.style.display = (submenu.style.display === "block") ? "none" : "block";
}








