class Publisher {

    /**
     *
     * @param {string} name
     */
    constructor(name) {
        this.name = name;
    }

    /**
     *
     * @return {INT|*}
     */
    getId() {
        return this.id;
    }
    /**
     *
     * @return {string}
     */
    getName() {
        return this.name;
    }

    /**
     *
     * @return {string}
     */
    getAddress() {
        return this.address;
    }

    /**
     *
     * @return {string}
     */
    getPhone() {
        return this.phone;
    }

    /**
     *
     * @param {string} address
     * @return self
     */
    setAddress(address) {
        this.address = address;
    }

    /**
     *
     * @param {string} phone
     * @return self
     */
    setPhone(phone) {
        this.phone = phone;
    }

    /**
     *
     * @param {INT} id
     * @return self
     */
    setId(id) {
        this.id = id;
    }
}

module.exports = Publisher;
