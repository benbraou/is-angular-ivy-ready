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
          category: '`defineComponent()`',
          code: 'IMPLEMENTED',
          description: '',
        },
        {
          category: 'Run time',
          code: 'IMPLEMENTED',
          description: '',
        },
        {
          category: 'Spec',
          code: 'IMPLEMENTED',
          description: '',
        },
        {
          category: 'Compiler',
          code: 'IMPLEMENTED',
          description: '',
        },
        {
          category: 'Back Patch',
          code: 'NOT_IMPLEMENTED',
          description: '',
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
          category: '`defineDirective()`',
          code: 'IMPLEMENTED',
          description: '',
        },
        {
          category: 'Run time',
          code: 'IMPLEMENTED',
          description: '',
        },
        {
          category: 'Spec',
          code: 'IMPLEMENTED',
          description: '',
        },
        {
          category: 'Compiler',
          code: 'IMPLEMENTED',
          description: '',
        },
        {
          category: 'Back Patch',
          code: 'NOT_IMPLEMENTED',
          description: '',
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
          category: '`defineAbstractDirective()`',
          code: 'NOT_IMPLEMENTED',
          description: '',
        },
        {
          category: 'Run time',
          code: 'NOT_IMPLEMENTED',
          description: '',
        },
        {
          category: 'Spec',
          code: 'NOT_IMPLEMENTED',
          description: '',
        },
        {
          category: 'Compiler',
          code: 'NOT_IMPLEMENTED',
          description: '',
        },
        {
          category: 'Back Patch',
          code: 'NOT_IMPLEMENTED',
          description: '',
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
          category: '`definePipe()`',
          code: 'IMPLEMENTED',
          description: '',
        },
        {
          category: 'Run time',
          code: 'IMPLEMENTED',
          description: '',
        },
        {
          category: 'Spec',
          code: 'IMPLEMENTED',
          description: '',
        },
        {
          category: 'Compiler',
          code: 'IMPLEMENTED',
          description: '',
        },
        {
          category: 'Back Patch',
          code: 'NOT_IMPLEMENTED',
          description: '',
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
          category: '`defineInjectable()`',
          code: 'IMPLEMENTED',
          description: '',
        },
        {
          category: 'Run time',
          code: 'IMPLEMENTED',
          description: '',
        },
        {
          category: 'Spec',
          code: 'NOT_IMPLEMENTED',
          description: '',
        },
        {
          category: 'Compiler',
          code: 'NOT_IMPLEMENTED',
          description: '',
        },
        {
          category: 'Back Patch',
          code: 'NOT_IMPLEMENTED',
          description: '',
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
          category: '`defineInjector()`',
          code: 'IMPLEMENTED',
          description: '',
        },
        {
          category: 'Run time',
          code: 'IMPLEMENTED',
          description: '',
        },
        {
          category: 'Spec',
          code: 'NOT_IMPLEMENTED',
          description: '',
        },
        {
          category: 'Compiler',
          code: 'NOT_IMPLEMENTED',
          description: '',
        },
        {
          category: 'Back Patch',
          code: 'NOT_IMPLEMENTED',
          description: '',
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
          category: '`defineInjector()`',
          code: 'NOT_IMPLEMENTED',
          description: '',
        },
        {
          category: 'Run time',
          code: 'NOT_IMPLEMENTED',
          description: '',
        },
        {
          category: 'Spec',
          code: 'NOT_IMPLEMENTED',
          description: '',
        },
        {
          category: 'Compiler',
          code: 'NOT_IMPLEMENTED',
          description: '',
        },
        {
          category: 'Back Patch',
          code: 'NOT_IMPLEMENTED',
          description: '',
        },
      ],
    },
    childFeatures: null,
  },
];
