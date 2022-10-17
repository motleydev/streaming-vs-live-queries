/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "mutation InsertUserOne($username: String!, $slug: String!) {\n  insert_user_one(object: {username: $username, canvas_slug: $slug}) {\n    id\n    username\n    canvas_slug\n  }\n}": types.InsertUserOneDocument,
    "query CheckUser($username: String) {\n  user(where: {username: {_eq: $username}}) {\n    id\n    username\n  }\n}": types.CheckUserDocument,
    "query GetColors {\n  colors {\n    value\n  }\n}": types.GetColorsDocument,
    "query GetShapes {\n  shapes {\n    value\n  }\n}": types.GetShapesDocument,
};

export function graphql(source: "mutation InsertUserOne($username: String!, $slug: String!) {\n  insert_user_one(object: {username: $username, canvas_slug: $slug}) {\n    id\n    username\n    canvas_slug\n  }\n}"): (typeof documents)["mutation InsertUserOne($username: String!, $slug: String!) {\n  insert_user_one(object: {username: $username, canvas_slug: $slug}) {\n    id\n    username\n    canvas_slug\n  }\n}"];
export function graphql(source: "query CheckUser($username: String) {\n  user(where: {username: {_eq: $username}}) {\n    id\n    username\n  }\n}"): (typeof documents)["query CheckUser($username: String) {\n  user(where: {username: {_eq: $username}}) {\n    id\n    username\n  }\n}"];
export function graphql(source: "query GetColors {\n  colors {\n    value\n  }\n}"): (typeof documents)["query GetColors {\n  colors {\n    value\n  }\n}"];
export function graphql(source: "query GetShapes {\n  shapes {\n    value\n  }\n}"): (typeof documents)["query GetShapes {\n  shapes {\n    value\n  }\n}"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;