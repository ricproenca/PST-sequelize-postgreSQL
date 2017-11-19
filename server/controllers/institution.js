import models from "../models/";
const institution = models.institution;

module.exports = {
  create(req, res) {
    return institution
      .create({
        institution: req.body.institution,
        comments: req.body.comments
      })
      .then(results => res.status(201).send(results))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return institution
      .all()
      .then(results => res.status(200).send(results))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res) {
    return institution
      .findById(req.params.institutionId)
      .then(results => {
        if (!results) {
          return res.status(404).send({
            message: "Institution Not Found"
          });
        }
        return res.status(200).send(results);
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return institution
      .update(
        {
          institution: req.body.institution || institution.institution,
          comments: req.body.comments || institution.comments
        },
        {
          where: {
            id: req.params.institutionId
          }
        }
      )
      .then(results => {
        if (!results) {
          return res.status(404).send({
            message: "Institution Not Found"
          });
        }
        return res.status(200).send(results);
      })
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res) {
    return institution
      .destroy({
        where: {
          id: req.params.institutionId
        }
      })
      .then(results => {
        if (!results) {
          return res.status(404).send({
            message: "Institution Not Found"
          });
        }
        return res.status(204).send(results);
      })
      .catch(error => res.status(400).send(error));
  }
};
