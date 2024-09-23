const casa = document.querySelectorAll('td');
let cont = 1;
const vitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
];
let game = true;
casa.forEach((td, index) => {
    td.addEventListener('click', event => {
        if(game){ 
        
        //verica se a casa já existe jogada
        if (td.innerText == '') {

            //Alterna entre X e O   
            if (cont % 2 == 0) {
                td.innerText = "X";
                cont++
            }
            else {
                td.innerText = "O";
                cont++
            }
        }

        // Verifica se há um vencedor
        for (let i = 0; i < vitoria.length; i++) {
            const [a,b,c] = vitoria[i];
            if(casa[a].innerText && casa[a].innerText == casa[b].innerText && casa[a].innerText == casa[c].innerText ){
                var heading = document.createElement('h1');
                var texto = document.createTextNode(`O Jogador ${casa[a].innerText} ganhou`);
                heading.appendChild(texto);
                document.body.appendChild(heading);
                game = false;
            }
        }
        


        //Verifica empate
        if (cont == 10) {
            var heading = document.createElement('h1');
            var texto = document.createTextNode("Deu Velha!");
            heading.appendChild(texto);
            document.body.appendChild(heading);
            game = false;
        }
    }   
    })
})