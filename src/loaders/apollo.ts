import { ApolloServer } from "apollo-server-express";
import express from "express";
import schema from "../schema";

const path = "/graphql";

export default ({ app }: { app: express.Application }) => {
  const server = new ApolloServer({ schema });
  server.applyMiddleware({ app, path });
};
