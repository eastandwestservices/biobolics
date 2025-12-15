import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'zjof72i1', // MUST be like abc123def456
  dataset: 'production',
  apiVersion: '2025-12-15',
  useCdn: true,
});
