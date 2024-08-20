dropdown1=document.getElementById("height1")
text1=document.getElementById("type1")
dropdown2=document.getElementById("height2")
text2=document.getElementById("type2")

const conversionRates = {
    cm: {
        cm: 1,
        inch: 1 / 2.54,
        meter: 1 / 100,
        feet: 1 / 30.48,
        km: 1 / 100000,
        mile: 1 / 160934.4,
    },
    inch: {
        cm: 2.54,
        inch: 1,
        meter: 2.54 / 100,
        feet: 1 / 12,
        km: 2.54 / 100000,
        mile: 2.54 / 160934.4,
    },
    meter: {
        cm: 100,
        inch: 100 / 2.54,
        meter: 1,
        feet: 100 / 30.48,
        km: 1 / 1000,
        mile: 1 / 1609.344,
    },
    feet: {
        cm: 30.48,
        inch: 12,
        meter: 30.48 / 100,
        feet: 1,
        km: 30.48 / 100000,
        mile: 30.48 / 160934.4,
    },
    km: {
        cm: 100000,
        inch: 100000 / 2.54,
        meter: 1000,
        feet: 100000 / 30.48,
        km: 1,
        mile: 1 / 1.609344,
    },
    mile: {
        cm: 160934.4,
        inch: 160934.4 / 2.54,
        meter: 1609.344,
        feet: 160934.4 / 30.48,
        km: 1.609344,
        mile: 1,
    }
};
function calc(){
    text2.value=parseFloat((text1.value*conversionRates[dropdown1.value][dropdown2.value]).toString().substring(0,10))
}
function calc2(){
    text1.value=parseFloat((text2.value*conversionRates[dropdown1.value][dropdown2.value]).toString().substring(0,10))
}

dropdown1.addEventListener("change",calc)
dropdown2.addEventListener("change",calc)
text1.addEventListener("input",calc)
text2.addEventListener("input",calc2)
