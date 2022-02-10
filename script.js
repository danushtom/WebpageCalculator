
class Calc {
    constructor(answerTextElement,operationTextElement) {
        this.answerTextElement = answerTextElement
        this.operationTextElement = operationTextElement
        this.clear()
    }

    clear(){
        this.answer = ''
        this.operation = ''
        this.operand = undefined
    }

    delete(){

    }

    append(numbers){

        this.operation = numbers

    }

    chooseoperation(operand){

    }

    compute(){

    }

    update(){
        this.answerTextElement.innerHtml = this.operation;
        this.operationTextElement,innerHtml = this.operation;

    }
      
}




const numberButtons = document.querySelectorAll[('data-numbers')]
const operandButtons = document.querySelectorAll[('data-operand')]
const equalsButtons = document.querySelector[('data-equals')]
const answerTextElement = document.querySelector[('data-answer')]
const operationTextElement = document.querySelector[('data-operaton')]


const calc = new Calc(answerTextElement, operationTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        Calc.append(button.innerHtml)
        Calc.update()
    })
    
})

