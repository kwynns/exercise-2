var TriangleClassifier = function() {

    this.classify = function(a, b, c) {
        //check if can be a triangle
        if ((a + b > c) && (b + c > a) && (a + c > b)) {
            if (a === b && b === c && a === c) {
                return "equilateral";
            }
            if (a === b || a === c || b === c) {
                return "isosceles";
            }
             if((a != b ) && (a != c) && (b != c)) {
                return "scalene";
            }
        }else{
        	// not a triangle
        	throw "ArgumentError";
        }

    };
};
