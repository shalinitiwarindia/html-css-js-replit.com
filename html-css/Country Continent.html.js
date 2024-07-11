<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Country Continent</title>
</head>
<body>
    <h2>Select a country to find it's continent</h2>
    <select id="find">
        <option value="India">India</option>
        <option value="United States of America" >United States of America</option>
        <option value="China">China</option>
        <option value="Nepal">Nepal</option>
        <option value="Australia">Australia</option>
        <option value="France">France</option>
        <option value="Germany">Germany</option>
        <option value="South Africa">South Africa</option>
        <option value="Nigeria">Nigeria</option>
        <option value="Mexico">Mexico</option>
        <option value="Argentina">Argentina</option>
        <option value="Brazil">Brazil</option>
        <option value="Canada">Canada</option>
        <option value="Singapore">Singapore</option>
        <option value="Sweden">Sweden</option>
    </select>
    <button onclick="myFunction()">Find continent</button>
</body>
</html>
<script>
function myFunction(){
    var country=document.getElementById("find").value;
    var continent;

switch(country){
        case "India":
        case "Nepal":
        case "China":
        case "Singapore":
            continent = "Asia";
            break;
        case "United States of America":
        case "Canada":
            continent = "North America";
            break;
        case "Australia":
            continent = "Australia";
            break;
        case "France":
        case "Germany":
        case "Sweden":
            continent = "Europe";
            break;
        case "South Africa":
            continent = "Africa";
            break;
        case "Nigeria":
        case "Mexico":
        case "Argentina":
        case "Brazil":
            continent = "South America";
            break;
        default:
            continent = "Unknown";
}
   alert("The continent is "+continent);
}
</script>
