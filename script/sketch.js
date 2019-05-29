
var imgback;
var imgfum;
var laterna, laterna1, lan;

var pessoa;
var animePessoa;
var textPessoa;

var manga;
var animeManga;
var textManga;

var espelho;
var animeEspelo;
var textEspelo

var revista;
var animeRevista;
var textRevista;

var tv;
var animeTv;
var textTv;

var naruto, naruto1, naruto2, naruto3;

var luz, luz1;

var intro, intro1, musicIntro;
var luz, luz1, luz2;

var segundos, tempo, m1, tempochave;

var volumeicon;
var volume = 0.2;
var somOFF, somON;

var opening, opening1, opening2;

var tempo2 = 50;


function preload() {  

  segundos = second();
  m1= segundos;
  tempo = 6;
  tempochave= true;

  soundFormats('mp3', 'ogg');
  musicIntro = loadSound('sound/sad_intro.wav');
  musiClick = loadSound('sound/sino.wav');

  luz = loadSpriteSheet('img/luzes-pc.png', 16, 5, 29);
  luz1 = loadAnimation(luz);


  imgback = loadImage('img/tela.png');
  imgfum = loadImage('img/teste.png');

  intro = loadAnimation('img/animacoes/intro.png');
  laterna = loadAnimation('img/teste.png'); 
  somON = loadAnimation('img/somON.png');
  somOFF = loadAnimation('img/somOff.png');
    

  naruto = loadSpriteSheet('img/naruto.png', 173, 93, 500);
  naruto1 = loadAnimation(naruto);

  opening = loadSpriteSheet('img/opening.jpg', 1280, 800, 56);
  opening1 = loadAnimation(opening);

  animePessoa=loadAnimation(
    'img/botao/pessoa.png');
     paramentro(animePessoa);
  textPessoa = loadAnimation(
  'img/texto/pessoa.png');
   paramentro(textPessoa);

  animeManga=loadAnimation(    
    'img/botao/mangas.png');
     paramentro(animeManga);
  textManga = loadAnimation(
  'img/texto/mangas.png');
   paramentro(textManga);

  animeEspelo=loadAnimation(    
    'img/botao/espelho.png');
     paramentro(animeManga);
  textEspelo = loadAnimation(
  'img/texto/espelho.png');
   paramentro(textManga);

  animeRevista=loadAnimation(    
    'img/botao/revistas.png');
     paramentro(animeManga);
  textRevista = loadAnimation(
  'img/texto/revistas.png');
   paramentro(textManga);

  animeTv=loadAnimation(    
    'img/botao/computador.png');
     paramentro(animeTv);
  textTv = loadAnimation(
  'img/texto/computador.png');
   paramentro(textTv);

  }


function setup() {
var cnv = createCanvas(1280, 800);
 cnv.style('display', 'block');
  musicIntro.setVolume(volume);
  musicIntro.play();

 luz2 = createSprite( 1084.00, 120.50);
 luz2.addAnimation('normal1',luz1);

 naruto3 = createSprite( 921.50, 97.50);
 naruto3.addAnimation('normal1',naruto1);
 
 lan = createSprite( mouseX, mouseY);
 lan.addAnimation('normal',laterna); 
 lan.mouseActive = true;
 lan.visible = false;  

 
 pessoa = createSprite(836, 535);
 pessoa.addAnimation('icone',animePessoa); 
 pessoa.addAnimation('texto',textPessoa);
 pessoa.mouseActive = true;

 manga = createSprite(520, 457);
 manga.addAnimation('icone',animeManga); 
 manga.addAnimation('texto',textManga); 
 manga.mouseActive = true;

 espelho = createSprite(326, 186);
 espelho.addAnimation('icone',animeEspelo); 
 espelho.addAnimation('texto',textEspelo); 
 espelho.mouseActive = true;

 revista = createSprite(946, 735);
 revista.addAnimation('icone',animeRevista); 
 revista.addAnimation('texto',textRevista);
 revista.mouseActive = true;

 tv = createSprite(920, 120);
 tv.addAnimation('icone',animeTv); 
 tv.addAnimation('texto',textTv); 
 tv.mouseActive = true;
 naruto2 = createSprite( 921.50, 97.50);
 naruto2.addAnimation('normal1',naruto1);

 laterna1 = createSprite( mouseX, mouseY);
 laterna1.addAnimation('normal',laterna);
 laterna1.visible= false;

 intro1 = createSprite(640, 400);
 intro1.addAnimation('normal', opening1); 
 intro1.animation.looping = false;
 intro1.visible = true;



 /* Menu ----------------------------------------*/

volumeicon = createSprite( 1260,750);
volumeicon.addAnimation('On',somON);
volumeicon.addAnimation('OFF',somOFF);
volumeicon.mouseActive= true;

  noStroke();
    //populate the circles array with new circle objects
    circles = [];
    for (let i=0; i<NUMBER_OF_CIRCLES; i++){
        circles.push(getCircle());
    }
    //sort circle array by smallest to largest
    circles.sort(function(c1,c2){
        return c1.daim - c2.diam;
    });
    //find the circles farthest away from the center
    leftmost = circles.reduce(function(c1,c2){
        if (c1.x < c2.x) return c1;
        return c2;
    });
    rightmost = circles.reduce(function(c1,c2){
        if (c1.x > c2.x) return c1;
        return c2;
    });
    topmost = circles.reduce(function(c1,c2){
        if (c1.y < c2.y) return c1;
        return c2;
    });
    bottommost = circles.reduce(function(c1,c2){
        if (c1.y > c2.y) return c1;
        return c2;
    });

 
}

function draw() {
 

  segundos = second();  
  if(segundos != m1 && tempochave==true){
    m1=segundos
    tempo=tempo-1
    tempo2=tempo2-1
    if(tempo==0){
       intro1.removed = true;
      tempochave=false;
    }
    if(tempo2 <=4){
      
      text('Encontre as pistas usando o mouse', mouseX-80, mouseY-80);
    }
  }
/*desenhacirculos();*/
  
background(imgback);
laterna1.position= createVector(mouseX, mouseY);

 BotaoComportamento(pessoa, 671, 449, 836, 535);
 BotaoComportamento(manga, 680, 329, 520, 457);
 BotaoComportamento(espelho, 499, 200, 326, 186);
 BotaoComportamento(revista, 795, 631, 946, 735);
 BotaoComportamento(tv, 748, 217, 920, 120); 

 drawSprites(); 
fill('white');
text('Clique nos elementos realçados',1050,755);
  


}/*---------------------------------------------------------------------*/


function BotaoComportamento(icone, x, y, x1, y2){
  if(icone.mouseIsOver){
     icone.visible = true;  
     icone.animation.play();
    
     if(icone.mouseIsPressed){    
       musiClick.setVolume(volume);      
       musiClick.play(); 
       icone.changeAnimation('texto');
       icone.position= createVector(x, y);
       laterna1.visible= false;
       lan.visible= true;
       if(icone!=tv){
       naruto2.visible = false;
       naruto3.visible = true;
     }
     }
   }else if(icone.visible==true){    
       icone.position= createVector(x1, y2);
       icone.changeAnimation('icone');
       icone.animation.rewind();
       icone.visible = false;
       laterna1.visible= true;
       lan.visible= false;      
       naruto3.visible = false;
       naruto2.visible = true;      
     }
}


function paramentro(icone){
icone.visible = false;
}


function mouseClicked() {
  if (volume == 0.2 && volumeicon.mouseIsPressed) {
    volume = 0;
    musicIntro.setVolume(volume);
    musiClick.setVolume(volume);    
    volumeicon.changeAnimation('OFF');

  } else if (volume == 0 && volumeicon.mouseIsPressed) {
    volume = 0.2;
    musicIntro.setVolume(volume);
    musiClick.setVolume(volume);    
    volumeicon.changeAnimation('On');
  }
}

const SCROLL_SPEED = 0.1,
      NUMBER_OF_CIRCLES = 500;

var circles, leftmost, rightmost, topmost, bottommost;

function getCircle(){
    return {
        x: random(-width, width*2),
        y: random(-height, height*2),
        diam: random(1, 25)
    };
}

function desenhacirculos(){
  var dx = mouseX < width/2 ? SCROLL_SPEED : -SCROLL_SPEED,
        dy = mouseY < height/2 ? SCROLL_SPEED : -SCROLL_SPEED;
    //constrain panning movement
    if (dx > 0 && leftmost.x >= 0) dx = 10;
    if (dx < 0 && rightmost.x <= width) dx = 10;
    if (dy > 0 && topmost.y >= 0) dy = 10;
    if (dy < 0 && bottommost.y <= height) dy = 10;
    //loop through circles
    circles.forEach(function(circle){
        //reassign position (larger circles move faster)
        circle.x += dx*circle.diam/2;
        circle.y += dy*circle.diam/2;
        //draw circle
        tint(10, 200);
        fill(100, circle.diam*2);
        ellipse(circle.x, circle.y, circle.diam, circle.diam);
    });


}