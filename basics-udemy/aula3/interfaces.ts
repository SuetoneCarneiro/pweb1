// Objetos 

let usuario: { nome: string, idade: number };

usuario = { nome: 'Suetone', idade: 23};

// Interfaces
interface Pessoa{
    primeiroNome: string,
    segundoNome?: string,
    idade: number
}

interface Funcionario extends Pessoa{
    salario: number
}

class Diretor implements Funcionario{
    idade = 44;
    primeiroNome = 'Mariana';
    salario = 10000;
}

// Types
type Pontos = {
    x: number,
    y: number
}

type Dimensoes = {
    largura: number,
    altura: number
}

type Retangulo = Pontos & Dimensoes;

const ret: Retangulo = {
    largura: 10,
    altura: 10,
    x: 0,
    y: 0
}
