 classList.add() to add new classes
 classList.remove() to remove  classes
 classList.contains() to check if  class exist in webpage 

 classList.toggle() to toggle between add and remove in web page class




 let heading = document.querySelector('h1');
undefined

heading.classList
DOMTokenList [value: '']


heading.classList.add("green");
undefined


heading.classList.remove("green");
undefined


heading.classList.contains("green");
false


heading.classList.contains("underline");
false


heading.classList.toggle("green");
true


heading.classList.toggle("green");
false


heading.classList.toggle("green");
true

    

----------------------------------------------------------------



let box= document.querySelector(".box");
undefined
box.classList.add("yellowBg");
undefined
box.classList
DOMTokenList(2) ['box', 'yellowBg', value: 'box yellowBg']


 ------------------------------------------------------------------


undefined
h4.parentElement  //    TELLS WHO IS PARENT ELEMENT
<div class=​"box yellowBg">​…​</div>​

h4.children//SHOWCASES THEM
HTMLCollection [][[Prototype]]: HTMLCollectionitem: ƒ item()length: (...)namedItem: ƒ namedItem()constructor: ƒ HTMLCollection()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "HTMLCollection"get length: ƒ length()[[Prototype]]: Object

h4.childElementCount// SHOWCES NO  OF CHILDS i.e  H4

h4.childElementCount;
0
box.childElementCount;//SAME
2
let ul = document.querySelector('ul');
undefined
ul.parentElement
<div class=​"box yellowBg">​…​</div>​
ul.childElementCount;
3
ul.children;
HTMLCollection(3) [li, li, li]


------------------------------------------------------------------





l
<ul>​…​</ul>​
ul.children
HTMLCollection(3) [li, li, li]
ul.children[0]
<li>​…​</li>​
ul.children[1]
<li>​…​</li>​::marker​<a href=​"#" class=​"boxLink" style=​"color:​ yellow;​">​First Appearance​</a>​</li>​
ul.children[2]
<li>​…​</li>​::marker​" Created by "<ul>​…​</ul>​</li>​
ul.children[3]
undefined
ul.children[2].previousElementSibling
<li>​…​</li>​::marker​<a href=​"#" class=​"boxLink" style=​"color:​ yellow;​">​First Appearance​</a>​</li>​
ul.children[2].nextElementSibling
null
ul.children[1].nextElementSibling
<li>​…​</li>​



------------------------------------------------------------


let img =document.querySelector('img');
undefined
img.previousElementSibling
<h1>​ The Amazing Spider Man​</h1>​
img.previousElementSibling.style.color
''
img.previousElementSibling.style
CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
img.previousElementSibling.style.color ="green";
'green'

-------------------------------------------------------

#CREATE ELEMENT
document.createElement('p')

  document.createElement('p');
<p>​</p>​
let newp= document.createElement;
undefined
let newp= document.createElement('p');
undefined
console.dir(newp);
VM5715:1 p
undefined
newp.innerText = "hi everyone ";
'hi everyone '
console.dir(newp);
VM5944:1 p 


#APPEND CHILD
  

let box = document.querySelector('box');
undefined
box.appendChild(newp);
VM7222:1 Uncaught TypeError: Cannot read properties of null (reading 'appendChild')
    at <anonymous>:1:5
(anonymous) @ VM7222:1
let body = document.querySelector('body');
undefined
body.appendChild(newp);
<p>​hi everyone​</p>​
let box = document.querySelector('.box');
undefined
body.appendChild(newp);
<p>​hi everyone​</p>​
box.appendChild(newp);
<p>​hi everyone​</p>​
let btn = document.createElement('button');
undefined
console.dir(btn);
VM7559:1 button
undefined
console.dir('btn');
VM7567:1 btn
undefined
console.dir(btn);
VM7574:1 button
undefined
btn.inner
undefined
btn.innerText ="click me";
'click me'
box.appendChild(btn);
<button>​click me​</button>​ 


to add new append 
newp
<p>​hi everyone​</p>​
newp.append(btn)
undefined
newp.append(sairaj)
VM7886:1 Uncaught ReferenceError: sairaj is not defined
    at <anonymous>:1:13
(anonymous) @ VM7886:1
newp.append(")
VM7897:1 Uncaught SyntaxError: Invalid or unexpected token
newp.append("sai)
VM7907:1 Uncaught SyntaxError: Invalid or unexpected token
newp.append("sai")
undefined

---------------------------------------------------------------------

        append child 




        document.createElement('p');
<p>​</p>​
let newp = document.createElement('p');
undefined
console.dir(newP);
VM842:1 Uncaught ReferenceError: newP is not defined
    at <anonymous>:1:13
(anonymous) @ VM842:1
console.dir(newp);
VM853:1 p
undefined
newp.innerText= "hi there";
'hi there'
console.dir(newp);
VM1054:1 p
undefined
let box =  document.querySelector('box');
undefined
box.appendchild(newp);
VM1390:1 Uncaught TypeError: Cannot read properties of null (reading 'appendchild')
    at <anonymous>:1:5
(anonymous) @ VM1390:1
let box =  document.querySelector('box');
undefined
box.appendChild(newp);
VM1519:1 Uncaught TypeError: Cannot read properties of null (reading 'appendChild')
    at <anonymous>:1:5
(anonymous) @ VM1519:1
let body = document.querySelector('body');
undefined
body.appendChild(newp);
<p>​hi there​</p>​
let box = document.querySelector('box');
undefined
box.appendChild(newp);
VM1896:1 Uncaught TypeError: Cannot read properties of null (reading 'appendChild')
    at <anonymous>:1:5
(anonymous) @ VM1896:1
body.box.appendChild(newp);  ///if you are appending in the body use .abc  for ex of body ther is .box
VM1911:1 Uncaught TypeError: Cannot read properties of undefined (reading 'appendChild')
    at <anonymous>:1:10
(anonymous) @ VM1911:1
box.appendChild(newp);
VM1917:1 Uncaught TypeError: Cannot read properties of null (reading 'appendChild')
    at <anonymous>:1:5
(anonymous) @ VM1917:1
let box = document.querySelector('.box');
undefined
box.appendChild(newp);
<p>​hi there​</p>​
let btn = document.createElement('button');
undefined
console.dir(btn);
VM2173:1 button
undefined
btn.innerText = "clickme":
VM2248:1 Uncaught SyntaxError: Unexpected token ':'
btn.innerText = "clickme";
'clickme'
box.appendChild(btn):
VM2344:1 Uncaught SyntaxError: Unexpected token ':'
box.appendChild(btn);
<button>​clickme​</button>​





addddig text after newp 
<p>​hi there​</p>​
newp.appendChild("this is me ");
VM2506:1 Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
    at <anonymous>:1:6
(anonymous) @ VM2506:1
newp.append("this is me ");
undefined
newp.append(btn);
undefined
newp.append("nqwdbdhd");
undefined
 



 ------------------------------------------------------
 \

PREPAND  
ADDS ELEMENT TO START OF THE PARA

box.prepend(btn);
undefined
let  btn  = document.createElement('button');
undefined
btn.innerHTML = "NEW BUTTON";
'NEW BUTTON'
    let p = document.querySelector('p');
undefined
p
<p>​…​</p>​
btn
<button>​NEW BUTTON​</button>​
p.insertAdjacentElement('beforebegin',btn);
<button>​NEW BUTTON​</button>​
p.insertAdjacentElement('afterbegin',btn);
<button>​NEW BUTTON​</button>​
it prints button at start of AudioParam
VM3577:1 Uncaught SyntaxError: Unexpected identifier 'prints'
it prints button at start of PARA
VM3621:1 Uncaught SyntaxError: Unexpected identifier 'prints'
p.insertAdjacentElement('beforebegin',btn);
<button>​NEW BUTTON​</button>​
p.insertAdjacentElement('beforebegin',btn);
<button>​NEW BUTTON​</button>​
p.insertAdjacentElement('afterbegin',btn);
<button>​NEW BUTTON​</button>​
prints at start of para 
VM3739:1 Uncaught SyntaxError: Unexpected identifier 'at'
p.insertAdjacentElement('beforebegin',btn);
<button>​NEW BUTTON​</button>​
prints ouside of para
VM3833:1 Uncaught SyntaxError: Unexpected identifier 'ouside'
p.insertAdjacentElement('afterend',btn);
<button>​NEW BUTTON​</button>​
prints outside of para at end
VM3953:1 Uncaught SyntaxError: Unexpected identifier 'outside'
p.insertAdjacentElement('beforeend',btn);
<button>​NEW BUTTON​</button>​
prints at end of para
VM4152:1 Uncaught SyntaxError: Unexpected identifier 'at'



----------------------------------------------------------


REMOVE CHILD AND REMOVE


let body =  document.querySelector('body');
undefined
p.insertAdjacentElement('afterend',btn);
<button>​NEW BUTTON​</button>​
body.removeChild(btn);
<button>​NEW BUTTON​</button>​
this removes the child button 
VM4843:1 Uncaught SyntaxError: Unexpected identifier 'removes'
btn.remove
ƒ remove() { [native code] }
btn.remove
ƒ remove() { [native code] }
p.insertAdjacentElement('afterend',btn);
<button>​NEW BUTTON​</button>​
btn.remove
ƒ remove() { [native code] }
btn.remove();
undefined
p.remove();
undefined
p.remove();
undefined
body.remove();
undefined
remove used when to delete element from whole page 
VM5293:1 Uncaught SyntaxError: Unexpected identifier 'used' 




