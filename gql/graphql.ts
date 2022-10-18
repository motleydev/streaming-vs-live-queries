/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "canvas" */
export type Canvas = {
  __typename?: 'canvas';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An array relationship */
  messages: Array<Canvas_Message>;
  /** An aggregate relationship */
  messages_aggregate: Canvas_Message_Aggregate;
  /** An array relationship */
  players: Array<User>;
  /** An aggregate relationship */
  players_aggregate: User_Aggregate;
  slug: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "canvas" */
export type CanvasMessagesArgs = {
  distinct_on?: InputMaybe<Array<Canvas_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Canvas_Message_Order_By>>;
  where?: InputMaybe<Canvas_Message_Bool_Exp>;
};


/** columns and relationships of "canvas" */
export type CanvasMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Canvas_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Canvas_Message_Order_By>>;
  where?: InputMaybe<Canvas_Message_Bool_Exp>;
};


/** columns and relationships of "canvas" */
export type CanvasPlayersArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


/** columns and relationships of "canvas" */
export type CanvasPlayers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** aggregated selection of "canvas" */
export type Canvas_Aggregate = {
  __typename?: 'canvas_aggregate';
  aggregate?: Maybe<Canvas_Aggregate_Fields>;
  nodes: Array<Canvas>;
};

/** aggregate fields of "canvas" */
export type Canvas_Aggregate_Fields = {
  __typename?: 'canvas_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Canvas_Max_Fields>;
  min?: Maybe<Canvas_Min_Fields>;
};


/** aggregate fields of "canvas" */
export type Canvas_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Canvas_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "canvas". All fields are combined with a logical 'AND'. */
export type Canvas_Bool_Exp = {
  _and?: InputMaybe<Array<Canvas_Bool_Exp>>;
  _not?: InputMaybe<Canvas_Bool_Exp>;
  _or?: InputMaybe<Array<Canvas_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  messages?: InputMaybe<Canvas_Message_Bool_Exp>;
  players?: InputMaybe<User_Bool_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "canvas" */
export enum Canvas_Constraint {
  /** unique or primary key constraint on columns "id" */
  CanvasPkey = 'canvas_pkey',
  /** unique or primary key constraint on columns "slug" */
  CanvasSlugKey = 'canvas_slug_key'
}

/** input type for inserting data into table "canvas" */
export type Canvas_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  messages?: InputMaybe<Canvas_Message_Arr_Rel_Insert_Input>;
  players?: InputMaybe<User_Arr_Rel_Insert_Input>;
  slug?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Canvas_Max_Fields = {
  __typename?: 'canvas_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** columns and relationships of "canvas_message" */
export type Canvas_Message = {
  __typename?: 'canvas_message';
  /** An object relationship */
  canvas?: Maybe<Canvas>;
  canvas_slug: Scalars['String'];
  color?: Maybe<Colors_Enum>;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  shape?: Maybe<Shapes_Enum>;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user?: Maybe<User>;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "canvas_message" */
export type Canvas_Message_Aggregate = {
  __typename?: 'canvas_message_aggregate';
  aggregate?: Maybe<Canvas_Message_Aggregate_Fields>;
  nodes: Array<Canvas_Message>;
};

/** aggregate fields of "canvas_message" */
export type Canvas_Message_Aggregate_Fields = {
  __typename?: 'canvas_message_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Canvas_Message_Max_Fields>;
  min?: Maybe<Canvas_Message_Min_Fields>;
};


/** aggregate fields of "canvas_message" */
export type Canvas_Message_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Canvas_Message_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "canvas_message" */
export type Canvas_Message_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Canvas_Message_Max_Order_By>;
  min?: InputMaybe<Canvas_Message_Min_Order_By>;
};

/** input type for inserting array relation for remote table "canvas_message" */
export type Canvas_Message_Arr_Rel_Insert_Input = {
  data: Array<Canvas_Message_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Canvas_Message_On_Conflict>;
};

/** Boolean expression to filter rows from the table "canvas_message". All fields are combined with a logical 'AND'. */
export type Canvas_Message_Bool_Exp = {
  _and?: InputMaybe<Array<Canvas_Message_Bool_Exp>>;
  _not?: InputMaybe<Canvas_Message_Bool_Exp>;
  _or?: InputMaybe<Array<Canvas_Message_Bool_Exp>>;
  canvas?: InputMaybe<Canvas_Bool_Exp>;
  canvas_slug?: InputMaybe<String_Comparison_Exp>;
  color?: InputMaybe<Colors_Enum_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  shape?: InputMaybe<Shapes_Enum_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "canvas_message" */
export enum Canvas_Message_Constraint {
  /** unique or primary key constraint on columns "canvas_slug", "user_id" */
  GameMessagePkey = 'game_message_pkey'
}

/** input type for inserting data into table "canvas_message" */
export type Canvas_Message_Insert_Input = {
  canvas?: InputMaybe<Canvas_Obj_Rel_Insert_Input>;
  canvas_slug?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Colors_Enum>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  shape?: InputMaybe<Shapes_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Canvas_Message_Max_Fields = {
  __typename?: 'canvas_message_max_fields';
  canvas_slug?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "canvas_message" */
export type Canvas_Message_Max_Order_By = {
  canvas_slug?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Canvas_Message_Min_Fields = {
  __typename?: 'canvas_message_min_fields';
  canvas_slug?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "canvas_message" */
export type Canvas_Message_Min_Order_By = {
  canvas_slug?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "canvas_message" */
export type Canvas_Message_Mutation_Response = {
  __typename?: 'canvas_message_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Canvas_Message>;
};

/** on_conflict condition type for table "canvas_message" */
export type Canvas_Message_On_Conflict = {
  constraint: Canvas_Message_Constraint;
  update_columns?: Array<Canvas_Message_Update_Column>;
  where?: InputMaybe<Canvas_Message_Bool_Exp>;
};

/** Ordering options when selecting data from "canvas_message". */
export type Canvas_Message_Order_By = {
  canvas?: InputMaybe<Canvas_Order_By>;
  canvas_slug?: InputMaybe<Order_By>;
  color?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  shape?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: canvas_message */
export type Canvas_Message_Pk_Columns_Input = {
  canvas_slug: Scalars['String'];
  user_id: Scalars['uuid'];
};

/** select columns of table "canvas_message" */
export enum Canvas_Message_Select_Column {
  /** column name */
  CanvasSlug = 'canvas_slug',
  /** column name */
  Color = 'color',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Shape = 'shape',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "canvas_message" */
export type Canvas_Message_Set_Input = {
  canvas_slug?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Colors_Enum>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  shape?: InputMaybe<Shapes_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "canvas_message" */
export type Canvas_Message_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Canvas_Message_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Canvas_Message_Stream_Cursor_Value_Input = {
  canvas_slug?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Colors_Enum>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  shape?: InputMaybe<Shapes_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "canvas_message" */
export enum Canvas_Message_Update_Column {
  /** column name */
  CanvasSlug = 'canvas_slug',
  /** column name */
  Color = 'color',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Shape = 'shape',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Canvas_Message_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Canvas_Message_Set_Input>;
  where: Canvas_Message_Bool_Exp;
};

/** aggregate min on columns */
export type Canvas_Min_Fields = {
  __typename?: 'canvas_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "canvas" */
export type Canvas_Mutation_Response = {
  __typename?: 'canvas_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Canvas>;
};

/** input type for inserting object relation for remote table "canvas" */
export type Canvas_Obj_Rel_Insert_Input = {
  data: Canvas_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Canvas_On_Conflict>;
};

/** on_conflict condition type for table "canvas" */
export type Canvas_On_Conflict = {
  constraint: Canvas_Constraint;
  update_columns?: Array<Canvas_Update_Column>;
  where?: InputMaybe<Canvas_Bool_Exp>;
};

/** Ordering options when selecting data from "canvas". */
export type Canvas_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  messages_aggregate?: InputMaybe<Canvas_Message_Aggregate_Order_By>;
  players_aggregate?: InputMaybe<User_Aggregate_Order_By>;
  slug?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: canvas */
export type Canvas_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "canvas" */
export enum Canvas_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Slug = 'slug',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "canvas" */
export type Canvas_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  slug?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "canvas" */
export type Canvas_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Canvas_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Canvas_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  slug?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "canvas" */
export enum Canvas_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Slug = 'slug',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Canvas_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Canvas_Set_Input>;
  where: Canvas_Bool_Exp;
};

/** columns and relationships of "colors" */
export type Colors = {
  __typename?: 'colors';
  description?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

/** aggregated selection of "colors" */
export type Colors_Aggregate = {
  __typename?: 'colors_aggregate';
  aggregate?: Maybe<Colors_Aggregate_Fields>;
  nodes: Array<Colors>;
};

/** aggregate fields of "colors" */
export type Colors_Aggregate_Fields = {
  __typename?: 'colors_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Colors_Max_Fields>;
  min?: Maybe<Colors_Min_Fields>;
};


/** aggregate fields of "colors" */
export type Colors_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Colors_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "colors". All fields are combined with a logical 'AND'. */
export type Colors_Bool_Exp = {
  _and?: InputMaybe<Array<Colors_Bool_Exp>>;
  _not?: InputMaybe<Colors_Bool_Exp>;
  _or?: InputMaybe<Array<Colors_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "colors" */
export enum Colors_Constraint {
  /** unique or primary key constraint on columns "value" */
  ColorsPkey = 'colors_pkey'
}

export enum Colors_Enum {
  Blue = 'blue',
  Green = 'green',
  Red = 'red',
  Yellow = 'yellow'
}

/** Boolean expression to compare columns of type "colors_enum". All fields are combined with logical 'AND'. */
export type Colors_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Colors_Enum>;
  _in?: InputMaybe<Array<Colors_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Colors_Enum>;
  _nin?: InputMaybe<Array<Colors_Enum>>;
};

/** input type for inserting data into table "colors" */
export type Colors_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Colors_Max_Fields = {
  __typename?: 'colors_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Colors_Min_Fields = {
  __typename?: 'colors_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "colors" */
export type Colors_Mutation_Response = {
  __typename?: 'colors_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Colors>;
};

/** on_conflict condition type for table "colors" */
export type Colors_On_Conflict = {
  constraint: Colors_Constraint;
  update_columns?: Array<Colors_Update_Column>;
  where?: InputMaybe<Colors_Bool_Exp>;
};

/** Ordering options when selecting data from "colors". */
export type Colors_Order_By = {
  description?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: colors */
export type Colors_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "colors" */
export enum Colors_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "colors" */
export type Colors_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "colors" */
export type Colors_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Colors_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Colors_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "colors" */
export enum Colors_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

export type Colors_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Colors_Set_Input>;
  where: Colors_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "canvas" */
  delete_canvas?: Maybe<Canvas_Mutation_Response>;
  /** delete single row from the table: "canvas" */
  delete_canvas_by_pk?: Maybe<Canvas>;
  /** delete data from the table: "canvas_message" */
  delete_canvas_message?: Maybe<Canvas_Message_Mutation_Response>;
  /** delete single row from the table: "canvas_message" */
  delete_canvas_message_by_pk?: Maybe<Canvas_Message>;
  /** delete data from the table: "colors" */
  delete_colors?: Maybe<Colors_Mutation_Response>;
  /** delete single row from the table: "colors" */
  delete_colors_by_pk?: Maybe<Colors>;
  /** delete data from the table: "shapes" */
  delete_shapes?: Maybe<Shapes_Mutation_Response>;
  /** delete single row from the table: "shapes" */
  delete_shapes_by_pk?: Maybe<Shapes>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "canvas" */
  insert_canvas?: Maybe<Canvas_Mutation_Response>;
  /** insert data into the table: "canvas_message" */
  insert_canvas_message?: Maybe<Canvas_Message_Mutation_Response>;
  /** insert a single row into the table: "canvas_message" */
  insert_canvas_message_one?: Maybe<Canvas_Message>;
  /** insert a single row into the table: "canvas" */
  insert_canvas_one?: Maybe<Canvas>;
  /** insert data into the table: "colors" */
  insert_colors?: Maybe<Colors_Mutation_Response>;
  /** insert a single row into the table: "colors" */
  insert_colors_one?: Maybe<Colors>;
  /** insert data into the table: "shapes" */
  insert_shapes?: Maybe<Shapes_Mutation_Response>;
  /** insert a single row into the table: "shapes" */
  insert_shapes_one?: Maybe<Shapes>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "canvas" */
  update_canvas?: Maybe<Canvas_Mutation_Response>;
  /** update single row of the table: "canvas" */
  update_canvas_by_pk?: Maybe<Canvas>;
  /** update multiples rows of table: "canvas" */
  update_canvas_many?: Maybe<Array<Maybe<Canvas_Mutation_Response>>>;
  /** update data of the table: "canvas_message" */
  update_canvas_message?: Maybe<Canvas_Message_Mutation_Response>;
  /** update single row of the table: "canvas_message" */
  update_canvas_message_by_pk?: Maybe<Canvas_Message>;
  /** update multiples rows of table: "canvas_message" */
  update_canvas_message_many?: Maybe<Array<Maybe<Canvas_Message_Mutation_Response>>>;
  /** update data of the table: "colors" */
  update_colors?: Maybe<Colors_Mutation_Response>;
  /** update single row of the table: "colors" */
  update_colors_by_pk?: Maybe<Colors>;
  /** update multiples rows of table: "colors" */
  update_colors_many?: Maybe<Array<Maybe<Colors_Mutation_Response>>>;
  /** update data of the table: "shapes" */
  update_shapes?: Maybe<Shapes_Mutation_Response>;
  /** update single row of the table: "shapes" */
  update_shapes_by_pk?: Maybe<Shapes>;
  /** update multiples rows of table: "shapes" */
  update_shapes_many?: Maybe<Array<Maybe<Shapes_Mutation_Response>>>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update multiples rows of table: "user" */
  update_user_many?: Maybe<Array<Maybe<User_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_CanvasArgs = {
  where: Canvas_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Canvas_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Canvas_MessageArgs = {
  where: Canvas_Message_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Canvas_Message_By_PkArgs = {
  canvas_slug: Scalars['String'];
  user_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ColorsArgs = {
  where: Colors_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Colors_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_ShapesArgs = {
  where: Shapes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Shapes_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  canvas_slug: Scalars['String'];
  username: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_CanvasArgs = {
  objects: Array<Canvas_Insert_Input>;
  on_conflict?: InputMaybe<Canvas_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Canvas_MessageArgs = {
  objects: Array<Canvas_Message_Insert_Input>;
  on_conflict?: InputMaybe<Canvas_Message_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Canvas_Message_OneArgs = {
  object: Canvas_Message_Insert_Input;
  on_conflict?: InputMaybe<Canvas_Message_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Canvas_OneArgs = {
  object: Canvas_Insert_Input;
  on_conflict?: InputMaybe<Canvas_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ColorsArgs = {
  objects: Array<Colors_Insert_Input>;
  on_conflict?: InputMaybe<Colors_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Colors_OneArgs = {
  object: Colors_Insert_Input;
  on_conflict?: InputMaybe<Colors_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ShapesArgs = {
  objects: Array<Shapes_Insert_Input>;
  on_conflict?: InputMaybe<Shapes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Shapes_OneArgs = {
  object: Shapes_Insert_Input;
  on_conflict?: InputMaybe<Shapes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CanvasArgs = {
  _set?: InputMaybe<Canvas_Set_Input>;
  where: Canvas_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Canvas_By_PkArgs = {
  _set?: InputMaybe<Canvas_Set_Input>;
  pk_columns: Canvas_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Canvas_ManyArgs = {
  updates: Array<Canvas_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Canvas_MessageArgs = {
  _set?: InputMaybe<Canvas_Message_Set_Input>;
  where: Canvas_Message_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Canvas_Message_By_PkArgs = {
  _set?: InputMaybe<Canvas_Message_Set_Input>;
  pk_columns: Canvas_Message_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Canvas_Message_ManyArgs = {
  updates: Array<Canvas_Message_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ColorsArgs = {
  _set?: InputMaybe<Colors_Set_Input>;
  where: Colors_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Colors_By_PkArgs = {
  _set?: InputMaybe<Colors_Set_Input>;
  pk_columns: Colors_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Colors_ManyArgs = {
  updates: Array<Colors_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ShapesArgs = {
  _set?: InputMaybe<Shapes_Set_Input>;
  where: Shapes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Shapes_By_PkArgs = {
  _set?: InputMaybe<Shapes_Set_Input>;
  pk_columns: Shapes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Shapes_ManyArgs = {
  updates: Array<Shapes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_ManyArgs = {
  updates: Array<User_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "canvas" */
  canvas: Array<Canvas>;
  /** fetch aggregated fields from the table: "canvas" */
  canvas_aggregate: Canvas_Aggregate;
  /** fetch data from the table: "canvas" using primary key columns */
  canvas_by_pk?: Maybe<Canvas>;
  /** fetch data from the table: "canvas_message" */
  canvas_message: Array<Canvas_Message>;
  /** fetch aggregated fields from the table: "canvas_message" */
  canvas_message_aggregate: Canvas_Message_Aggregate;
  /** fetch data from the table: "canvas_message" using primary key columns */
  canvas_message_by_pk?: Maybe<Canvas_Message>;
  /** fetch data from the table: "colors" */
  colors: Array<Colors>;
  /** fetch aggregated fields from the table: "colors" */
  colors_aggregate: Colors_Aggregate;
  /** fetch data from the table: "colors" using primary key columns */
  colors_by_pk?: Maybe<Colors>;
  /** fetch data from the table: "shapes" */
  shapes: Array<Shapes>;
  /** fetch aggregated fields from the table: "shapes" */
  shapes_aggregate: Shapes_Aggregate;
  /** fetch data from the table: "shapes" using primary key columns */
  shapes_by_pk?: Maybe<Shapes>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Query_RootCanvasArgs = {
  distinct_on?: InputMaybe<Array<Canvas_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Canvas_Order_By>>;
  where?: InputMaybe<Canvas_Bool_Exp>;
};


export type Query_RootCanvas_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Canvas_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Canvas_Order_By>>;
  where?: InputMaybe<Canvas_Bool_Exp>;
};


export type Query_RootCanvas_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCanvas_MessageArgs = {
  distinct_on?: InputMaybe<Array<Canvas_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Canvas_Message_Order_By>>;
  where?: InputMaybe<Canvas_Message_Bool_Exp>;
};


export type Query_RootCanvas_Message_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Canvas_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Canvas_Message_Order_By>>;
  where?: InputMaybe<Canvas_Message_Bool_Exp>;
};


export type Query_RootCanvas_Message_By_PkArgs = {
  canvas_slug: Scalars['String'];
  user_id: Scalars['uuid'];
};


export type Query_RootColorsArgs = {
  distinct_on?: InputMaybe<Array<Colors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Colors_Order_By>>;
  where?: InputMaybe<Colors_Bool_Exp>;
};


export type Query_RootColors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Colors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Colors_Order_By>>;
  where?: InputMaybe<Colors_Bool_Exp>;
};


export type Query_RootColors_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootShapesArgs = {
  distinct_on?: InputMaybe<Array<Shapes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Shapes_Order_By>>;
  where?: InputMaybe<Shapes_Bool_Exp>;
};


export type Query_RootShapes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Shapes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Shapes_Order_By>>;
  where?: InputMaybe<Shapes_Bool_Exp>;
};


export type Query_RootShapes_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  canvas_slug: Scalars['String'];
  username: Scalars['String'];
};

/** columns and relationships of "shapes" */
export type Shapes = {
  __typename?: 'shapes';
  description?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

/** aggregated selection of "shapes" */
export type Shapes_Aggregate = {
  __typename?: 'shapes_aggregate';
  aggregate?: Maybe<Shapes_Aggregate_Fields>;
  nodes: Array<Shapes>;
};

/** aggregate fields of "shapes" */
export type Shapes_Aggregate_Fields = {
  __typename?: 'shapes_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Shapes_Max_Fields>;
  min?: Maybe<Shapes_Min_Fields>;
};


/** aggregate fields of "shapes" */
export type Shapes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Shapes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "shapes". All fields are combined with a logical 'AND'. */
export type Shapes_Bool_Exp = {
  _and?: InputMaybe<Array<Shapes_Bool_Exp>>;
  _not?: InputMaybe<Shapes_Bool_Exp>;
  _or?: InputMaybe<Array<Shapes_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "shapes" */
export enum Shapes_Constraint {
  /** unique or primary key constraint on columns "value" */
  ShapesPkey = 'shapes_pkey'
}

export enum Shapes_Enum {
  Circle = 'circle',
  Octagon = 'octagon',
  Poly = 'poly',
  Square = 'square',
  Triangle = 'triangle'
}

/** Boolean expression to compare columns of type "shapes_enum". All fields are combined with logical 'AND'. */
export type Shapes_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Shapes_Enum>;
  _in?: InputMaybe<Array<Shapes_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Shapes_Enum>;
  _nin?: InputMaybe<Array<Shapes_Enum>>;
};

/** input type for inserting data into table "shapes" */
export type Shapes_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Shapes_Max_Fields = {
  __typename?: 'shapes_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Shapes_Min_Fields = {
  __typename?: 'shapes_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "shapes" */
export type Shapes_Mutation_Response = {
  __typename?: 'shapes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Shapes>;
};

/** on_conflict condition type for table "shapes" */
export type Shapes_On_Conflict = {
  constraint: Shapes_Constraint;
  update_columns?: Array<Shapes_Update_Column>;
  where?: InputMaybe<Shapes_Bool_Exp>;
};

/** Ordering options when selecting data from "shapes". */
export type Shapes_Order_By = {
  description?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: shapes */
export type Shapes_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "shapes" */
export enum Shapes_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "shapes" */
export type Shapes_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "shapes" */
export type Shapes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Shapes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Shapes_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "shapes" */
export enum Shapes_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

export type Shapes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Shapes_Set_Input>;
  where: Shapes_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "canvas" */
  canvas: Array<Canvas>;
  /** fetch aggregated fields from the table: "canvas" */
  canvas_aggregate: Canvas_Aggregate;
  /** fetch data from the table: "canvas" using primary key columns */
  canvas_by_pk?: Maybe<Canvas>;
  /** fetch data from the table: "canvas_message" */
  canvas_message: Array<Canvas_Message>;
  /** fetch aggregated fields from the table: "canvas_message" */
  canvas_message_aggregate: Canvas_Message_Aggregate;
  /** fetch data from the table: "canvas_message" using primary key columns */
  canvas_message_by_pk?: Maybe<Canvas_Message>;
  /** fetch data from the table in a streaming manner : "canvas_message" */
  canvas_message_stream: Array<Canvas_Message>;
  /** fetch data from the table in a streaming manner : "canvas" */
  canvas_stream: Array<Canvas>;
  /** fetch data from the table: "colors" */
  colors: Array<Colors>;
  /** fetch aggregated fields from the table: "colors" */
  colors_aggregate: Colors_Aggregate;
  /** fetch data from the table: "colors" using primary key columns */
  colors_by_pk?: Maybe<Colors>;
  /** fetch data from the table in a streaming manner : "colors" */
  colors_stream: Array<Colors>;
  /** fetch data from the table: "shapes" */
  shapes: Array<Shapes>;
  /** fetch aggregated fields from the table: "shapes" */
  shapes_aggregate: Shapes_Aggregate;
  /** fetch data from the table: "shapes" using primary key columns */
  shapes_by_pk?: Maybe<Shapes>;
  /** fetch data from the table in a streaming manner : "shapes" */
  shapes_stream: Array<Shapes>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table in a streaming manner : "user" */
  user_stream: Array<User>;
};


export type Subscription_RootCanvasArgs = {
  distinct_on?: InputMaybe<Array<Canvas_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Canvas_Order_By>>;
  where?: InputMaybe<Canvas_Bool_Exp>;
};


export type Subscription_RootCanvas_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Canvas_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Canvas_Order_By>>;
  where?: InputMaybe<Canvas_Bool_Exp>;
};


export type Subscription_RootCanvas_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCanvas_MessageArgs = {
  distinct_on?: InputMaybe<Array<Canvas_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Canvas_Message_Order_By>>;
  where?: InputMaybe<Canvas_Message_Bool_Exp>;
};


export type Subscription_RootCanvas_Message_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Canvas_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Canvas_Message_Order_By>>;
  where?: InputMaybe<Canvas_Message_Bool_Exp>;
};


export type Subscription_RootCanvas_Message_By_PkArgs = {
  canvas_slug: Scalars['String'];
  user_id: Scalars['uuid'];
};


export type Subscription_RootCanvas_Message_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Canvas_Message_Stream_Cursor_Input>>;
  where?: InputMaybe<Canvas_Message_Bool_Exp>;
};


export type Subscription_RootCanvas_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Canvas_Stream_Cursor_Input>>;
  where?: InputMaybe<Canvas_Bool_Exp>;
};


export type Subscription_RootColorsArgs = {
  distinct_on?: InputMaybe<Array<Colors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Colors_Order_By>>;
  where?: InputMaybe<Colors_Bool_Exp>;
};


export type Subscription_RootColors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Colors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Colors_Order_By>>;
  where?: InputMaybe<Colors_Bool_Exp>;
};


export type Subscription_RootColors_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootColors_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Colors_Stream_Cursor_Input>>;
  where?: InputMaybe<Colors_Bool_Exp>;
};


export type Subscription_RootShapesArgs = {
  distinct_on?: InputMaybe<Array<Shapes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Shapes_Order_By>>;
  where?: InputMaybe<Shapes_Bool_Exp>;
};


export type Subscription_RootShapes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Shapes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Shapes_Order_By>>;
  where?: InputMaybe<Shapes_Bool_Exp>;
};


export type Subscription_RootShapes_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootShapes_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Shapes_Stream_Cursor_Input>>;
  where?: InputMaybe<Shapes_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  canvas_slug: Scalars['String'];
  username: Scalars['String'];
};


export type Subscription_RootUser_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  /** An object relationship */
  canvas?: Maybe<Canvas>;
  canvas_slug: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An array relationship */
  messages: Array<Canvas_Message>;
  /** An aggregate relationship */
  messages_aggregate: Canvas_Message_Aggregate;
  updated_at: Scalars['timestamptz'];
  username: Scalars['String'];
};


/** columns and relationships of "user" */
export type UserMessagesArgs = {
  distinct_on?: InputMaybe<Array<Canvas_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Canvas_Message_Order_By>>;
  where?: InputMaybe<Canvas_Message_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Canvas_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Canvas_Message_Order_By>>;
  where?: InputMaybe<Canvas_Message_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user" */
export type User_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Max_Order_By>;
  min?: InputMaybe<User_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  canvas?: InputMaybe<Canvas_Bool_Exp>;
  canvas_slug?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  messages?: InputMaybe<Canvas_Message_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint on columns "canvas_slug", "username" */
  UserPkey = 'user_pkey',
  /** unique or primary key constraint on columns "username" */
  UserUsernameKey = 'user_username_key'
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  canvas?: InputMaybe<Canvas_Obj_Rel_Insert_Input>;
  canvas_slug?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  messages?: InputMaybe<Canvas_Message_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  canvas_slug?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "user" */
export type User_Max_Order_By = {
  canvas_slug?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  canvas_slug?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "user" */
export type User_Min_Order_By = {
  canvas_slug?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on_conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  canvas?: InputMaybe<Canvas_Order_By>;
  canvas_slug?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  messages_aggregate?: InputMaybe<Canvas_Message_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  canvas_slug: Scalars['String'];
  username: Scalars['String'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  CanvasSlug = 'canvas_slug',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  canvas_slug?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  username?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "user" */
export type User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Stream_Cursor_Value_Input = {
  canvas_slug?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  username?: InputMaybe<Scalars['String']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  CanvasSlug = 'canvas_slug',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

export type User_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type InsertUserOneMutationVariables = Exact<{
  username: Scalars['String'];
  slug: Scalars['String'];
}>;


export type InsertUserOneMutation = { __typename?: 'mutation_root', insert_user_one?: { __typename?: 'user', id: any, username: string, canvas_slug: string } | null };

export type CheckUserQueryVariables = Exact<{
  username?: InputMaybe<Scalars['String']>;
}>;


export type CheckUserQuery = { __typename?: 'query_root', user: Array<{ __typename?: 'user', id: any, username: string }> };

export type GetAllMessagesSubscriptionVariables = Exact<{
  canvas_slug?: InputMaybe<Scalars['String']>;
}>;


export type GetAllMessagesSubscription = { __typename?: 'subscription_root', canvas: Array<{ __typename?: 'canvas', id: any, messages: Array<{ __typename?: 'canvas_message', shape?: Shapes_Enum | null, color?: Colors_Enum | null, id: any, user?: { __typename?: 'user', username: string } | null }> }> };

export type GetColorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetColorsQuery = { __typename?: 'query_root', colors: Array<{ __typename?: 'colors', value: string }> };

export type UpsertMessageMutationVariables = Exact<{
  shape?: InputMaybe<Shapes_Enum>;
  color?: InputMaybe<Colors_Enum>;
}>;


export type UpsertMessageMutation = { __typename?: 'mutation_root', insert_canvas_message_one?: { __typename?: 'canvas_message', id: any } | null };

export type GetShapesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetShapesQuery = { __typename?: 'query_root', shapes: Array<{ __typename?: 'shapes', value: string }> };


export const InsertUserOneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertUserOne"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_user_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"canvas_slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"canvas_slug"}}]}}]}}]} as unknown as DocumentNode<InsertUserOneMutation, InsertUserOneMutationVariables>;
export const CheckUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CheckUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<CheckUserQuery, CheckUserQueryVariables>;
export const GetAllMessagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"GetAllMessages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"canvas_slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"canvas"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"canvas_slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"messages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shape"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAllMessagesSubscription, GetAllMessagesSubscriptionVariables>;
export const GetColorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetColors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"colors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<GetColorsQuery, GetColorsQueryVariables>;
export const UpsertMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpsertMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shape"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"shapes_enum"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"color"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"colors_enum"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_canvas_message_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"shape"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shape"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"color"},"value":{"kind":"Variable","name":{"kind":"Name","value":"color"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"on_conflict"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"constraint"},"value":{"kind":"EnumValue","value":"game_message_pkey"}},{"kind":"ObjectField","name":{"kind":"Name","value":"update_columns"},"value":{"kind":"EnumValue","value":"color"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpsertMessageMutation, UpsertMessageMutationVariables>;
export const GetShapesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetShapes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shapes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<GetShapesQuery, GetShapesQueryVariables>;