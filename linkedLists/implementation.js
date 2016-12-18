function Node (data) {
	this.data = data;
	this.next = null
}

function linkedList(){
	this._length = 0;
	this.head = null;
}

linkedList.prototype.add = function(val) {
	var node = new Node(val);
	if(this.head===null) {
		this.head = node;
		this._length +=1;
		return node;
	}
	var currentNode = this.head;
	while(currentNode.next) {
		currentNode = currentNode.next;

	}
	currentNode.next = node;
	this._length +=1
	return node;

}

linkedList.prototype.searchAtNode = function(val) {
	if(val<0 ||  val>=this._length)
		return "invalid index"
	if(val==0) {
		return this.head;
	}
	var currentNode = this.head;
	var iterator=0;
	while(iterator!=val){
		currentNode = currentNode.next;
		iterator++;
	}
	return currentNode;
}

var sll = new linkedList();
sll.add(3);
sll.add(4);
sll.add(5);
sll.add(6);
sll.add(7);
console.log(sll.searchAtNode(6));
