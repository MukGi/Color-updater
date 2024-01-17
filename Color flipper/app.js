
function changeColor(){
    var hexIndex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F',];
    var hexCode='';
    
    for( i=0; i<=5; i++){
        let temp = Math.floor(Math.random()*hexIndex.length);
        hexCode += hexIndex[temp];
    }

    document.getElementById("mewmew").innerHTML = hexCode;
    document.getElementsByTagName("body")[0].style.background = "#" + hexCode;
}
