import Link from "next/link";
import { Button } from "@/components/ui/button";

const MarketingPage = () => {
  return (
    <section className="container flex max-w-6xl items-center justify-center gap-8 pb-8 pt-6 md:py-8 ">
      <section className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-4 py-12 text-center md:py-16">
        <h1 className="text-balance text-3xl font-bold sm:text-5xl md:text-6xl">
          Portfolio app created using all the new in Next.js 14.
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          I created a trello like web app with Next.js 14. The documentation for
          the app is on my GitHub
        </p>
        <div className="space-x-4">
          <Button size="lg" asChild>
            <Link href="/sign-up">Get started</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link
              href="https://github.com/sebastianpatrickk/devboards"
              target="_blank"
            >
              GitHub
            </Link>
          </Button>
        </div>
      </section>
    </section>
  );
};

export default MarketingPage;
