import { institution } from "../controllers";

module.exports = app => {
  // INSTITUTIONS ROUTES
  app.get("/api/institution", institution.list);
  app.get("/api/institution/:institutionId", institution.retrieve);
  app.post("/api/institution", institution.create);
  app.put("/api/institution/:institutionId", institution.update);
  app.delete("/api/institution/:institutionId", institution.destroy);

  // BASE ROUTE
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the Institutions API!"
    })
  );
};
