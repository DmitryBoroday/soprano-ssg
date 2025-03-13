import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from './sanity/schemas'

const config = defineConfig({
    projectId: 'hvowtkmg',
    dataset: 'production',
    title: 'Soprano Escort',
    apiVersion: '2025-03-03',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: {types: schemas}
})

export default config