let guerreros=(edad,funcion)=>{

    if(edad < 15){
        let mensaje= `Su edad es de ${edad} años y puedes continuar con el manejo de la fuerza!` ;
        funcion(mensaje,null);
    }else{
        let mensaje = `Su edad es de ${edad} años y puedes continuar con el manejo del sable de luz!` ;
        funcion(null,mensaje);         
    }
 

}
guerreros(40, (error,mensaje)=>{
if(error){
    console.log(error);
}
else{
    console.log(mensaje);
    console.log("Preparado para la guerra padawans?..")
}
});