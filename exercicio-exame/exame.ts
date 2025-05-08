// https://ifpb.github.io/exercises/problems/object-exam/

export class Weight{
    weights: object;

    constructor(weights: object){
        this.weights = weights;
    }
}

export class Answer{
    name: string;
    results: object;
    grade?: unknown = 0;

    constructor(name: string, results: object){
        this.name = name;
        this.results = results;
    }
}

export class Exam{
    private weight: Weight;
    private answer: Answer;
    private exams: Array<Answer> = [];

    constructor(answer: Answer, weight: Weight){
        this.answer = answer;
        this.weight = weight;
    }

    public add(exam: Answer):void {
        let grade:number = 0;
        for(let i in this.answer.results){
            grade += (exam.results[i] === this.answer.results[i]) ? this.weight[i] : 0;
        }
        exam.grade = grade;
        this.exams.push(exam)
    }

    public avg():number {
        let counter = 0;
        for(let exam of this.exams){ // itero sobre os valores
            if(typeof exam.grade === 'number')
                counter += exam.grade;
        }

        let avg = counter/this.exams.length;

        return avg;
    }

    public min(count:number): Array<number>{
        let grades: Array<number> = [];
        for(let exam of this.exams){
            if(typeof exam.grade === 'number')
            grades.push(exam.grade);
        }
        return grades.slice(0, count);
    }

    public max(count:number): Array<number>{
        let grades: Array<number> = [];
        for(let exam of this.exams){
            if(typeof exam.grade === 'number')
            grades.push(exam.grade);
        }
        return grades.slice(-count);
    }

    public lt(limit:number):Array<number>{
        let res: Array<number> = [];
        for(let exam of this.exams){
            if(typeof exam.grade === 'number'){
                if(exam.grade < limit){
                res.push(exam.grade);
                }
            } 
          }
        return res;
        
    }

    public gt(limit:number):Array<number>{
        let res: Array<number> = [];
        for(let exam of this.exams){
            if(typeof exam.grade === 'number'){
                if(exam.grade > limit){
                  res.push(exam.grade);
                }
            }
          }
        return res;
    }
    
}