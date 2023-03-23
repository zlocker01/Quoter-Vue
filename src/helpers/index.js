const calcularTotalPagar = (cantidad, plazo) => {
    let total;

    //mientras mayor canitidad, menor interes a pagar
    if(cantidad < 50000){
        total = cantidad * 1.5;
    }
    else if(cantidad >= 50000 && cantidad < 100000){
        total = cantidad * 1.4;
    } else if(cantidad >= 100000 && cantidad < 150000){
        total = cantidad * 1.3;
    }else{
        total = cantidad * 1.2;
    };

    //plazo + plazo, + intereses
    if(plazo === 6){
        total *= 1.1;
    }
    if(plazo === 12){
        total *= 1.2;
    }
    if(plazo === 24){
        total *= 1.3;
    };
    return total;
};

export {calcularTotalPagar};