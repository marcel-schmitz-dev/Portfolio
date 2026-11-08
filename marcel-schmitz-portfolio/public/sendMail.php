<?php
// Kontaktformular-Endpunkt für den eigenen Server (PHP). Liegt im Webroot neben index.html.
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false]);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);
$name = trim(strip_tags($data['name'] ?? ''));
$email = trim($data['email'] ?? '');
$message = trim(strip_tags($data['message'] ?? ''));

// Header-Injection verhindern und Eingaben prüfen
$name = str_replace(["\r", "\n"], ' ', $name);
if ($name === '' || strlen($message) < 10 || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false]);
    exit;
}

$to = 'm.schmitz.dev@gmail.com';
$subject = 'Portfolio-Kontakt von ' . $name;
$body = "Name: $name\nE-Mail: $email\n\n$message";
$headers = [
    'From' => 'noreply@' . ($_SERVER['SERVER_NAME'] ?? 'localhost'),
    'Reply-To' => $email,
    'Content-Type' => 'text/plain; charset=utf-8',
];

$sent = mail($to, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, $headers);
http_response_code($sent ? 200 : 500);
echo json_encode(['ok' => $sent]);
