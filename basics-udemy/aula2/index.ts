// string, number, boolean

const nome: string = 'Suetone';
const numero: number = 5;
const boleano: boolean = true;

// enum

enum Color { Red = 'red', Blue = 'blue', green = 'green'};
console.log(Color.Red);

// Arrays e tuplas
const list: number[] = [1,3,5];
const tuple: [number, string] = [3, 'a'];
console.log(list, tuple);

const inferencia = true;
console.log(typeof(inferencia));

// Tem também o any e o unknown
// o any desativa a verificação de tipos (não recomendado)
