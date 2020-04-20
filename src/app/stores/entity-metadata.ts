import { Brand } from "src/app/models/car";
import { EntityMetadataMap } from "@ngrx/data";
import { IdSelector } from "@ngrx/entity";

const entityMetadata: EntityMetadataMap = {
  SubBrand: {},
  Car: {},
  Brand: {},
};

// because the plural of "hero" is not "heros"
const pluralNames = {};

export const entityConfig = {
  entityMetadata,
  pluralNames,
};
