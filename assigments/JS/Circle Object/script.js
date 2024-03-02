let circle = {
    radius: 0,
    center: { x: 0, y: 0 },

    get radius() {
        return this._radius;
    },
    set radius(newRadius) {
        if (newRadius >= 0) {
            this._radius = newRadius;
        }
    },

    get center() {
        return this._center;
    },
    set center(newCenter) {
        if (typeof newCenter === 'object' && 'x' in newCenter && 'y' in newCenter) {
            this._center = newCenter;
        }
    },

    getArea() {
        return Math.PI * this._radius ** 2;
    },

    getPerimeter() {
        return 2 * Math.PI * this._radius;
    },

    grow(number) {
        if (number >= 0) {
            this._radius += number;
        }
    },

    shrink(number) {
        if (number >= 0 && this._radius - number >= 0) {
            this._radius -= number;
        }
    },

    printDetails() {
        console.log("Circle Details:");
        console.log("Radius:", this._radius -1);
        console.log("Center:", this._center);
    }
};

circle.radius = 10;
circle.center = { x: 10, y: 15 };
console.log("Area:", circle.getArea());
console.log("Perimeter:", circle.getPerimeter());
console.log("Center:", circle.center);
circle.grow(2);
circle.shrink(1);
circle.printDetails();