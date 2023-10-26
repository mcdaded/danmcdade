import { AppProps } from "$fresh/server.ts";
import NavComponent from "@/components/Navbar.tsx";
import FooterComponent from "../components/AppFooter.tsx";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Dan McDade</title>
      </head>
      <body>
        <div class="flex flex-col justify-between min-h-screen w-screen index-bg-color-shades" >
          <NavComponent />
          <Component />
          <FooterComponent />
        </div>
      </body>
    </html>
  );
}