<html>
    <p>nothing's here:)</p>
</html>
<?php

$file = 'files/mushvigNumber.json';

$data = json_decode(file_get_contents('php://input'), true);

if ($data && isset($data['date']) && isset($data['number'])) {
    file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT));
    http_response_code(200);
} else {
    http_response_code(400);
    echo json_encode(array("error" => "Invalid data"));
}
?>