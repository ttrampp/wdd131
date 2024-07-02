// last date modified
<script>
    let text = document.lastModified;
    document.getElementById("date-modified").innerHTML = text;
</script>

// windchill factor
var temp= 92;
var wSpeed= 13;
var windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));

var windChill= Math.round(windChill);
document.getElementById("windChill").innerHTML= windChill;