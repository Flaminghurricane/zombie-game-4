class Form
{
    constructor()
    {
     this.name=null

    }

    screen1()
    {
      //adding first screen background.Related code in css also
     var bgImg = createImg("images/level3.png", "game title");
     bgImg.position(0,0);
     bgImg.class("bg")


     
      //MAke this name of the game
      var title=createElement("h2")
      title.html("The goal is to travel to all the planets in our solar system and explore them to know one interesting fact about that planet. We have to dogde obstacles like meteors, asteriods and aleins while collecting power-ups. Move left and right using the left and right arrows to dodge asteroids and meteors and press space to shoot and destroy the aleins.You have five lives per stage.")
      title.position(100,150)
      var btn1=createButton("NEXT") 
      
      btn1.position(width-100,height-200)

     

      btn1.mousePressed(()=>{
        title.hide()
        btn1.hide()
        bgImg.hide()
          gameState=PLAY;
       
      })
    }
}