// Linked Lists - Length & Count

// Implement Length() to count the number of nodes in a linked list.

// length(null) === 0
// length(1 -> 2 -> 3 -> null) === 3
// Implement Count() to count the occurrences of an integer in a linked list.

// count(null, 1) === 0
// count(1 -> 2 -> 3 -> null, 1) === 1
// count(1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3 -> 3
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
var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(2);


node1.next = node2;
node2.next = node3;


console.log(count(node1,2));


function count(head, data) {
	var number = 0;
	var currentNode = head;
	while(currentNode!=null) {
		if(currentNode.data == data) {
			number++;
		}
		currentNode = currentNode.next;
	}
	return number;
}