class Form{
    constructor(){
    //
    }
   async display(){

       // ===========================================================================================
       // add json and api calls
       var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
       var responseJSON = await response.json();
       var datetime = responseJSON.datetime;

       // to slice out hour from api call 
       var hour = datetime.slice(11,13);
       console.log(hour);

       // to create a title 
       var title = createElement('h2');

        // give time a position
       title.position(width/2 +100, 100);
       // ===========================================================================================

        // to create a button for feeding option
        button = createButton('feed dog');

        // to create a option for adding milk 
        button2 = createButton('add milk');

        // giving positions to buttons 
        button.position(830, 100);
        button2.position(895, 100);

        // to give functionality to program when add milk is clicked ==>
        button2.mousePressed(() => {
            bottle = createSprite(200 , 200, 20, 20);
            bottle.addImage(bottleImage);
            bottle.scale = 0.1;

            count ++;
            console.log(count);
            if(count >1){
                bottle.x = count +90;
            }
            if(count >2){
                bottle.x = 90*count;
            }
            if(bottle.x>800){
                bottle.y = 300;
                bottle.x = 200;
            }
        })
        
        // to give functionality to program when feed milk is clicked ==>
        button.mousePressed(() => {
            bottle.destroy();
            dog.addImage(happyDog);
            count = count -1;
            console.log(count);
            if(count > 0){
                fed ++;
            }  
            if(hour<12){
                title.html("am");
                fill(0);
                textSize(35);
                if(count > 0){
                text(""+hour, width/2 -150 , 70);
            }
            }
            else if(hour>12){
                title.html("pm");
                fill(0);
                textSize(35);
                if(count > 0){
                text(""+hour-12, width/2 -150 , 70);
            }
            }
            else if(hour = 12){
                title.html("pm");
                fill(0);
                textSize(35);
                textFont("Georgia");
                if(count > 0){
                    text(""+hour, width/2 -150, 70);
                }
            }
        })

        // let count not be in 0 
        if(count < 0){
            count = 0;
        }
        
}

    textTime(){
        textSize(20);
        fill(255);
        text("bottle-fed: "+fed, 800, 30);
        text("bottle-having: "+count, 800, 70);}
}