import { Exam } from "./exame";
import { Answer } from "./exame";
import { Weight } from "./exame";

const gabarito: Answer = {
    name: 'Prof',
    results: { q1: 'a', q2: 'b', q3: 'a', q4: 'c', q5: 'd' }
};

const peso: Weight = { q1: 2, q2: 2, q3: 2, q4: 2, q5: 2 };

const exame = new Exam(gabarito, peso);

exame.add({
    name: 'Pedro',
    results: { q1: 'a', q2: 'b', q3: 'b', q4: 'b', q5: 'b' },
});

exame.add({
    name: 'Leticia',
    results: { q1: 'a', q2: 'b', q3: 'b', q4: 'b', q5: 'd' },
});

console.log(exame);
console.log(`avg() -> ${exame.avg()}`);
console.log(`min(1) -> ${exame.min(1)}`);
console.log(`max(1) -> ${exame.max(1)}`);
console.log(`lt(5) -> ${exame.lt(5)}`);
console.log(`gt(5) -> ${exame.gt(5)}`);
