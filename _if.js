function _if(bool, func1, func2) {
	return bool ? func1() : func2();
}

function add() {
  return "add";
}
function yo() {
  return "yo"
}
_if(true, add, yo);
