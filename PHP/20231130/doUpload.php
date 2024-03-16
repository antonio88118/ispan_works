<?php
require_once("../db_connect.php");

$title=$_POST["title"];

if($_FILES["file"]["error"]==0){
    // 如果檔案移動成功，則上傳成功
    // move_uploaded_file() 把檔案從暫存資料夾 $_FILES["file"]["tmp_name"] ，移到目標資料夾 upload
    if(move_uploaded_file($_FILES["file"]["tmp_name"], "../upload/".$_FILES["file"]["name"])){
        $filename=$_FILES["file"]["name"];
        $time=date('Y-m-d H:i:s');
        
        $sql="INSERT INTO images (title, name, created_at) VALUES ('$title', '$filename', '$time')";
        if($conn->query($sql)===TRUE){
            echo "新增資料完成";
            // $last_id=$conn->insert_id;
            // echo "最新一筆資料序號: ".$last_id;
            header("location: file-upload.php");
        }else{
            "新增資料失敗: ".$conn->error;
        }
    }else{
        echo "上傳失敗";
    }
}

?>