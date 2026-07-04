import { useState } from 'react'
import { FAQ_ITEMS } from '../constants'
import './FAQ.css'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="section faq">
      <div className="container">
        <header className="section-header centered">
          <span className="section-label">FAQ</span>
          <h2>Frequently Asked Questions</h2>
        </header>

        <div className="faq__list">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <article key={item.question} className={`faq__item glass-card ${isOpen ? 'faq__item--open' : ''}`}>
                <button
                  type="button"
                  className="faq__question"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <span className="faq__icon" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="faq__answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
