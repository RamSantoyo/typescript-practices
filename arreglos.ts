const arr: number[] = [2, 5, 3, 4, 1];

const arr2: number[] = [1.2, 2.3, 3.4, 4.5, 5.6];

const arr3: string[] = ['a', 'b', 'c', 'd', 'e'];

const arr4: boolean[] = [true, false, true, false, true];

const arr5: any[] = [1, 'a', true, 2.3, false];

const arr6: (number | string | boolean)[] = [1, 'a', true, 2.3, false];

const arr7: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const arr8: (number | string | boolean)[][] = [[1, 'a', true], [2, 'b', false], [3, 'c', true]];

let total: number = arr.reduce((a, b):number => a + b);
let ordenado: number[] = arr.sort((a,b) => a - b)
let quitar: number[] = arr.splice(4, 1);
let agregar:number = arr.push(5);


console.log(arr);