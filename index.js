const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// a) Pizzas con id impar
console.log("a) Pizzas con ID impar:");
pizzas.forEach(function (pizza) {
  if (pizza.id % 2 !== 0) {
    console.log(pizza.nombre);
  }
});

// b) ¿Hay alguna pizza que valga menos de $600?
console.log("\nb) ¿Hay alguna pizza que valga menos de $600?");
const hayPizzaEconomica = pizzas.some(function (pizza) {
  return pizza.precio < 600;
});

if (hayPizzaEconomica) {
  console.log("Sí, hay al menos una pizza que cuesta menos de $600.");
} else {
  console.log("No, todas las pizzas tienen un precio igual o mayor a $600.");
}

// c) Nombre de cada pizza con su respectivo precio
console.log("\nc) Nombre de cada pizza con su respectivo precio:");
pizzas.forEach(function (pizza) {
  console.log(`${pizza.nombre} - Precio: $${pizza.precio}`);
});

// d) Todos los ingredientes de cada pizza
console.log("\nd) Ingredientes de cada pizza:");
pizzas.forEach(function (pizza) {
  console.log(`Pizza: ${pizza.nombre}`);
  pizza.ingredientes.forEach(function (ingrediente) {
    console.log(`- ${ingrediente}`);
  });
  console.log("-------------------");
});