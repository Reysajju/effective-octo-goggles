"use client";

import { ChangeEvent, useState } from "react";
import { Button } from "@/components/ui/button";

export function FileUploader() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("No file selected");

  async function handleUpload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
    setStatus("Requesting signed URL...");
    const response = await fetch("/api/files/upload-url", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ filename: file.name, type: file.type }),
    });
    const data = await response.json();
    if (!data.uploadUrl) {
      setStatus(data.error ?? "Failed to get upload URL");
      return;
    }
    setStatus(`Ready to upload to ${data.uploadUrl.substring(0, 32)}...`);
  }

  return (
    <div className="space-y-4 text-sm text-white/80">
      <input type="file" onChange={handleUpload} className="w-full rounded-2xl border border-dashed border-white/20 p-6" />
      <p className="text-white">{fileName ?? "Select a file"}</p>
      <p className="text-xs text-white/60">{status}</p>
      <Button variant="secondary" size="sm">
        Upload via Supabase Storage
      </Button>
    </div>
  );
}
