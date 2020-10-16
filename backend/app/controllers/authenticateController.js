const User = require('../models/user');

class AuthenticateController {
  static async show(request, response) {
    try {
      const { email, password } = request.body;
      const criterion = { email };
      const promiseEmail = await User.find(criterion).exec();

      if (promiseEmail.length === 0) {
        return response.json({ message: 'Esse e-mail não existe aqui, viu?' });
      }

      const criterionPwd = { $and: [{ email }, { senha: password }] };
      const promiseUser = await User.find(criterionPwd).exec();

      if (promiseUser.length === 0) {
        return response.json({
          message: 'Senha: algo de errado não está certo',
        });
      }

      return response.json(promiseUser);
    } catch (err) {
      return err;
    }
  }
}

module.exports = AuthenticateController;
