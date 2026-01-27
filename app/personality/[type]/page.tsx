import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { personalities } from "@/data/personalities"
import Link from "next/link"

const personalityTypes = ["istj", "isfj", "infj", "intj", "istp", "isfp", "infp", "intp", "estp", "esfp", "enfp", "entp", "estj", "esfj", "enfj", "entj"]

export async function generateStaticParams() {
  return personalityTypes.map((type) => ({
    type: type,
  }))
}

export function generateMetadata({ params }: { params: { type: string } }) {
  const personality = personalities[params.type.toLowerCase()]
  if (!personality) {
    return {
      title: "Personality Not Found",
    }
  }
  return {
    title: `${personality.code} - ${personality.nickname} | Myers-Briggs`,
    description: personality.description,
  }
}

export default function PersonalityPage({ params }: { params: { type: string } }) {
  const typeCode = params.type.toLowerCase()
  const personality = personalities[typeCode]

  if (!personality) {
    return (
      <main className="min-h-screen bg-white">
        <Navigation />
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold mb-4">Personality Type Not Found</h1>
            <p className="text-lg text-gray-700 mb-6">
              The personality type you're looking for doesn't exist.
            </p>
            <Link href="/" className="text-blue-600 font-bold hover:underline">
              Return to Home
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  // Get related types (same first letter groupings)
  const relatedTypes = personalityTypes.filter((t) => t[0] === typeCode[0] && t !== typeCode)

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 border-b-4 border-black pb-8">
            <div className="flex items-center gap-6 mb-6">
              <div className="bg-black text-white p-8 rounded-lg border-4 border-black">
                <div className="text-5xl font-bold text-center">{personality.code}</div>
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2">{personality.nickname}</h1>
                <p className="text-2xl text-gray-700">{personality.title}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {personality.description}
            </p>
          </div>

          {/* Key Traits */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="border-4 border-black rounded-lg p-6 bg-gray-50">
              <h3 className="text-2xl font-bold mb-4">Key Traits</h3>
              <ul className="space-y-2">
                {personality.traits.map((trait, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-black font-bold mt-1">•</span>
                    <span className="text-gray-700">{trait}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-4 border-black rounded-lg p-6 bg-white">
              <h3 className="text-2xl font-bold mb-4">Population</h3>
              <p className="text-lg font-bold text-black mb-4">
                {personality.percentPopulation} of population
              </p>
              <p className="text-gray-700">
                {personality.code}s are relatively {parseFloat(personality.percentPopulation) < 5 ? "rare" : "common"} in the general population.
              </p>
            </div>
          </div>

          {/* Strengths and Weaknesses */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="border-4 border-green-600 rounded-lg p-6 bg-green-50">
              <h3 className="text-2xl font-bold mb-4 text-green-700">Strengths</h3>
              <ul className="space-y-3">
                {personality.strengths.map((strength, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-lg">✓</span>
                    <span className="text-gray-700">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-4 border-red-600 rounded-lg p-6 bg-red-50">
              <h3 className="text-2xl font-bold mb-4 text-red-700">Areas for Growth</h3>
              <ul className="space-y-3">
                {personality.weaknesses.map((weakness, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-red-600 font-bold text-lg">•</span>
                    <span className="text-gray-700">{weakness}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Careers */}
          <div className="mb-12 border-4 border-black rounded-lg p-6 bg-white">
            <h3 className="text-2xl font-bold mb-4">Ideal Careers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {personality.careers.map((career, idx) => (
                <div key={idx} className="bg-gray-100 rounded-lg p-3 border-2 border-black">
                  <p className="font-bold text-gray-800">{career}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Relationships */}
          <div className="mb-12 border-4 border-blue-600 rounded-lg p-6 bg-blue-50">
            <h3 className="text-2xl font-bold mb-4 text-blue-700">In Relationships</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              {personality.relationships}
            </p>
          </div>

          {/* Famous People */}
          <div className="mb-12 border-4 border-black rounded-lg p-6 bg-white">
            <h3 className="text-2xl font-bold mb-4">Notable {personality.code}s</h3>
            <ul className="space-y-2">
              {personality.famous.map((person, idx) => (
                <li key={idx} className="text-gray-700 flex items-center gap-3">
                  <span className="font-bold text-black">•</span>
                  {person}
                </li>
              ))}
            </ul>
          </div>

          {/* Related Types */}
          {relatedTypes.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4">Similar Types (Same Introversion/Extraversion)</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {relatedTypes.map((type) => {
                  const relatedPersonality = personalities[type]
                  return (
                    <Link key={type} href={`/personality/${type}`}>
                      <div className="border-4 border-black rounded-lg p-4 text-center hover:bg-gray-100 transition-colors cursor-pointer">
                        <div className="text-2xl font-bold mb-1">{relatedPersonality.code}</div>
                        <p className="text-sm font-bold text-gray-700">{relatedPersonality.nickname}</p>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t-4 border-black flex justify-between">
            <Link href="/about" className="text-blue-600 font-bold hover:underline">
              ← Back to About
            </Link>
            <Link href="/" className="text-blue-600 font-bold hover:underline">
              Take the Test →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
