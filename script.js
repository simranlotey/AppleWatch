function toggleSearchBar() {
    var searchBarContainer = document.getElementById("searchBarContainer");
    var searchIconElement = document.querySelector(".search-icon");
    searchBarContainer.style.display =
        searchBarContainer.style.display === "none" ? "block" : "none";
    searchIconElement.style.display =
        searchIconElement.style.display === "none" ? "block" : "none";
}