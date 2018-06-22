/*
 * Person object constructor
 */
var Person = function(firstAndLast) {
    const name = firstAndLast.split(" ");

    this.getFirstName = function() {
        return name[0];
    };

    this.getLastName = function() {
        return name[1];
    }

    this.getFullName = function() {
        return name[0] + " " + name[1];
    }

    this.setFirstName = function(first) {
        name[0] = first;
    }

    this.setLastName = function(last) {
        name[1] = last;
    }

    this.setFullName = function(firstAndLast) {
        let newName = firstAndLast.split(" ");
        name[0] = newName[0];
        name[1] = newName[1];
    }
};
