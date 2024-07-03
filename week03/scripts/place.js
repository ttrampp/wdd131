// last date modified
<script>
    let text = document.lastModified;
    document.getElementById("date-modified").innerHTML = text;
</script>

// windchill factor

function calculateWindChill(temp, wSpeed) {
    var temp= 92;
    var wSpeed= 13;
    if (temp <=50 && wSpeed >=3){
        var windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));
        var windChill= Math.round(windChill);
        return windChill}
    else 
        {return 'N/A'}
}

var windChill = calculateWindChill(92, 13); 
document.getElementById("windChill").innerHTML= windChill;