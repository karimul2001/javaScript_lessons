class FormData {
    constructor(name, phone, address, gender) {
        this.name = name;
        this.phone = phone;
        this.address = address;
        this.gender = gender;
    }
    DataDisplay(){
        let output = "<h2>Form Informatin</h2>";
        output += "Name: " + this.name + "<br>";
        output += "Phone: " + this.phone + "<br>";
        output += "Address: " + this.address + "<br>";
        output += "Gender: " + this.gender + "<br>";
        return output;
    }
}