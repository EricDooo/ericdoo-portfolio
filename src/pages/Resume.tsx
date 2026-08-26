import { site } from '../data/site'
import { Button } from '../components/ui/Button'

export function Resume() {
  return (
    <div className="mx-auto max-w-content px-6 py-16">
      <div className="flex items-baseline justify-between">
        <h1 className="text-2xl font-medium text-foreground">Resume</h1>
        <a href={site.resumeUrl} download>
          <Button>Download PDF</Button>
        </a>
      </div>
      <div className="mt-6 overflow-hidden rounded-lg border border-border">
        <object
          data={site.resumeUrl}
          type="application/pdf"
          className="h-[80vh] w-full"
          aria-label="Resume PDF"
        >
          <p className="p-6 text-sm text-muted">
            Your browser can't preview PDFs inline.{' '}
            <a href={site.resumeUrl} className="text-primary hover:underline">
              Download it directly
            </a>
            .
          </p>
        </object>
      </div>
    </div>
  )
}
