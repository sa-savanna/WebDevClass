// div container parent of both
var MyContainer  = document.createElement('div');
MyContainer.className="container";

// Row parent of col and child
var MyRow = document.createElement('div');
MyRow.className="row";

// Col
var MyCol = document.createElement('div');
MyCol.className='col-sm-12';

var MyMessage = document.createTextNode('This is TextNode');

// appendChilds
MyRow.appendChild(MyCol);
MyContainer.appendChild(MyRow);
MyRow.appendChild(MyMessage);

document.body.appendChild(MyContainer)

console.log(MyContainer);

/*


<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
myImg.src="http://google.com/image.jpg"
createElements for each html tag
use appendChild
print in body


*/