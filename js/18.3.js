const menu=document.getElementById('menu');
const scrollbar=document.getElementById('scrollbar');
const handle=scrollbar.firstElementChild;
handle.addEventListener('mousedown', function(evt){
    innerTop=evt.offsetY;
    document.body.addEventListener('mousemove', bodyMouseMove);
});
handle.addEventListener('mouseup', function(evt){
    document.body.removeEventListener('mousemove', bodyMouseMove);
});
function bodyMouseMove(evt){
    const y=evt.clientY-scrollbar.offsetTop-innerTop;//
    if (y>0 && y<scrollbar.clientHeight-handle.offsetHeight){//
        handle.style.top=`${y}px`;//
        const cy=(menu.scrollHeight-menu.clientHeight)*y/menu.clientHeight;//
        menu.scrollTop=cy;//
    }
}