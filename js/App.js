var App = function(triangle) {
    var self = this;
    self.triangle = triangle;

    self.start = function() {
        self.$classification = document.getElementById('classification');

        clearClassification();
    };
    self.updateTriangleClassification = function() {
        var a = self.triangle.a(),
            b = self.triangle.b(),
            c = self.triangle.c();
        var classification = new TriangleClassifier;
        var result  = classification.classify(a,b,c);
       console.log(result);
    };

    function clearClassification() {
        self.$classification.innerText = "";
    }

    return self;
};
