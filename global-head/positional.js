/*
  This script is added to the head of the website
  it adds the required positional script based on whether the site
  is staged (flowfully.webflow.io) or in prod (www.flowfully.io)
*/
if (window.location.hostname === 'www.flowfully.io') {
  // Create and append the configuration script
  const configScript = document.createElement('script');
  configScript.textContent = `
    window.__positional_config = {
      customerId: "4e48cf72-9f96-4c5a-bdac-097b05a7409a",
    };
  `;
  document.head.appendChild(configScript);

  // Create and append the positional script
  const positionalScript = document.createElement('script');
  positionalScript.src = 'https://assets.positional-bucket.com/positional.min.js';
  positionalScript.defer = true;
  document.head.appendChild(positionalScript);
}