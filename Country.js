class country{
    constructor(){
        this.country = createElement('h2');
        this.greeting = createElement('h2');
    }

   getCountry(){
       var countryref = database.ref('Countries');
       countryref.on("value",(data)=>{
           Countries = data.val();
       })
   } 
 display(){
     this.country.html("India");
     this.country1.position(displayWidth/2 - 70, displayHeight/4);

     this.greeting.html("Hello " + 2 );
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
 }
   
}