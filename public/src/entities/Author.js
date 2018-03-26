class Author{
    constructor(author){
        this.name = author.name;
        this.id = author.id;
        this.username = author.username;
        this.email = author.email;
        this.street = author.address.street;
        this.zipcode = author.address.zipcode;
        this.city = author.address.city;
        this.lat = author.address.geo.lat;
        this.lng = author.address.geo.lng;
        this.phone = author.phone
        this.comName = author.company.name;
        this.catchPhrase = author.company.catchPhrase;
    }
}

export default Author