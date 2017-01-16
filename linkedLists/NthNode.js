// mplement a GetNth() function that takes a linked list and an integer index and returns the node stored at the Nth index position. GetNth() uses the C numbering convention that the first node is index 0, the second is index 1, ... and so on. So for the list 42 -> 13 -> 666, GetNth() with index 1 should return Node(13);

// getNth(1 -> 2 -> 3 -> null, 0).data === 1
// getNth(1 -> 2 -> 3 -> null, 1).data === 2
// The index should be in the range [0..length-1]. If it is not, GetNth() should throw/raise an exception (InvalidArgumentException in PHP). You should also raise an exception (InvalidArgumentException in PHP) if the list is empty/null/None.

function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
	var currentNode = head;
	if(head==null){
		return 0;
	} 
	else{
		var count = 0;
		while(currentNode.next!=null){
			currentNode = currentNode.next;
			count++;
		}
		return count+1;
	}

}

function UserException(message) {
   this.message = message;
}

function getNth(node, index) {

  if(index > (length(node)-1) || index<0){
  	throw new UserException("Invalid index value should throw error.")
  }

  var count = 0;
  while(count<index) {
  	node = node.next;
  	count++;
  }
  return node

}

var node1 = new Node("boo");
var node2= new Node("blah");
var node3 = new Node("boom");
node1.next = node2;
node2.next = node3;
console.log(getNth(node1,-2));