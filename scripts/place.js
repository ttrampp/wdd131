// last date modified


//<script>                                                      THIS CREATES ERROR DEFER
//    let text = document.lastModified;
//    document.getElementById("date-modified").innerHTML = text;
//</script>                                                     THIS CREATES ERROR DEFER
//TRYING NEW FUNCTION INSTEAD

function getLastModified () {
    const lastModified = document.lastModified;
    document.getElementById("date-modified").innerHTML = text;
}




// windchill factor

const temp = 92;
const wSpeed = 13;

function calculateWindChill(temp, wSpeed) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(wSpeed, 0.16)) + (0.3965 * temp * Math.pow(wSpeed, 0.16));
}


function displayWindChill(temp, wSpeed) {
    var temp= 92;
    var wSpeed= 13;
    if (temp <=50 && wSpeed >=3){
      //  var windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));
        //var windChill= Math.round(windChill);
        //return windChill}
        windChill = calculateWindChill(temp, wSpeed);
    }
    document.getElementById("windChill").innerHTML = windChill !== "N/A" ? "${WindChill}" : windChill;
}
    //else 
//        {return 'N/A'}
//}


//var windChill = calculateWindChill(92, 13); 
//document.getElementById("windChill").innerHTML= windChill;



displayWindChill(temp, wSpeed);
