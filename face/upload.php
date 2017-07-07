<?php

    $host = "https://api-cn.faceplusplus.com/facepp/v3/detect";
    $api_key = "1oU3ywQGnUOhSYoRld-mWtw96rV_gsNr";
    $api_secret = "GKMPUKxENLmuyahnbeYUVImugCT8nfSR";

    $image= $_FILES['img']['tmp_name'];
    /*var_dump($image);
    exit;*/
    $fp = fopen($image, 'rb');
    $content = fread($fp, filesize($image)); //二进制数据
    $content =base64_encode($content);
    
    $curl = curl_init();
    curl_setopt_array($curl, array(
       CURLOPT_URL => "https://api-cn.faceplusplus.com/facepp/v3/detect",
       CURLOPT_RETURNTRANSFER => true,
       CURLOPT_ENCODING => "",
       CURLOPT_HTTPHEADER => array('Content-Type' => 'multipart/form-data; charset=UTF-8'),
       CURLOPT_SSL_VERIFYPEER => false,
       CURLOPT_SSL_VERIFYHOST => false,
       CURLOPT_MAXREDIRS => 10,
       CURLOPT_TIMEOUT => 30,
       CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
       CURLOPT_CUSTOMREQUEST => "POST",
       CURLOPT_POSTFIELDS => array( 'image_base64' => $content , 'api_key'=>$api_key,'api_secret'=>$api_secret,'return_attributes' => "smiling"),
       CURLOPT_HTTPHEADER => array("cache-control: no-cache")
    ));
    
    $response = curl_exec($curl);
    $err = curl_error($curl);
    
    curl_close($curl);
    
    if ($err) {
        echo "cURL Error #:" . $err;
    } else {
        echo $response;
        exit;
    }

?>