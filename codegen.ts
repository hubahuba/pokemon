import type {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: {
    'https://beta.pokeapi.co/graphql/v1beta': {
      commentDescriptions: true,
    },
  },
  documents: ['core/data/**/*.{ts,tsx,js,jsx}'],
  ignoreNoDocuments: true,
  generates: {
    'core/definitions/gql/codegen/': {
      preset: 'client',
      plugins: ['typescript'],
    },
  },
  hooks: {afterAllFileWrite: ['prettier --write']},
};

export default config;
