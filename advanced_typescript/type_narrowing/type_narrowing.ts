function calculate(value: number | boolean) {

    if (typeof value === "number") {
        console.log(value * 10);
    }
    else {
        console.log(!value);
    }

}
calculate(2);
calculate(true);
