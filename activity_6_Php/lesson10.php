<?php 
$data = $_POST["whole"];
$decodejson = json_decode($data);

exit("$decodejson->username $decodejson->password");
?>
