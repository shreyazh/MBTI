import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TunnelPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Tunnel Postback</h1>
          <div className="border-4 border-black rounded-lg p-6 bg-gray-50">
            <p className="text-lg">
              This is the tunnel postback endpoint. Query parameters are not displayed in static export.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}