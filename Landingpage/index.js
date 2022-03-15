// definição das variáveis
var community = document.getElementById('a1')
var tutorial = document.getElementById('a2')
var openSource = document.getElementById('a3')
var comands = document.getElementById('a4')

// adicionando um eventListener 
community.addEventListener('mouseenter', () => {
    community.style.backgroundColor = '#FFF2E7'
    community.style.width = '200px' 
    community.style.color = '#2F2325'
})
community.addEventListener('mouseout', () => {
    community.style.backgroundColor = ''
    community.style.width = ''
    community.style.color = ''
})

//adicionando um eventListener
tutorial.addEventListener('mouseenter', () => {
    tutorial.style.backgroundColor = '#FFF2E7'
    tutorial.style.width = '100px'
    tutorial.style.color = '#2F2325' 
})
tutorial.addEventListener('mouseout', () => {
    tutorial.style.backgroundColor = ''
    tutorial.style.width = ''
    tutorial.style.color = ''
})

//a mesma coisa...
openSource.addEventListener('mouseenter', () => {
    openSource.style.backgroundColor = '#FFF2E7'
    openSource.style.width = '120px' 
    openSource.style.color = '#2F2325'
})
openSource.addEventListener('mouseout', () => {
    openSource.style.backgroundColor = ''
    openSource.style.width = ''
    openSource.style.color = ''
})

//sacou já, né?
comands.addEventListener('mouseenter', () => {
    comands.style.backgroundColor = '#FFF2E7'
    comands.style.width = '120px'
    comands.style.color = '#2F2325' 
})
comands.addEventListener('mouseout', () => {
    comands.style.backgroundColor = ''
    comands.style.width = ''
    comands.style.color = ''
})