<?php
session_start();
unset($_SESSION["id"]);
unset($_SESSION["name"]);
unset($_SESSION["email"]);
unset($_SESSION["user_level"]);
header("Location:page-login.php");
?>