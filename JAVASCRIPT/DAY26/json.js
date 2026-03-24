let jsonRes =
 '{"fact":"Researchers believe the word \u201ctabby\u201d comes from Attabiyah, a neighborhood in Baghdad, Iraq. Tabbies got their name because their striped coats resembled the famous wavy patterns in the silk produced in this city.","length":212}';
//console.log(jsonRes.fact

let validRes = JSON.parse(jsonRes);
console.log(validRes.fact);


let student = {
    name: "SAIRAJ",
    marks: 96,

};