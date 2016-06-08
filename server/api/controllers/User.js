import User from '../models/user';

export function getUsers(req, res) {
  User.find().exec((err, users) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ users });
  });
}

export function addUser(req, res) {
  if (!req.body.user.name || !req.body.user.email || !req.body.user.password) {
    return res.status(403).end();
  }

  const newUser = new User(req.body.user);

  newUser.save((err, saved) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.json({ user: saved });
  });
}

// export function getUser(req, res) {
//   const userId = req.body.userId;
//   User.findOne({ id: userId }).exec((err, user) => {
//     if (err) {
//       return res.status(500).send(err);
//     }
//     res.json({ user });
//   });
// }

export function deleteUser(req, res) {
  const userId = req.body.userId;
  User.findById(userId).exec((err, user) => {
    if (err) {
      return res.status(500).send(err);
    }

    user.remove(() => {
      res.status(200).end();
    });
  });
}
