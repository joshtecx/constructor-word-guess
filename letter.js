

function letter(letter){
    this.letter = letter;
    this.guessed = false;
    this.guessedCheck = function(){
        if(this.guessed === true){
            return this.letter;
        }else{
            return "_";
        }
    }
    this.letterCheck = function(guess){
        if(this.letter === guess){
            this.guessed = true;
        }
    }
}

module.exports = letter;