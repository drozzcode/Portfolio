
const projectCards = document.querySelectorAll('.project_1, .project_2');


projectCards.forEach((card) => {
    
    card.addEventListener('mouseenter', () => {
        card.classList.add('hovered');
    });

    
    card.addEventListener('mouseleave', () => {
        card.classList.remove('hovered');
    });
});