 'use strict';


 let secretNumber = Math.trunc(Math.random()*20) + 1;
 let score = 0;
 let highScore = 0;
 const constLife = 5;
 let life = constLife;



 const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
 };

 document.querySelector('.check').addEventListener('click',function(){
    
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess){
        displayMessage('Bir sayı giriniz.');
    }
    else if(guess === secretNumber){
        life = constLife;
        score += 10;
        document.querySelector('.life').textContent = 'Kalan Hakkınız: ' + life;
        displayMessage('Dogru tahmin!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.transform = "translate(-50%,50%) scale(2)";
        document.querySelector('.lable-score').textContent = 'Skor: ' + score;
        secretNumber = Math.trunc(Math.random()*20) + 1;
        document.querySelector('body').style.backgroundPosition = '0% 0%';
        
    }
    else if(guess !== secretNumber){
        life--;
        document.querySelector('.number').textContent = '?';
        document.querySelector('body').style.backgroundPosition = '100% 100%';
        document.querySelector('.number').style.transform = "translate(-50%,50%) scale(1)";
        if(life === 0){
            displayMessage('Oyun Bitti');
            document.querySelector('.life').textContent = 'Kalan Hakkınız: ' + life;
            document.querySelector('.check').setAttribute('disabled','');
            if(score >= highScore){
                highScore = score;
                document.querySelector('.lable-highscore').textContent = 'En yüksek skor: ' + score;
            }
        }
        else{
            displayMessage(guess>secretNumber ? 'Çok yüksek' : 'Çok Düşük');
            document.querySelector('.life').textContent = 'Kalan Hakkınız: ' + life;
            document.querySelector('.lable-score').textContent = 'Skor: ' + score;
        }
    }
});

document.querySelector('.again').addEventListener('click',function(){
    life = constLife;
    score = 0;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.transform = "translate(-50%,50%) scale(1)";
    document.querySelector('.lable-highscore').textContent = 'En yüksek skor: ' + highScore;
    document.querySelector('.life').textContent = 'Kalan Hakkınız: ' + life;
    document.querySelector('.lable-score').textContent = 'Skor: ' + score;
    document.querySelector('.check').removeAttribute('disabled');
    document.querySelector('body').style.backgroundPosition = '50% 50%';
    document.querySelector('.guess').value = '';
    displayMessage('Tahmin Ediliyor...');
});
