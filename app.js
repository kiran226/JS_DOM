// var titles= document.getElementsByClassName('title');

// console.log(Array.isArray(titles));
// console.log(Array.isArray(Array.from(titles)));
// Array.from(titles).forEach(title=>{
//     console.log(title);

// })

// var wrap= document.querySelector('#wrapper');
// console.log(wrap);

// var list= document.querySelectorAll('.name');
// console.log(list[3]);

// var wmf= document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wmf);

// var books=document.querySelectorAll("#book-list li .name")
// console.log(books);
// Array.from(books).forEach(book=>{
//     console.log(book);
// })

// var books= document.querySelectorAll('#book-list li .name');
// books.forEach(book=>{
//     book.textContent +=" (book title)";
// })


// const bookList= document.querySelector("#book-list");
// console.log(bookList.innerHTML);

// const bookList= document.querySelector("#book-list");
// bookList.innerHTML="<h2>Books and more Books here in the Library...</h2>";
// bookList.innerHTML+="<p>Most of the books are technology related</p>";
// console.log(bookList);

//nodes
// const banner=document.querySelector('#page-banner');
// console.log(banner);

// const banner=document.querySelector("#page-banner");
// console.log(banner.innerHTML);

// const banner= document.querySelector("#page-banner");
// console.log("#page-banner has the node type of", banner.nodeType);
// console.log("#page-banner has the node name of", banner.nodeName);
// console.log("#page-banner has child nodes of", banner.hasChildNodes());

// const clonedBanner= banner.cloneNode();
// console.log(clonedBanner);

//Traversing the DOM

//upwards to the parent node/element

// const bookList=document.querySelector('#book-list');
// console.log("The parent node is :" , bookList.parentNode);
// console.log("The parent element is ", bookList.parentElement);
// console.log("The parent element is ", bookList.parentElement.parentElement);

// downwards to the child node

// console.log(bookList.childNodes); // Here, we also see the text nodes(here it means line break)
// console.log(bookList.children);   // Here, we won't see the text nodes

//DOM traversal from one sibling to other

// const bookList=document.querySelector("#book-list");
// console.log("The next sibling is ", bookList.nextSibling);
// console.log("The next sibling element is ", bookList.nextElementSibling);

// console.log("The previous sibling is ", bookList.previousSibling);
// console.log("The previous sibling element is ", bookList.previousElementSibling);
// bookList.previousElementSibling.querySelector('p').innerHTML +="<br/>Be cool.."


//Events

// var btns= document.querySelectorAll('#book-list .delete');
// btns.forEach(btn=>{
//     btn.addEventListener('click',function(e){
//         const li= e.target.parentElement;
//         li.parentElement.removeChild(li);
//     });
// });

// const link= document.querySelector('#page-banner a');
// link.addEventListener('click',function(e){
//     e.preventDefault();
//     console.log("navigation to", e.target.textContent ,"is prevented");
// })


//Event bubbling

const list= document.querySelector('#book-list ul');
list.addEventListener('click',function(e){
    if(e.target.className=="delete"){
        const li=e.target.parentElement;
        list.removeChild(li);
    }
})


//forms

//added the submit event
const addForm= document.querySelector('#add-book');
addForm.addEventListener('submit',function(e){
    e.preventDefault();
    const value=addForm.querySelector('input[type="text"]').value;
    console.log(value);

    //creating the elements
    const li= document.createElement('li');
    const bookName= document.createElement('span');
    const deleteBtn= document.createElement('span');

    //append the child
    list.appendChild(li);
    li.appendChild(bookName);
    li.appendChild(deleteBtn);

    //adding the content
    bookName.textContent=value;
    deleteBtn.textContent='delete';

    //add classes 
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');
})


//hide books
var hideBox=document.querySelector('#hide');
hideBox.addEventListener('change',function(e){
    if(hideBox.checked){
        list.style.dipslay="none";
    }else{
        list.style.dipslay="block";
    }
});
console.log(hideBox);



