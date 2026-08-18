import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function DocsOverviewPage() {
  return (
    <div className="pb-20">
      {/* Hero */}
      <header className="max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
          Documentation
        </p>

        <h1 className="mt-4 max-w-2xl font-display text-4xl font-medium leading-[1.08] tracking-[-0.025em] text-ink sm:text-[3.25rem]">
          Build, launch, and understand what you create.
        </h1>

        <p className="mt-6 max-w-xl text-[15px] leading-7 text-ink-muted">
          Build websites and software with AroPath, connect the tools you
          already use, and turn real user activity into insights that help you
          improve what you build.
        </p>
      </header>

      {/* Featured Start */}
      <section className="mt-16">
        <div className="relative overflow-hidden rounded-2xl border border-line bg-card px-7 py-8 sm:px-9 sm:py-9">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-ink-muted" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
                Start here
              </p>
            </div>

            <h2 className="mt-5 font-display text-[1.65rem] font-medium tracking-[-0.015em] text-ink sm:text-3xl">
              Get your first project up and running.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-ink-muted">
              Set up AroPath, connect it to your website or application, and
              start building with the platform.
            </p>

            <Link
              href="/docs/quick-start"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-ink"
            >
              Read the Quick Start
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* The AroPath Workflow */}
      <section className="mt-20">
        <div className="max-w-2xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
            The AroPath workflow
          </p>

          <h2 className="mt-3 font-display text-2xl font-medium tracking-[-0.015em] text-ink sm:text-[1.7rem]">
            Build first. Understand. Improve.
          </h2>

          <p className="mt-3 text-sm leading-6 text-ink-muted">
            AroPath brings the building and measurement sides of your product
            together, so you can move from implementation to insight without
            losing the bigger picture.
          </p>
        </div>

        <div className="mt-9 grid border-y border-line sm:grid-cols-3">
          <WorkflowStep
            number="01"
            title="Build"
            text="Create websites, web applications, and digital experiences around your users."
          />

          <WorkflowStep
            number="02"
            title="Connect"
            text="Bring your project together with AroPath through tracking, SDKs, and APIs."
            middle
          />

          <WorkflowStep
            number="03"
            title="Improve"
            text="Understand behavior and performance, then use what you learn to make better decisions."
          />
        </div>
      </section>

{/* What AroPath Covers */}
<section className="mt-20">
  <div>
    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
      What AroPath covers
    </p>

    <h2 className="mt-3 font-display text-2xl font-medium tracking-[-0.015em] text-ink sm:text-[1.7rem]">
      What are you building?
    </h2>
  </div>

  <div className="mt-8 divide-y divide-line border-y border-line">
    <div className="py-6">
      <h3 className="font-display text-[15px] font-medium text-ink">
        Websites & web applications
      </h3>

      <p className="mt-1.5 max-w-2xl text-xs leading-5 text-ink-muted">
        Build and integrate modern digital experiences with the tools your
        project needs.
      </p>
    </div>

    <div className="py-6">
      <h3 className="font-display text-[15px] font-medium text-ink">
        Software integrations
      </h3>

      <p className="mt-1.5 max-w-2xl text-xs leading-5 text-ink-muted">
        Connect your applications and backend systems through SDKs, APIs, and
        integrations.
      </p>
    </div>

    <div className="py-6">
      <h3 className="font-display text-[15px] font-medium text-ink">
        Analytics & insights
      </h3>

      <p className="mt-1.5 max-w-2xl text-xs leading-5 text-ink-muted">
        Understand user journeys, track meaningful events, and use data to
        improve what you build.
      </p>
    </div>
  </div>
</section>

      {/* Bottom navigation */}
      <section className="mt-20 border-t border-line pt-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-ink">
              Ready to get started?
            </p>
            <p className="mt-1 text-xs leading-5 text-ink-muted">
              Follow the Quick Start guide or choose a topic from the sidebar.
            </p>
          </div>

          <Link
            href="/docs/quick-start"
            className="group inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-saffron"
          >
            Get started
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function WorkflowStep({
  number,
  title,
  text,
  middle = false,
}: {
  number: string;
  title: string;
  text: string;
  middle?: boolean;
}) {
  return (
    <div
      className={`py-7 sm:py-8 ${
        middle
          ? "border-y border-line sm:border-x sm:border-y-0 sm:px-7"
          : ""
      }`}
    >
      <span className="font-mono text-[10px] font-semibold tracking-wider text-ink-muted">
        {number}
      </span>

      <h3 className="mt-3 font-display text-base font-medium text-ink">
        {title}
      </h3>

      <p className="mt-2 max-w-xs text-xs leading-5 text-ink-muted">
        {text}
      </p>
    </div>
  );
}

function ExploreRow({
  href,
  title,
  text,
}: {
  href: string;
  title: string;
  text: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between gap-8 py-6 transition-colors"
    >
      <div className="min-w-0">
        <h3 className="font-display text-[15px] font-medium text-ink">
          {title}
        </h3>

        <p className="mt-1.5 max-w-2xl text-xs leading-5 text-ink-muted">
          {text}
        </p>
      </div>

      <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
    </Link>
  );
}