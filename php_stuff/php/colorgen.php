<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">

	<head>
        <meta charset="UTF-8" />
		<title>Color generator</title>
        <link rel="stylesheet" href="../style/style_forms.css" type="text/css">
        <script src="../scripts/jquery-3.6.1.slim.min.js"></script>
        <script src="../scripts/theme.js"></script>
	</head>

	<body>
		<h1>Color generator</h1>
		<p><a href="../index.html">Home</a></p>
        <p>How many colors?</p>
		<form action="colorgen.php" method="POST">
			<input type="text" name="numero" value="0">
			<input type="submit" name="submit" value="Calcola">
		</form>
		</br>
		<?php
			$numero=$_REQUEST["numero"];
			array_map('unlink', glob("colorgen_images/color*.png"));
			for ($i = 1; $i <= $numero; $i++) {
				$img = imagecreatetruecolor(50, 50);
				$red = rand(0, 255);
				$green = rand(0, 255);
				$blue = rand(0, 255);
				$color = imagecolorallocate($img, $red, $green, $blue);
				imagefill($img, 0, 0, $color);
				imagepng($img, "colorgen_images/color".$i.".png");
				imagedestroy($img);
				echo '<img src="colorgen_images/color'.$i.'.png"></img>';
				echo " RGB: ".$red." ".$green." ".$blue."</br>";
			}
		?>
	</body>

</html>
