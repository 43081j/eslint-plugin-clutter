import recommended from './configs/recommended';
import {noUnnecessaryDependency} from './rules/no-unnecessary-dependency';

export const rules = {
  'no-unnecessary-dependency': noUnnecessaryDependency
};

export const configs = {
  recommended
};
