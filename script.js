let input = document.querySelectorAll(".box");

let resetbtn = document.querySelector("#resetbtn");

let newgamebtn = document.querySelector("#newgame");

let jsbuttons = document.querySelectorAll(".buttons");

let winnermsg = document.querySelector("#winner-message");

let drawmessage = document.querySelector("#draw-message");

let count = 0;



let turn = true;

let winpatterns = [

    [0, 1, 2],

    [0, 3 ,6],

    [0, 4, 8],

    [1, 4, 7],

    [2, 5, 8],

    [2, 4, 6],

    [3, 4, 5],

    [6, 7, 8],

];



input.forEach((box) => {

    box.addEventListener("click", () => {
<<<<<<< HEAD
        if (box.innerText === "") {
            count++;
            if (turn) {
                box.innerText = "X"; // it's X's turn
=======

        count++;

        if(box.innerText === ""){

            if(turn) {

                box.innerText = "X"; //it's X's turn

>>>>>>> fafc90ca2ac0c202bbc5b97ee4938194227dcff1
                turn = false;

            } else {
<<<<<<< HEAD
                box.innerText = "O"; // it's Y's turn
=======

                box.innerText = "O";  //it's Y's turn

                

>>>>>>> fafc90ca2ac0c202bbc5b97ee4938194227dcff1
                turn = true;

            }
<<<<<<< HEAD
            if (ifwinner()) {
                return;
            }
            if (count >= 9) {
                drawmsg();
            }
        }
=======

        }

        if(count >= 9 ){

            drawmsg();

            // winnermsg.style.display = "none";

        }

        else{

            ifwinner();

        }

        

        

>>>>>>> fafc90ca2ac0c202bbc5b97ee4938194227dcff1
    });

});

<<<<<<< HEAD
// if winner function
let ifwinner = () => {
    for (let pattern of winpatterns) {
=======




// if winner funcrion

let ifwinner = () =>{

    for (let pattern of winpatterns){

>>>>>>> fafc90ca2ac0c202bbc5b97ee4938194227dcff1
        const val1position = input[pattern[0]].innerText;

        const val2position = input[pattern[1]].innerText;

        const val3position = input[pattern[2]].innerText;

<<<<<<< HEAD
        if (val1position !== "" && val2position !== "" && val3position !== "") {
            if (val1position === val2position && val2position === val3position) {
=======


        if(val1position != "" && val2position != "" && val3position != ""){

            if(val1position === val2position && val2position === val3position){

>>>>>>> fafc90ca2ac0c202bbc5b97ee4938194227dcff1
                console.log("Winner is " + val1position);

                winnermsg.style.display = "block";

                winnermsg.innerText = "Winner is " + val1position;



                // buttons position

                jsbuttons.forEach(button => {

                    button.classList.add("button-js");

                });

                input.forEach((inputs) => {

                    inputs.disabled = true;

                });
<<<<<<< HEAD
                return true; // Indicates a winner has been found
=======

>>>>>>> fafc90ca2ac0c202bbc5b97ee4938194227dcff1
            }

        }

    }
<<<<<<< HEAD
    return false; // No winner found
=======

>>>>>>> fafc90ca2ac0c202bbc5b97ee4938194227dcff1
};



// reset and new game button functions

resetbtn.addEventListener("click", () => {

    resetgame();
<<<<<<< HEAD
});
newgamebtn.addEventListener("click", () => {
    resetgame();
});

let resetgame = () => {
    count = 0;
    winnermsg.style.display = "none";
    input.forEach(box => {
        box.innerText = "";
=======

})

newgamebtn.addEventListener("click", () =>{

    resetgame();

})



let resetgame = () =>{

    count = 0;

    winnermsg.style.display ="none";

    input.forEach(box => {

        box.innerText ="";

>>>>>>> fafc90ca2ac0c202bbc5b97ee4938194227dcff1
        jsbuttons.forEach(button => {

            button.classList.remove("button-js");

        });

        input.forEach((inputs) => {

            inputs.disabled = false;

        });

        turn = true;

        drawmessage.style.display = "none";

    });
<<<<<<< HEAD
};
=======

}
>>>>>>> fafc90ca2ac0c202bbc5b97ee4938194227dcff1



// draw function

let drawmsg = () => {

    drawmessage.style.display = "block";

    jsbuttons.forEach(button => {

        button.classList.add("button-js");

    });
<<<<<<< HEAD
};
=======
}
>>>>>>> fafc90ca2ac0c202bbc5b97ee4938194227dcff1
