'use strict';
/*{
    /!*1. Задание (циклы)
    Вывести числа от 4 до 400 на экран.*!/
    for (let i = 4; i < 401; i++) {
        console.log(i);
    }
}*/

/*{
    /!*2. Задание (циклы)
    Вывести числа в последовательности: 4 7 10 13 с помощью цикла.*!/

    let i = 4;
    while (i<=13) {
        console.log(i);
        i+=3;


}
}*/

/*    {
        /!*3. Задание (циклы)
        Вывести числа 654 653 652 до нуля.*!/

        let i = 654;
        while (i) {
            console.log(i--);
        }
    }*/


/*    {
        /!*4. Задание (циклы)
        Вывести все годы с 1983 до 2017.*!/
        for (let i = 1983; i <= 2017; i++) {
            console.log(i);
        }
    }*/

/*    {
        /!*5. Задание (циклы)
        Вывести числа -4 -2 0 2 4 6 ...100.*!/
        for (let i = -4; i <= 100; i++) {
            console.log(i);
        }
    }*/

 /*   {
        /!*6. Задание (циклы)
        С помощью цикла напечатайте таблицу умножения на 7 от 1 до 9.*!/
        for (let n = 7; n <= 7; n++) {
            for (let m = 1; m < 10; m++) {
                console.log(n * m);
            }
        }

    }*/

/*{
    //8. Задание (циклы)
    // Найти сумму чисел от 0 до 100 (включительно). (0+1+2+3+4+5).

    let res=0;
    for(let i=0;i <= 100;i++){
        res+=i;
    }
    console.log(res);
}*/

/*{
    /!*9. Задание (циклы)
    С помощью цикла вывести произведение чисел от 1 до 50.*!/

    let res=1;
    for(let i=1;i <= 50;i++){
        res *=i;
    }
    console.log(res);
}*/

/*{
/!*    10. Задание
    Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.
    Длину массива вводить через prompt.*!/

 const arr=[];
 let size = prompt("Enter size array: ",1);
 let christmas_tree = "";

for (let i=1; size>=i;i++){
    christmas_tree +="x";
    arr.push(christmas_tree);

}
    console.log(arr)
}*/

/*{
    /!*    11. Задание
        Заполните массив следующим образом: в первый элемент запишите '1',
        во второй '22', в третий '333' и так далее.
        Длину массива вводить через prompt.*!/
    const arr = [];
    let size = prompt("Enter size array: ", 1);
    let some = "";
    let res = 0;

    for (let i = 1; size >= i; i++) {
        some += 1;
        res = some * i;
        arr.push(res);
    }
    console.log(arr);

}*/

{
   /* 12. Задание
    Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.*/

   let arr=[1, 3, 5, 7, ,8 ,9 ,4 ,5 ,6 ,7 ,5 ,2 ,5 ,6,];


}

/*{
 /!*   13. Задание
    Дан массив с числами. Не используя метода reverse
    переверните его элементы в обратном порядке.
*!/

 const arr= [1,2,3,4,5,6,7,8,9];

    for (let i=arr.length;i>0;i--){
        console.log(i);
    }

}*/

/*{
    /!*14. Задание
    Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти.*!/

    let arr=[1,5,3,6,10,13,15,14,16,17,18,19,50,25,28,3,9];

    let arrnext = [];
    for (let el of arr) {
        if (el > 0 && el < 10) {
             arrnext.push(el);
        }
    }
    console.log (arrnext);
}*/



/*
{
    // Сформировать 3 матрицы изображенные на картинке
    const size = 10;
    const randomMatrix = [];

    for (let row = 0; row < size; row++) {
        randomMatrix[row] = [];
        for (let cel = 0; cel < size; cel++) {
            randomMatrix[row][cel] = (row + 1) * (cel + 1)
        }
    }
    console.log(randomMatrix)
}
*/
















