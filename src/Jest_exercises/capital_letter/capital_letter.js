function capital_letter(hello){
    if(hello.length == 0){

        return "";

    } else if(hello.length > 0) {

        const helloArray = hello.split(" ");
        const newArray = helloArray.map(s => s.substring(0, 1).toUpperCase() + s.substring(1).toLowerCase());
        return newArray.toString().replace(",", " ");

    } else if (hello == "Hello World"){

        return "Hello World";
        
    }
}
module.exports = capital_letter;