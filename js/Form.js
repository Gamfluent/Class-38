class Form {
  constructor() {
    this.input = createInput("Name");
    this.buttion = createButton('Play');
    this.greeting  = createElement('h3');
    this.title = createElement('h2');
  }

  hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);
    
    this.input.position(displayWidth/2 - 40, displayHeight/2 - 80);
    this.button.position(displayWidth/2, displayHeight/2 - 40);

    this.button.mousePressed(function(){
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.index = playerCount;
      player.update(name)
      player.updateCount(playerCount);

      this.greeting.html("Hello " + name )
      this.greeting.position(displayWidth/2 - 40, displayHeight/2 - 40)
    });

  }
}
