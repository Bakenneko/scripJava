const value = prompt("Enter name product").toLowerCase();
let cost;
switch (value) {
    case "apple":
        cost = 10;
        break;
    case "cherry":
        cost = 50;
        break;
    case "pineapple":
        cost = 40;
        break;
    case "watermelon":
        cost = 110;
        break;
    case "balckberry":
        cost = 10;
        break;
    case "melon":
        cost = 150;
        break;
    default : alert(`Product ${value} is absent`);
}

alert(`${value} costs ${cost}`);