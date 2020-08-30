class Shirt{
    constructor(x,y,width,height){
        var options={

        isStatic:true
        }
    
   this.x=x;
   this.y=y;
   this.width=width;
   this.height=height;
   

   

   //shirts fit
    this.regular=createButton('regular fit');
    this.slim=createButton('slim fit');
    this.modern=createButton('modern fit');
    this.classic=createButton('classic fit');

    //this.collar=createButton('collar');
    this.regularCollarR=createButton('regular collar');
    this.pointedCollarR=createButton('pointed collar');
    this.chineseCollarR=createButton('chinese collar');
    this.regularCollarRF=createButton('in full');
    this.pointedCollarRF=createButton('in full');
    this.chineseCollarRF=createButton('in full');
    this.regularCollarS=createButton('regular collar');
    this.pointedCollarS=createButton('pointed collar')
    this.chineseCollarS=createButton('chinese collar');
    this.regularCollarSF=createButton('in full');
    this.pointedCollarSF=createButton('in full')
    this.chineseCollarSF=createButton('in full');
    this.regularCollarM=createButton('regular collar');
    this.pointedCollarM=createButton('pointed collar')
    this.chineseCollarM=createButton('chinese collar');
    this.regularCollarMF=createButton('in full');
    this.pointedCollarMF=createButton('in full')
    this.chineseCollarMF=createButton('in full');
    this.regularCollarC=createButton('regular collar');
    this.pointedCollarC=createButton('pointed collar')
    this.chineseCollarC=createButton('chinese collar');
    this.regularCollarCF=createButton('in full');
    this.pointedCollarCF=createButton('in full')
    this.chineseCollarCF=createButton('in full');


    this.image=loadImage("shirtSFP.jpg");
   

}

    display(){

     rect(this.x,this.y,100,100);
     image(this.image,this.x,this.y,this.width,this.height);
    

    
    
     text("shirts fit",50,120,50,50);
     this.regular.position(50,150,50,50);
     this.slim.position(50,250,50,50);
     this.modern.position(50,350,50,50);
     this.classic.position(50,450,50,50);
    
     text("collar",300,120,50,50);
     this.regularCollarR.position(200,150,50,50);
     this.pointedCollarR.position(300,150,50,50);
     this.chineseCollarR.position(400,150,50,50);
     this.regularCollarRF.position(200,200,50,50);
     this.pointedCollarRF.position(300,200,50,50);
     this.chineseCollarRF.position(400,200,50,50);
     this.regularCollarS.position(200,250,50,50);
     this.chineseCollarS.position(300,250,50,50);
     this.pointedCollarS.position(400,250,50,50);
     this.regularCollarSF.position(200,300,50,50);
     this.pointedCollarSF.position(300,300,50,50);
     this.chineseCollarSF.position(400,300,50,50);
     this.regularCollarM.position(200,350,50,50);
     this.pointedCollarM.position(300,350,50,50);
     this.chineseCollarM.position(400,350,50,50);
     this.regularCollarMF.position(200,400,50,50);
     this.pointedCollarMF.position(300,400,50,50);
     this.chineseCollarMF.position(400,400,50,50);
     this.regularCollarC.position(200,450,50,50);
     this.pointedCollarC.position(300,450,50,50);
     this.chineseCollarC.position(400,450,50,50);
     this.regularCollarCF.position(200,500,50,50);
     this.pointedCollarCF.position(300,500,50,50);
     this.chineseCollarCF.position(400,500,50,50);


     /*this.pointedCollar.mousepressed(()=>{

        this.image=loadImage()
     })*/

    }
    change(){
       
    }
}