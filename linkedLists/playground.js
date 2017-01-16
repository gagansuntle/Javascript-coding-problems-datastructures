 var Node = function (data) {
	this.data= data;
	this.next = null;
}
var linkedList  = function() {
	this._length = 0;
	this.head = null;
}

linkedList.prototype.add = function(val)  {
	let node = new Node(val);

	if(!this.head) this.head = node;
	else{
		node1 = this.head;
		while(node1.next){
			node1= node1.next;
		}
		node1.next = node;
	}
		this._length++;
		return node;
}

linkedList.prototype.removeDuplicates = function() {
	   
        prev = this.head;
        current = this.head.next;
        hash = {};
        while(current != null) {
            if(!hash[current.data]) {
                hash[current.data] = true;
            } else {
                prev.next = current.next;
                this._length--;
            }
            prev = current;
            current = current.next;
        }
}



var bro= new linkedList();
bro.add(1);
bro.add(1);
bro.add(2);
bro.add(2);


console.log(bro._length)
console.log(bro.head.data);
console.log(bro.head.next.data);


