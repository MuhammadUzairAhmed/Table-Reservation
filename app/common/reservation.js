class Reservation {
    constructor() {}
    getTableData() {
        return new Promise((resolve, reject) => {
            resolve(fetch('http://demo9650340.mockable.io/tables'))
        })
    }
    getDecks() {
        return new Promise((resolve, reject) => {
            resolve(fetch('http://demo9650340.mockable.io/Deck')) 
        })
    }
    getCustomers() {
        return new Promise((resolve, reject) => {
            resolve(fetch('http://demo9650340.mockable.io/customer')) 
        })
    }
    getTimeSlots() {
        return new Promise((resolve, reject) => {
            resolve(fetch('http://demo9650340.mockable.io/timeslots')) 
        })
    }
    getStatus() {
        return new Promise((resolve, reject) => {
            resolve(fetch('http://demo9650340.mockable.io/status')) 
        })
    }
    getLocation() {
        return new Promise((resolve, reject) => {
            resolve(fetch('http://demo9650340.mockable.io/location')) 
        })
    }
}


const reservationInstance = new Reservation();
Object.freeze(reservationInstance);

export default reservationInstance;