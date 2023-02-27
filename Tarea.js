class deber{
    ejercicio1(){
        //Entrada: escribir dos numeros   10    4
        //Proceso: comparar los dos numeros, si el primero numero es mayor al segundo se realizara la suma
        //         10 y 4=  10>4  en este ejemplo el primer numero es mayor, entonces si podemos realizar la suma
        //         10+4=14
        //Salida: se muetra el mensaje con el resulado de la suma 10+4=4 
        console.warn(`1.Sumar dos numeros siempre cuando el primero sea mayor al segundo`) 
        let num1=Math.floor(Math.random()*10); let num2=Math.floor(Math.random()*10)
        let s=0
        if( num1>num2){
            s=num1+num2
            console.log(`${num1}+${num2}=${s}`)
        }else{
            if(num1==num2){
              console.log(`No se puede realizar la suma ya que ${num1} y ${num2} son iguales`)
            }else{
                console.log(`No se puede realizar la suma ya que ${num1} es menor que ${num2}`)
            }
        }
    }
    ejercicio2(){
        //Entrada: escribir un oprador "+,-,*,/,%" para realizar una operacion matematica   *
        //Proceso: ya que el operador elegido es "*" se realizara una multiplicacion
        //          10 * 3 = 30
        //Salida: mensaje indicando la operacion realizada  10*3=30
        console.warn(`2.Realizar una operacion segun el operador(+,-,*,/,%) realizar la suma, resta, multiplicacion, division y residuo`) 
        let n1=Math.floor(Math.random()*10); let n2=Math.floor(Math.random()*10)
        let op="*"
        let ops="+"; let opr="-"; let opm="*"; let opd="/"; let oprsd="%"
        let s=0; let r=0; let m=0; let d=0; let rsd=0
        if(op=="+"){
            s=n1+n2
            console.log(`${n1} + ${n2} = ${s}`)
        }else{ 
            if(op=="-"){
                r=n1-n2
                console.log(`${n1} - ${n2} = ${r}`)
            }else{
                if(op=="*"){
                    m=n1*n2
                    console.log(`${n1} * ${n2} = ${m}`)
                }else{
                    if(op=="/"){
                        d=n1/n2
                        console.log(`${n1} / ${n2} = ${d}`)
                    }else{
                        console.log(`${n1} % ${n2} = ${rsd}`)
                    }
                }
            }
            
        }
   }   
    ejercicio3(){
        //Entrada: escribir dos numeros   5   10 
        //Proceso: comparar cual de los dos numeros es mayor
        //         5<10 en este ejemplo 10 es mayor de los dos numeros
        //Salida: presentar en un mensaje el numero mayor    
        //         el mayor es 10
        console.warn(`3.Presentar el mayor de dos numeros`) 
        let num1=Math.floor(Math.random()*10)
        let num2=Math.floor(Math.random()*10)
        if(num1>num2){
            console.log(`El mayor es: ${num1}`)
        }else{
            if(num2==num1){
                console.log(`los numeros: ${num1} son ${num2} iguales`)
            }else{
                console.log(`El mayor es: ${num2}`)
            }
        }
    }
    ejercicio4(){
        //Entrada: escribir un nombre    Camila
        //Proceso: leer el nombre
        //Salida: Presentar el nombre   
        //    Camila
        console.warn(`4.Dado un nombre presentarlo`) 
        let nombre="Camila"
        console.log(nombre)
    }
    ejercicio5(){
        //Entrada: escribir el precio de la compra para calcular el valor total considerando el 12% de iva  
        //    $100 
        //Proceso: para calcular el 12% de iva debemos realizar la siguiente operacion
        //           iva=precio de la compra*0.12
        //           iva=100*0.12=12
        //         para calcular el valor total de la compra ya con iva se realiza la siguiente operacion
        //           total=precio+iva
        //           total=100+12=112
        //Salida: mensaje indicando el valor total de la compra tomando en cuenta el iva
        //           el total a pagar con iva es $112
        console.warn(`5.Dado un valor de compra presentar el total considerando un 12% de iva`) 
        let iva="12%"; let precio=100; let total
        iva=precio*0.12
        total=iva+precio
        console.log(`El total a pagar con iva es: ${total}`)
    }
    ejercicio6(){
        //Entrada: escribir un nombre     "Paulina"
        //Proceso: leer y guardar nombre en un ciclo para presentarlo 5 veces
        //Salida: mostrar 5 veces el nombre
        // "Paulina" "Paulina" "Paulina" "Paulina" "Paulina"
        console.warn(`6.Presentar 5 veces un nombre`) 
        let nombre="Paulina"
        let n=1
        for(n=1;n<=5;n++){
            console.log(nombre)
        }
    }
    ejercicio7(){
        //Entrada: Inicio el programa con el numero 3 hasta el 21
        //Prceso: almacenamos estos valores en un ciclo
        //   for(n=3;n<=21;n=n+3)
        //Salida: al ejecutar el programa se deslizaran los numeros multiplos de 3 del 3 al 21
        console.warn(`7.Presentar los numeros multiplos de 3 del 3 al 21`) 
        let n=0
        console.log(`Multiplos de 3 del 3 al 21`)
        for(n=3;n<=21;n=n+3){
            console.log(n)
        }  
    }
    ejercicio8(){
        //Presentar los numeros multiplos de 3 del 21 al 3
        //Entrada: Inicio el programa con el numero 21 hasta el 3
        //Prceso: almacenamos estos valores en un ciclo
        //   for(n=21;n>=3;n=n-3)
        //Salida: al ejecutar el programa se deslizaran los numeros multiplos de 3 del 21 al 3
        console.warn(`8.Presentar los numeros multiplos de 3 del 21 al 3`) 
        let n=21
        console.log(`Multiplos de 3 del 21 al 3`)
        for(n=21;n>=3;n=n-3){
            console.log(n)
        }
    }
    ejercicio9(){
        //Entrada: escribir dos nombres    Maria    lucas
        //Proceso: comparar los nombres para saber si son igueles o diferentes
        //       Maria    lucas= son nombres diferentes
        //Salida: Mensaje que indique que los nombres son diferentes
        //     Los nombres son diferentes
        console.warn(`9.Dados dos nombres indicar si son iguales o diferentes`) 
        let nombre1="Maria"; let nombre2="Lucas"
        if(nombre2==nombre1){
            console.log(`Los nombres son iguales`)
        }else{
            console.log(`Los nombres son diferentes`)
        }
    }
    ejercicio10(){
        //Entrada: Escribimos nuestro arreglo ["98732","42233","24","21","3","89","231","543122","432","3422"] 
        //Proceso: revismos los numeros y vemos cuales tienen menos de 5 caracteres
        //          como ya conocemos su longitud hacemos:
        //             (arreglo[pos].length<5)
        //Salida: presentamos los numeros que tengan menos de 5 caracteres
        // 24, 21,3,89,231,432,3422
        console.warn(`10.Dado diez numeros en un arreglo presentar los elementos que tengan menos de 5 caracteres`) 
        let arreglo=["98732","42233","24","21","3","89","231","543122","432","3422"] 
        console.log(`Presenta elementos de un arreglo que tengan menos de 5 caracteres:`)
        console.log(arreglo)
        let pos=0
        for(let pos=0;pos<10;pos=pos+1){
            if(arreglo[pos].length<5){
                console.log(`pos ${pos} elemento: ${arreglo[pos]}`)
            }
        }
    }
    ejercicio11(){
         //Entrada: Escribimos nuestro arreglo  [23,43,21,45,56,9]
         //Proceso: sacamos la longitud del arreglo    l=6
         //   y escribimos los numeros del arreglo
         //Salida: numeros del arreglo
         // 23  43  21  45  56  9
         console.warn(`11.Dado un arreglo presentar sus elementos`) 
         let arreglo=[23,43,21,45,56,9]
         let i=0
         let longitud=arreglo.length
         console.log(`los elementos del arreglo son:`)
         while(i<longitud){
            console.log(`${arreglo[i]}`)
            i=i+1
         }
    }
    ejercicio12(){ 
        //Entrada: Escribir un arreglo   [3,5,32,8,89,4]
        //Proceso: sacar la longitud y por posicion ir comparando si los numeros son mayores o menores que 10
        //         [3,5,32,8,89,4]= 3<10  5<10  32>10  8<10  89>10  4<10   l=6
        //     los numeros menores que 10 los guardo y los presento
        //          3,5,10,8,4
        //Salida:en un mensaje presentar los numeros del arreglo que sean menores que 10
        //       los numeros del arreglo menores que 10 son 3,5,10,8,4
        console.warn(`12.Dado un arreglo de numeros presentar los menores a 10`) 
        let arreglo=[3,5,32,8,89,4]
        let longitud=arreglo.length
        let i=0
        console.log(`los numeros del arreglo menores de 10 son:`)
        while(i<longitud){
            if(arreglo[i]<10){
                console.log(`${arreglo[i]}`)
            }
            i=i+1
        }
    }
    ejercicio13(){
        //Entrada: escribir un arreglo   [2,40,5,3,89,10]
        //Proceso: calcular la longitud y por posicion identificar los numeros impares y los pares
        // Para  saber si los numeros son pares los dividimos para 2 y si su residuo es cero entonces es par
        //  [2,40,5,3,89,10]= 2%2=0  40%2=0  5%2=1  89%2=1  10%2=0
        //Guardamos los numeros pares y los sumamos
        //   2+40+10=52
        //Guardamos los numeros impares y los presentamos
        //   5   89
        //Salida:mensaje presentando los numeros impares y la suma de los pares
        //   los numeros impares del arreglo son  5   89
        //   la suma de los numeros pares del arreglo es 52
        console.warn(`13.Dado un arreglo de numeros presentar los impares y al final la suma de los pares`) 
        let arreglo=[2,40,5,3,89,10]
        let i=0
        let longitud=arreglo.length
        let s=0
        console.log(`los numeros impares del arreglo son:`)
        while(i<longitud){
            if(arreglo[i]%2 != 0){
            console.log(arreglo[i])
        }else{
            s=s+arreglo[i]
        }
        i=i+1
        }
        console.log(`La suma de los numeros pares en el arreglo es: ${s}` )
}
    ejercicio14(){
        // Entrada: escribir un arreglo  [2,4,5,20,23,45,56,7,34,80]
        // Proceso: calcular la longitud y posicion para saber el primer numero, el medio y el ultimo numero del arreglo
        //  [2,4,5,20,23,45,56,7,34,80] l=10
        //  Para calcular el primer numero, el medio y el ultimo hacemos
        //   primero=arreglo[0]
        //   medio=arreglo[longitud/2]
        //   ultimo=arreglo[longitud-1]
        // Salida: Presentamos 3 mensajes que indiquen los numeros
        //    El primer valor del arreglo es: 2
        //    El valor del medio del arreglo es:23
        //    El ultimo valor del arreglo es:80
        console.warn(`14.Presentar el primero el medio y el ultimo valor de un arreglo`) 
        let arreglo=[2,4,5,20,23,45,56,7,34,80]
        let longitud=arreglo.length
        let i=0
        let primero=arreglo[0]
        let medio=arreglo[longitud/2]
        let ultimo=arreglo[longitud-1]
        console.log(`El primer valor del arreglo es: ${primero}`)
        console.log(`El valor del medio del arreglo es: ${medio}`)
        console.log(`El ultimo valor del arreglo es: ${ultimo}`)
    }
    ejercicio15(){
        //Entrada: Escribir el costo de la compra y con cuanto se pagara
        //    costo=25.5   pago=50
        //Proceso: Para saber el vuelto debemos hacer
        //   pago-compra=vuellto
        //   50-25= 25
        //Salida: mensaje presentanto el vuelto
        //  Su vuelto es de:25
        console.warn(`15.Calcular el vuelto de un a compra dado el costo y el pago`) 
        let pago=50; let vuelto=0; let costo=25
        vuelto=pago-costo
        console.log(`Su vuelto es de:${vuelto}`)
    }
    ejercicio16(){
        // Entrada: escribir un numero para obtener la tabla de multiplicar
        //      4
        //Proceso: multiplicamos el numero hasta el 12
        //  4*1=4  4*2=8  4*3=20  4*4=16.....
        //Salida: despligue de la tabla de multiplicar
        //  4*1=4  4*2=8  4*3=20  4*4=16.....
        console.warn(`16.Presentar la tabla de multiplicar de cualquier numero del 1 al 12`) 
        let num=Math.floor(Math.random()*12)
        let i=1
        let r
        console.log(`Tabla de multiplicar del numero ${num}`)
        for(i=1;i<=12;i++){
           r = num*i
            console.log(num, "*", i, "=", r,)
        }
    }
    ejercicio17(){
        //Entrada:escribir dos numeros  10   5
        //Proceso: al primer numero lo sumamos la cantidad de veces que indique es segundo numero
        // 10*5= indica que debemos sumar el 10 cinco veces
        // 10+10+10+10+10=50 
        //Salida=Mensaje que muestre el resultado de la multiplicacion por medio de sumas sucesivas
        //    el resultado de la multiplicacion por sumas sucesivas es: 50
        console.warn(`17.Realizar la multiplicacion de dos numeros por medio de sumas sucesivas`)  
        let num1=Math.floor(Math.random()*10); let num2=Math.floor(Math.random()*10)
        let s=0; let i=0
        console.log(`Multiplicacion por sumas sucesivas: ${num1}*${num2}`)
        for(i=0;i<num2;i++){
            s=s+num1
            console.log(s-num1,"+", num1,"=", s )
        }
        console.log(`el resultado de la multiplicacion por sumas sucesivas es: ${s}`)
    }
    ejercicio18(){
        //Entrada: escribimos dos numeros 8  2
        //Proceso: empezamos restandole el segundo numero al primer numero
        //         y al resultaso de esa resta le seguimos restanto 2 hasta que el resultado de la resta sea 0
        //       8/2
        //       8-2=6  6-2=4   4-2=2  2-2=0
        // contamos las veces que se a realizado una resta y ese sera el resultado de la division 
        //       8-2=6  6-2=4   4-2=2  2-2=0 = 4
        //       8/2=4
        //Salida: presentar un mensaje con el resultado de la division por restas sucesivas
        //       el resultado de la division por medio de restas sucesivas es 4
        console.warn(`18.Realizar la division de dos numeros por medio de restas sucesivas`) 
        let num1=Math.floor(Math.random()*10); let num2=Math.floor(Math.random()*10)
         let r=num1; let cont=0
        console.log(`Division por restas sucesivas: ${num1}/${num2}`)
        while(r-num2>=0){
            r=r-num2
            console.log(r+num2,"-", num2,"=", r  )
            cont=cont+1
        }
        console.log(`el resultado de la division por medio de restas sucesivas es: ${cont}`)
    }
    ejercicio19(){
        //Entrada: escribir un numero   6
        //Proceso: tomar los valores desde 6 hasta 1 y multlicar esos valores
        // el resultado de la multiplicacion sera el factorial
        //     6,5,4,3,2,1 = 6*5*4*3*2*1=720
        //      720 es el factorial de 6
        //Salida: mensaje indicando el factorial del numero
        //      el factorial de 6 es 720
        console.warn(`19.Calcular el factorial de un numero`)
        let num=Math.floor(Math.random()*10); let r=1; let i=1
        console.log(`factorial de ${num}`)
        for(i=num;i>=1;i--){
            r=r*i
            console.log(i)
        }
        console.log(`el factorial de ${num} es: ${r}`)
    }
    ejercicio20(){
        //Entrada: escribir dos numeros, el primer numero sera la base y el segundo el exponente 5   3
        //Proceso: elevamos el primer numero al segundo numero y multiplicamos el primer numero las veces que indique el segundo
        //    5^3 =5*5*5
        //   el resultado de la multiplicacion sera la respuesta
        //    5*5*5=125
        //Salida: mensaje que presente el resultado del exponente
        //el numero 5 elevado al exponente 3 es 125
        console.warn(`20.Calcular el exponente de un numero`)
        let base=Math.floor(Math.random()*20); let exp=Math.floor(Math.random()*10)
        let cont=0; let x=1
        while(cont<exp){
            cont=cont+1
            x=x*base  
        }
        console.log(`el numero ${base} elevado al exponente ${exp} es: ${x}`)
    }
    ejercicio21(){
        //Calcular la serie de fibonacci dado un numero 
        //Entrada:  escribir la cantidad de numeros que tendra la serie   8
        //  escribir 3 numeros   0 1 1
        //Proceso: con los numeros ingresados hacemos a=0 b=1 c=1
        // 0+1=1
        //   1+1=2
        // a+b=c
        //   a+b=c
        // tenemos que a=b, b=c y c=a+b
        // hacemos esto hasta completar una serie de 8 digitos
        // 0+1=1   1+1=2   1+2=3  2+3=5  3+5=8  5+8=13
        // Salida: presentamos la serie de numeros 
        // 0,1,1,2,3,5,8,13
        console.warn(`21-Calcular la serie de fibonacci dado un numero`)
        let a=0; let b=1; let c=1; let cont=3; let n=8
        console.log(a,b,c)
        while(cont<n){
            a=b;b=c;c=a+b
            console.log(c)
            cont=cont+1
        }
    }
    ejercicio22(){  
        //Entrada: escribir un numero   322
        //Proceso: dividimos el numero para 10 y tomamos el residuo luego dividimos para 10 y tomamos el cociente pero solo la parte entera,
        //         hacemos esto hasta que ya no haya mas que en el cociente aparezca 0
        //  322%10=2    322/10=32
        //   32%10=2     32/10=3
        //    3%10=3      3/10=0
        //Salida: presentar el numero invertido
        // 223
        console.warn(`22.Dado un numero invertirlo`)
        let num=Math.floor(Math.random()*500)
        let digito=0
        console.log(`invertir el numero ${num}`)
        while(num>0){
            digito=Math.floor(num%10)
            num=Math.floor(num/10)
            console.log(digito)
        }
    }
    ejercicio23(){
        //Entrada: escribir un numero   8
        //Proceso: dividir el numero hasta si mismo, sus divisores seran los numeros cuyo residuo al dividir sea 0
        //  8%1=0   8%2=0   8%3=2   8%4=0   8%5=3   8%6=2   8%7=1    8%8=0
        //Salida: mensaje con los numeros divisores de 8
        //   los divisores de 8 son 1,2,4,8
        console.warn(`23.Presentar los divisores de un numero`)
        let num=Math.floor(Math.random()*10)
        let i=0
        console.log(`los divisores de ${num} son:`)
        for(i=1;i<=num;i++){
            if(num%i==0){
                console.log(i)
            }
        }
    }
    ejercicio24(){
        //Entrada:Escribir un numero    6
        //Proceso: dividir el numero desde el 1 hasta un numero menos del ingresado
        //    6%1=0   6%2=0    6%3=0    6%4=2    6%5=1   
        // una vez divido, tomamos los divisores del numero y los sumamos si la suma de los divisores es igual numero entonces es un numero perfecto
        //  divisores= 1  2  3     suma de los divisores= 1+2+3=6
        // el resultado de la suma de los divisores es igual al numero ingresado
        // entonces el numero ingresado es primo
        //Salida: mensaje presentando un mensaje para saber si es perfectoo o no
        //   El numero 6 es perfectvo
        console.warn(`24.Presentar si un numero es perfecto o no (Perfecto:cuando la suma de los divisores incluidos el 1 y excluido el propio numero dada igual al numero`)
        let d=2; let num=Math.floor(Math.random()*10); let p=0
        while(d<=num){
            if(num % d ==0){
                p=p+(num/d)
            }
            d=d+1
        }
        if(p==num){
            console.log(`el numero ${num} es perfecto`)
        }else{
            console.log(`el numero ${num} no es perfecto`)
        }
    }
    ejercicio25(){
        // Verfificar si un numero es primo o no(Primo cuando solo es divisible 
        // para 1 y el propio numero, es decir no tenga divisores)
        //Entrada: Escribimos un numero   5
        //Proceso: dividimos el numero para 1 hasta el mismo numero ingresado
        // 5%1=0  5%2=1   5%3=2   5%4=1    5%5=0
        //  si el residuo del numero es cero solo para 1 y para si mismo entonces es primo
        // 5 es primo
        //Salida: mensaje indicando si el numero es primo o no
        // el numero 5 es primo
        console.warn(`25.Verfificar si un numero es primo o no(Primo cuando solo es divisible para 1 y el propio numero, es decir no tenga divisores)`) 
        let num=Math.floor(Math.random()*10)
        let cont=0; let i=1
        for(i<=1;i<=num;i++){
            if(num%i==0){
                cont=cont+1
            }
        }
        if(cont==2){
            console.log(`el numero ${num} es primo`)
        }else{
            console.log(`el numero ${num} no es  primo`)
        }
    }
}
let deber1=new deber()
let deber2=new deber()
let deber3=new deber()
let deber4=new deber()
let deber5=new deber()
let deber6=new deber()
let deber7=new deber()
let deber8=new deber()
let deber9=new deber()
let deber10=new deber()
let deber11=new deber()
let deber12=new deber()
let deber13=new deber()
let deber14=new deber()
let deber15=new deber()
let deber16=new deber()
let deber17=new deber()
let deber18=new deber()
let deber19=new deber() 
let deber20=new deber()
let deber21=new deber()
let deber22=new deber()
let deber23=new deber()
let deber24=new deber()
let deber25=new deber()
deber1.ejercicio1()
deber2.ejercicio2()
deber3.ejercicio3()
deber4.ejercicio4()
deber5.ejercicio5()
deber6.ejercicio6()
deber7.ejercicio7()
deber8.ejercicio8()
deber9.ejercicio9()
deber10.ejercicio10()
deber11.ejercicio11()
deber12.ejercicio12()
deber13.ejercicio13()
deber14.ejercicio14()
deber15.ejercicio15()
deber16.ejercicio16()
deber17.ejercicio17()
deber18.ejercicio18()
deber19.ejercicio19()
deber20.ejercicio20()
deber21.ejercicio21()
deber22.ejercicio22()
deber23.ejercicio23()
deber24.ejercicio24()
deber25.ejercicio25()