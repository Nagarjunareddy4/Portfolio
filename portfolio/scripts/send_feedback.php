<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Email settings
    $to = "nagarjunareddy9995@gmail.com"; 
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $email_subject = "Feedback Form: $subject";
    $email_body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    // Send email
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Thank you for your feedback!";
    } else {
        echo "There was an error sending your message. Please try again.";
    }
} else {
    echo "Invalid request.";
}
?>