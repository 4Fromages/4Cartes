class Card{
    figure;
    height;
    face;

    /** 
     * Constructor of the class Card.
     * @param figure 
     * @param height
     */ 
    Card(figure, height){
        this.figure = figure;
        this.height = height;
    }

    /** 
     * Put the card face up
     */ 
    turnFaceUp(){
        this.face = 1;
    }

    /** 
     * Put the card face down
     */ 
    turnFaceDown(){
        this.face = 2;
    }

    toggleTurnFace(){
        if(this.face == null){
            return 0;
        }
        return this.face;
    }

    /** 
     * Return true if the card is red.
     * @return Boolean 
     */ 
    isRed(){
        if(this.figure > 0 && this.figure < 2){
            return true;
        }
        return false;
    }

    /** 
     * Return true if the card is black.
     * @return Boolean 
     */
    isBlack(){
        if(this.figure > 2 && this.figure < 5){
            return true;
        }
        return false;
    }

    /** 
     * Return true if the card is an head.
     * @return Boolean 
     */
    isHead(){
        if(this.height > 10 && this.height < 14){
            return true;
        }
        return false;
    }

    /** 
     * Return true if the card is a number.
     * @return Boolean 
     */
    isNumber(){
        if(this.height > 0 && this.height < 11){
            return true;
        }
        return false;
    }
}