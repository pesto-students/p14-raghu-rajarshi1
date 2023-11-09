function displayWindowProperties() {
    // Display user agent string
    console.log('User Agent:', window.navigator.userAgent);
    
    // Display screen width and height
    console.log('Screen Width:', window.screen.width);
    console.log('Screen Height:', window.screen.height);
    
    // Display current URL and path
    console.log('Current URL:', window.location.href);
    console.log('Pathname:', window.location.pathname);
    
    // Storing and retrieving data from sessionStorage and localStorage
    sessionStorage.setItem('sessionName', 'SessionValue');
    localStorage.setItem('localName', 'LocalValue');
    
    // Display stored data in sessionStorage and localStorage
    console.log('Session Storage:', sessionStorage.getItem('sessionName'));
    console.log('Local Storage:', localStorage.getItem('localName'));
}

// Call the function when the page loads.
window.onload = displayWindowProperties;
