const { createSubscription } = require("../services/subscribeServices");

const subscribe = async (req, res) => {
  try {
    const { name, email, empresa } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Nome e email são obrigatórios." });
    }

    const subscription = await createSubscription({ name, email, empresa });
    res.status(201).json({
      message: "Inscrição realizada com sucesso!",
      subscription,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { subscribe };
