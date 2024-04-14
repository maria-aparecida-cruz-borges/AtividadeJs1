const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let palpite;

do {
    palpite = Math.floor(Math.random() * 100) + 1;

    if (palpite < numeroAleatorio) {
        console.log("O número é maior.");
    } else if (palpite > numeroAleatorio) {
        console.log("O número é menor.");
    }

    tentativas++;
} while (palpite !== numeroAleatorio);

console.log(`Acertou o número ${numeroAleatorio} em ${tentativas} tentativas`);