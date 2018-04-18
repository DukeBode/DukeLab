<?php
/**
 *******************************************
 *    Yiban - Developer URL Verification   *
 *******************************************
 *
 * GUIDE:
 * - Please put this file to your server where you specified location on our site.
 * - We will check the Url right after you submit
 * 
 * If any questions come up, you may contact our custom service 
 *   by phone: 60161000 or mail: contact@yiban.cn
 * 
 */


/**
 * define your token
 */
define('TOKEN', 'yiban');

$yibanUrlObj = new Yiban_URL_VALIDATE();
$yibanUrlObj->valid();


class Yiban_URL_VALIDATE
{
    public function valid()
    {
        echo $this->checkSignature() ? $_GET["echostr"] : '';
        exit;
    }
    
    private function checkSignature()
    {
		$tmpArr = array(TOKEN, $_GET['timestamp'], $_GET['nonce']);
		sort($tmpArr, SORT_STRING);
        
        return sha1(implode($tmpArr)) == $_GET['signature'];
    }
}