turno = 0;

const btnPulsado = (e) => {
    const btn = e.target;
    btn.style.backgroundColor = turno % 2 ? 'red' : 'green';
    turno++; 
};

document.querySelectorAll('button').forEach(
    obj => obj.addEventListener('click', btnPulsado)
);

