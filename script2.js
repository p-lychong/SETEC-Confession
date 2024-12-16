document.getElementById("send-btn").addEventListener("click", async () => {
    const fileInput = document.getElementById("image-input");
    const status = document.getElementById("status");

    if (fileInput.files.length === 0) {
        status.textContent = "Please select an image!";
        return;
    }

    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append("chat_id", "YOUR_CHAT_ID"); // Replace YOUR_CHAT_ID
    formData.append("photo", file);

    const botToken = "YOUR_BOT_TOKEN"; // Replace with your bot token
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendPhoto`;

    status.textContent = "Sending image...";

    try {
        const response = await fetch(telegramUrl, {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            status.textContent = "Image sent successfully!";
        } else {
            status.textContent = "Failed to send image.";
        }
    } catch (error) {
        status.textContent = "Error: " + error.message;
    }
});
