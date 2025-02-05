// Example: Adding language options dynamically
const languageSelector = document.getElementById('language-selector');
const languages = ['English', 'Hebrew', 'Arabic', 'Spanish', 'Portuguese'];

languages.forEach(lang => {
    const link = document.createElement('a');
    link.href = '#'; // You'll need to implement language switching logic
    link.textContent = lang;
    languageSelector.appendChild(link);
    languageSelector.appendChild(document.createTextNode(' | ')); // Add separators
});

// Example: Fetching and displaying guides (you'll need a backend API)
fetch('/api/guides')  // Replace with your API endpoint
    .then(response => response.json())
    .then(guides => {
        // Display guides in the "featured-guides" section
        const featuredGuides = document.getElementById('featured-guides');
        guides.forEach(guide => {
            const guideElement = document.createElement('div');
            guideElement.innerHTML = `<h3>${guide.title}</h3><p>${guide.shortDescription}</p>`;
            featuredGuides.appendChild(guideElement);
        });
    });
// Get the dropdown element
const languageDropdown = document.getElementById('language-dropdown');

// Add an event listener to the dropdown to handle language changes
languageDropdown.addEventListener('change', function() {
  const selectedLanguage = this.value;
  // Call a function to handle the language change (you'll need to implement this)
  switchLanguage(selectedLanguage);
});

function switchLanguage(lang) {
    // Here, you would implement the logic to change the website's language
    // This might involve fetching translations from a server or updating text content based on the selected language.

    // Example: Displaying an alert (replace with your actual implementation)
    alert("Language switched to: " + lang);

    // Example: Setting a language cookie (for persistence across sessions)
    document.cookie = `language=${lang}; path=/`; // Adjust path as needed

    // Example: Reloading the page (simplest approach, but less user-friendly)
    // location.reload();

    // More advanced: Using a localization library (recommended for complex sites)
    // ...
}


// Example: Setting initial language based on cookie or browser default
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = getCookie('language'); // Function to get cookie value
    const defaultLanguage = navigator.language.slice(0, 2); // Get first two letters of browser language code

    const initialLanguage = savedLanguage || defaultLanguage || 'en'; // Priority: saved, browser, default

    languageDropdown.value = initialLanguage; // Set dropdown value

    switchLanguage(initialLanguage); // Apply initial language

});

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
// ... (More JavaScript for form handling, user interactions, etc.)