//                                              0  1  2
//                                              3  4  5
//                                              6  7  8
//  Tris win
//  048
//  246
//  036
//  147
//  258
//  012
//  345
//  678
// -----------------------------------------Variabili

// Genera array dei box div box[Giocatore][posizione div]
//giocatore 1 = [1][posizione div]
//giocatore 2 = [2][posizione div]
let clone =[
  [1, 0],
  [1, 1],
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
  [1, 6],
  [1, 7],
  [1, 8],
  [2, 0],
  [2, 1],
  [2, 2],
  [2, 3],
  [2, 4],
  [2, 5],
  [2, 6],
  [2, 7],
  [2, 8],
];

let box =[
  [1, 0],
  [1, 1],
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
  [1, 6],
  [1, 7],
  [1, 8],
  [2, 0],
  [2, 1],
  [2, 2],
  [2, 3],
  [2, 4],
  [2, 5],
  [2, 6],
  [2, 7],
  [2, 8],
];

let restartBtn = document.getElementById("restartBtn");
let celleTotali = 8;
let turno = 1;



//                                                    Variabili-----------------------------------------
//         BoxRestart pulisce l'array dei box div
function boxRestart(){
    for(let i=0;i<=8;i++){
      
        box[1][i]=0;
        box[2][i]=0;
    }
}


// Controlla a indice(giocatore) se posizione 0,4,8 sono occupate e quindi ha vinto 
function playerWin (){
        //cosa fare quando un giocatore vince 
        document.getElementById("labelTurni").innerText="Vincitore Giocatore:"+turno;
}
function CheckWin(box) { 
  //                          win case
  //  048
  //  246
  //  036
  //  147
  //  258
  //  012
  //  345
  //  678
  
  if (
    box[turno][0] == 1 &&
    box[turno][4] == 1 &&
    box[turno][8] == 1
  ) {console.log("caso1")
    return true;
  }
  if (
    box[turno][2] == 1 &&
    box[turno][4] == 1 &&
    box[turno][6] == 1
  ) {console.log("caso2")
    return true;
  }
  if (
    box[turno][0] == 1 && box[turno][3] == 1 && box[turno][6] == 1
  ) {
    return true;
  }
  if (
    box[turno][1] == 1 &&
    box[turno][4] == 1 &&
    box[turno][7] == 1
  ) {console.log("caso4")
    return true;
  }
  if (
    box[turno][2] == 1 &&
    box[turno][5] == 1 &&
    box[turno][8] == 1
  ) {console.log("caso5")
    return true;
  }
  if (
    box[turno][0] == 1 &&
    box[turno][1] == 1 &&
    box[turno][2] == 1
  ) {console.log("caso6")
    return true;
  }
  if (
    box[turno][3] == 1 &&
    box[turno][4] == 1 &&
    box[turno][5] == 1
  ) {console.log("caso7")
    return true;
  }
  if (
    box[turno][6] == 1 &&
    box[turno][7] == 1 &&
    box[turno][8] == 1
  ) {console.log("caso8")
    return true;
  }
  return false; //Ritorna false se nessun giocatore ha vinto 
}

// Cambio turno fra players
function playerClick(casellaCliccata) {
  
  document.getElementById("labelTurni").innerText="Turno del Giocatore:"+turno; //Cambio label turni
  box[turno][casellaCliccata] = 1;
  console.log("|"+turno+"|"+casellaCliccata+"="+box[turno][casellaCliccata]);
  IA();
  if (turno == 1) {
    playerOne(casellaCliccata);
    if(CheckWin(box)==true){playerWin();}
    turno = 2;
    return;
  }
  if (turno == 2) {
    playerTwo(casellaCliccata);
    if(CheckWin(box)==true){playerWin();}
    turno = 1;
  }
  
  
  
}
function moveIA(win){document.getElementById(win).style.backgroundColor="red"}
function IA() {
  let val=[];
  let casellaWin=0;
  let giocatore=1;
  
  for (let i = 0; i <= 8; i++) {
    clone[1][i] = box[1][i] ;
    clone[2][i] = box[2][i] ;
  }

  for (let j = 0; j <= 8; j++) {
    if(clone[giocatore][j] == 0 && clone[2][j] == 0 ){
      clone[giocatore][j]=1;
      if(CheckWin(clone)){val[giocatore]=1;} 
      else{
        for (let i = 0; i <= 8; i++) {
          if(clone[giocatore][i] == 0 && clone[2][i] == 0 ){
            clone[giocatore][i]=1;
            if(CheckWin(clone)){val[giocatore]=2;} 
            
          }else{continue }
          clone[giocatore][i]=0;
         
        }
      }
      
    }
    clone[giocatore][j]=0;
    console.log("")
  }
  console.log("Giocatore "+giocatore+" vince in mosse"+val[giocatore]);
}

function controlloSpam(casellaCliccata) {
  for (i = 0; i <= celleTotali; i++) {
    document.getElementById(casellaCliccata).onclick = "";
  }
}


//  Ogni player scrive su una cella e non può ricliccaci se già selezionata
function playerOne(casellaCliccata) {
  controlloSpam(casellaCliccata);
  scriviCasella(casellaCliccata);
}

function playerTwo(casellaCliccata) {
  controlloSpam(casellaCliccata);
  scriviCasella(casellaCliccata);
}

// Al click scrive una X/O nelle celle
function scriviCasella(casellaCliccata) {
  if (turno == 1) {
    document.getElementById(casellaCliccata).innerText = "X";
  } else {
    document.getElementById(casellaCliccata).innerText = "O";
  }
}

// Al click del button restart, azzera il gioco
restartBtn.addEventListener("click", function () {
  for (i = 0; i <= celleTotali; i++) {
    document.getElementById(i).innerHTML = "";
  }
  boxRestart();
});
