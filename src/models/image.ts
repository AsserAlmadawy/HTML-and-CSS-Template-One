import type { StaticImport } from "next/image";

interface Image {
  source: StaticImport;
  alt: string;
}

export type { Image };