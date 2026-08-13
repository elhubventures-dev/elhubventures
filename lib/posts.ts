import fs from "fs";
import path from "path";
import { marked } from "marked";

export type InsightPost = {
  topic: string;
  slug: string;
  publishDate: string;
  keyword: string;
};

function calendarPath() {
  return path.join(process.cwd(), "content_calendar.csv");
}

function insightsDir() {
  return path.join(process.cwd(), "insights");
}

export function getLivePosts(): InsightPost[] {
  const csvPath = calendarPath();
  if (!fs.existsSync(csvPath)) return [];

  const lines = fs.readFileSync(csvPath, "utf8").trim().split("\n");
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const posts: InsightPost[] = [];

  for (let i = 1; i < lines.length; i += 1) {
    const line = lines[i];
    if (!line) continue;
    const [topic, slug, publishDate, keyword] = line.split(",");
    if (!topic || !slug || !publishDate) continue;
    const postDate = new Date(publishDate);
    postDate.setHours(0, 0, 0, 0);
    if (postDate.getTime() <= today.getTime()) {
      posts.push({
        topic: topic.trim(),
        slug: slug.trim(),
        publishDate: publishDate.trim(),
        keyword: (keyword || "").trim(),
      });
    }
  }

  return posts.sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
}

export function getPost(slug: string) {
  return getLivePosts().find((post) => post.slug === slug);
}

export async function getPostHtml(slug: string) {
  const mdPath = path.join(insightsDir(), `${slug}.md`);
  if (!fs.existsSync(mdPath)) return null;
  const markdown = fs.readFileSync(mdPath, "utf8");
  return marked.parse(markdown);
}

export function getLatestPosts(count = 3) {
  return getLivePosts().slice(0, count);
}
