import { Feature } from '../models';

export function notTableFeatureFactory() {
  return { ...NOT_TABLE_FEATURE };
}

export function tableFeatureFactory(
  featureId: 0 | 1 | 2 | 3 | 4 | 5 | 6
): Feature {
  return { ...TABLE_FEATURES[featureId] };
}

export function tableFeaturesFactory(): Feature[] {
  return [...TABLE_FEATURES];
}

const NOT_TABLE_FEATURE: Feature = {
  name: 'Basic setup of the transformer into `tsc`',
  status: {
    completed: false,
    granularStatuses: [
      {
        category: '',
        code: 'NOT_IMPLEMENTED',
        description: '',
      },
    ],
  },
};

const TABLE_FEATURES = [
  {
    name: '`@Component`',
    status: {
      completed: false,
      categories: [
        'Annotation',
        '`defineXXX()`',
        'Run time',
        'Spec',
        'Compiler',
        'Back Patch',
      ],
      granularStatuses: [
        {
          category: '`defineXXX()`',
          code: 'IMPLEMENTED',
          description: '`defineComponent()`',
        },
        {
          category: 'Run time',
          code: 'IMPLEMENTED',
          description: 'Run time',
        },
        {
          category: 'Spec',
          code: 'IMPLEMENTED',
          description: 'Spec',
        },
        {
          category: 'Compiler',
          code: 'IMPLEMENTED',
          description: 'Compiler',
        },
        {
          category: 'Back Patch',
          code: 'NOT_IMPLEMENTED',
          description: 'Back Patch',
        },
      ],
    },
    childFeatures: null,
  },
  {
    name: '`@Directive`',
    status: {
      completed: false,
      categories: [
        'Annotation',
        '`defineXXX()`',
        'Run time',
        'Spec',
        'Compiler',
        'Back Patch',
      ],
      granularStatuses: [
        {
          category: '`defineXXX()`',
          code: 'IMPLEMENTED',
          description: '`defineDirective()`',
        },
        {
          category: 'Run time',
          code: 'IMPLEMENTED',
          description: 'Run time',
        },
        {
          category: 'Spec',
          code: 'IMPLEMENTED',
          description: 'Spec',
        },
        {
          category: 'Compiler',
          code: 'IMPLEMENTED',
          description: 'Compiler',
        },
        {
          category: 'Back Patch',
          code: 'NOT_IMPLEMENTED',
          description: 'Back Patch',
        },
      ],
    },
    childFeatures: null,
  },
  {
    name: '`@Directive`',
    status: {
      completed: false,
      categories: [
        'Annotation',
        '`defineXXX()`',
        'Run time',
        'Spec',
        'Compiler',
        'Back Patch',
      ],
      granularStatuses: [
        {
          category: '`defineXXX()`',
          code: 'NOT_IMPLEMENTED',
          description: '`defineAbstractDirective()`',
        },
        {
          category: 'Run time',
          code: 'NOT_IMPLEMENTED',
          description: 'Run time',
        },
        {
          category: 'Spec',
          code: 'NOT_IMPLEMENTED',
          description: 'Spec',
        },
        {
          category: 'Compiler',
          code: 'NOT_IMPLEMENTED',
          description: 'Compiler',
        },
        {
          category: 'Back Patch',
          code: 'NOT_IMPLEMENTED',
          description: 'Back Patch',
        },
      ],
    },
    childFeatures: null,
  },
  {
    name: '`@Pipe`',
    status: {
      completed: false,
      categories: [
        'Annotation',
        '`defineXXX()`',
        'Run time',
        'Spec',
        'Compiler',
        'Back Patch',
      ],
      granularStatuses: [
        {
          category: '`defineXXX()`',
          code: 'IMPLEMENTED',
          description: '`definePipe()`',
        },
        {
          category: 'Run time',
          code: 'IMPLEMENTED',
          description: 'Run time',
        },
        {
          category: 'Spec',
          code: 'IMPLEMENTED',
          description: 'Spec',
        },
        {
          category: 'Compiler',
          code: 'IMPLEMENTED',
          description: 'Compiler',
        },
        {
          category: 'Back Patch',
          code: 'NOT_IMPLEMENTED',
          description: 'Back Patch',
        },
      ],
    },
    childFeatures: null,
  },
  {
    name: '`@Injectable`',
    status: {
      completed: false,
      categories: [
        'Annotation',
        '`defineXXX()`',
        'Run time',
        'Spec',
        'Compiler',
        'Back Patch',
      ],
      granularStatuses: [
        {
          category: '`defineXXX()`',
          code: 'IMPLEMENTED',
          description: '`defineInjectable()`',
        },
        {
          category: 'Run time',
          code: 'IMPLEMENTED',
          description: 'Run time',
        },
        {
          category: 'Spec',
          code: 'NOT_IMPLEMENTED',
          description: 'Spec',
        },
        {
          category: 'Compiler',
          code: 'NOT_IMPLEMENTED',
          description: 'Compiler',
        },
        {
          category: 'Back Patch',
          code: 'NOT_IMPLEMENTED',
          description: 'Back Patch',
        },
      ],
    },
    childFeatures: null,
  },
  {
    name: '`@NgModule`',
    status: {
      completed: false,
      categories: [
        'Annotation',
        '`defineXXX()`',
        'Run time',
        'Spec',
        'Compiler',
        'Back Patch',
      ],
      granularStatuses: [
        {
          category: '`defineXXX()`',
          code: 'IMPLEMENTED',
          description: '`defineInjector()`',
        },
        {
          category: 'Run time',
          code: 'IMPLEMENTED',
          description: 'Run time',
        },
        {
          category: 'Spec',
          code: 'NOT_IMPLEMENTED',
          description: 'Spec',
        },
        {
          category: 'Compiler',
          code: 'NOT_IMPLEMENTED',
          description: 'Compiler',
        },
        {
          category: 'Back Patch',
          code: 'NOT_IMPLEMENTED',
          description: 'Back Patch',
        },
      ],
    },
    childFeatures: null,
  },
  {
    name: '`@ConfigureInjector`',
    status: {
      completed: false,
      categories: [
        'Annotation',
        '`defineXXX()`',
        'Run time',
        'Spec',
        'Compiler',
        'Back Patch',
      ],
      granularStatuses: [
        {
          category: '`defineXXX()`',
          code: 'NOT_IMPLEMENTED',
          description: '`defineInjector()`',
        },
        {
          category: 'Run time',
          code: 'NOT_IMPLEMENTED',
          description: 'Run time',
        },
        {
          category: 'Spec',
          code: 'NOT_IMPLEMENTED',
          description: 'Spec',
        },
        {
          category: 'Compiler',
          code: 'NOT_IMPLEMENTED',
          description: 'Compiler',
        },
        {
          category: 'Back Patch',
          code: 'NOT_IMPLEMENTED',
          description: 'Back Patch',
        },
      ],
    },
    childFeatures: null,
  },
];
