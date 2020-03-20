import { IResolvers } from "graphql-tools";

const resolver: IResolvers = {
    Query: {
        hello: () => 'Hello world!',
    }
};
export default resolver;
