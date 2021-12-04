let submit = document.getElementById('submit').addEventListener('click', add)

function add(event){
    event.preventDefault()
    let message = document.getElementById('message').value
    let parent = document.getElementById('projects')
    /*let e = document.createElement('div')
    e.innerHTML = `${message}`
    e.className = 'project'
    parent.appendChild(e);*/
    parent.innerHTML += `<div class="project">${message}</div>`
}