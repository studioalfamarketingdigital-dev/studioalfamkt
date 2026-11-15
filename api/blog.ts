import { Pool } from "pg";
type BlogRequest = { query?: { slug?: string | string[] } };
type BlogResponse = { status: (code: number) => BlogResponse; setHeader: (name: string, value: string) => void; json: (body: unknown) => void };
const globalPool = globalThis as typeof globalThis & { __studioAlfaBlogPool?: Pool };
function getPool() {
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is not configured");
  if (!globalPool.__studioAlfaBlogPool) globalPool.__studioAlfaBlogPool = new Pool({ connectionString: process.env.DATABASE_URL, max: 5, idleTimeoutMillis: 10000, connectionTimeoutMillis: 5000 });
  return globalPool.__studioAlfaBlogPool;
}
const fields = `slug, title, description, category, to_char(publish_date, 'YYYY-MM-DD') AS date, read_time AS "readTime", intro, sections, keywords, author_name AS author, author_role AS "authorRole", sources`;
export default async function handler(req: BlogRequest, res: BlogResponse) {
  if ((req as any).method !== "GET") { res.setHeader("Allow", "GET"); return res.status(405).json({ error: "Method not allowed" }); }
  res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=600");
  try {
    const raw = req.query?.slug;
    const slug = Array.isArray(raw) ? raw[0] : raw;
    const pool = getPool();
    if (slug) {
      const result = await pool.query(`SELECT ${fields} FROM public.blog_posts WHERE status = 'published' AND slug = $1 LIMIT 1`, [slug]);
      if (!result.rows[0]) return res.status(404).json({ error: "Article not found" });
      return res.status(200).json(result.rows[0]);
    }
    const result = await pool.query(`SELECT ${fields} FROM public.blog_posts WHERE status = 'published' ORDER BY publish_date DESC, id DESC LIMIT 100`);
    return res.status(200).json(result.rows);
  } catch (error) {
    console.error("Blog API error:", error);
    return res.status(503).json({ error: "Blog data source unavailable" });
  }
}