import { getCollection } from 'astro:content';
import fs from 'node:fs';
import path from 'node:path';
import type { APIRoute } from 'astro';

const clicksPath = path.resolve(new URL('../../../data/clicks.json', import.meta.url).pathname);

export const GET: APIRoute = async ({ params, redirect }) => {
  const slug = params.slug;
  const tools = await getCollection('tools');
  const match = tools.find((tool) => tool.data.slug === slug);

  if (!match) {
    return new Response('Not found', { status: 404 });
  }

  try {
    if (!fs.existsSync(clicksPath)) {
      fs.mkdirSync(path.dirname(clicksPath), { recursive: true });
      fs.writeFileSync(clicksPath, '[]');
    }
    const existing = JSON.parse(fs.readFileSync(clicksPath, 'utf-8') || '[]');
    existing.push({ slug, at: new Date().toISOString() });
    fs.writeFileSync(clicksPath, JSON.stringify(existing, null, 2));
  } catch (error) {
    console.error('Failed to log click', error);
  }

  return redirect(match.data.affiliate_url, 302);
};
