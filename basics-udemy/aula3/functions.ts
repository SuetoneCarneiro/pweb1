function soma(x: number, y: number): number{
    return x + y;
}
console.log(soma(15, 50));

// Parâmetro opcional
function printName(first: string, last?: string): string{
    return `${first} ${last ?? ""}`;
}
console.log(printName('Nome'));
console.log(printName('Nome', 'Sobrenome'));

// funções anônimas
const subtracao = function (x:number, y:number){
    return x - y;
}

// arrow functions
const array = ['manga', 'goiaba', 'banana', 'uva',]
const res = array.filter(item => item.includes('b'));
console.log(res);
