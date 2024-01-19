class CardPack{
    cardPack;

    cardPack(){
        return new CardPack();
    }

    count(){
        return this.cardPack.size();
    }

    isEmpty(){
        if(this.cardPack.size() == 0){
            return true;
        }
        return false;
    }

    get(position){
        if(cardPack != null){
            return cardPack[position];
        }
        return null;
    }

    getTop(){
        if(cardPack != null){
            return cardPack[0];
        }
        return null;
    }

    getBottom(){
        if(cardPack != null){
            return cardPack[-1];
        }
        return null;
    }

    addTop(card){
        if(cardPack == null){
            this.cardPack[0] = card;
        }
        this.cardPack.push(card);
    }

    addBottom(card){
        if(cardPack == null){
            this.cardPack[0] = card;
        }
        this.cardPack.push(card);
    }
}