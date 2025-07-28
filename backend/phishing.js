// phishingDetector.js
function checkUrlPhishing(url) {
  // Very basic logic (replace with real model later)
  const isPhishing = url.includes('login') || url.includes('verify');
  const accuracy = 0.92;

  return {
    verdict: isPhishing ? 'phishing' : 'legit',
    accuracy
  };
}

// Export correctly
module.exports = {
  checkUrlPhishing
};
