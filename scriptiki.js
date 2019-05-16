// const favs = document.getElementsByClassName("favorite-count toggles");
// const list = document.getElementById("entry-item-list");

// let arr = [];
// let siralama = [];
// for(let i = 0; i < favs.length; i++){
//     arr[i] = Number(favs[i].innerText);
// }

// for(let i = 0; i < favs.length; i++){
//     console.log(arr[i]);
// }
// // let i = arr.indexOf(Math.max(...arr));
// // console.log(i);



// for(let j = 0; j < favs.length; j++){
//     let i = arr.indexOf(Math.max(...arr));
//     console.log(favs[i].textContent);
//     siralama[j] = i;
//     arr[i] = -1;
// }

// console.log("Second: ");
// for(let i = 0; i < arr.length; i++){
//     console.log(siralama[i]);
// }
// for(let i = favs.length - 1 ; i > 0; i--){
//     list.insertBefore(favs[siralama[i]].parentElement.parentElement.parentElement.parentElement, list.childNodes[0]);
// }