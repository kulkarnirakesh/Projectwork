<?php
    //variable declaration 
    if(isset($_POST['submit'])){
    $u_id=0;
    $fname=$_POST["fn"];
    $lname=$_POST["ln"];
    $email1=$_POST["email"];
    $mno=$_POST["mno"];
    $qua=$_POST["qua"];
    $cname=$_POST["colnm"];
    $city=$_POST["city"];
    $uname=$_POST["uname"];
    $pass=md5($_POST["pass"]);
    $date = date("Y-m-d H:i:s");
    
    /*Connection
    $link = mysqli_connect("localhost","root"," ","siit_db");
    $query="INSERT INTO registration ( u_id, u_fname,u_lname,u_email,u_mno,u_qualification,u_college_name,u_city,u_uname,u_pass,u_datetime )
                       VALUES
                       (1,'$fname','$lname','$mno','$email','$qua','$cname','$city','$uname','$pass','$date' )";
    mysqli_query($link,$query);
    echo"You are registered successfully";*/
    
    $conn = mysql_connect("localhost","root","");
    mysql_select_db("siit_db");
    $query="INSERT INTO registration ( u_id, u_fname,u_lname,u_mno,u_email,u_qualification,u_college_name,u_city,u_uname,u_pass,u_datetime )
                       VALUES
                       ('$u_id','$fname','$lname','$mno','$email1','$qua','$cname','$city','$uname','$pass','$date')";
   $result = mysql_query($query , $conn);
    if($result)
    {
        echo "<script>alert('You are registered successfully'); 
        window.location.href='http://localhost/Rgistration182015/Siit_reg.html';</script>";
        
        //header("Location:http://localhost/Rgistration182015/Siit_reg.html");
    }
    else{
        echo 'Failed '.mysql_error();
    }
    
  
  }
    
?>