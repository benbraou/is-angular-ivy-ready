const figCaptionConfig = {
  styles: {
    width: '100%',
    overflow: 'hidden',
    'text-align': 'center',
    position: 'absolute',
    left: '0',
    top: 'calc(50% - 1.25rem)',
    'font-size': '1.7rem',
    'line-height': '2.5rem',
    color: '',
  },
  properties: {
    innerHTML: '',
  },
};

export function getDefaultDisplayConfig() {
  return {
    figCaption: {
      styles: { ...figCaptionConfig.styles },
      properties: { ...figCaptionConfig.properties },
    },
  };
}

export interface DisplayConfig {
  figCaption: {
    styles: {
      width: string;
      overflow: string;
      'text-align': string;
      position: string;
      left: string;
      top: string;
      'font-size': string;
      'line-height': string;
      color: string;
    };
    properties: {
      innerHTML: string;
    };
  };
}
