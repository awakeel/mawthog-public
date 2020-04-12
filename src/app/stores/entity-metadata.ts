import { EntityMetadataMap } from "@ngrx/data";

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
