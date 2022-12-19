<?php
// make function php
class Main
{
    private $config = [
        'username' => 'devilishxbae267053',
        'message' => 'Ang nagednis nitong ilaw (ang nagednis nitong ilaw)
Alaws iba kundi Ikaw (Alaws iba kundi Ikaw)
Salamat sa liwanag Mo (salamat sa liwanag Mo)
Muling magkakakulay ang Pasko
Salamat sa liwanag Mo (salamat sa liwanag Mo)
Muling magkakakulay ang Pasko',
        'deviceId' => 'Young God',
    ];

    protected function sendMessage()
    {
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://ngl.link/api/submit',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS => "username=" . $this->config['username'] . "&question=" . $this->config['message'] . "&deviceId=" . $this->config['deviceId'] . "&gameSlug=",
        ));

        $response = curl_exec($curl);

        curl_close($curl);
        echo $response . PHP_EOL;
    }
    public function start($thread = 1)
    {
        while (true) {
            $this->sendMessage();
            sleep(3);
        }
    }
}

$main = new Main();
$main->start();
