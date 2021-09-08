const pages = [{
    path: "/",
    page: "/pages/home.html",
},
{
    path: "/index.html",
    page: "/pages/home.html",
},
{
    path: "/research.html",
    page: "/pages/research.html",
    navBtn: 'nav-research',
},               
{
    path: "/publication.html",
    page: "/pages/publication.html",
    navBtn: 'nav-publication',
},
{
    path: "/teaching.html",
    page: "/pages/teaching.html",
    navBtn: 'nav-teaching',
},
{
    path: "/presentation.html",
    page: "/pages/presentation.html",
    navBtn: 'nav-presentation',
},           
]

$(document).ready(() => {
    route();

    $('#nav-index').click(() => {
        jumpTo("/")
    })

    $('#nav-research').click(() => {
        jumpTo("research.html")
    })
    
    $('#nav-publication').click(() => {
        jumpTo("publication.html")
    })
    
     $('#nav-teaching').click(() => {
        jumpTo("teaching.html")
    })
    
    $('#nav-presentation').click(() => {
        jumpTo("presentation.html")
    })
})

function jumpTo(pos) {
    window.history.pushState(null, null, pos);
    route();
}

function route() {
    let path = window.location.pathname
    path = path.substr(1, path.length - 6)
    if (path == "") {
        path = "index"
    }
    const htmlPath = path + '.html'
    const pagePath = "/pages/" + htmlPath
    const navBtn = '#nav-' + path

    loadContent(pagePath)
    $('.nav-item').removeClass('active')
    $(navBtn).addClass('active')
}

function loadContent(page) {
    fetch(page)
        .then(rsp => rsp.text())
        .then(rsp => {
            $('#right-content').html(rsp)
        })
}

window.addEventListener('popstate', function (event) {
    route();
}, false);
