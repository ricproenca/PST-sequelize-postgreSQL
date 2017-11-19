const Controllers = require("../controllers");

const institutionController = Controllers.institution;

module.exports = app => {
  // INSTITUTIONS ROUTES
  app.get("/api/institution", institutionController.list);
  app.get("/api/institution/:institutionId", institutionController.retrieve);
  app.post("/api/institution", institutionController.create);
  app.put("/api/institution/:institutionId", institutionController.update);
  app.delete("/api/institution/:institutionId", institutionController.destroy);

  // BASE ROUTE
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the Institutions API!"
    })
  );
};
