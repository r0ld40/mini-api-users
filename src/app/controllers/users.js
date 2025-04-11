import models from '../models/models';

module.exports.getUsers = async (req, res) => {
  try {
    const users = await models.users.findAll({ raw: true });

    console.log('################# USUÁRIOS #################');
    console.log(users);
    return res.json(users);
  } catch (error) {
    console.error('Erro ao buscar usuários!', error);
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
};

module.exports.getOneUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await models.users.findOne({
      where: { id_user: id },
      raw: true,
    }); // procura um usuário pelo id

    if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

    return res.json(user);
  } catch (error) {
    console.error('Erro ao buscar usuário no banco!', error);

    return res.status(500).json({ error: 'Erro ao buscar usuário' });
  }
};

module.exports.createUser = async (req, res) => {
  const options = req.body;

  if (!options) {
    return res.status(400).json({ error: 'Dados inválidos' });
  }

  try {
    const user = await models.users.create(options); // Cria um usuário no banco

    console.log('################# USUÁRIO CRIADO #################');
    console.log(user);

    return res.status(201).json(user);
  } catch (error) {
    console.error('Erro ao criar usuário!', error);

    return res.status(500).json({ error: 'Erro ao criar usuário' });
  }
};

module.exports.deleteUser = async (req, res) => {
  console.log('🚀 ~ module.exports.deleteUser ~ req:', req);
  const id = req.params.id;
  console.log('🚀 ~ module.exports.deleteUser ~ id:', id);

  try {
    const user = await models.users.findOne({
      where: { id_user: id },
      raw: true,
    }); // procura um usuário pelo id
    console.log('🚀 ~ module.exports.deleteUser ~ user:', user);

    if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

    await models.users
      .destroy({ where: { id_user: id } })
      .then((response) => {
        console.log('################# USUÁRIO DELETADO #################');
        return res.json(response);
      })
      .catch((error) => {
        console.error('Erro ao deletar usuário no banco!', error);

        return res.status(500).json({ error: 'Erro ao deletar usuário' });
      });
  } catch (error) {
    console.error('Erro ao deletar usuário no banco!', error);

    return res.status(500).json({ error: 'Erro ao deletar usuário' });
  }
};
