// Function to handle search functionality
function searchNews() {
    var searchTerm = document.getElementById("searchInput").value.trim();
    if (searchTerm === "") {
        alert("Please enter a search term.");
        return;
    }
    
    // Dummy data for demonstration (replace this with actual search functionality)
    var availableContent = ["politics", "technology", "science", "entertainment", "sports"];
    var searchResults = [];
    for (var i = 0; i < availableContent.length; i++) {
        if (availableContent[i].toLowerCase().includes(searchTerm.toLowerCase())) {
            searchResults.push(availableContent[i]);
        }
    }
    
    displaySearchResults(searchResults);
}

// Function to display search results on the page
function displaySearchResults(results) {
    var searchResultsContainer = document.getElementById("searchResults");
    searchResultsContainer.innerHTML = ""; // Clear previous search results
    
    if (results.length === 0) {
        searchResultsContainer.innerHTML = "<p>No results found.</p>";
    } else {
        var resultHTML = "<ul>";
        for (var i = 0; i < results.length; i++) {
            resultHTML += "<li>" + results[i] + "</li>";
        }
        resultHTML += "</ul>";
        searchResultsContainer.innerHTML = resultHTML;
    }
}

// Event listener for the search button
document.getElementById("searchBtn").addEventListener("click", searchNews);
