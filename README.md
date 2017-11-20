# Project School Timetable Server

Automatic timetable scheduling for schools

## Sequelize

npm install -g sequelize-cli

- pg: will be responsible for creating the database connection while 
- pg-hstore: is a module for serializing and deserializing JSON data into the Postgres hstore format.

### Commands used

1. Create folders and generate boilerplate code.

sequelize init

2. Create the database.

sequelize db:create project-school-timetable

3. To actually export our database URL into our environment

export DATABASE_URL=DATABASE_URL

4. Generate models

sequelize model:generate --name institution --attributes institution:string comments:string

5. Persist the models to the database by running the migrations

sequelize db:migrate

## NPM globals used

npm i -g sequelize-cli http-server

# TODO

- rename table
