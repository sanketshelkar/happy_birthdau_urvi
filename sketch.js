var back
var open
var song
var main
var urvi
var album
var happy
var birthday

function preload(){

  back = loadImage("back.jpg")
  open = loadImage("open.jpg")
  song = loadSound("happy-birthday-to-you.mp3")
  main = loadImage("main.jpg")
  urvi = loadImage("album.JPG")
  album = loadImage("album2.JPG")
  happy = loadImage("happy.jpg")
  birthday = loadImage("birthday.JPG")

}

function setup(){

  createCanvas(windowWidth,windowHeight)
  back1 = createSprite(700,300) 
  open1 = createSprite(400,400)  

}

function draw(){
  background("white")  

  back1.addImage(back)
  open1.addImage(open)

  open1.scale = 0.2
  drawSprites();

  if(mousePressedOver(open1)){

    open1.destroy();
    back1.destroy();
    song.play();

    //images
    main1 = createSprite(700,400)
    urvi1 = createSprite(1,100)
    album1 = createSprite(1400,530)
    happy1 = createSprite(600,320)
    birthday1 = createSprite(1100,100)
    
    //velocity
    urvi1.setVelocity(1,0)
    album1.setVelocity(-1,0)
    //adding image
    main1.addImage(main)
    urvi1.addImage(urvi)
    album1.addImage(album)
    happy1.addImage(happy)
    birthday1.addImage(birthday)

    //scale
    main1.scale = 2
    birthday1.scale = 0.4

    //lifetime
    birthday1.lifetime = 500

  }
  text("FROM SANKET TO URVI",10,10)
}

