function stop(){
	alert('屏蔽右键了');
	return false;
}
document.oncontextmenu=stop;

function SymError()
{
  return true;
}
window.onerror = SymError;