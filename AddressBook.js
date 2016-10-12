var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

/*prints full name of objects which has first name and last name properties*/
function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

/*prints all the names in the array of objects*/
function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*To search an array of objects, with last name as search criteria, returns the object name with the matching last name*/
function search(lastName){
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
		if(contacts[i].lastName === lastName) printPerson(contacts[i]);
	}
}

/*updates the array of objects with new contact*/
function add(firstName, lastName, phoneNumber, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;   
}

/*calling the functions*/
contacts[contacts.length] = new add("Tom", "Li", "(444) 555-6666", "tom.li@example.com");
list();

