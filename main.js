let coin = {
    state: 0,
    flip: function() {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
        let x = Math.floor(Math.random() * 2);
        if(x == 1){
            this.state = 1;
            
        }
        else{
            this.state = 0;
        }
        return this.state;
    },
    toString: function() {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
        if(this.state === 1){
            return "Heads";
        }
        else{
            return "Tails";
        }
    },
    toHTML: function() {
        let image = document.createElement('img');
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        if(this.state === 1){
            image.src = "./images/tails.jpg" 
        }
        else{
            image.src = "./images/heads.jpg"
        }
        return image;
    }
    
};

function display20flips(){
    for (i = 0; i < 20; i++){
        coin.flip();
        document.body.append(coin.toString());
        
    }
    
}


function display20images(){
    for (i= 0; i < 20; i++){
        coin.flip();
        document.body.append(coin.toHTML());
    }
}
display20flips();
display20images();

