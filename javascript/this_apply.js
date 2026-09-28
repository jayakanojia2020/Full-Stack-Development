function introduce(city) {
    console.log(this.name + " from " + city);
}

const person = {
    name: "Jaya"
};

introduce.apply(person, ["Delhi"]);
//Similar to call(), but arguments are passed as an array.