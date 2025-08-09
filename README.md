# Frontend For Phishing-Detection
This is the React.js frontend for a phishing URL detection system.
It allows users to input a URL, sends it to the backend for analysis, and displays whether the site is Legit or Phishing, along with model accuracy and comparison to other detection services.

### Features
✅ Simple and responsive UI built with React
✅ URL input and live phishing check
✅ Accuracy comparison chart with other services
✅ Background and branding (CyberGITA)
✅ Dark mode support
✅ Footer with developer info and contact details

# Technologies Used
React.js (Frontend framework)

Axios (HTTP requests to backend)

Chart.js & react-chartjs-2 (Accuracy comparison graph)

CSS for styling (dark & light theme)

## Setup & Installation
Clone the repository

git clone (https://github.com/Ashwin535/Phishing-Checker.git)

Navigate to the frontend folder
cd my-app

# Install dependencies

npm install

# Start the development server

npm start

# Folder Structure

my-app/
│── public/
│   ├── index.html
│   ├── images/ (logo & background)
│
│── src/
│   ├── components/
│   │   ├── Footer.js
│   │   ├── HomePage.js
│   │   ├── ResultPage.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── images.png (Logo)
│
│── package.json
│── README.md

# Backend API Requirements
This frontend expects a backend API with the following endpoint:

POST /api/check-url
Body:

{
  "url": "http://example.com"
}

# Response:

{
  "verdict": "PHISHING",
  "accuracy": 92.0,
  "comparison": {
    "GoogleSafeBrowsing": 95.0,
    "PhishTank": 90.0,
    "VirusTotal": 93.0
  }
}

# Contact
📧 Email: support@cybergita.org
📞 Phone: +91-9876543210
👨‍💻 Developers: Ashwin Raj S
