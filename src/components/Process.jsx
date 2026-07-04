import { PROCESS_STEPS } from '../constants'
import './Process.css'

export default function Process() {
  return (
    <section id="process" className="section process">
      <div className="container">
        <header className="section-header centered">
          <span className="section-label">Our Process</span>
          <h2>How RankBridge Media Works</h2>
        </header>

        <ol className="process__timeline">
          {PROCESS_STEPS.map((step, index) => (
            <li key={step.title} className="process__step">
              <div className="process__marker">
                <span className="process__circle">{step.step}</span>
                {index < PROCESS_STEPS.length - 1 && (
                  <span className="process__line" aria-hidden="true" />
                )}
              </div>
              <div className="process__content glow-card glass-card">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
