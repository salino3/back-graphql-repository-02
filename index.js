// npm i apollo-server graphql

import {gql} from 'apollo-server';

const persons = [
  {
    id: "3durj545736njf773-334ghh-34-vdg6p",
    name: "Joe",
    phone: "037993-282633227",
    street: "c/ San Miguel",
    city: "Barcelona",
  },
  {
    id: "3durj544456njf773-334ghh-34-vdg6p",
    name: "Daniel",
    phone: "037902-282633227",
    street: "c/ San Rafael",
    city: "Madrid",
  },
  {
    id: "3durj444736njf773-777ghh-34-vdg6p",
    name: "Gigi",
    street: "c/ San Nicola",
    city: "Bilbao",
  },
];

const typeDefs = gql`
 type Person {
    id: ID!
    name: String!
    phone: String
    street: String!
    city: String!
}`;


