/* 
* Задание 1 
*/


let obj = {
    name: 'Ivan',
    surname: 'Ivanov',
    age: 22,
    position: 'developer',
};

function func () {
for (let key in obj)
if (obj.hasOwnProperty(key)) {
console.log(key + ' - ' + obj[key])
}
}

func(obj);


