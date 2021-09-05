class ParkingSystem {
    constructor(private big: number, private medium: number, private small: number) {}

    addCar(carType: number): boolean {
        switch (carType) {
            case 1:
                return this.big-- > 0;
            case 2:
                return this.medium-- > 0;
            case 3:
                return this.small-- > 0;
        }
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
