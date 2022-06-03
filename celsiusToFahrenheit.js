//transform("50F")

function transformDegree(degree){
    const celsiusExists = degree.toUpperCase().includes("C")
    const fahrenhitExist = degree.toUpperCase().includes("F")

    //fluxo de erro
    if(!celsiusExists && !fahrenhitExist){
        throw new Error("Grau não Identificado")
    }
    // fluxo ideal, F-> C
    let updateDegree = Number (degree.toUpperCase().replace("F",""));
    let formula = fahrenhit => (fahrenhit - 32) *5/9
    let degreeSign = "C"

    // fluxo alternativo, C-> F
    if(celsiusExists){
     updateDegree = Number (degree.toUpperCase().replace("C",""));
     formula = celsius => celsius * 9/5 +32
     degreeSign = "F"
    }

    return formula(updateDegree) + degreeSign


}


try {
    console.log(transformDegree("10C"))
    console.log(transformDegree("50F"))
    transformDegree("50Z")
} catch (error) {
    console.log (error.message)
}