const Figure = Object.freeze({ 
    NONE: 0, 
    HEART: 1, 
    DIAMOND: 2,
    CLUB: 3, 
    SPADE: 4
  });

  /** 
     * Return true if the card is red.
     * @return Boolean 
     */ 
  function isRed(){
    if(this.figure > 0 && this.figure < 2){
        return true;
    }
    return false;
}

/** 
 * Return true if the card is black.
 * @return Boolean 
 */
function isBlack(){
    if(this.figure > 2 && this.figure < 5){
        return true;
    }
    return false;
}