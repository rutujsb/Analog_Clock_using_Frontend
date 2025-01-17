# Analog_Clock_using_Frontend

A real-time analog clock built using HTML, CSS, and JavaScript. This project dynamically updates the clock hands to display the current time with smooth transitions.

✨ Features:
Real-time Updates: The clock updates every second to reflect the current time.
Analog Design: Styled to resemble a traditional analog clock.
Responsive and Minimal: Designed for all screen sizes with a clean, simple layout.
💡 JavaScript Logic:
Second Hand:
Retrieves the current seconds using Date.getSeconds().
Calculates the rotation angle based on (seconds / 60) * 360 and applies it using transform.
Minute Hand:
Uses Date.getMinutes() to get the current minutes.
Rotates the hand based on (minutes / 60) * 360.
Hour Hand:
Retrieves the current hour using Date.getHours() and adjusts for partial hours using minutes.
Rotation is calculated with (hours / 12) * 360 + (minutes / 2).
Updates the rotation of each hand every second using setInterval().
 Tech Stack: HTML, CSS, JavaScript.
