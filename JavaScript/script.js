let history = {};

function updateHistory(key, value) {
    history[key] = Number(value);
    let total = 0;
    for (const key in history) {
        total += history[key];
    }
    document.getElementById("totalbox").value = total;
}

//inputElemetId - HTML element that contains the users input
//multipyer - the value to multiply the users input by
//outputElementId - HTML element to display the result. 
function calculateValue(inputElementId, multiplyer, outputElementId) {
    let input = document.getElementById(inputElementId).value;
    let result = (input * multiplyer).toFixed(1);
    document.getElementById(outputElementId).textContent = `${result}%`;
    updateHistory(inputElementId, result);
}

const entry = {
    input: "someInputId",
    multipler: 0.12,
    output: "somePId"
};


const entries = [
    {
        label: "input",
        input: "someInputId1",
        multipler: 0.12,
        output: "somePId2"
    },
    {
        label: "input2",
        input: "someInputId12",
        multipler: 0.4,
        output: "somePId2"
    }
];

let html = "";
for (var i = 0; i < entries.length; i++) {
    console.log(entries[p])
    let _html = `
        <div>
            <p>${entries[i].label}</p>
            <input id="${entries[i].input}" />
            <button onClick="calculateValue(${entries[i].input}, ${entries[i]}multipler), ${entries[i].output}">Add</button>
            <<p id="${entries[i].output}"></p>
        </div>
   ` ;
    html += _html;
}

console.log(html);


document.getElementById("dynamicontent").innertHtml = html;


//FUNCTION FOR <75 INSERTED CACULATION
// function returnInsertLessThan75mm() {
//     let input = document.getElementById("lessThan75mmInsertUserInput").value
//     let mainInsertedLessThan75mm = input * 0.71;
//     mainInsertedLessThan75mm = mainInsertedLessThan75mm.toFixed(1);
//     document.getElementById("lessThan75mmInsertUserResult").textContent = `${ mainInsertedLessThan75mm }% `
//     console.log(mainInsertedLessThan75mm);
//     updateHistory("lessThan75mmInsertUserResult", mainInsertedLessThan75mm);
// }

// // FUNCTION FOR <75MM OPEN CUT CACULATION
// function returnOpenCutLessThan75mm() {
//     let input = document.getElementById("lessThan75mmOpenCutUserInput").value
//     let mainOpenCutLessThan75mm = input * 0.79;
//     mainOpenCutLessThan75mm = mainOpenCutLessThan75mm.toFixed(1);
//     document.getElementById("lessThan75mmOpenCutResult").textContent = `${ mainOpenCutLessThan75mm }% `
//     console.log(mainOpenCutLessThan75mm);
//     updateHistory("lessThan75mmOpenCutResult", mainOpenCutLessThan75mm);
// }

//FUNCTION FOR <75MM PRE - EX CACULATION
function returnPreExLessThan75mm() {
    let input = document.getElementById("lessThan75mmPreExUserInput").value
    let mainPreExLessThan75mm = input * 0.08;
    mainPreExLessThan75mm = mainPreExLessThan75mm.toFixed(1);
    document.getElementById("lessThan75mmInsertPreExResult").textContent = `${mainPreExLessThan75mm}% `
    console.log(mainPreExLessThan75mm);
    updateHistory("lessThan75mmInsertPreExResult", mainPreExLessThan75mm);
}

//FUNCTION FOR >75 TO 125MM INSERTED
function greaterThan75mmTo125mmInserted() {
    let input = document.getElementById("greaterThan75mmTo125mmInsertedInput").value
    let maingreaterThan75mmTo125mmInserted = input * 0.88;
    maingreaterThan75mmTo125mmInserted = maingreaterThan75mmTo125mmInserted.toFixed(1);
    document.getElementById("greaterThan75mmTo125MMInsertedResult").textContent = `${maingreaterThan75mmTo125mmInserted}% `
    console.log(maingreaterThan75mmTo125mmInserted);
    updateHistory("greaterThan75mmTo125MMInsertedResult", maingreaterThan75mmTo125mmInserted);
}

//FUNCTION FOR >75 TO 125MM OPEN CUT
function greaterThan75mmTo125mmOpenCut() {
    let input = document.getElementById("greaterThan75mmTo125mmOpenCutInput").value
    let mainGreaterThan75mmTo125mmOpenCut = input * 0.96;
    mainGreaterThan75mmTo125mmOpenCut = mainGreaterThan75mmTo125mmOpenCut.toFixed(1);
    document.getElementById("greaterThan75mmTo125mmOpenCutResult").textContent = `${mainGreaterThan75mmTo125mmOpenCut}% `
    console.log(mainGreaterThan75mmTo125mmOpenCut);
    updateHistory("greaterThan75mmTo125mmOpenCutResult", mainGreaterThan75mmTo125mmOpenCut);
}

//FUNCTION FOR >75 TO 125MM PRE - EX    
function greaterThan75mmTo125mmPreEx() {
    let input = document.getElementById("greaterThan75mmTo125mmPreExInput").value
    let mainGreaterThan75mmTo125mmPreEx = input * 0.13;
    mainGreaterThan75mmTo125mmPreEx = mainGreaterThan75mmTo125mmPreEx.toFixed(1);
    document.getElementById("greaterThan75mmTo125mmPreExResult").textContent = `${mainGreaterThan75mmTo125mmPreEx}% `
    console.log(mainGreaterThan75mmTo125mmPreEx);
    updateHistory("greaterThan75mmTo125mmPreExResult", mainGreaterThan75mmTo125mmPreEx);
}

//FUNCTION FOR 140MM TO 180 INSERT 
function OneFoutymmto180Insert() {
    let input = document.getElementById("140mmto180InsertInput").value
    let mainOneFoutymmto180Insert = input * 1.17;
    mainOneFoutymmto180Insert = mainOneFoutymmto180Insert.toFixed(1);
    document.getElementById("140mmto180InsertResult").textContent = `${mainOneFoutymmto180Insert}% `
    console.log(mainOneFoutymmto180Insert);
    updateHistory("140mmto180InsertResult", mainOneFoutymmto180Insert);
}

//FUNCTION FOR 140MM TO 180 OPEN CUT
function OneFoutymmto180OpenCut() {
    let input = document.getElementById("140mmto180OpenCutInput").value
    let mainOneFoutymmto180OpenCut = input * 1.17;
    mainOneFoutymmto180OpenCut = mainOneFoutymmto180OpenCut.toFixed(1);
    document.getElementById("140mmto180OpenCutResult").textContent = `${mainOneFoutymmto180OpenCut}% `
    console.log(mainOneFoutymmto180OpenCut);
    updateHistory("140mmto180OpenCutResult", mainOneFoutymmto180OpenCut);
}


//FUNCTION FOR 140MM TO 180 Pre-Ex
function OneFoutymmto180PreEx() {
    let input = document.getElementById("140mmto180PreExInput").value
    let mainOneFoutymmto180PreEx = input * 0.13;
    mainOneFoutymmto180PreEx = mainOneFoutymmto180PreEx.toFixed(1);
    document.getElementById("140mmto180PreExResult").textContent = `${mainOneFoutymmto180PreEx}% `
    console.log(mainOneFoutymmto180PreEx);
    updateHistory("140mmto180PreExResult", mainOneFoutymmto180PreEx);
}

//FUNCTION FOR 250 Insert
function TwoFiftyinsert() {
    let input = document.getElementById("250InserInput").value
    let main250Insert = input * 1.38;
    main250Insert = main250Insert.toFixed(1);
    document.getElementById("250InsertResult").textContent = `${main250Insert}% `
    console.log(main250Insert);
    updateHistory("250InsertResult", main250Insert);
}

//FUNCTION FOR 250 open Cut
function TwoFiftyOpenCut() {
    let input = document.getElementById("250OpenCutInput").value
    let main250OpenCut = input * 1.88;
    main250OpenCut = main250OpenCut.toFixed(1);
    document.getElementById("250OpenCutResult").textContent = `${main250OpenCut}% `
    console.log(main250OpenCut);
    updateHistory("250OpenCutResult", main250OpenCut);
}

//FUNCTION FOR 250 Pre-Ex
function TwoFiftyPreEx() {
    let input = document.getElementById("250PreExInput").value
    let main250PreEx = input * 1.38;
    main250PreEx = main250PreEx.toFixed(1);
    document.getElementById("250PreExResult").textContent = `${main250PreEx}% `
    console.log(main250PreEx);
    updateHistory("250PreExResult", main250PreEx);
}

//FUNCTION FOR 315 to 255 Insert
function ThreeFifteenToThreeFiveFiveInsert() {
    let input = document.getElementById("ThreeFifteenToThreeFiveFiveInsertionInput").value
    let ThreeFifteenToThreeFiveFiveInsert = input * 1.88;
    ThreeFifteenToThreeFiveFiveInsert = ThreeFifteenToThreeFiveFiveInsert.toFixed(1);
    document.getElementById("ThreeFifteenToThreeFiveFiveResult").textContent = `${ThreeFifteenToThreeFiveFiveInsert}% `
    console.log(ThreeFifteenToThreeFiveFiveInsert);
    updateHistory("ThreeFifteenToThreeFiveFiveResult", ThreeFifteenToThreeFiveFiveInsert);
}


//FUNCTION FOR 315 to 255 OpenCut
function ThreeFifteenToThreeFiveFiveOpenCut() {
    let input = document.getElementById("ThreeFifteenToThreeFiveFiveOpenCutInput").value
    let ThreeFifteenToThreeFiveFiveOpenCut = input * 2.29;
    ThreeFifteenToThreeFiveFiveOpenCut = ThreeFifteenToThreeFiveFiveOpenCut.toFixed(1);
    document.getElementById("ThreeFifteenToThreeFiveFiveOpenCutResult").textContent = `${ThreeFifteenToThreeFiveFiveOpenCut}% `
    console.log(ThreeFifteenToThreeFiveFiveOpenCut);
    updateHistory("ThreeFifteenToThreeFiveFiveOpenCutResult", ThreeFifteenToThreeFiveFiveOpenCut);

}

//FUNCTION FOR 315 to 255 PreEx
function ThreeFifteenToThreeFiveFivePreEx() {
    let input = document.getElementById("ThreeFifteenToThreeFiveFivePreExInput").value
    let ThreeFifteenToThreeFiveFivePreEx = input * 1.88;
    ThreeFifteenToThreeFiveFivePreEx = ThreeFifteenToThreeFiveFivePreEx.toFixed(1);
    document.getElementById("ThreeFifteenToThreeFiveFivePreExResult").textContent = `${ThreeFifteenToThreeFiveFivePreEx}% `
    console.log(ThreeFifteenToThreeFiveFivePreEx);
    updateHistory("ThreeFifteenToThreeFiveFivePreExResult", ThreeFifteenToThreeFiveFivePreEx);
}

//FUNCTION FOR 500 Insert
function fiveHundredInserted() {
    let input = document.getElementById("fiveHundredInsertedInput").value
    let fiveHundredInserted = input * 2.29;
    fiveHundredInserted = fiveHundredInserted.toFixed(1);
    document.getElementById("fiveHundredInsertedResult").textContent = `${fiveHundredInserted}% `
    console.log(ThreeFifteenToThreeFiveFivePreEx);
    updateHistory("ThreeFifteenToThreeFiveFivePreExResult", ThreeFifteenToThreeFiveFivePreEx);
}

//FUNCTION FOR 500 OpenCut
function fiveHundredOpenCut() {
    let input = document.getElementById("fiveHundredOpenCutInput").value
    let fiveHundredOpenCut = input * 2.71;
    fiveHundredOpenCut = fiveHundredOpenCut.toFixed(1);
    document.getElementById("fiveHundredOpenCutResult").textContent = `${fiveHundredOpenCut}% `
    console.log(fiveHundredOpenCut);
    updateHistory("fiveHundredOpenCutResult", fiveHundredOpenCut);
}

//FUNCTION FOR 500 PreEx
function fiveHundredPreEx() {
    let input = document.getElementById("fiveHundredPreExInput").value
    let fiveHundredPreEx = input * 1.88;
    fiveHundredPreEx = fiveHundredPreEx.toFixed(1);
    document.getElementById("fiveHundredPreExResult").textContent = `${fiveHundredPreEx}% `
    console.log(fiveHundredPreEx);
    updateHistory("fiveHundredPreExResult", fiveHundredPreEx);
}

//FUNCTION FOR 630 Insertion
function sixThirtyHundredInsertion() {
    let input = document.getElementById("sixThirtyHundredInsertionInput").value
    let sixThirtyHundredInsertion = input * 2.71;
    sixThirtyHundredInsertion = sixThirtyHundredInsertion.toFixed(1);
    document.getElementById("sixThirtyHundredInsertionResult").textContent = `${sixThirtyHundredInsertion}% `
    console.log(sixThirtyHundredInsertion);
    updateHistory("sixThirtyHundredInsertionResult", sixThirtyHundredInsertion);
}

//FUNCTION FOR 630 OpenCut
function sixThirtyHundredOpenCut() {
    let input = document.getElementById("sixThirtyHundredOpenCutInput").value
    let sixThirtyHundredOpenCut = input * 3.31;
    sixThirtyHundredOpenCut = sixThirtyHundredOpenCut.toFixed(1);
    document.getElementById("sixThirtyHundredOpenCutResult").textContent = `${sixThirtyHundredOpenCut}% `
    console.log(sixThirtyHundredOpenCut);
    updateHistory("sixThirtyHundredOpenCutResult", sixThirtyHundredOpenCut);
}

//FUNCTION FOR 630 Pre-Ex()
function sixThirtyHundredPreEx() {
    let input = document.getElementById("sixThirtyHundredPreExInput").value
    let sixThirtyHundredPreEx = input * 1.88;
    sixThirtyHundredPreEx = sixThirtyHundredPreEx.toFixed(1);
    document.getElementById("sixThirtyHundredPreExResult").textContent = `${sixThirtyHundredPreEx}% `
    console.log(sixThirtyHundredPreEx);
    updateHistory("sixThirtyHundredPreExResult", sixThirtyHundredPreEx);
}


//FUNCTION FOR >630 Insertion()
function greaterThansixThirtyHundredInsertion() {
    let input = document.getElementById("greaterThansixThirtyHundredInsertionInput").value
    let greaterThansixThirtyHundredInsertion = input * 3.13;
    greaterThansixThirtyHundredInsertion = greaterThansixThirtyHundredInsertion.toFixed(1);
    document.getElementById("greaterThansixThirtyHundredInsertionResult").textContent = `${greaterThansixThirtyHundredInsertion}% `
    console.log(greaterThansixThirtyHundredInsertion);
    updateHistory("greaterThansixThirtyHundredInsertionResult", greaterThansixThirtyHundredInsertion);
}

//FUNCTION FOR >630 OpenCut()
function greaterThansixThirtyHundredOpenCut() {
    let input = document.getElementById("greaterThansixThirtyHundredOpenCutInput").value
    let greaterThansixThirtyHundredOpenCut = input * 3.54;
    greaterThansixThirtyHundredOpenCut = greaterThansixThirtyHundredOpenCut.toFixed(1);
    document.getElementById("greaterThansixThirtyHundredOpenCutResult").textContent = `${greaterThansixThirtyHundredOpenCut}% `
    console.log(greaterThansixThirtyHundredOpenCut);
    updateHistory("greaterThansixThirtyHundredOpenCutResult", greaterThansixThirtyHundredOpenCut);
}

//FUNCTION FOR >630 Pre-Ex()
function greaterThansixThirtyHundredPreEx() {
    let input = document.getElementById("greaterThansixThirtyHundredPreExInput").value
    let greaterThansixThirtyHundredPreEx = input * 1.88;
    greaterThansixThirtyHundredPreEx = greaterThansixThirtyHundredPreEx.toFixed(1);
    document.getElementById("greaterThansixThirtyHundredPreExResult").textContent = `${greaterThansixThirtyHundredPreEx} % `
    console.log(greaterThansixThirtyHundredPreEx);
    updateHistory("greaterThansixThirtyHundredPreExResult", greaterThansixThirtyHundredPreEx);
}

//FUNCTION FOR Abandon
function Abandon() {
    let input = document.getElementById("AbandonInput").value
    let Abandon = input * 19.50;
    Abandon = Abandon.toFixed(1);
    document.getElementById("AbandonResult").textContent = `${Abandon} % `
    console.log(Abandon);
    updateHistory("AbandonResult", Abandon);
}






