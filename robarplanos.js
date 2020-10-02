let robarplanos=(numeroSerie,despegar)=>{

    if(numeroSerie<=10){
        let mensaje= `Tenemos el plano de la estrella numero ${numeroSerie}`;
        despegar(null,mensaje);
     
        }else{
            let mensaje = "Tenemos un plano equivocado";
         despegar(mensaje,null);
        
        }
}
robarplanos(12, (error,mensaje)=>{
    if(error){
        console.log(error);
    }else{
        console.log(mensaje);
        console.log("Estamos despegando la nave");
    }
   
});