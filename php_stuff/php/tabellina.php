<!--dato un numero letto da una input text mostrare in output la tabellina di quel numero fino a 10 -->
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">

	<head>
        <meta charset="UTF-8" />
		<title>Multiplication table</title>
        <link rel="stylesheet" href="../style/style_forms.css" type="text/css">
        <script src="../scripts/jquery-3.6.1.slim.min.js"></script>
        <script src="../scripts/theme.js"></script>
	</head>

	<body>
		<h1>Multiplication table</h1>
		<p><a href="../index.html">Home</a></p>
		<form action="tabellina.php" method="GET">
			<input type="text" name="numero" value="0">
			<input type="submit" name="submit" value="Calcola">
		</form>
		<?php
			$numero=$_REQUEST["numero"];

			echo "</br>";
			for ($i = 1; $i <= $numero; $i++) {
				echo($i*$numero)."</br>";
			}
			
		?>
	</body>

</html>
