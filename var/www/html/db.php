<?php
	// cors requs header because port is different in our case
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400'); 
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); 
	header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

	// static data, i not installed mysql

	$data = [
		"columns" => ["id", "firstName", "lastName", "age", "email"], 
		"items" => [ 
			[
			  "id" => 1,
			  "firstName" => "Jack",
			  "lastName" => "Nicholson",
			  "age" => 64,
			  "email" => "jacky@somthing.nl"      
			], 
			[
			  "id" => 1,
			  "firstName" => "Robert",
			  "lastName" => "De Niro",
			  "age" => 84,
			  "email" => "deniro@yahoo.com"      
			], 
			[
			  "id" => 1,
			  "firstName" => "Al",
			  "lastName" => "Pacino",
			  "age" => 34,
			  "email" => "thecop@cmail.com"      
			], 
			[
			  "id" => 1,
			  "firstName" => "Brad",
			  "lastName" => "Pitt",
			  "age" => 14,
			  "email" => "braddy@newyork.ny"      
			], 
			[
			  "id" => 1,
			  "firstName" => "Jackie",
			  "lastName" => "Chan",
			  "age" => 18,
			  "email" => "jacky@china-kung.fu"      
			], 
			[
			  "id" => 1,
			  "firstName" => "Terence",
			  "lastName" => "Hill",
			  "age" => 28,
			  "email" => "bean@conquest.it"      
			], 
			[
			  "id" => 1,
			  "firstName" => "Bud",
			  "lastName" => "Spencer",
			  "age" => 37,
			  "email" => "piedone@slaps.it"      
			], 
			[
			  "id" => 1,
			  "firstName" => "Jim",
			  "lastName" => "Carrey",
			  "age" => 48,
			  "email" => "ace@ventura.nc"      
			], 
			[
			  "id" => 1,
			  "firstName" => "Gene",
			  "lastName" => "Hackman",
			  "age" => 56,
			  "email" => "hack@man.db"      
			], 
			[
			  "id" => 1,
			  "firstName" => "Denzel",
			  "lastName" => "Washington",
			  "age" => 21,
			  "email" => "diesel@washing.ton"      
			], 
			[
			  "id" => 1,
			  "firstName" => "Tom",
			  "lastName" => "Hanks",
			  "age" => 52,
			  "email" => "tom@boy.uk"      
			], 
			[
			  "id" => 1,
			  "firstName" => "Dustin",
			  "lastName" => "Hoffman",
			  "age" => 67,
			  "email" => "dust@homtail.com"      
			], 
			[
			  "id" => 1,
			  "firstName" => "Anthony",
			  "lastName" => "Hopkins",
			  "age" => 78,
			  "email" => "tony@hope.ful"      
			], 
			[
			  "id" => 1,
			  "firstName" => "Guy",
			  "lastName" => "Williams",
			  "age" => 33,
			  "email" => "zorro1959@diesney.com"      
			], 
			[
			  "id" => 2,
			  "firstName" => "Ralph",
			  "lastName" => "Fiennes",
			  "age" => 31,
			  "email" => "ralphy@gmail.com"      
			]
		 ]	
	];
	
	echo json_encode($data);
	die;
?>