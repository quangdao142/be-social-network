const interactionRepository = require('../repositories/interaction.repository');

const addInteraction = async (req, res) => {
  try {
    const interaction = await interactionRepository.addInteraction(req.body);
    res.status(201).json(interaction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getInteractions = async (req, res) => {
  try {
    const interactions = await interactionRepository.getInteractions();
    res.json(interactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getInteractionById = async (req, res) => {
  try {
    const interaction = await interactionRepository.getInteractionById(req.params.id);
    if (interaction == null) {
      return res.status(404).json({ message: 'Interaction not found' });
    }
    res.json(interaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateInteraction = async (req, res) => {
  try {
    const interaction = await interactionRepository.updateInteraction(req.params.id, req.body);
    res.json(interaction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteInteraction = async (req, res) => {
  try {
    await interactionRepository.deleteInteraction(req.params.id);
    res.json({ message: 'Interaction deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addInteraction,
  getInteractions,
  getInteractionById,
  updateInteraction,
  deleteInteraction
};