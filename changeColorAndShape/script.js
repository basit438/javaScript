const shapeContainer = document.getElementById('shape-container');
const changeColorBtn = document.getElementById('change-color-btn');
const changeShapeBtn = document.getElementById('change-shape-btn');

const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#33FFF0', '#FF8C33', '#8C33FF', '#FF3333', '#33FFB5', '#333FFF'];
const shapes = ['triangle', 'square', 'circle', 'rectangle', 'diamond'];

changeColorBtn.addEventListener('click', () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    shapeContainer.style.backgroundColor = randomColor;
    shapeContainer.style.borderBottomColor = randomColor;
    if (shapeContainer.classList.contains('diamond') || shapeContainer.classList.contains('triangle')) {
        shapeContainer.style.backgroundColor = '';
    }
});

changeShapeBtn.addEventListener('click', () => {
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    shapeContainer.className = '';
    shapeContainer.classList.add('shape', randomShape);
    shapeContainer.style.backgroundColor = '';
    shapeContainer.style.borderBottomColor = '';
});
