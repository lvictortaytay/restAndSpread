

const HEIGHT = 6; //this is the height of the standard connect four board
const WIDTH = 7; //this is the width of the standard html board

let board = []; //this creates the whole container or one big array that sets the platform for the game itself
let currPlayer = 1;  //this is the player who is playing and will be used to assign classes and id's and divs


function makeBoard(){   //this makes the HTML board dynamically ( can hard code it but this allows for u to change )
    for (let x = 0; x < HEIGHT; x++){
        board.push(Array.from({length : WIDTH}))  
    }
}


function makeHtmlBoard(){  //this creates the actual board in html by using DOM manipulation
    const board = document.getElementById("board");  //this selects the table html element by using its id
    const headerRow = document.createElement("tr"); //this creates 'TS'S'  to be used in the table and append to the board
    headerRow.setAttribute("id" , "column-top")  //this creates an id that will then be manipulated in css
    headerRow.classList.add(`p${currPlayer}`)  //this adds the currPlayer to the class list to alternate colors when hovering ( depending on currPlayer )

    for(let x = 0; x < WIDTH; x++){  //this loops (x = height ) times to add the individual table elements and creats it
        const headerCell = document.createElement("td")
        headerCell.setAttribute("id", x)
        headerCell.addEventListener("click" , handleClick) // thiss adds an event listener so that a function can be ran  to play the game
        headerRow.append(headerCell) //this appeneds each cell when done adding all elements to the row itseld
    }
    board.append(headerRow) //this appends the row itseld to the actual board 

    for(let x = 0; x < HEIGHT; x ++){  //this creates the rest of the full table in html
        const row = document.createElement("tr");
        for(let y = 0; y < WIDTH; y ++){
            const rowCell = document.createElement("td")
            rowCell.setAttribute("id" , `${x}-${y}`)
            row.append(rowCell)
        }
        board.append(row) //this appends all of the rows and their elements to the board to create the full finished html table
    }
}

//create a function that can choose a spot for y that is appropriate

function findSpotForY(x){  //this finds a spot to place the peice ( finds a y value )
    for(let y = HEIGHT -1; y >= 0; y--){  //while the y is less than the board height.length ( starts at 0 )
        if(!board[y][x]){ //using the boolean from undefined to checked if there is no value set in the board array
            return y; //if there is an empty space , give the y ( the value )
        }
    }
    return null; //if there is do nothing
}

function placeInTable(y,x){ //this function creates the peice 
    const piece = document.createElement("div")
    piece.classList.add("piece")
    piece.classList.add(`p${currPlayer}`)
    const spot = document.getElementById(`${y}-${x}`) //this is where the actual spot is determined , you get these values from the handle click function
    spot.append(piece)

}


function handleClick(evt){
    const x = evt.target.id; //this is the value of the x when you click the top row

    const y = findSpotForY(x); //this is the y after that function is ran , using the x from above
    //Math.floor(Math.random() * HEIGHT);

    // findSpotForY(x);
    placeInTable(y,x); //this now using the above two variables and puts it into ( spot ) in placeInTable function

    board[y][x] = currPlayer; //this sets that spot to equal the current player
  

   if (checkForWin()) { 
       return(endGame(`player p${currPlayer} has won`))
   }
   
    let headerRow = document.getElementById('column-top'); //this selects the header row
    headerRow.classList.remove(`p${currPlayer}`)  //this removes whatever class it has currently
    
currPlayer = currPlayer === 1 ? 2 : 1; //this refreshes the currPlayer ( class ) to what it is supossed to be 

headerRow.classList.add(`p${currPlayer}`)  //this updates the class so the hover method in css will reflect properly who is playing.

//figured out how to change the background hover color of the top row 
// have to remove the class list then reassign it each time because the classList does not work with the on and off switch

}

function endGame(msg){
    alert(msg)
}


function checkForWin() {
    

    function winner(cell){ //this is declaring a function that must return true in order for someone to win( checks to make sure peices are within board )
        
        return cell.every( //checks every single cell
            ([y,x]) => //this is a cell ( y ) and ( x )
            y >= 0 && y < HEIGHT && x >=0 && x < WIDTH && board[y][x] === currPlayer
        )

    }

    for( let y = 0; y < HEIGHT; y++){
        for(let x = 0; x < WIDTH; x++){
            
            const horiz = [[y,x], [y,x +1] , [y,x +2] , [y , x + 3]];
            const vert = [[y,x], [y + 1,x] , [y + 2,x] , [y + 3 , x ]];
            const diagL = [[y,x], [y +1,x +1] , [y +2,x +2] , [y +3, x + 3]];
            const diagR = [[y,x], [y + 1,x -1 ] , [y + 2,x -2] , [y + 3, x - 3]];

            if(winner(horiz) || winner(vert) || winner(diagL) || winner(diagR)){
                return true
            }
        }

    }




}


    const btn = document.querySelector("button")  //this allows the user to reset the game when clicks a button
    btn.addEventListener('click', function(){
        return location.reload()
    })



makeBoard();
makeHtmlBoard();






