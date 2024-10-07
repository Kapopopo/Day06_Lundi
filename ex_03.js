function addCarToAgent(agent, brand, model, color, power) {
  if (!brand || !model || !color || !power) {
    console.error("One of the keys")
    return null;
  }
  agent.car = {
    bran: brand,
    mode: model,
    col: color,
    pow: power
  }
  return agent;
}

let agent = {
  firstName: "James",
  lastName: "BOND",
  age: 51,
  code: "007"
}

shareThatBeauty(addCarToAgent(agent, 'DBS', 'SIMPS', 'COCO', 'PAWN'));

