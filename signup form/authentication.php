
<?php      
    include('db.php');  
    $User Id = $_POST['user'];  
    $Password = $_POST['pass'];  
      
        //to prevent from mysqli injection  
        $User Id = stripcslashes($User Id);  
        $Password = stripcslashes($Password);  
        $User Id = mysqli_real_escape_string($con, $User Id);  
        $Password = mysqli_real_escape_string($con, $Password);  
      
        $sql = "select *from login where username = '$User Id' and password = '$Password'";  
        $result = mysqli_query($con, $sql);  
        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);  
        $count = mysqli_num_rows($result);  
          
        if($count == 1){  
            echo "<h1><center> Login successful </center></h1>";  
        }  
        else{  
            echo "<h1> Login failed. Invalid username or password.</h1>";  
        }     
?>  