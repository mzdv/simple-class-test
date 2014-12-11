
function Foo(bar) {

    this.bar = bar;
    this.baz = 'baz';
    this.fooBar = function() {
        console.log("Hello!");
    };
}

//Foo.prototype.fooBar = function() {
//    console.log("drdd");
//};

module.exports = Foo;