var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FooBase = /** @class */ (function () {
    function FooBase() {
    }
    return FooBase;
}());
// EFFECT ON INSTANCES
var foo = new FooBase();
foo.x; // okay
// foo.y; // ERROR : private
// foo.z; // ERROR : protected
// EFFECT ON CHILD CLASSES
var FooChild = /** @class */ (function (_super) {
    __extends(FooChild, _super);
    function FooChild() {
        var _this = _super.call(this) || this;
        _this.x; // okay
        // this.y; // ERROR: private
        _this.z; // okay
        return _this;
    }
    return FooChild;
}(FooBase));
