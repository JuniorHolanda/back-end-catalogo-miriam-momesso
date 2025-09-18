
const Subscribe = require("../models/subscribe");

const createSubscription = async ({ name, email, empresa }) => {
  const existing = await Subscribe.findOne({ email });
  if (existing) {
    throw new Error("Este email já está cadastrado.");
  }

  const subscription = new Subscribe({ name, email, empresa });
  return await subscription.save();
};

module.exports = { createSubscription };
