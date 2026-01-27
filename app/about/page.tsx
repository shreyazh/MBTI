import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "About Myers-Briggs | History and Research",
  description: "Learn about the history, development, and scientific foundation of the Myers-Briggs Type Indicator personality assessment.",
}

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-balance">
            About Myers-Briggs
          </h1>

          <div className="prose prose-lg max-w-none space-y-6">
            <div className="border-4 border-black rounded-lg p-8 bg-white">
              <h2 className="text-3xl font-bold mb-4">History & Origins</h2>
              <p className="text-gray-700 mb-4">
                The Myers-Briggs Type Indicator (MBTI) is based on the theory of psychological types developed by Swiss psychiatrist <strong>Carl Jung</strong> in 1921. Jung believed that apparent random variation in human behavior is not actually random, but flows from differences in how people prefer to use their perception and judgment.
              </p>
              <p className="text-gray-700 mb-4">
                In the 1940s, <strong>Katherine Cook Briggs</strong> and her daughter <strong>Isabel Briggs Myers</strong> built upon Jung's work to create a practical personality framework. They developed the MBTI to make Jung's theory accessible and useful for everyday life, career development, and personal understanding.
              </p>
              <p className="text-gray-700">
                Katherine had become interested in personality type psychology after reading Jung's work. Isabel, a novelist and scientist, recognized the value of understanding personality types for educational purposes. Together, they conducted extensive research and created the framework that became the Myers-Briggs Type Indicator.
              </p>
            </div>

            <div className="border-4 border-black rounded-lg p-8 bg-gray-50">
              <h2 className="text-3xl font-bold mb-4">The Four Dimensions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Extraversion vs. Introversion (E/I)</h3>
                  <p className="text-gray-700">
                    This dimension describes where you direct your energy and how you gain motivation. Extraverts (E) tend to direct their energy toward the outer world of people and activities, while Introverts (I) prefer the inner world of ideas and reflection. This is not about shyness or sociability, but rather about where you prefer to focus your attention and get your energy.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Sensing vs. Intuition (S/N)</h3>
                  <p className="text-gray-700">
                    This dimension addresses how you gather information and perceive the world. Sensors (S) focus on concrete, factual information they gather through their senses—what is real and present. Intuitive people (N) focus on patterns, possibilities, and the "big picture"—what could be. Sensors are pragmatic and detail-oriented, while Intuitives are imaginative and future-focused.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Thinking vs. Feeling (T/F)</h3>
                  <p className="text-gray-700">
                    This dimension describes how you make decisions. Thinkers (T) tend to make decisions based on objective logic, analysis, and principles. Feelers (F) make decisions based on personal values, relationships, and how decisions affect people. Both are rational approaches—T is task-focused while F is people-focused.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Judging vs. Perceiving (J/P)</h3>
                  <p className="text-gray-700">
                    This dimension describes your preferred lifestyle. Judging types (J) prefer to live in a structured, planned, and organized way. Perceiving types (P) prefer a flexible, spontaneous, and adaptive approach. Neither is better or worse—they simply reflect different approaches to organizing your life.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-4 border-black rounded-lg p-8 bg-white">
              <h2 className="text-3xl font-bold mb-4">Research & Validity</h2>
              <p className="text-gray-700 mb-4">
                The MBTI has become one of the world's most popular personality assessments, used by millions of people for personal development, career planning, and team building. Over 70 years of research has been conducted on the MBTI, examining its reliability, validity, and applications.
              </p>
              <p className="text-gray-700 mb-4">
                The MBTI is particularly valuable for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Understanding personal strengths and potential areas of growth</li>
                <li>Improving communication and relationships</li>
                <li>Career development and finding fulfilling work</li>
                <li>Team building and organizational development</li>
                <li>Leadership development and management</li>
                <li>Educational planning and learning styles</li>
              </ul>
              <p className="text-gray-700">
                It's important to note that the MBTI is based on preferences, not abilities or IQ. Everyone uses all eight preferences to some degree, just as we use both hands even though most people are right or left-handed.
              </p>
            </div>

            <div className="border-4 border-black rounded-lg p-8 bg-gray-50">
              <h2 className="text-3xl font-bold mb-4">The 16 Personality Types</h2>
              <p className="text-gray-700 mb-4">
                The combination of your four preferences creates one of 16 unique personality types. Each type has distinct characteristics, values, strengths, and potential areas for growth. Your type is not fixed—it represents your natural preferences, which may shift somewhat over time or in different contexts.
              </p>
              <p className="text-gray-700">
                Rather than labeling or limiting people, the MBTI framework helps us appreciate the diversity of human personality and understand why different people naturally approach life, work, and relationships in different ways. Understanding these differences can lead to greater self-acceptance, better interpersonal relationships, and more effective teamwork.
              </p>
            </div>

            <div className="border-4 border-black rounded-lg p-8 bg-white">
              <h2 className="text-3xl font-bold mb-4">Website Creator</h2>
              <p className="text-gray-700">
                This Myers-Briggs personality test website was created by <strong>@shreyazh</strong>. 
              </p>
              <p className="text-gray-700 mt-4">
                GitHub: <a href="https://github.com/shreyazh" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline">github.com/shreyazh</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
