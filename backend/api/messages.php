<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

require_once '../config/database.php';

// Handle message submission from customers
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    // Validate required fields
    if (!isset($data['name']) || !isset($data['email']) || !isset($data['subject']) || !isset($data['message'])) {
        echo json_encode(['success' => false, 'message' => 'All fields are required']);
        exit;
    }
    
    try {
        $stmt = $pdo->prepare("
            INSERT INTO messages (name, email, phone, subject, message) 
            VALUES (?, ?, ?, ?, ?)
        ");
        
        $result = $stmt->execute([
            $data['name'],
            $data['email'],
            $data['phone'] ?? '',
            $data['subject'],
            $data['message']
        ]);
        
        if ($result) {
            echo json_encode(['success' => true, 'message' => 'Your message has been sent successfully']);
        } else {
            echo json_encode(['success' => false, 'message' => 'Failed to send message']);
        }
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => 'Database error: ' . $e->getMessage()]);
    }
}

// Get all messages (for admin dashboard)
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Simple authentication check (should implement proper JWT auth in production)
    $headers = getallheaders();
    if (!isset($headers['Authorization']) || $headers['Authorization'] !== 'Bearer admin-token') {
        echo json_encode(['success' => false, 'message' => 'Unauthorized access']);
        http_response_code(401);
        exit;
    }
    
    try {
        $status = isset($_GET['status']) ? $_GET['status'] : null;
        
        if ($status) {
            $stmt = $pdo->prepare("SELECT * FROM messages WHERE status = ? ORDER BY created_at DESC");
            $stmt->execute([$status]);
        } else {
            $stmt = $pdo->query("SELECT * FROM messages ORDER BY created_at DESC");
        }
        
        $messages = $stmt->fetchAll();
        echo json_encode(['success' => true, 'data' => $messages]);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => 'Database error: ' . $e->getMessage()]);
    }
}

// Update message status
if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    if (!isset($data['id']) || !isset($data['status'])) {
        echo json_encode(['success' => false, 'message' => 'Message ID and status are required']);
        exit;
    }
    
    try {
        $stmt = $pdo->prepare("UPDATE messages SET status = ? WHERE id = ?");
        $result = $stmt->execute([$data['status'], $data['id']]);
        
        if ($result) {
            echo json_encode(['success' => true, 'message' => 'Message status updated successfully']);
        } else {
            echo json_encode(['success' => false, 'message' => 'Failed to update message status']);
        }
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => 'Database error: ' . $e->getMessage()]);
    }
}
?>