var bar = {
    foo0: function() { return 0; },
    ['foo' + (1 + 1)]() { return 2; }
};

console.log(bar.foo0()); // 0
console.log(bar.foo2()); // 2