import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import banner from './schemas/banner'
import product from './schemas/product'

export default defineConfig({
  name: 'default',
  title: 'next-ecommerce-demo',

  projectId: 'ajgkzenq',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: [banner, product],
  },
})
