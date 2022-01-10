function calculadora () {
    const operacao = prompt ("Escolha uma operação:\n1-soma (+)\n2-subtração(-)\n3-multiplicação(*)\n4-divisão real(/)\n5-divisão inteira(%)\n6-potenciação(^^)")
}

let n1 = prompt("Insira o primeiro valor: ");
let n2 = prompt("Insira o segundo valor: ");
let resultado; 

if (operacao ==1 ){
    soma()
} else if (operacao ==2)
    {
        subtracao();
    }
        else if (operacao ==3)
        {
            multiplicacao();
        }
            else if (operacao ==4)
            {
                 divisaoReal();
            }
                else if (operacao ==2)
                {
                    divisaoInteira();
                }
                    else (operacao ==2)
                    {
                        potenciacao();
                     }



calculadora ();