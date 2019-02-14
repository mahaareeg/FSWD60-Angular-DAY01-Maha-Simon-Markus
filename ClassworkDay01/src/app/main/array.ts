class tour{
   	destination: string;
   	name: string;
	price: string;
	numberOfNights: number;
	city: string;
	image: string;
	constructor(destination, name, price, numberOfNights, city, image){
		this.destination =  destination;
		this.name = name;
		this.price = price;
		this.numberOfNights = numberOfNights;
		this.city = city;
		this.image = image;
	}

	getData(){
			return this.destination + this.name + this.price + this.numberOfNights + this.city;
		}
}


var tours = new Array();
tours[0] = new tour("Austria", "Österreich im Winter", "€ 1.500,--", 7, "Vienna", "img/vienna.jpg");
tours[0] = new tour("Switzerland", "Schweiz im Winter", "€ 1.700,--", 6, "Bern", "img/bern.jpg");
tours[0] = new tour("Germany", "The famous Oktoberfest", "€ 1.400,--", 8, "Munich", "img/munich.jpg");
tours[0] = new tour("Namibia", "Safari in Namibia", "€ 3.500,--", 7, "Windhoek", "img/windhoek.jpg");
tours[0] = new tour("Australia", "On the other side of the Earth", "€ 4.500,--", 15, "Canberra", "img/canberra.jpg");
tours[0] = new tour("Antarctic", "Whales & the coldest continent", "€ 7.000,--", 21, "Research Station 2", "img/research.jpg");