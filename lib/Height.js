const Height = Object.freeze({ 
    NONE: 0, 
    ACE: 1, 
    TWO: 2,
    THREE: 3, 
    FOUR: 4, 
    FIVE: 5, 
    SIX: 6,
    SEVEN: 7,
    EIGHT: 8,
    NINE: 9,
    TEN: 10,
    JACK: 11,
    QUEEN: 12,
    KING: 13,
    JOKER: 14 
  });

  /** 
     * Return true if the card is an head.
     * @return Boolean 
     */
  function isHead(){
    if(this.height > 10 && this.height < 14){
        return true;
    }
    return false;
}

/** 
 * Return true if the card is a number.
 * @return Boolean 
 */
function isNumber(){
    if(this.height > 0 && this.height < 11){
        return true;
    }
    return false;
}