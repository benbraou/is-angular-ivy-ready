export class OverallStatus {
  nbrFeaturesCompleted: number;
  nbrFeaturesPending: number;
  progressPercentage: number;
}

export interface FeatureGroupProgress {
  percentage: number;
  nbrCompleted: number;
  nbrPending: number;
}
