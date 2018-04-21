export class Response {
  API: API;
  errors: Error[];
  data: ApiData;
  links: { [key: string]: string };
}

export class API {
  version: string;
}

export class ErrorSource {
  pointer: string;
}

export class Error {
  code: string;
  source: ErrorSource;
  title: string;
  detail: string;
}

export class FeatureGroup {
  data: FeatureGroupData;
  featureGroups: FeatureGroup[];
}

export class FeatureGroupData {
  name: string;
  features: Feature[];
}

export class Feature {
  name: string;
  status: FeatureStatus;
  childFeatures?: Feature[];
}

export class FeatureStatus {
  completed: boolean;
  categories?: string[];
  granularStatuses: GranularStatus[];
}

export class GranularStatus {
  category: string;
  code: string;
  description: string;
}

export class ApiData {
  lastUpdateDate: string;
  featureGroup: FeatureGroup;
}
