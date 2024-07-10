<!DOCTYPE html>
<html>
<head>
	<title>Content Manipulation</title>
</head>
<body>
	<h1 id="firstname">Hello</h1>
	<div id="lastname">MASAI</div>
	<p id="fullname">School</p>
	<hr/>
	<button onclick="setFirstName()">FIRSTNAME</button>
	<button onclick="setLastName()">LASTNAME</button>
	<button onclick="setFullName()">FIRSTNAME LASTNAME</button>
	<button onclick="resetDefaults()">RESET DEFAULTS</button>
	<script type="text/javascript">
		function setFirstName() {
			// Change the content of h1 to your first name
            document.getElementById("firstname").innerText="shalini";
		}

		function setLastName() {
			// Change the content of div to your last name
            document.getElementById("lastname").innerText="tiwari";
		}

		function setFullName() {
			// Change the content of p to your full name (firstname - lastname)
            document.getElementById("fullname").innerText="shalini tiwari";
		}

		function resetDefaults(){
			// reset the firstname, lastname, and fullname to empty values
            document.getElementById("firstname").innerText="Hello";
			document.getElementById("lastname").innerText="MASAI";
			document.getElementById("fullname").innerText="School";
		}
	</script>
</body>
</html>
