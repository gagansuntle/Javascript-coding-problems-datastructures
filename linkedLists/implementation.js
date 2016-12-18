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

linkedList.prototype.deleteFirstNode = function() {
		this.head = this.head.next;
		this._length--;
		return this.head;
}

linkedList.prototype.deleteLastNode = function() {
		if(this._length==1){
			this.head = this.head.next;
			this._length--;
			return this.head;
		}
		else{
			var currentNode = this.head;
			var previousNode = null;
			while(currentNode.next!= null) {
				previousNode = currentNode;
				currentNode = currentNode.next;


			}
			previousNode.next = currentNode.next;
			this._length--;
			return this;
		}
		
}

linkedList.prototype.deleteIndex = function(index) {
	if(index==0) {
		this.head = this.head.next;
		this._length--;
		return this;
	}
	else{
		var currentNode = this.head;
		var previousNode = null;
		var count = 0;
		while(count!=index){
			count++;
			previousNode = currentNode;
			currentNode = currentNode.next;
		}
		previousNode.next = currentNode.next;
		this._length--;
		return this;
	}
}

var sll = new linkedList();
sll.add(3);
sll.add(4);
// sll.add(5);
console.log(sll.deleteIndex(1));

// sll.add(6);
// sll.add(7);
// console.log(sll.deleteFirstNode());
// console.log(sll.deleteLastNode());
// console.log(sll._length);
