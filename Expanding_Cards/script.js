const panels = document.querySelectorAll('.panel')

// panels.forEach((panel) => {
//     panel.addEventListener('click', () => {
//         removeActiveClasses()
//         panel.classList.add('active')
//     })
// })

const addClickListners = () => {
    panels.forEach((panel) => {
        console.log(123)
        panel.addEventListener('click', () => {
            removeActiveClasses();
            panel.classList.add('active');
        })
    })
}

// function removeActiveClasses() {
//     panels.forEach((panel) => {
//         panel.classList.remove('active')
//     })
// }
const removeActiveClasses = () => {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}

addClickListners();