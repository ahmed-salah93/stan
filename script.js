

let head = document.getElementById("header");
let hr = document.getElementById("line");
let list = document.getElementById("list")

function changeLine() {
    hr.style.width = "100%"
    hr.style.transition = "1.5s"
}
function RLine() {

    hr.style.width = "50%"
    hr.style.transition = "1.5s"

}
// line change width 
function changeWidth() {

    hr.style.width = "100%"
    hr.style.transition = "1.5s"
}

function retuenWidth() {
    hr.style.width = "50%"
    hr.style.transition = "1.5s"
}

//  scrolled pictures 

function changePicture(){
    var arr=['4.jpg',
            '3.jpg',
            '2.jpg','1.jpg',
            '5.jpg'];
    var scrollImage = document.getElementById('scrollImg');
    var i=0;
    setInterval(
         function () {
            if ( i < arr.length){
                scrollImage.src = arr[i];
                i++;
            }
            else{
                i = 0;
            }
        },
        3000
    )};

        //         haburger list 

        let last = document.getElementById("list");
        let ham = document.getElementById("ham");
        let header = document.getElementById("header");
    function showHeader() {

        ham.style.cursor = "pointer";
 
        if (last.style.display === "block" ) {
          last.style.display = "none";
          
        } else {
            last.style.display = "block";
            
         
        }
      };






