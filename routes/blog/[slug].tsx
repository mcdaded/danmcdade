import { Handlers, PageProps } from "$fresh/server.ts";
import { asset, Head } from "$fresh/runtime.ts";
import { getPost, Post } from "@/utils/posts.ts";
import { CSS, render } from "$gfm";

export const handler: Handlers<Post> = {
  async GET(_req, ctx) {
    try {
      const post = await getPost(ctx.params.slug);
      return ctx.render(post as Post);
    } catch {
      return ctx.renderNotFound();
    }
  },
};

export default function PostPage(props: PageProps<Post>) {
  const post = props.data;
  const title = `${post.title ?? "Not Found"} | Dan McDade`;
  let description = "Fresh Document";

  if (post.snippet) {
    description = String(post.snippet);
  }
  return (
    <>
      <Head>
        {/* <style dangerouslySetInnerHTML={{ __html: CSS }} /> */}
        <link rel="stylesheet" href={asset("/markdown.css")} />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={props.url.href} />
        {/* <meta property="og:image" content={ogImageUrl} /> */}
      </Head>
      <main class="max-w-screen-xl px-4 pt-16 mx-auto">
        <h1 class="text-5xl font-bold text-primary-50">{post.title}</h1>
        <time class="text-gray-500">
          {new Date(post.publishedAt).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <div>
          <a href="http://localhost:8000/blog">BACK</a>
        </div>
        <div
          class="mt-8 markdown-body bg-black"
          dangerouslySetInnerHTML={{ __html: render(post.content) }}
        />
      </main>
    </>
  );
}
