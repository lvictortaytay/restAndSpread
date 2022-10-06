class Game {
  constructor(p1,p2, height = 6 , width = 7){
    this.players = [p1,p2]
    this.height = height;
    this.width = width;
    this.currPlayer = p1;
    this.gameOver = false;
    this.makeBoard(); //this is working
    this.MakeHtmlBoard();
  }

  makeBoard(){
    this.board = [];
    for(let x = 0 ; x < this.height; x++){
      this.board.push(Array.from({length : this.width }))
    }
  }


  MakeHtmlBoard(){
    //make top part of the board , select and add to the DOM 
    const board = document.getElementById('board');

    const topRow = document.createElement("tr");
    topRow.setAttribute('id' , 'top-row');

    this.handleGameClick = this.handleClick.bind(this)

    topRow.addEventListener('click' , this.handleGameClick)
    
    for(let x = 0; x < this.width; x++){

      const topCell = document.createElement("td");
      topCell.setAttribute("id" , x)
      topRow.append(topCell);
    }
    board.append(topRow);

    //make the rest of the board

    for(let y = 0 ; y < this.height ; y ++){
      const row = document.createElement('tr')

      for(let x = 0; x < this.width; x ++){
        const bodyCell = document.createElement('td');
        bodyCell.setAttribute('id' , `${y}-${x}`)
        row.append(bodyCell)
      }
      board.append(row)
    }
  }


  //have to create a function to check for empty spot to place y

  findSpotForCol(x){
    for(let y = this.height - 1; y >= 0 ; y --){
      if(!this.board[y][x]){
        return y;
      }
    }
    return null;
  }



  placeInTable(y,x){ //this will take the x and y coordinates that was found from find spot for collom , and the click selection
    const piece = document.createElement('div')
    piece.classList.add('piece')
    piece.style.backgroundColor = this.currPlayer.color
    //piece.style.top = -50 * (y + 2); 

    const spot = document.getElementById(`${y}-${x}`)
    spot.append(piece);

  }

  endGame(msg) {
    alert(msg);
    const top = document.querySelector("#top-row");
    top.removeEventListener("click", this.handleGameClick);
    const button = document.getElementById('start-game');
    button.removeEventListener('click' , function(){
      let p1 = new Player(document.getElementById('p1-color').value);
  let p2 = new Player(document.getElementById('p2-color').value);
  new Game(p1, p2);
  
    })
    button.addEventListener('click' , function(){
      location.reload()
    })
  }











  handleClick(evt){
  
    console.log("click")
    const x = +evt.target.id


    const y = this.findSpotForCol(x);
    if(y === null){
      return
    }
    this.board[y][x] = this.currPlayer;
    this.placeInTable(y,x)

    
    


    if (this.board.every( (row) => row.every( (cell) => cell))) { 
      return this.endGame('Tie!');
    }

 

    if(this.checkForWin()){
      this.gameOver = true;
      return this.endGame(`the ${this.currPlayer.color} player won!`)
      
    }
    const headerCell = document.getElementById('top-row')
    this.currPlayer = this.currPlayer === this.players[0] ? this.players[1] : this.players[0]
    headerCell.style.transition = 2;
    headerCell.style.backgroundColor = this.currPlayer.color

  }










    checkForWin() {
      const _win = cells =>
        cells.every(
          ([y, x]) =>
            y >= 0 &&
            y < this.height &&
            x >= 0 &&
            x < this.width &&
            this.board[y][x] === this.currPlayer
        );


          for(let y = 0 ; y < this.height; y ++){
            for(let x = 0 ; x < this.width;x ++){


              const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
              const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
              const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
              const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];
      
              if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
                return true;
              }



            }
          }
      
    }
    





  }


  //have to create function that updates the board with that new spot for a peice

  //have to create function for that happening when you click a box


class Player{
  constructor(color){
    this.color = color;
  }
}

document.getElementById('start-game').addEventListener('click', () => {
  let p1 = new Player (document.getElementById('p1-id').value)
  let p2 = new Player (document.getElementById('p2-id').value)
  new Game(p1,p2);  
})
  
