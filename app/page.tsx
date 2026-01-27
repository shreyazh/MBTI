import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MBTIQuiz } from "@/components/mbti-quiz"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
              Discover Your Personality Type
            </h1>
            <p className="text-xl text-gray-700 mb-6 text-balance">
              Understand yourself better with the Myers-Briggs Type Indicator (MBTI). Take our scientifically-designed assessment to uncover one of 16 unique personality types.
            </p>
          </div>

          <MBTIQuiz />
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50 border-t-4 border-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">What is Myers-Briggs?</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="border-4 border-black rounded-lg p-6 bg-white">
              <h3 className="text-xl font-bold mb-3">Four Dimensions</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>E vs I:</strong> Extraversion vs Introversion (Energy direction)</li>
                <li><strong>S vs N:</strong> Sensing vs Intuition (Information processing)</li>
                <li><strong>T vs F:</strong> Thinking vs Feeling (Decision making)</li>
                <li><strong>J vs P:</strong> Judging vs Perceiving (Lifestyle approach)</li>
              </ul>
            </div>
            <div className="border-4 border-black rounded-lg p-6 bg-white">
              <h3 className="text-xl font-bold mb-3">16 Unique Types</h3>
              <p className="text-gray-700 mb-4">
                Your combination of preferences creates one of 16 distinct personality types, each with unique strengths, values, and ways of viewing the world.
              </p>
              <p className="text-gray-700">
                Learn about all 16 types in our comprehensive personality guide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
