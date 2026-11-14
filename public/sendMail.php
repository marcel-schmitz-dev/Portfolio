<?php
// ------------------------------------------------------------
// Kontaktformular – Versand über IONOS (PHP mail())
// ------------------------------------------------------------
// 1) In IONOS ein Postfach anlegen, z. B. kontakt@mschmitz-dev.de
// 2) Hier eintragen:
$fromEmail = 'kontakt@mschmitz-dev.de';      // Absender = Postfach auf DEINER Domain (wichtig für SPF/DKIM)
$toEmail   = 'kontakt@mschmitz-dev.de';      // Empfänger (oder deine Gmail, wenn du dort lesen willst)
$allowedOrigins = ['https://mschmitz-dev.de', 'https://www.mschmitz-dev.de'];
// ------------------------------------------------------------

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowedOrigins, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

function fail(int $code, string $msg): void {
    http_response_code($code);
    echo json_encode(['success' => false, 'error' => $msg]);
    exit;
}

switch ($_SERVER['REQUEST_METHOD']) {
    case 'OPTIONS':
        http_response_code(200);
        exit;

    case 'POST':
        $params = json_decode(file_get_contents('php://input'));
        if (json_last_error() !== JSON_ERROR_NONE || !is_object($params)) {
            fail(400, 'Invalid JSON');
        }

        $name    = trim((string)($params->name ?? ''));
        $email   = trim((string)($params->email ?? ''));
        $message = trim((string)($params->message ?? ''));

        // Header-Injection verhindern (keine Zeilenumbrüche in Name/E-Mail)
        if (preg_match('/[\r\n]/', $name . $email)) {
            fail(400, 'Invalid input data');
        }
        if (!filter_var($email, FILTER_VALIDATE_EMAIL) || $name === '' || $message === ''
            || mb_strlen($name) > 100 || mb_strlen($message) > 5000) {
            fail(400, 'Invalid input data');
        }

        $safeName    = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
        $safeEmail   = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
        $safeMessage = nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));

        $subject = '=?UTF-8?B?' . base64_encode('Portfolio-Kontaktformular: ' . $name) . '?=';
        $body = "<strong>Name:</strong> {$safeName}<br>
                 <strong>E-Mail:</strong> {$safeEmail}<br><br>
                 <strong>Nachricht:</strong><br>{$safeMessage}";

        $headers = [
            'MIME-Version: 1.0',
            'Content-Type: text/html; charset=utf-8',
            'From: Portfolio Kontakt <' . $fromEmail . '>',
            'Reply-To: ' . $email,
        ];

        $ok = mail($toEmail, $subject, $body, implode("\r\n", $headers), '-f' . $fromEmail);
        if (!$ok) {
            fail(500, 'Mail delivery failed');
        }
        echo json_encode(['success' => true]);
        break;

    default:
        fail(405, 'Method not allowed');
}
