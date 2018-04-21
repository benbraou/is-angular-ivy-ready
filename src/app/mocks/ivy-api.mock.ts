export const IVY_RESPONSE = {
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
                        name: 'Can read STORING_METADATA_IN_D.TS from `.d.ts`',
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
                        name:
                          'Detect decorators and convert them to the `defineXXX` method using the `__Compiler` in `@angular/compiler`.',
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
                        childFeatures: [
                          {
                            name: '`@Pipe` =\u003e `definePipe`',
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
                            name: '`@Component` =\u003e `defineComponent`',
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
                            name: '`@Directive` =\u003e `defineDirective`',
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
                            name: '`@NgModule` =\u003e `defineInjector`',
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
                      {
                        name: 'Encode selectors into `.d.ts` file.',
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
                        childFeatures: [
                          {
                            name:
                              '`@Pipe` =\u003e see [STORING_METADATA_IN_D.TS.md](./STORING_METADATA_IN_D.TS.md)',
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
                            name:
                              '`@Component` =\u003e see [STORING_METADATA_IN_D.TS.md](./STORING_METADATA_IN_D.TS.md)',
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
                            name:
                              '`@Directive` =\u003e see [STORING_METADATA_IN_D.TS.md](./STORING_METADATA_IN_D.TS.md)',
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
                            name:
                              '`@NgModule` =\u003e see [STORING_METADATA_IN_D.TS.md](./STORING_METADATA_IN_D.TS.md)',
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
                      {
                        name:
                          'support `extends` for `@Pipe`, `@Component`, `@Directive` and `@NgModule`.',
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
                {
                  data: {
                    name: '`ngcc` Angular `node_module` compatibility compiler',
                    features: [
                      {
                        name: 'Basic setup of stand alone executable',
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
                        name:
                          'Rewrite existing code by interpreting the associated STORING_METADATA_IN_D.TS',
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
                        childFeatures: [
                          {
                            name:
                              '`PipeCompiler`: `@Pipe` =\u003e `definePipe`',
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
                            name:
                              '`DirectiveCompiler`: `@Directive` =\u003e `defineDirective`',
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
                            name:
                              '`NgModuleCompiler`: `@NgModule` =\u003e `defineInjector`',
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
                            name:
                              '`ComponentCompiler`: `@Component` =\u003e `defineComponent`',
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
                            childFeatures: [
                              {
                                name: '`TemplateCompiler`',
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
                                name: '`StyleCompiler`',
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
                        ],
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
                      'Component compilation: Translates `@Component` =\u003e `defineComponent`',
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
                    childFeatures: [
                      {
                        name:
                          '`TemplateCompiler` (current known as `ViewCompiler`)',
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
                        name: '`StyleCompiler`',
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
                  {
                    name:
                      '`PipeCompiler`: Translates `@Pipe` =\u003e `definePipe`',
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
                    name:
                      '`DirectiveCompiler`: Translates `@Directive` =\u003e `defineDirective`',
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
                    name:
                      '`InjectableCompiler`: Translates `@Injectable` =\u003e `defineInjectable`',
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
                    name:
                      '`NgModuleCompiler`: Translates `@NgModule` =\u003e `defineInjector` (and `defineNgModule` only in jit)',
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
            {
              data: {
                name: '`@angular/core` changes',
                features: [
                  {
                    name:
                      'Remove `createDecorator` (and friends) since we no longer support other modes.',
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
                    name: '`@angular/compiler` can patch itself onto:',
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
                    childFeatures: [
                      {
                        name: '`@Injectable`',
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
                        name: '`@NgModule`',
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
                        name: '`@Pipe`',
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
                        name: '`@Directive`',
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
                        name: '`@Component`',
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
                  {
                    name: '`ResourceLoader.resolved: Promise\u003c\u003e`',
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
          data: { name: 'Crosscutting', features: [] },
          featureGroups: [
            {
              data: {
                name: 'Decorators',
                features: [
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
                      completed: false,
                      categories: ['Feature', 'Runtime', 'Spec', 'Compiler'],
                      granularStatuses: [
                        {
                          category: 'Runtime',
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
                          code: 'IMPLEMENTED',
                          description: '',
                        },
                      ],
                    },
                    childFeatures: null,
                  },
                  {
                    name: '`class CompA extends CompB {}`',
                    status: {
                      completed: false,
                      categories: ['Feature', 'Runtime', 'Spec', 'Compiler'],
                      granularStatuses: [
                        {
                          category: 'Runtime',
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
                      ],
                    },
                    childFeatures: null,
                  },
                  {
                    name: '`class CompA extends CompB { @Input }`',
                    status: {
                      completed: false,
                      categories: ['Feature', 'Runtime', 'Spec', 'Compiler'],
                      granularStatuses: [
                        {
                          category: 'Runtime',
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
                      ],
                    },
                    childFeatures: null,
                  },
                  {
                    name: '`class CompA extends CompB { @Output }`',
                    status: {
                      completed: false,
                      categories: ['Feature', 'Runtime', 'Spec', 'Compiler'],
                      granularStatuses: [
                        {
                          category: 'Runtime',
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
                          description: '',
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
                          description: '',
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
                          description: '',
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
                          description: '',
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
                          description: '',
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
                          description: '',
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
                          description: '',
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
                          description: '',
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
                          description: '',
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
                          description: '',
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
                              description: '',
                            },
                            {
                              category: 'Spec',
                              code: 'IMPLEMENTED',
                              description: '',
                            },
                            {
                              category: 'Compiler',
                              code: 'NOT_IMPLEMENTED',
                              description: '',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`\u003cdiv [class]="exp"\u003e`',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`\u003cdiv [class.foo]="exp"\u003e`',
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
                              description: '',
                            },
                            {
                              category: 'Spec',
                              code: 'IMPLEMENTED',
                              description: '',
                            },
                            {
                              category: 'Compiler',
                              code: 'NOT_IMPLEMENTED',
                              description: '',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`\u003cdiv [style]="exp"\u003e`',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`\u003cdiv [style.foo]="exp"\u003e`',
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
                              description: '',
                            },
                            {
                              category: 'Spec',
                              code: 'IMPLEMENTED',
                              description: '',
                            },
                            {
                              category: 'Compiler',
                              code: 'NOT_IMPLEMENTED',
                              description: '',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: 'literal',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: 'literal',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`\u003csvg:g svg:p\u003e`',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`\u003cimg src=[userData]\u003e` sanitization',
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
                              description: '',
                            },
                            {
                              category: 'Spec',
                              code: 'IMPLEMENTED',
                              description: '',
                            },
                            {
                              category: 'Compiler',
                              code: 'NOT_APPLICABLE',
                              description: '',
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
                              description: '',
                            },
                            {
                              category: 'Spec',
                              code: 'IMPLEMENTED',
                              description: '',
                            },
                            {
                              category: 'Compiler',
                              code: 'NOT_APPLICABLE',
                              description: '',
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
                              description: '',
                            },
                            {
                              category: 'Spec',
                              code: 'IMPLEMENTED',
                              description: '',
                            },
                            {
                              category: 'Compiler',
                              code: 'NOT_APPLICABLE',
                              description: '',
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
                              description: '',
                            },
                            {
                              category: 'Spec',
                              code: 'IMPLEMENTED',
                              description: '',
                            },
                            {
                              category: 'Compiler',
                              code: 'NOT_APPLICABLE',
                              description: '',
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
                              description: '',
                            },
                            {
                              category: 'Spec',
                              code: 'IMPLEMENTED',
                              description: '',
                            },
                            {
                              category: 'Compiler',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`@ContentChildred`',
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
                              description: '',
                            },
                            {
                              category: 'Spec',
                              code: 'IMPLEMENTED',
                              description: '',
                            },
                            {
                              category: 'Compiler',
                              code: 'NOT_IMPLEMENTED',
                              description: '',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`@ViewChildren`',
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
                              description: '',
                            },
                            {
                              category: 'Spec',
                              code: 'IMPLEMENTED',
                              description: '',
                            },
                            {
                              category: 'Compiler',
                              code: 'NOT_IMPLEMENTED',
                              description: '',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: 'container `projectAs`',
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
                              description: '',
                            },
                            {
                              category: 'Spec',
                              code: 'IMPLEMENTED',
                              description: '',
                            },
                            {
                              category: 'Compiler',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`directiveInject(Type)`',
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
                              description: '',
                            },
                            {
                              category: 'Spec',
                              code: 'IMPLEMENTED',
                              description: '',
                            },
                            {
                              category: 'Compiler',
                              code: 'NOT_IMPLEMENTED',
                              description: '',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: 'name',
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
                              description: '',
                            },
                            {
                              category: 'Spec',
                              code: 'IMPLEMENTED',
                              description: '',
                            },
                            {
                              category: 'Compiler',
                              code: 'NOT_IMPLEMENTED',
                              description: '',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`injectChangeDetectionRef()`',
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
                              description: '',
                            },
                            {
                              category: 'Spec',
                              code: 'IMPLEMENTED',
                              description: '',
                            },
                            {
                              category: 'Compiler',
                              code: 'NOT_IMPLEMENTED',
                              description: '',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: 'default `inject()` with no injector',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: 'sanitization with no injector',
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
                              description: '',
                            },
                            {
                              category: 'Spec',
                              code: 'IMPLEMENTED',
                              description: '',
                            },
                            {
                              category: 'Compiler',
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
                    name: 'I18N',
                    features: [
                      {
                        name: 'translate text literals',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: 'rearrange text nodes',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: 'ICU',
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
                        name: 'Render3.None',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: 'Render2.None',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: 'Render2.Emulated',
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
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: 'Render2.Native',
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
                          completed: false,
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
                              code: 'NOT_IMPLEMENTED',
                              description: '',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'View Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Element Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Change Detection Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`get()`',
                        status: {
                          completed: false,
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
                              code: 'NOT_IMPLEMENTED',
                              description: '',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'View Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Element Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Change Detection Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
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
                              description: '',
                            },
                            {
                              category: 'Template Ref',
                              code: 'IMPLEMENTED',
                              description: '',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'View Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Element Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Change Detection Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
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
                              description: '',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'View Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Element Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Change Detection Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
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
                              description: '',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'View Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Element Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Change Detection Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`move()`',
                        status: {
                          completed: false,
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
                              code: 'NOT_IMPLEMENTED',
                              description: '',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'View Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Element Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Change Detection Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`indexOf()`',
                        status: {
                          completed: false,
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
                              code: 'NOT_IMPLEMENTED',
                              description: '',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'View Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Element Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Change Detection Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`destroy()`',
                        status: {
                          completed: false,
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
                              description: '',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_IMPLEMENTED',
                              description: '',
                            },
                            {
                              category: 'View Ref',
                              code: 'NOT_IMPLEMENTED',
                              description: '',
                            },
                            {
                              category: 'Element Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Change Detection Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`destroyed`',
                        status: {
                          completed: false,
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
                              description: '',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_IMPLEMENTED',
                              description: '',
                            },
                            {
                              category: 'View Ref',
                              code: 'NOT_IMPLEMENTED',
                              description: '',
                            },
                            {
                              category: 'Element Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Change Detection Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`onDestroy()`',
                        status: {
                          completed: false,
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
                              description: '',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_IMPLEMENTED',
                              description: '',
                            },
                            {
                              category: 'View Ref',
                              code: 'NOT_IMPLEMENTED',
                              description: '',
                            },
                            {
                              category: 'Element Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Change Detection Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`markForCheck()`',
                        status: {
                          completed: false,
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
                              description: '',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_IMPLEMENTED',
                              description: '',
                            },
                            {
                              category: 'View Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Element Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Change Detection Ref',
                              code: 'IMPLEMENTED',
                              description: '',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`detach()`',
                        status: {
                          completed: false,
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
                              code: 'NOT_IMPLEMENTED',
                              description: '',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_IMPLEMENTED',
                              description: '',
                            },
                            {
                              category: 'View Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Element Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Change Detection Ref',
                              code: 'IMPLEMENTED',
                              description: '',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`detachChanges()`',
                        status: {
                          completed: false,
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
                              description: '',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_IMPLEMENTED',
                              description: '',
                            },
                            {
                              category: 'View Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Element Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Change Detection Ref',
                              code: 'IMPLEMENTED',
                              description: '',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`checkNoChanges()`',
                        status: {
                          completed: false,
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
                              description: '',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_IMPLEMENTED',
                              description: '',
                            },
                            {
                              category: 'View Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Element Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Change Detection Ref',
                              code: 'IMPLEMENTED',
                              description: '',
                            },
                          ],
                        },
                        childFeatures: null,
                      },
                      {
                        name: '`reattach()`',
                        status: {
                          completed: false,
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
                              description: '',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_IMPLEMENTED',
                              description: '',
                            },
                            {
                              category: 'View Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Element Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Change Detection Ref',
                              code: 'IMPLEMENTED',
                              description: '',
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
                              description: '',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'View Ref',
                              code: 'NOT_APPLICABLE',
                              description: '',
                            },
                            {
                              category: 'Element Ref',
                              code: 'IMPLEMENTED',
                              description: '',
                            },
                            {
                              category: 'Change Detection Ref',
                              code: 'NOT_APPLICABLE',
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
          ],
        },
      ],
    },
    lastUpdateDate: '2018-04-20T18:38:31',
  },
  links: null,
};
