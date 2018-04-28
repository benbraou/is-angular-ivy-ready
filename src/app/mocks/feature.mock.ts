import { Feature } from '../models';

export function notTableFeatureFactory() {
  return { ...NOT_TABLE_FEATURE };
}

export function tableFeatureFactory(
  featureId: 0 | 1 | 2 | 3 | 4 | 5 | 6
): Feature {
  return { ...TABLE_FEATURES[featureId] };
}

export function tableFeaturesFactory() {
  return {
    features: [...TABLE_FEATURES],
    elementData: [...ELEMENT_DATA],
  };
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
      completed: true,
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
          code: 'IMPLEMENTED',
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

const ELEMENT_DATA = [
  {
    Annotation: { category: 'Annotation', code: '`@Component`' },
    '`defineXXX()`': {
      category: '`defineXXX()`',
      code: 'IMPLEMENTED',
      description: '`defineComponent()`',
    },
    'Run time': {
      category: 'Run time',
      code: 'IMPLEMENTED',
      description: 'Run time',
    },
    Spec: { category: 'Spec', code: 'IMPLEMENTED', description: 'Spec' },
    Compiler: {
      category: 'Compiler',
      code: 'IMPLEMENTED',
      description: 'Compiler',
    },
    'Back Patch': {
      category: 'Back Patch',
      code: 'IMPLEMENTED',
      description: 'Back Patch',
    },
  },
  {
    Annotation: { category: 'Annotation', code: '`@Directive`' },
    '`defineXXX()`': {
      category: '`defineXXX()`',
      code: 'IMPLEMENTED',
      description: '`defineDirective()`',
    },
    'Run time': {
      category: 'Run time',
      code: 'IMPLEMENTED',
      description: 'Run time',
    },
    Spec: { category: 'Spec', code: 'IMPLEMENTED', description: 'Spec' },
    Compiler: {
      category: 'Compiler',
      code: 'IMPLEMENTED',
      description: 'Compiler',
    },
    'Back Patch': {
      category: 'Back Patch',
      code: 'NOT_IMPLEMENTED',
      description: 'Back Patch',
    },
  },
  {
    Annotation: { category: 'Annotation', code: '`@Directive`' },
    '`defineXXX()`': {
      category: '`defineXXX()`',
      code: 'NOT_IMPLEMENTED',
      description: '`defineAbstractDirective()`',
    },
    'Run time': {
      category: 'Run time',
      code: 'NOT_IMPLEMENTED',
      description: 'Run time',
    },
    Spec: { category: 'Spec', code: 'NOT_IMPLEMENTED', description: 'Spec' },
    Compiler: {
      category: 'Compiler',
      code: 'NOT_IMPLEMENTED',
      description: 'Compiler',
    },
    'Back Patch': {
      category: 'Back Patch',
      code: 'NOT_IMPLEMENTED',
      description: 'Back Patch',
    },
  },
  {
    Annotation: { category: 'Annotation', code: '`@Pipe`' },
    '`defineXXX()`': {
      category: '`defineXXX()`',
      code: 'IMPLEMENTED',
      description: '`definePipe()`',
    },
    'Run time': {
      category: 'Run time',
      code: 'IMPLEMENTED',
      description: 'Run time',
    },
    Spec: { category: 'Spec', code: 'IMPLEMENTED', description: 'Spec' },
    Compiler: {
      category: 'Compiler',
      code: 'IMPLEMENTED',
      description: 'Compiler',
    },
    'Back Patch': {
      category: 'Back Patch',
      code: 'NOT_IMPLEMENTED',
      description: 'Back Patch',
    },
  },
  {
    Annotation: { category: 'Annotation', code: '`@Injectable`' },
    '`defineXXX()`': {
      category: '`defineXXX()`',
      code: 'IMPLEMENTED',
      description: '`defineInjectable()`',
    },
    'Run time': {
      category: 'Run time',
      code: 'IMPLEMENTED',
      description: 'Run time',
    },
    Spec: { category: 'Spec', code: 'NOT_IMPLEMENTED', description: 'Spec' },
    Compiler: {
      category: 'Compiler',
      code: 'NOT_IMPLEMENTED',
      description: 'Compiler',
    },
    'Back Patch': {
      category: 'Back Patch',
      code: 'NOT_IMPLEMENTED',
      description: 'Back Patch',
    },
  },
  {
    Annotation: { category: 'Annotation', code: '`@NgModule`' },
    '`defineXXX()`': {
      category: '`defineXXX()`',
      code: 'IMPLEMENTED',
      description: '`defineInjector()`',
    },
    'Run time': {
      category: 'Run time',
      code: 'IMPLEMENTED',
      description: 'Run time',
    },
    Spec: { category: 'Spec', code: 'NOT_IMPLEMENTED', description: 'Spec' },
    Compiler: {
      category: 'Compiler',
      code: 'NOT_IMPLEMENTED',
      description: 'Compiler',
    },
    'Back Patch': {
      category: 'Back Patch',
      code: 'NOT_IMPLEMENTED',
      description: 'Back Patch',
    },
  },
  {
    Annotation: { category: 'Annotation', code: '`@ConfigureInjector`' },
    '`defineXXX()`': {
      category: '`defineXXX()`',
      code: 'NOT_IMPLEMENTED',
      description: '`defineInjector()`',
    },
    'Run time': {
      category: 'Run time',
      code: 'NOT_IMPLEMENTED',
      description: 'Run time',
    },
    Spec: { category: 'Spec', code: 'NOT_IMPLEMENTED', description: 'Spec' },
    Compiler: {
      category: 'Compiler',
      code: 'NOT_IMPLEMENTED',
      description: 'Compiler',
    },
    'Back Patch': {
      category: 'Back Patch',
      code: 'NOT_IMPLEMENTED',
      description: 'Back Patch',
    },
  },
];
