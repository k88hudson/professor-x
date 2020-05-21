export interface Experiment {
  name: string;
  slug: string;
  description: string;
  metric: string;
  secondary_metric: string;
  design: string;
  tags: string;
  trigger?: string;
  channel: string;
}

interface AddExperimentAction {
  type: "ADD_EXPERIMENT";
  data: Experiment;
}

interface UpdateExperimentAction {
  type: "UPDATE_EXPERIMENT";
  slug: string;
  data: Partial<Experiment>;
}

export type ExperimentAction = AddExperimentAction | UpdateExperimentAction;
