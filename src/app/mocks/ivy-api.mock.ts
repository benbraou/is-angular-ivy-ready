export const RAW_IVY_RESPONSE = {
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
                          description: 'Runtime',
                        },
                        {
                          category: 'Spec',
                          code: 'NOT_IMPLEMENTED',
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
                      completed: false,
                      categories: ['Feature', 'Runtime', 'Spec', 'Compiler'],
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
                    name: '`class CompA extends CompB { @Input }`',
                    status: {
                      completed: false,
                      categories: ['Feature', 'Runtime', 'Spec', 'Compiler'],
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
                    name: '`class CompA extends CompB { @Output }`',
                    status: {
                      completed: false,
                      categories: ['Feature', 'Runtime', 'Spec', 'Compiler'],
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
                        name: 'literal',
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
                              description: 'View Container Ref',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Template Ref',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_IMPLEMENTED',
                              description: 'Embeded View Ref',
                            },
                            {
                              category: 'View Ref',
                              code: 'NOT_IMPLEMENTED',
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
                              description: 'View Container Ref',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Template Ref',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_IMPLEMENTED',
                              description: 'Embeded View Ref',
                            },
                            {
                              category: 'View Ref',
                              code: 'NOT_IMPLEMENTED',
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
                              description: 'View Container Ref',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Template Ref',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_IMPLEMENTED',
                              description: 'Embeded View Ref',
                            },
                            {
                              category: 'View Ref',
                              code: 'NOT_IMPLEMENTED',
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
                              description: 'View Container Ref',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Template Ref',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_IMPLEMENTED',
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
                              description: 'View Container Ref',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Template Ref',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_IMPLEMENTED',
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
                              description: 'View Container Ref',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Template Ref',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_IMPLEMENTED',
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
                              description: 'View Container Ref',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Template Ref',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_IMPLEMENTED',
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
                              description: 'View Container Ref',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Template Ref',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_IMPLEMENTED',
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

export const ENHANCED_IVY_RESPONSE = {
  API: { version: 1 },
  errors: null,
  data: {
    featureGroup: {
      data: { name: 'root', features: [], nameAsHeader: 'root' },
      featureGroups: [
        {
          data: {
            name: 'Implementation Status',
            features: [],
            nameAsHeader: '1. Implementation Status',
          },
          featureGroups: [
            {
              data: {
                name: '`@angular/compiler-cli` changes',
                features: [],
                nameAsHeader: '1.1. `@angular/compiler-cli` changes',
              },
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
                            name: '`@Pipe` => `definePipe`',
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
                            name: '`@Component` => `defineComponent`',
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
                            name: '`@Directive` => `defineDirective`',
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
                            name: '`@NgModule` => `defineInjector`',
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
                              '`@Pipe` => see [STORING_METADATA_IN_D.TS.md](./STORING_METADATA_IN_D.TS.md)',
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
                              '`@Component` => see [STORING_METADATA_IN_D.TS.md](./STORING_METADATA_IN_D.TS.md)',
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
                              '`@Directive` => see [STORING_METADATA_IN_D.TS.md](./STORING_METADATA_IN_D.TS.md)',
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
                              '`@NgModule` => see [STORING_METADATA_IN_D.TS.md](./STORING_METADATA_IN_D.TS.md)',
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
                    nameAsHeader: '1.1.1. `ngtsc` TSC compiler transformer',
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
                            name: '`PipeCompiler`: `@Pipe` => `definePipe`',
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
                              '`DirectiveCompiler`: `@Directive` => `defineDirective`',
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
                              '`NgModuleCompiler`: `@NgModule` => `defineInjector`',
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
                              '`ComponentCompiler`: `@Component` => `defineComponent`',
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
                    nameAsHeader:
                      '1.1.2. `ngcc` Angular `node_module` compatibility compiler',
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
                      'Component compilation: Translates `@Component` => `defineComponent`',
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
                    name: '`PipeCompiler`: Translates `@Pipe` => `definePipe`',
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
                      '`DirectiveCompiler`: Translates `@Directive` => `defineDirective`',
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
                      '`InjectableCompiler`: Translates `@Injectable` => `defineInjectable`',
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
                      '`NgModuleCompiler`: Translates `@NgModule` => `defineInjector` (and `defineNgModule` only in jit)',
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
                nameAsHeader: '1.2. `@angular/compiler` changes',
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
                    name: '`ResourceLoader.resolved: Promise<>`',
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
                nameAsHeader: '1.3. `@angular/core` changes',
              },
              featureGroups: null,
            },
          ],
        },
        {
          data: {
            name: 'Crosscutting',
            features: [],
            nameAsHeader: '2. Crosscutting',
          },
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
                ],
                nameAsHeader: '2.1. Decorators',
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
                          description: 'Runtime',
                        },
                        {
                          category: 'Spec',
                          code: 'NOT_IMPLEMENTED',
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
                      completed: false,
                      categories: ['Feature', 'Runtime', 'Spec', 'Compiler'],
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
                    name: '`class CompA extends CompB { @Input }`',
                    status: {
                      completed: false,
                      categories: ['Feature', 'Runtime', 'Spec', 'Compiler'],
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
                    name: '`class CompA extends CompB { @Output }`',
                    status: {
                      completed: false,
                      categories: ['Feature', 'Runtime', 'Spec', 'Compiler'],
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
                nameAsHeader: '2.2. Component Composition',
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
                nameAsHeader: '2.3. Change Detection',
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
                nameAsHeader: '2.4. Bootstrap API',
              },
              featureGroups: null,
            },
            {
              data: {
                name: 'Template Compiler',
                features: [],
                nameAsHeader: '2.5. Template Compiler',
              },
              featureGroups: [
                {
                  data: {
                    name: 'Template Syntax',
                    features: [
                      {
                        name: '`<div>`',
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
                        name: '`<div>{{exp}}</div>`',
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
                        name: '`<div attr=value>`',
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
                        name: '`<div (click)="stmt">`',
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
                        name: '`<div #foo>`',
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
                        name: '`<div #foo="bar">`',
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
                        name: '`<div [value]="exp">`',
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
                        name: '`<div title="Hello {{name}}!">`',
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
                        name: '`<div [attr.value]="exp">`',
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
                        name: '`<div class="literal">`',
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
                        name: '`<div [class]="exp">`',
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
                        name: '`<div [class.foo]="exp">`',
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
                        name: '`<div style="literal">`',
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
                        name: '`<div [style]="exp">`',
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
                        name: '`<div [style.foo]="exp">`',
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
                        name: '`<svg:g svg:p>`',
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
                        name: '`<img src=[userData]>` sanitization',
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
                    nameAsHeader: '2.5.1. Template Syntax',
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
                    nameAsHeader: '2.5.2. Life Cycle Hooks',
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
                    nameAsHeader: '2.5.3. `@Query`',
                  },
                  featureGroups: null,
                },
                {
                  data: {
                    name: 'Content Projection',
                    features: [
                      {
                        name: '`<ng-content>`',
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
                        name: '`<ng-content selector="...">`',
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
                    ],
                    nameAsHeader: '2.5.4. Content Projection',
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
                        name: 'literal',
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
                    ],
                    nameAsHeader: '2.5.5. Injection Features',
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
                    nameAsHeader: '2.5.6. I18N',
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
                    nameAsHeader: '2.5.7. View Encapsulation',
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
                              description: 'View Container Ref',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Template Ref',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_IMPLEMENTED',
                              description: 'Embeded View Ref',
                            },
                            {
                              category: 'View Ref',
                              code: 'NOT_IMPLEMENTED',
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
                              description: 'View Container Ref',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Template Ref',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_IMPLEMENTED',
                              description: 'Embeded View Ref',
                            },
                            {
                              category: 'View Ref',
                              code: 'NOT_IMPLEMENTED',
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
                              description: 'View Container Ref',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Template Ref',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_IMPLEMENTED',
                              description: 'Embeded View Ref',
                            },
                            {
                              category: 'View Ref',
                              code: 'NOT_IMPLEMENTED',
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
                              description: 'View Container Ref',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Template Ref',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_IMPLEMENTED',
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
                              description: 'View Container Ref',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Template Ref',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_IMPLEMENTED',
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
                              description: 'View Container Ref',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Template Ref',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_IMPLEMENTED',
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
                              description: 'View Container Ref',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Template Ref',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_IMPLEMENTED',
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
                              description: 'View Container Ref',
                            },
                            {
                              category: 'Template Ref',
                              code: 'NOT_APPLICABLE',
                              description: 'Template Ref',
                            },
                            {
                              category: 'Embeded View Ref',
                              code: 'NOT_IMPLEMENTED',
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
                    ],
                    nameAsHeader: '2.5.8. `______Ref`s',
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
    overallStatus: {
      nbrFeaturesCompleted: 54,
      nbrFeaturesPending: 63,
      progressPercentage: 46.15,
    },
  },
  links: null,
};
