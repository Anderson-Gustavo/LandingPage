var community = document.getElementById('a1')
var tutorial = document.getElementById('a2')
var openSource = document.getElementById('a3')
var comands = document.getElementById('a4')

community.addEventListener('mouseenter', () => {
    community.style.backgroundColor = 'blue'
    community.style.width = '200px' 
})
community.addEventListener('mouseout', () => {
    community.style.backgroundColor = ''
    community.style.width = ''
})


tutorial.addEventListener('mouseenter', () => {
    tutorial.style.backgroundColor = 'blue'
    tutorial.style.width = '100px' 
})
tutorial.addEventListener('mouseout', () => {
    tutorial.style.backgroundColor = ''
    tutorial.style.width = ''
})


openSource.addEventListener('mouseenter', () => {
    openSource.style.backgroundColor = 'blue'
    openSource.style.width = '120px' 
})
openSource.addEventListener('mouseout', () => {
    openSource.style.backgroundColor = ''
    openSource.style.width = ''
})


comands.addEventListener('mouseenter', () => {
    comands.style.backgroundColor = 'blue'
    comands.style.width = '120px' 
})
comands.addEventListener('mouseout', () => {
    comands.style.backgroundColor = ''
    comands.style.width = ''
})