export const LAST_IVY_RESPONSE = {
  API: { version: 1 },
  errors: null,
  data: {
    featureGroup: {
      data: { name: 'root', features: [] },
      featureGroups: [
        {
          data: { name: 'Implementation Status', features: [] },
          featureGroups: [
            {
              data: { name: '`@angular/compiler-cli` changes', features: [] },
              featureGroups: [
                {
                  data: {
                    name: '`ngtsc` TSC compiler transformer',
                    features: [
                      {
                        name: 'Basic setup of the transformer into `tsc`',
                        status: {
                          completed: true,
                          categories: null,
                          granularStatuses: [
                            {
                              category: '',
                              code: 'IMPLEMENTED',
                              description: '',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name:
                          'Can read STORING_METADATA_IN_D.TS from `.d.ts` (see: [STORING_METADATA_IN_D.TS.md](./STORING_METADATA_IN_D.TS.md))',
                        status: {
                          completed: true,
                          categories: null,
                          granularStatuses: [
                            {
                              category: '',
                              code: 'IMPLEMENTED',
                              description: '',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name:
                          'Detect decorators and convert them to the `defineXXX` method using the `__Compiler` in `@angular/compiler`.',
                        status: {
                          completed: true,
                          categories: null,
                          granularStatuses: [
                            {
                              category: '',
                              code: 'IMPLEMENTED',
                              description: '',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: 'Encode selectors into `.d.ts` file.',
                        status: {
                          completed: true,
                          categories: null,
                          granularStatuses: [
                            {
                              category: '',
                              code: 'IMPLEMENTED',
                              description: '',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name:
                          'support `extends` for `@Pipe`, `@Component`, `@Directive` and `@NgModule`.',
                        status: {
                          completed: true,
                          categories: null,
                          granularStatuses: [
                            {
                              category: '',
                              code: 'IMPLEMENTED',
                              description: '',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: 'Documentation',
                        status: {
                          completed: false,
                          categories: null,
                          granularStatuses: [
                            {
                              category: '',
                              code: 'NOT_IMPLEMENTED',
                              description: '',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                    ],
                  },
                  featureGroups: null,
                },
                {
                  data: {
                    name: '`ngcc` Angular `node_module` compatibility compiler',
                    features: [
                      {
                        name: 'Basic setup of stand alone executable',
                        status: {
                          completed: true,
                          categories: null,
                          granularStatuses: [
                            {
                              category: '',
                              code: 'IMPLEMENTED',
                              description: '',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name:
                          'Rewrite existing code by interpreting the associated STORING_METADATA_IN_D.TS',
                        status: {
                          completed: true,
                          categories: null,
                          granularStatuses: [
                            {
                              category: '',
                              code: 'IMPLEMENTED',
                              description: '',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: 'Integration with WebPack (cli)',
                        status: {
                          completed: false,
                          categories: null,
                          granularStatuses: [
                            {
                              category: '',
                              code: 'NOT_IMPLEMENTED',
                              description: '',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: 'Documentation',
                        status: {
                          completed: false,
                          categories: null,
                          granularStatuses: [
                            {
                              category: '',
                              code: 'NOT_IMPLEMENTED',
                              description: '',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                    ],
                  },
                  featureGroups: null,
                },
              ],
            },
            {
              data: {
                name: '`@angular/compiler` changes',
                features: [
                  {
                    name:
                      'Component compilation: Translates `@Component` =\u003e `ɵɵdefineComponent`',
                    status: {
                      completed: true,
                      categories: null,
                      granularStatuses: [
                        { category: '', code: 'IMPLEMENTED', description: '' },
                      ],
                    },
                    childFeatures: [
                      {
                        name:
                          '`TemplateCompiler` (current known as `ViewCompiler`)',
                        status: {
                          completed: true,
                          categories: null,
                          granularStatuses: [
                            {
                              category: '',
                              code: 'IMPLEMENTED',
                              description: '',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`StyleCompiler`',
                        status: {
                          completed: true,
                          categories: null,
                          granularStatuses: [
                            {
                              category: '',
                              code: 'IMPLEMENTED',
                              description: '',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                    ],
                  },
                  {
                    name:
                      '`PipeCompiler`: Translates `@Pipe` =\u003e `ɵɵdefinePipe`',
                    status: {
                      completed: true,
                      categories: null,
                      granularStatuses: [
                        { category: '', code: 'IMPLEMENTED', description: '' },
                      ],
                    },
                    childFeatures: null,
                  },
                  {
                    name:
                      '`DirectiveCompiler`: Translates `@Directive` =\u003e `ɵɵdefineDirective`',
                    status: {
                      completed: true,
                      categories: null,
                      granularStatuses: [
                        { category: '', code: 'IMPLEMENTED', description: '' },
                      ],
                    },
                    childFeatures: null,
                  },
                  {
                    name:
                      '`InjectableCompiler`: Translates `@Injectable` =\u003e `ɵɵdefineInjectable`',
                    status: {
                      completed: true,
                      categories: null,
                      granularStatuses: [
                        { category: '', code: 'IMPLEMENTED', description: '' },
                      ],
                    },
                    childFeatures: null,
                  },
                  {
                    name:
                      '`NgModuleCompiler`: Translates `@NgModule` =\u003e `ɵɵdefineInjector` (and `ɵɵdefineNgModule` only in jit)',
                    status: {
                      completed: true,
                      categories: null,
                      granularStatuses: [
                        { category: '', code: 'IMPLEMENTED', description: '' },
                      ],
                    },
                    childFeatures: null,
                  },
                  {
                    name: 'Documentation',
                    status: {
                      completed: false,
                      categories: null,
                      granularStatuses: [
                        {
                          category: '',
                          code: 'NOT_IMPLEMENTED',
                          description: '',
                        },
                      ],
                    },
                    childFeatures: null,
                  },
                ],
              },
              featureGroups: null,
            },
            {
              data: {
                name: '`@angular/core` changes',
                features: [
                  {
                    name: '`@angular/compiler` can patch itself onto:',
                    status: {
                      completed: true,
                      categories: null,
                      granularStatuses: [
                        { category: '', code: 'IMPLEMENTED', description: '' },
                      ],
                    },
                    childFeatures: [
                      {
                        name: '`@Injectable`',
                        status: {
                          completed: true,
                          categories: null,
                          granularStatuses: [
                            {
                              category: '',
                              code: 'IMPLEMENTED',
                              description: '',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`@NgModule`',
                        status: {
                          completed: true,
                          categories: null,
                          granularStatuses: [
                            {
                              category: '',
                              code: 'IMPLEMENTED',
                              description: '',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`@Pipe`',
                        status: {
                          completed: true,
                          categories: null,
                          granularStatuses: [
                            {
                              category: '',
                              code: 'IMPLEMENTED',
                              description: '',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`@Directive`',
                        status: {
                          completed: true,
                          categories: null,
                          granularStatuses: [
                            {
                              category: '',
                              code: 'IMPLEMENTED',
                              description: '',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`@Component`',
                        status: {
                          completed: true,
                          categories: null,
                          granularStatuses: [
                            {
                              category: '',
                              code: 'IMPLEMENTED',
                              description: '',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                    ],
                  },
                  {
                    name:
                      '`ResourceLoader.resolved: Promise\u003c\u003e` Returns true if all `templateUrl`s and `styleUrl` have been resolved and application is ready to be bootstrapped.',
                    status: {
                      completed: true,
                      categories: null,
                      granularStatuses: [
                        { category: '', code: 'IMPLEMENTED', description: '' },
                      ],
                    },
                    childFeatures: null,
                  },
                ],
              },
              featureGroups: null,
            },
          ],
        },
        {
          data: {
            name: 'Testing / Debugging',
            features: [
              {
                name:
                  'in debug mode publish components into DOM nodes for easier debugging.',
                status: {
                  completed: true,
                  categories: null,
                  granularStatuses: [
                    { category: '', code: 'IMPLEMENTED', description: '' },
                  ],
                },
                childFeatures: null,
              },
            ],
          },
          featureGroups: null,
        },
        {
          data: { name: 'Crosscutting', features: [] },
          featureGroups: [
            {
              data: {
                name: 'Decorators',
                features: [
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
                      ],
                      granularStatuses: [
                        {
                          category: '`defineXXX()`',
                          code: 'IMPLEMENTED',
                          description: '`ɵɵdefineComponent()`',
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
                      ],
                    },
                    childFeatures: null,
                  },
                  {
                    name: '`@Directive`',
                    status: {
                      completed: true,
                      categories: [
                        'Annotation',
                        '`defineXXX()`',
                        'Run time',
                        'Spec',
                        'Compiler',
                      ],
                      granularStatuses: [
                        {
                          category: '`defineXXX()`',
                          code: 'IMPLEMENTED',
                          description: '`ɵɵdefineDirective()`',
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
                      ],
                    },
                    childFeatures: null,
                  },
                  {
                    name: '`@Directive`',
                    status: {
                      completed: true,
                      categories: [
                        'Annotation',
                        '`defineXXX()`',
                        'Run time',
                        'Spec',
                        'Compiler',
                      ],
                      granularStatuses: [
                        {
                          category: '`defineXXX()`',
                          code: 'IMPLEMENTED',
                          description: '`ɵɵdefineBase()`',
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
                      ],
                    },
                    childFeatures: null,
                  },
                  {
                    name: '`@Pipe`',
                    status: {
                      completed: true,
                      categories: [
                        'Annotation',
                        '`defineXXX()`',
                        'Run time',
                        'Spec',
                        'Compiler',
                      ],
                      granularStatuses: [
                        {
                          category: '`defineXXX()`',
                          code: 'IMPLEMENTED',
                          description: '`ɵɵdefinePipe()`',
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
                      ],
                    },
                    childFeatures: null,
                  },
                  {
                    name: '`@Injectable`',
                    status: {
                      completed: true,
                      categories: [
                        'Annotation',
                        '`defineXXX()`',
                        'Run time',
                        'Spec',
                        'Compiler',
                      ],
                      granularStatuses: [
                        {
                          category: '`defineXXX()`',
                          code: 'IMPLEMENTED',
                          description: '`ɵɵdefineInjectable()`',
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
                      ],
                    },
                    childFeatures: null,
                  },
                  {
                    name: '`@NgModule`',
                    status: {
                      completed: true,
                      categories: [
                        'Annotation',
                        '`defineXXX()`',
                        'Run time',
                        'Spec',
                        'Compiler',
                      ],
                      granularStatuses: [
                        {
                          category: '`defineXXX()`',
                          code: 'IMPLEMENTED',
                          description: '`ɵɵdefineInjector()`',
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
                      ],
                      granularStatuses: [
                        {
                          category: '`defineXXX()`',
                          code: 'IMPLEMENTED',
                          description: '`ɵɵdefineInjector()`',
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
                      ],
                    },
                    childFeatures: null,
                  },
                ],
              },
              featureGroups: null,
            },
            {
              data: {
                name: 'Component Composition',
                features: [
                  {
                    name: 'creation reordering based on injection',
                    status: {
                      completed: true,
                      categories: ['Feature', 'Runtime', 'Spec', 'Compiler'],
                      granularStatuses: [
                        {
                          category: 'Runtime',
                          code: 'IMPLEMENTED',
                          description: 'Runtime',
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
                      ],
                    },
                    childFeatures: null,
                  },
                  {
                    name: '`class CompA extends CompB {}`',
                    status: {
                      completed: true,
                      categories: ['Feature', 'Runtime', 'Spec', 'Compiler'],
                      granularStatuses: [
                        {
                          category: 'Runtime',
                          code: 'IMPLEMENTED',
                          description: 'Runtime',
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
                      ],
                    },
                    childFeatures: null,
                  },
                  {
                    name: '`class CompA extends CompB { @Input }`',
                    status: {
                      completed: true,
                      categories: ['Feature', 'Runtime', 'Spec', 'Compiler'],
                      granularStatuses: [
                        {
                          category: 'Runtime',
                          code: 'IMPLEMENTED',
                          description: 'Runtime',
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
                      ],
                    },
                    childFeatures: null,
                  },
                  {
                    name: '`class CompA extends CompB { @Output }`',
                    status: {
                      completed: true,
                      categories: ['Feature', 'Runtime', 'Spec', 'Compiler'],
                      granularStatuses: [
                        {
                          category: 'Runtime',
                          code: 'IMPLEMENTED',
                          description: 'Runtime',
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
                      ],
                    },
                    childFeatures: null,
                  },
                ],
              },
              featureGroups: null,
            },
            {
              data: {
                name: 'Change Detection',
                features: [
                  {
                    name: '`markDirty()`',
                    status: {
                      completed: true,
                      categories: ['Feature', 'Runtime'],
                      granularStatuses: [
                        {
                          category: 'Runtime',
                          code: 'IMPLEMENTED',
                          description: 'Runtime',
                        },
                      ],
                    },
                    childFeatures: null,
                  },
                  {
                    name: '`detectChanges()`',
                    status: {
                      completed: true,
                      categories: ['Feature', 'Runtime'],
                      granularStatuses: [
                        {
                          category: 'Runtime',
                          code: 'IMPLEMENTED',
                          description: 'Runtime',
                        },
                      ],
                    },
                    childFeatures: null,
                  },
                  {
                    name: '`tick()`',
                    status: {
                      completed: true,
                      categories: ['Feature', 'Runtime'],
                      granularStatuses: [
                        {
                          category: 'Runtime',
                          code: 'IMPLEMENTED',
                          description: 'Runtime',
                        },
                      ],
                    },
                    childFeatures: null,
                  },
                  {
                    name: '`attach()`',
                    status: {
                      completed: true,
                      categories: ['Feature', 'Runtime'],
                      granularStatuses: [
                        {
                          category: 'Runtime',
                          code: 'IMPLEMENTED',
                          description: 'Runtime',
                        },
                      ],
                    },
                    childFeatures: null,
                  },
                  {
                    name: '`detach()`',
                    status: {
                      completed: true,
                      categories: ['Feature', 'Runtime'],
                      granularStatuses: [
                        {
                          category: 'Runtime',
                          code: 'IMPLEMENTED',
                          description: 'Runtime',
                        },
                      ],
                    },
                    childFeatures: null,
                  },
                  {
                    name: '`ON_PUSH`',
                    status: {
                      completed: true,
                      categories: ['Feature', 'Runtime'],
                      granularStatuses: [
                        {
                          category: 'Runtime',
                          code: 'IMPLEMENTED',
                          description: 'Runtime',
                        },
                      ],
                    },
                    childFeatures: null,
                  },
                  {
                    name: '`ALWAYS`',
                    status: {
                      completed: true,
                      categories: ['Feature', 'Runtime'],
                      granularStatuses: [
                        {
                          category: 'Runtime',
                          code: 'IMPLEMENTED',
                          description: 'Runtime',
                        },
                      ],
                    },
                    childFeatures: null,
                  },
                  {
                    name: '`DIRTY`',
                    status: {
                      completed: true,
                      categories: ['Feature', 'Runtime'],
                      granularStatuses: [
                        {
                          category: 'Runtime',
                          code: 'IMPLEMENTED',
                          description: 'Runtime',
                        },
                      ],
                    },
                    childFeatures: null,
                  },
                  {
                    name: '`ATTACHED`',
                    status: {
                      completed: true,
                      categories: ['Feature', 'Runtime'],
                      granularStatuses: [
                        {
                          category: 'Runtime',
                          code: 'IMPLEMENTED',
                          description: 'Runtime',
                        },
                      ],
                    },
                    childFeatures: null,
                  },
                ],
              },
              featureGroups: null,
            },
            {
              data: {
                name: 'Bootstrap API',
                features: [
                  {
                    name: '`renderComponent()`',
                    status: {
                      completed: true,
                      categories: ['Feature', 'Runtime'],
                      granularStatuses: [
                        {
                          category: 'Runtime',
                          code: 'IMPLEMENTED',
                          description: 'Runtime',
                        },
                      ],
                    },
                    childFeatures: null,
                  },
                  {
                    name: '`getHostElement()`',
                    status: {
                      completed: true,
                      categories: ['Feature', 'Runtime'],
                      granularStatuses: [
                        {
                          category: 'Runtime',
                          code: 'IMPLEMENTED',
                          description: 'Runtime',
                        },
                      ],
                    },
                    childFeatures: null,
                  },
                  {
                    name: '`createInjector()`',
                    status: {
                      completed: true,
                      categories: ['Feature', 'Runtime'],
                      granularStatuses: [
                        {
                          category: 'Runtime',
                          code: 'IMPLEMENTED',
                          description: 'Runtime',
                        },
                      ],
                    },
                    childFeatures: null,
                  },
                ],
              },
              featureGroups: null,
            },
            {
              data: { name: 'Template Compiler', features: [] },
              featureGroups: [
                {
                  data: {
                    name: 'Template Syntax',
                    features: [
                      {
                        name: '`\u003cdiv\u003e`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`\u003cdiv\u003e{{exp}}\u003c/div\u003e`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`\u003cdiv attr=value\u003e`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`\u003cdiv (click)="stmt"\u003e`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`\u003cdiv #foo\u003e`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`\u003cdiv #foo="bar"\u003e`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`\u003cdiv [value]="exp"\u003e`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`\u003cdiv title="Hello {{name}}!"\u003e`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`\u003cdiv [attr.value]="exp"\u003e`',
                        status: {
                          completed: false,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
                            },
                            {
                              category: 'Spec',
                              code: 'IMPLEMENTED',
                              description: 'Spec',
                            },
                            {
                              category: 'Compiler',
                              code: 'NOT_IMPLEMENTED',
                              description: 'Compiler',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`\u003cdiv class="literal"\u003e`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`\u003cdiv [class]="exp"\u003e`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`\u003cdiv [class.foo]="exp"\u003e`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`\u003cdiv style="literal"\u003e`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`\u003cdiv [style]="exp"\u003e`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`\u003cdiv [style.foo]="exp"\u003e`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`\u003cdiv xmlns:foo="url" foo:bar="baz"\u003e`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: "`{{ ['literal', exp ] }}`",
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: "`{{ { a: 'literal', b: exp } }}`",
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`{{ exp \\| pipe: arg }}`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`\u003csvg:g svg:p\u003e`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`\u003cimg src=[userData]\u003e` sanitization',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '[`\u003cdiv (directiveOut)\u003e`][gh23560]',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name:
                          '[`\u003cng-template (directiveOut)\u003e`][gh23561]',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '[`\u003cng-container\u003e`][gh24381]',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                    ],
                  },
                  featureGroups: null,
                },
                {
                  data: {
                    name: 'Life Cycle Hooks',
                    features: [
                      {
                        name: '`onChanges()`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`onDestroy()`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`onInit()`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`onChanges()`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`doCheck()`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`afterViewChecked()`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`afterViewInit()`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`afterContentChecked()`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`afterContentInit()`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: 'listener teardown',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                    ],
                  },
                  featureGroups: null,
                },
                {
                  data: {
                    name: '`@Query`',
                    features: [
                      {
                        name: '`@Query(descendants)`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
                            },
                            {
                              category: 'Spec',
                              code: 'IMPLEMENTED',
                              description: 'Spec',
                            },
                            {
                              category: 'Compiler',
                              code: 'NOT_APPLICABLE',
                              description: 'Compiler',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`@Query(one)`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
                            },
                            {
                              category: 'Spec',
                              code: 'IMPLEMENTED',
                              description: 'Spec',
                            },
                            {
                              category: 'Compiler',
                              code: 'NOT_APPLICABLE',
                              description: 'Compiler',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`@Query(read)`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
                            },
                            {
                              category: 'Spec',
                              code: 'IMPLEMENTED',
                              description: 'Spec',
                            },
                            {
                              category: 'Compiler',
                              code: 'NOT_APPLICABLE',
                              description: 'Compiler',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`@Query(selector)`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
                            },
                            {
                              category: 'Spec',
                              code: 'IMPLEMENTED',
                              description: 'Spec',
                            },
                            {
                              category: 'Compiler',
                              code: 'NOT_APPLICABLE',
                              description: 'Compiler',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`@Query(Type)`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
                            },
                            {
                              category: 'Spec',
                              code: 'IMPLEMENTED',
                              description: 'Spec',
                            },
                            {
                              category: 'Compiler',
                              code: 'NOT_APPLICABLE',
                              description: 'Compiler',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`@ContentChildren`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`@ContentChild`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`@ViewChildren`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`@ViewChild`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                    ],
                  },
                  featureGroups: null,
                },
                {
                  data: {
                    name: 'Content Projection',
                    features: [
                      {
                        name: '`\u003cng-content\u003e`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`\u003cng-content selector="..."\u003e`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: 'container `ngProjectAs`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                    ],
                  },
                  featureGroups: null,
                },
                {
                  data: {
                    name: 'Injection Features',
                    features: [
                      {
                        name: '`inject(Type)`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`directiveInject(Type)`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`inject(Type, SkipSelf)`',
                        status: {
                          completed: false,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'NOT_IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: "`attribute('name')`",
                        status: {
                          completed: false,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
                            },
                            {
                              category: 'Spec',
                              code: 'IMPLEMENTED',
                              description: 'Spec',
                            },
                            {
                              category: 'Compiler',
                              code: 'NOT_IMPLEMENTED',
                              description: 'Compiler',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`injectChangeDetectionRef()`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`injectElementRef()`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`injectViewContainerRef()`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`injectTemplateRef()`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`injectRenderer2()`',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: 'default `inject()` with no injector',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: 'sanitization with no injector',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                    ],
                  },
                  featureGroups: null,
                },
                {
                  data: {
                    name: 'I18N',
                    features: [
                      {
                        name: 'i18nStart',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: 'i18nEnd',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: 'i18nAttributes',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: 'i18nExp',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: 'i18nApply',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: 'ICU expressions',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: 'closure support for g3',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`\u003cng-container\u003e` support',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: 'runtime service for external world',
                        status: {
                          completed: false,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'NOT_IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: 'migration tool',
                        status: {
                          completed: false,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'NOT_IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                    ],
                  },
                  featureGroups: null,
                },
                {
                  data: {
                    name: 'View Encapsulation',
                    features: [
                      {
                        name: 'Renderer3.None',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: 'Renderer2.None',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: 'Renderer2.Emulated',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: 'Renderer2.Native',
                        status: {
                          completed: true,
                          categories: [
                            'Feature',
                            'Runtime',
                            'Spec',
                            'Compiler',
                          ],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
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
                          ],
                        },
                        childFeatures: null,
                      },
                    ],
                  },
                  featureGroups: null,
                },
                {
                  data: {
                    name: '`______Ref`s',
                    features: [
                      {
                        name: '`clear()`',
                        status: {
                          completed: true,
                          categories: [
                            'Method',
                            'View Container Ref',
                            'Template Ref',
                            'Embeded View Ref',
                            'View Ref',
                            'Element Ref',
                            'Change Detection Ref',
                          ],
                          granularStatuses: [
                            {
                              category: 'View Container Ref',
                              code: 'IMPLEMENTED',
                              description: 'View Container Ref',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Template Ref',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Embeded View Ref',
                            },
                            {
                              category: 'View Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'View Ref',
                            },
                            {
                              category: 'Element Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Element Ref',
                            },
                            {
                              category: 'Change Detection Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Change Detection Ref',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`get()`',
                        status: {
                          completed: true,
                          categories: [
                            'Method',
                            'View Container Ref',
                            'Template Ref',
                            'Embeded View Ref',
                            'View Ref',
                            'Element Ref',
                            'Change Detection Ref',
                          ],
                          granularStatuses: [
                            {
                              category: 'View Container Ref',
                              code: 'IMPLEMENTED',
                              description: 'View Container Ref',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Template Ref',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Embeded View Ref',
                            },
                            {
                              category: 'View Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'View Ref',
                            },
                            {
                              category: 'Element Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Element Ref',
                            },
                            {
                              category: 'Change Detection Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Change Detection Ref',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`createEmbededView()`',
                        status: {
                          completed: true,
                          categories: [
                            'Method',
                            'View Container Ref',
                            'Template Ref',
                            'Embeded View Ref',
                            'View Ref',
                            'Element Ref',
                            'Change Detection Ref',
                          ],
                          granularStatuses: [
                            {
                              category: 'View Container Ref',
                              code: 'IMPLEMENTED',
                              description: 'View Container Ref',
                            },
                            {
                              category: 'Template Ref',
                              code: 'IMPLEMENTED',
                              description: 'Template Ref',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Embeded View Ref',
                            },
                            {
                              category: 'View Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'View Ref',
                            },
                            {
                              category: 'Element Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Element Ref',
                            },
                            {
                              category: 'Change Detection Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Change Detection Ref',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`createComponent()`',
                        status: {
                          completed: true,
                          categories: [
                            'Method',
                            'View Container Ref',
                            'Template Ref',
                            'Embeded View Ref',
                            'View Ref',
                            'Element Ref',
                            'Change Detection Ref',
                          ],
                          granularStatuses: [
                            {
                              category: 'View Container Ref',
                              code: 'IMPLEMENTED',
                              description: 'View Container Ref',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Template Ref',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Embeded View Ref',
                            },
                            {
                              category: 'View Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'View Ref',
                            },
                            {
                              category: 'Element Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Element Ref',
                            },
                            {
                              category: 'Change Detection Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Change Detection Ref',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`insert()`',
                        status: {
                          completed: true,
                          categories: [
                            'Method',
                            'View Container Ref',
                            'Template Ref',
                            'Embeded View Ref',
                            'View Ref',
                            'Element Ref',
                            'Change Detection Ref',
                          ],
                          granularStatuses: [
                            {
                              category: 'View Container Ref',
                              code: 'IMPLEMENTED',
                              description: 'View Container Ref',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Template Ref',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Embeded View Ref',
                            },
                            {
                              category: 'View Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'View Ref',
                            },
                            {
                              category: 'Element Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Element Ref',
                            },
                            {
                              category: 'Change Detection Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Change Detection Ref',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`move()`',
                        status: {
                          completed: true,
                          categories: [
                            'Method',
                            'View Container Ref',
                            'Template Ref',
                            'Embeded View Ref',
                            'View Ref',
                            'Element Ref',
                            'Change Detection Ref',
                          ],
                          granularStatuses: [
                            {
                              category: 'View Container Ref',
                              code: 'IMPLEMENTED',
                              description: 'View Container Ref',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Template Ref',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Embeded View Ref',
                            },
                            {
                              category: 'View Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'View Ref',
                            },
                            {
                              category: 'Element Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Element Ref',
                            },
                            {
                              category: 'Change Detection Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Change Detection Ref',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`indexOf()`',
                        status: {
                          completed: true,
                          categories: [
                            'Method',
                            'View Container Ref',
                            'Template Ref',
                            'Embeded View Ref',
                            'View Ref',
                            'Element Ref',
                            'Change Detection Ref',
                          ],
                          granularStatuses: [
                            {
                              category: 'View Container Ref',
                              code: 'IMPLEMENTED',
                              description: 'View Container Ref',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Template Ref',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Embeded View Ref',
                            },
                            {
                              category: 'View Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'View Ref',
                            },
                            {
                              category: 'Element Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Element Ref',
                            },
                            {
                              category: 'Change Detection Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Change Detection Ref',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`length()`',
                        status: {
                          completed: true,
                          categories: [
                            'Method',
                            'View Container Ref',
                            'Template Ref',
                            'Embeded View Ref',
                            'View Ref',
                            'Element Ref',
                            'Change Detection Ref',
                          ],
                          granularStatuses: [
                            {
                              category: 'View Container Ref',
                              code: 'IMPLEMENTED',
                              description: 'View Container Ref',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Template Ref',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Embeded View Ref',
                            },
                            {
                              category: 'View Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'View Ref',
                            },
                            {
                              category: 'Element Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Element Ref',
                            },
                            {
                              category: 'Change Detection Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Change Detection Ref',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`remove()`',
                        status: {
                          completed: true,
                          categories: [
                            'Method',
                            'View Container Ref',
                            'Template Ref',
                            'Embeded View Ref',
                            'View Ref',
                            'Element Ref',
                            'Change Detection Ref',
                          ],
                          granularStatuses: [
                            {
                              category: 'View Container Ref',
                              code: 'IMPLEMENTED',
                              description: 'View Container Ref',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Template Ref',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Embeded View Ref',
                            },
                            {
                              category: 'View Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'View Ref',
                            },
                            {
                              category: 'Element Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Element Ref',
                            },
                            {
                              category: 'Change Detection Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Change Detection Ref',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`destroy()`',
                        status: {
                          completed: true,
                          categories: [
                            'Method',
                            'View Container Ref',
                            'Template Ref',
                            'Embeded View Ref',
                            'View Ref',
                            'Element Ref',
                            'Change Detection Ref',
                          ],
                          granularStatuses: [
                            {
                              category: 'View Container Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'View Container Ref',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Template Ref',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'IMPLEMENTED',
                              description: 'Embeded View Ref',
                            },
                            {
                              category: 'View Ref',
                              code: 'IMPLEMENTED',
                              description: 'View Ref',
                            },
                            {
                              category: 'Element Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Element Ref',
                            },
                            {
                              category: 'Change Detection Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Change Detection Ref',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`destroyed`',
                        status: {
                          completed: true,
                          categories: [
                            'Method',
                            'View Container Ref',
                            'Template Ref',
                            'Embeded View Ref',
                            'View Ref',
                            'Element Ref',
                            'Change Detection Ref',
                          ],
                          granularStatuses: [
                            {
                              category: 'View Container Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'View Container Ref',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Template Ref',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'IMPLEMENTED',
                              description: 'Embeded View Ref',
                            },
                            {
                              category: 'View Ref',
                              code: 'IMPLEMENTED',
                              description: 'View Ref',
                            },
                            {
                              category: 'Element Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Element Ref',
                            },
                            {
                              category: 'Change Detection Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Change Detection Ref',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`onDestroy()`',
                        status: {
                          completed: true,
                          categories: [
                            'Method',
                            'View Container Ref',
                            'Template Ref',
                            'Embeded View Ref',
                            'View Ref',
                            'Element Ref',
                            'Change Detection Ref',
                          ],
                          granularStatuses: [
                            {
                              category: 'View Container Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'View Container Ref',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Template Ref',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'IMPLEMENTED',
                              description: 'Embeded View Ref',
                            },
                            {
                              category: 'View Ref',
                              code: 'IMPLEMENTED',
                              description: 'View Ref',
                            },
                            {
                              category: 'Element Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Element Ref',
                            },
                            {
                              category: 'Change Detection Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Change Detection Ref',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`markForCheck()`',
                        status: {
                          completed: true,
                          categories: [
                            'Method',
                            'View Container Ref',
                            'Template Ref',
                            'Embeded View Ref',
                            'View Ref',
                            'Element Ref',
                            'Change Detection Ref',
                          ],
                          granularStatuses: [
                            {
                              category: 'View Container Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'View Container Ref',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Template Ref',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'IMPLEMENTED',
                              description: 'Embeded View Ref',
                            },
                            {
                              category: 'View Ref',
                              code: 'IMPLEMENTED',
                              description: 'View Ref',
                            },
                            {
                              category: 'Element Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Element Ref',
                            },
                            {
                              category: 'Change Detection Ref',
                              code: 'IMPLEMENTED',
                              description: 'Change Detection Ref',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`detach()`',
                        status: {
                          completed: true,
                          categories: [
                            'Method',
                            'View Container Ref',
                            'Template Ref',
                            'Embeded View Ref',
                            'View Ref',
                            'Element Ref',
                            'Change Detection Ref',
                          ],
                          granularStatuses: [
                            {
                              category: 'View Container Ref',
                              code: 'IMPLEMENTED',
                              description: 'View Container Ref',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Template Ref',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'IMPLEMENTED',
                              description: 'Embeded View Ref',
                            },
                            {
                              category: 'View Ref',
                              code: 'IMPLEMENTED',
                              description: 'View Ref',
                            },
                            {
                              category: 'Element Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Element Ref',
                            },
                            {
                              category: 'Change Detection Ref',
                              code: 'IMPLEMENTED',
                              description: 'Change Detection Ref',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`detachChanges()`',
                        status: {
                          completed: true,
                          categories: [
                            'Method',
                            'View Container Ref',
                            'Template Ref',
                            'Embeded View Ref',
                            'View Ref',
                            'Element Ref',
                            'Change Detection Ref',
                          ],
                          granularStatuses: [
                            {
                              category: 'View Container Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'View Container Ref',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Template Ref',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'IMPLEMENTED',
                              description: 'Embeded View Ref',
                            },
                            {
                              category: 'View Ref',
                              code: 'IMPLEMENTED',
                              description: 'View Ref',
                            },
                            {
                              category: 'Element Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Element Ref',
                            },
                            {
                              category: 'Change Detection Ref',
                              code: 'IMPLEMENTED',
                              description: 'Change Detection Ref',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`checkNoChanges()`',
                        status: {
                          completed: true,
                          categories: [
                            'Method',
                            'View Container Ref',
                            'Template Ref',
                            'Embeded View Ref',
                            'View Ref',
                            'Element Ref',
                            'Change Detection Ref',
                          ],
                          granularStatuses: [
                            {
                              category: 'View Container Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'View Container Ref',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Template Ref',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'IMPLEMENTED',
                              description: 'Embeded View Ref',
                            },
                            {
                              category: 'View Ref',
                              code: 'IMPLEMENTED',
                              description: 'View Ref',
                            },
                            {
                              category: 'Element Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Element Ref',
                            },
                            {
                              category: 'Change Detection Ref',
                              code: 'IMPLEMENTED',
                              description: 'Change Detection Ref',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`reattach()`',
                        status: {
                          completed: true,
                          categories: [
                            'Method',
                            'View Container Ref',
                            'Template Ref',
                            'Embeded View Ref',
                            'View Ref',
                            'Element Ref',
                            'Change Detection Ref',
                          ],
                          granularStatuses: [
                            {
                              category: 'View Container Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'View Container Ref',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Template Ref',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'IMPLEMENTED',
                              description: 'Embeded View Ref',
                            },
                            {
                              category: 'View Ref',
                              code: 'IMPLEMENTED',
                              description: 'View Ref',
                            },
                            {
                              category: 'Element Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Element Ref',
                            },
                            {
                              category: 'Change Detection Ref',
                              code: 'IMPLEMENTED',
                              description: 'Change Detection Ref',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`nativeElement()`',
                        status: {
                          completed: true,
                          categories: [
                            'Method',
                            'View Container Ref',
                            'Template Ref',
                            'Embeded View Ref',
                            'View Ref',
                            'Element Ref',
                            'Change Detection Ref',
                          ],
                          granularStatuses: [
                            {
                              category: 'View Container Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'View Container Ref',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Template Ref',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Embeded View Ref',
                            },
                            {
                              category: 'View Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'View Ref',
                            },
                            {
                              category: 'Element Ref',
                              code: 'IMPLEMENTED',
                              description: 'Element Ref',
                            },
                            {
                              category: 'Change Detection Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Change Detection Ref',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`elementRef`',
                        status: {
                          completed: true,
                          categories: [
                            'Method',
                            'View Container Ref',
                            'Template Ref',
                            'Embeded View Ref',
                            'View Ref',
                            'Element Ref',
                            'Change Detection Ref',
                          ],
                          granularStatuses: [
                            {
                              category: 'View Container Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'View Container Ref',
                            },
                            {
                              category: 'Template Ref',
                              code: 'IMPLEMENTED',
                              description: 'Template Ref',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Embeded View Ref',
                            },
                            {
                              category: 'View Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'View Ref',
                            },
                            {
                              category: 'Element Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Element Ref',
                            },
                            {
                              category: 'Change Detection Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Change Detection Ref',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                    ],
                  },
                  featureGroups: null,
                },
                {
                  data: {
                    name: 'Renderer2',
                    features: [
                      {
                        name: '`data()`',
                        status: {
                          completed: true,
                          categories: ['Method', 'Runtime'],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'NOT_APPLICABLE',
                              description: 'Runtime',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`destroy()`',
                        status: {
                          completed: true,
                          categories: ['Method', 'Runtime'],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`createElement()`',
                        status: {
                          completed: true,
                          categories: ['Method', 'Runtime'],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`createComment()`',
                        status: {
                          completed: true,
                          categories: ['Method', 'Runtime'],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`createText()`',
                        status: {
                          completed: true,
                          categories: ['Method', 'Runtime'],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`destroyNode()`',
                        status: {
                          completed: true,
                          categories: ['Method', 'Runtime'],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`appendChild()`',
                        status: {
                          completed: true,
                          categories: ['Method', 'Runtime'],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`insertBefore()`',
                        status: {
                          completed: true,
                          categories: ['Method', 'Runtime'],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`removeChild()`',
                        status: {
                          completed: true,
                          categories: ['Method', 'Runtime'],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`selectRootElement()`',
                        status: {
                          completed: true,
                          categories: ['Method', 'Runtime'],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`parentNode()`',
                        status: {
                          completed: true,
                          categories: ['Method', 'Runtime'],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'NOT_APPLICABLE',
                              description: 'Runtime',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`nextSibling()`',
                        status: {
                          completed: true,
                          categories: ['Method', 'Runtime'],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'NOT_APPLICABLE',
                              description: 'Runtime',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`setAttribute()`',
                        status: {
                          completed: true,
                          categories: ['Method', 'Runtime'],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`removeAttribute()`',
                        status: {
                          completed: true,
                          categories: ['Method', 'Runtime'],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`addClass()`',
                        status: {
                          completed: true,
                          categories: ['Method', 'Runtime'],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`removeClass()`',
                        status: {
                          completed: true,
                          categories: ['Method', 'Runtime'],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`setStyle()`',
                        status: {
                          completed: true,
                          categories: ['Method', 'Runtime'],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`removeStyle()`',
                        status: {
                          completed: true,
                          categories: ['Method', 'Runtime'],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`setProperty()`',
                        status: {
                          completed: true,
                          categories: ['Method', 'Runtime'],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`setValue()`',
                        status: {
                          completed: true,
                          categories: ['Method', 'Runtime'],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`listen()`',
                        status: {
                          completed: true,
                          categories: ['Method', 'Runtime'],
                          granularStatuses: [
                            {
                              category: 'Runtime',
                              code: 'IMPLEMENTED',
                              description: 'Runtime',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                    ],
                  },
                  featureGroups: null,
                },
              ],
            },
          ],
        },
      ],
    },
    lastUpdateDate: '2020-06-27T10:28:34',
  },
  links: null,
};
