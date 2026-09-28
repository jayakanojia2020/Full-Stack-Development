const person = {
    name: "Jaya",

    address: {
        city: "Delhi",

        show() {
            console.log(this.city);
        }
    }
};

person.address.show();