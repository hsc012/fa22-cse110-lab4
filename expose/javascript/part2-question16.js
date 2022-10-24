for(const property in statistics){
    if(property.startsWith("r") || property % 2 != 0){
        console.log(`${statistics[property]}`);
    }
}