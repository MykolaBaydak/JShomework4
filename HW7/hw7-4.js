clients.sort(function(a, b) {
    return a.order.length - b.order.length;
});
console.log(clients);