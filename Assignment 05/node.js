/**
* A Node represents an HTML Element. A node can have a tag name,
* a list of CSS classes and a list of children nodes.
*/
class Node {

  constructor(tag, id, children, classes) {
    // Tag name of the node.
    this.tag = tag;
    // id name of this tag.
    this.id =id;
    // Array of child nodes.
    this.children = children; // All children are of type Node
    // Array of CSS class names (string) on this element.
    this.classes = classes;

  }
  
  /**
  * Returns descendent nodes matching the selector. Selector can be 
  * a tag name or a CSS class name.
  * 
  * For example: 
  * 
  * 1.
  * <div> 
  *   <span id="span-1"></span>
  *   <span id="span-2"></span>
  *   <div>
  *     <span id="span-3"></span>
  *   </div>
  * </div>
  * Selector `span` should return 3 span nodes in this order
  * span-1 -> span-2 -> span-3.
  *
  * 2.
  * <div> 
  *   <span id="span-1" class="note"></span>
  *   <span id="span-2"></span>
  *   <div>
  *     <span id="span-3"></span>
  *   </div>
  * </div>
  * Selector `.note` should return one span node with `note` class.
  *
  * 3.
  * <div> 
  *   <span id="span-1" class="note></span>
  *   <span id="span-2"></span>
  *   <span id="span-3"></span>
  *   <article>
  *     <div>
  *       <span id="span-3"></span>
  *     </div>
  *   </article>
  * </div>
  * Selector `.note ~ span` should return two span nodes.
  * span-1 -> span-2.
  * 
  * @param {string} the selector string.
  * @returns {Array} Array of descendent nodes.
  * @public
  */

  // A search function to check a particular selector from HTML DOM Tree

  search(selector) {
    if(parent == 0){
      parent = 1;
      parentNode = this.id;
    }
    for(let i = 0; i < this.children.length; i++){
      first = 1;
      this.children[i].search(selector);
    }

    //checking for id match
    if(first == 1 && this.id != parentNode){
      if(this.tag == selector){
        matches.push(this.id);
      }
      //if id didnt match then checking for class match
      else{
        if(this.id != parentNode){
          for(let j = 0; j < this.classes.length; j++){
            let tempClass = selector.replace(".","");
            if(this.classes[j].includes(tempClass)){
              matches.push(this.id);
            }
          }
        }
      }
    }
    return matches;
  }
  
}


/* DOM -
<body id="content">
  <div id="div-1" class="mainContainer">
    <span id="span-1" class="note"></span>
    <span id="span-2"></span>
    <div id="div-2" class="subContainer1">
      <p id="para-1" class="sub1-p1 note"></p>
      <span id="span-3" class="sub1-span3"></span>
    </div>
    <div id="div-3" class="subContainer2">
      <section id="sec-1">
        <label id="lbl-1"></label>
      </section>
    </div>
    <div id="div-4">
      <span id="span-4" class="mania"></span>
      <span id="span-5" class="note mania"></span>
    </div>
    </div>
  <span id="span-6" class="randomSpan"></span>
</body>
*/

//constructing a Tree using js 

let span1 =new Node("span","span-1",[],["note"]);
let span2 =new Node("span","span-2",[],[]);
let span3 =new Node("span","span-3",[],["sub1-span3"]);
let span4 =new Node("span", "span-4",[],["mania"]);
let span5 =new Node("span","span-5",[],["note,mania"]);
let span6 =new Node("span","span-6",[],["randomSpan"]);

let label =new Node("label","lbl-1",[],[]);

let pNode1= new Node("p","para-1",[],["sub1-p1,note"]);

let section = new Node("section","sec-1",[label],[]);

let randomNode =new Node("span", "span-6",[],["randonSpan"]);

let divNode2 = new Node("div","div-2",[pNode1,span3],["subContainer1"]);
let divNode3 = new Node("div","div-3",[section],["subContainer2"]);
let divNode4 =new Node("div", "div-4",[span4,span5],[]);

let divNode1= new Node("div","div-1", [span1,span2,divNode2,divNode3,divNode4],["maincontainer"]);

let body = new Node("body", "content",[divNode1,randomNode],[]);

//Initializing the variables

let parentNode ="";
let parent = 0;
let first = 0;
let matches = [];



try{
  
  // Testing
  console.log("Started...");
  
  //calling search to check for the span nodes inside divnode1
  // Test case 1 -
  //console.log(divNode1.search("span"));
  //OUTPUT - [ 'span-1', 'span-2', 'span-3', 'span-4', 'span-5' ]

  //calling search to check for .note class under divnode1
  // Test case 2 - 
  //console.log(divNode1.search(".note"));
  //OUTPUT - [ 'span-1', 'para-1', 'span-5' ]
  
  //calling search to check for label node
  // Test case 3 -
  //console.log(divNode1.search("label"));
  //OUTPUT - [ 'lbl-1' ]
  
  //calling search to check for .note class in p tag
  // Test case 4 - 
  //console.log(pNode1.search(".note"));
  //OUTPUT - []
  
  //calling search to check for div tag within divNode1
  // Test case 5 -
  //console.log(divNode1.search("div"));
  //OUTPUT - [ 'div-2', 'div-3', 'div-4' ]
  
  //calling search to check for div using random node
  // Test case 6 - 
  //console.log(randomNode.search("div"));
  //OUTPUT - []
  
  //calling search to check for section tag that is not present in divNode2
  // Test case 7 -
  //console.log(divNode2.search("section"));
  //OUTPUT - []
  
  //handling invalid input
  // Test case 8 -
  //console.log(body.search());
  //OUTPUT - Invalid Input
  
  //calling search to check for section tag in the body
  // Test case 9 -
  //console.log(body.search("section"));
  //OUTPUT - [ 'sec-1' ]
  
  //calling search to check for random node outside the divNode1
  // Test case 10 -
  //console.log(divNode1.search(".randmSpan"));
  //OUTPUT - []


 }catch(exception){
   console.log("Invalid Input");
}
