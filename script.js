
function fetchNavbar() {
    fetch('../../components/navbar/navbar.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('navbar-container').innerHTML = html;
        })
        .catch(error => console.error('Error fetching navbar:', error));
}

function fetchFooter() {
    fetch('../../components/footer/footer.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('footer-container').innerHTML = html;
        })
        .catch(error => console.error('Error fetching footer:', error));
}


fetchNavbar();
fetchFooter();
