let app = document.getElementById('app')
let temporaryContent = document.getElementById('temporaryContent')

const loadTemplate = () => {
    fetch('/template.html')
    .then(response => response.text())
    .then(html =>{
        app.innerHTML = html;
    })
}
loadTemplate();