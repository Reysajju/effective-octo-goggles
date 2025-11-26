"use client";

import { useMemo } from "react";

interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  const json = useMemo(() => JSON.stringify(data), [data]);

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
