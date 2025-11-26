import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { FileUploader } from "@/components/dashboard/file-uploader";

const files = [
  { name: "Brand Brief.pdf", status: "Shared", size: "2.3 MB" },
  { name: "Moodboard.png", status: "Awaiting review", size: "4.1 MB" },
];

export default function FilesPage() {
  return (
    <div className="space-y-6">
      <SectionHeading eyebrow="Files" title="Supabase storage" subtitle="Collect uploads, approvals, and signed PDFs." />
      <div className="grid gap-6 lg:grid-cols-2">
        <GlassCard>
          <FileUploader />
        </GlassCard>
        <GlassCard>
          <p className="text-sm text-white/60">Recent files</p>
          <div className="mt-4 space-y-3">
            {files.map((file) => (
              <div key={file.name} className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/10 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold">{file.name}</p>
                  <p className="text-xs text-white/60">{file.status}</p>
                </div>
                <p className="text-xs text-white/60">{file.size}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
