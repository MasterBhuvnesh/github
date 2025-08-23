import { DocsLayout, type DocsLayoutProps } from "fumadocs-ui/layouts/notebook";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import { GithubInfo } from "fumadocs-ui/components/github-info";
import BannerButton from "@/components/banner";

const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: source.pageTree,
  sidebar: {
    banner: <BannerButton />,
  },
  links: [
    {
      type: "custom",
      children: (
        <GithubInfo
          owner="MasterBhuvnesh"
          repo="github"
          className="lg:-mx-2"
        />
      ),
    },
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return <DocsLayout {...docsOptions}>{children}</DocsLayout>;
}
