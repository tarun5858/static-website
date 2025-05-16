<?php
include 'db_connect.php';
//print_r($_REQUEST);die;
if(isset($_REQUEST['type']) && $_REQUEST['type'] == 'first')
{
	$contact_name = $_REQUEST['usr_name'];
	$contact_email = $_REQUEST['email'];
	$contact_msg = $_REQUEST['msg'];
	$contact_phone = $_REQUEST['phonenumber'];
	$contact_phonenumber = $_REQUEST['contactnumber'];
	$cr_date = date('Y-m-d H:i:s');
	mysqli_query($con, "INSERT INTO contact_us (contact_name, contact_email, contact_msg, contact_phone, created_date,contact_phonenumber) VALUES ('$contact_name', '$contact_email', '$contact_msg', '$contact_phone', '$cr_date', '$contact_phonenumber')");
	echo 1;
}
else if(isset($_REQUEST['type']) && $_REQUEST['type'] == 'second')
{
	$contact_name = $_REQUEST['usr_name'];
	$contact_email = $_REQUEST['email'];
	$contact_phone = $_REQUEST['phonenumber'];
	$contact_phonenumber = $_REQUEST['contactnumber'];
	$cr_date = date('Y-m-d H:i:s');
	mysqli_query($con, "INSERT INTO contact_us (contact_name, contact_email, contact_phone, created_date,contact_phonenumber, status) VALUES ('$contact_name', '$contact_email', '$contact_phone', '$cr_date', '$contact_phonenumber', '1')");
	echo 1;
}
else if(isset($_REQUEST['type']) && $_REQUEST['type'] == 'third')
{
	$contact_name = $_REQUEST['usr_name'];
	$contact_email = $_REQUEST['email'];
	$msg_date = date('d-m-Y', strtotime($_REQUEST['msg_date']));
	$msg_time = $_REQUEST['msg_time'];
	$cr_date = date('Y-m-d H:i:s');
	mysqli_query($con, "INSERT INTO contact_us (contact_name, contact_email, contact_msg, contact_phone, created_date, status,contact_phonenumber) VALUES ('$contact_name', '$contact_email', '$msg_date', '$msg_time', '$cr_date', '2', '$contact_phonenumber')");
	echo 1;
}
?>