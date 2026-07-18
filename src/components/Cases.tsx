import { useState, type ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

import slideTitle from '../assets/slide-title.jpg'
import slideMeta from '../assets/slide-meta.jpg'
import slideCreatives from '../assets/slide-creatives.jpg'
import ptFrame from '../assets/pt-frame.jpg'
import enFrame from '../assets/en-frame.jpg'
import ptVideo from '../assets/pt-source.mp4'
import enVideo from '../assets/en-avatar.mp4'

/* ---------- media blocks ---------- */

function DeckFan() {
  return (
    <>
      <div className="deck">
        <div className="slide s1 photo">
          <img src={slideTitle} alt="Auto-generated deck: title slide" loading="lazy" />
        </div>
        <div className="slide s2 photo">
          <img src={slideCreatives} alt="Auto-generated deck: ad creatives slide" loading="lazy" />
        </div>
        <div className="slide s3 photo">
          <img src={slideMeta} alt="Auto-generated deck: Meta Ads analysis slide" loading="lazy" />
        </div>
      </div>
      <span className="media-note">real slides · generated end-to-end by the pipeline</span>
    </>
  )
}

function PhonePair() {
  const [playing, setPlaying] = useState(false)

  return (
    <>
      <div>
        <div className="phones">
          <div className="phone">
            {/* short PT source clip loops silently */}
            <video
              src={ptVideo}
              poster={ptFrame}
              muted
              loop
              autoPlay
              playsInline
              preload="metadata"
              ref={(el) => {
                if (el) el.muted = true // React quirk: ensures autoplay works
              }}
            />
            <span className="phone-lbl">PT-BR source</span>
          </div>
          <span className="phones-arrow">→</span>
          <div className="phone">
            {playing ? (
              <video src={enVideo} controls autoPlay playsInline />
            ) : (
              <>
                <img src={enFrame} alt="Generated English AI avatar video" />
                <button
                  className="pl-play"
                  aria-label="Play the AI avatar video"
                  onClick={() => setPlaying(true)}
                />
              </>
            )}
            <span className="phone-lbl">EN · AI avatar</span>
          </div>
        </div>
        <div className="pl-langs">
          <span>Real footage</span>
          <i>→</i>
          <span className="on">HeyGen avatar — no camera, no studio</span>
        </div>
      </div>
      <span className="media-note">real videos from the pipeline</span>
    </>
  )
}

function PlaybookDoc() {
  return (
    <>
      <div className="doc" role="img" aria-label="AI Playbook document preview">
        <div className="doc-bar">
          <b></b>
          <b></b>
          <b></b>
          <span>ai-playbook.md — internal guide</span>
        </div>
        <div className="doc-body">
          <span className="doc-h">## Which tool for which task</span>
          <div className="doc-row">
            <span className="doc-tag cursor">Cursor</span>
            <span className="doc-line"></span>
          </div>
          <div className="doc-row">
            <span className="doc-tag claude">Claude</span>
            <span className="doc-line w70"></span>
          </div>
          <div className="doc-row">
            <span className="doc-tag gpt">ChatGPT</span>
            <span className="doc-line"></span>
          </div>
          <span className="doc-h">## Prompt patterns</span>
          <span className="doc-check">Context first, task second</span>
          <span className="doc-check">Show the expected output shape</span>
          <span className="doc-check">Never paste secrets or client data</span>
        </div>
      </div>
      <span className="media-note">internal doc · excerpt on request</span>
    </>
  )
}

/* ---------- case card ---------- */

type CaseProps = {
  tag: string
  title: string
  children: ReactNode
  flow: string[]
  media: ReactNode
  metrics: { num: string; lbl: string }[]
  stack: string[]
}

function CaseCard({ tag, title, children, flow, media, metrics, stack }: CaseProps) {
  const ref = useReveal<HTMLElement>()
  return (
    <article className="case rv" ref={ref}>
      <div className="case-main">
        <span className="case-tag">{tag}</span>
        <h3>{title}</h3>
        {children}
        <div className="case-flow">
          {flow.map((step, i) => (
            <span key={step} style={{ display: 'contents' }}>
              {i > 0 && <i>→</i>}
              <em>{step}</em>
            </span>
          ))}
        </div>
      </div>
      <div className="case-side">
        <div className="case-media">{media}</div>
        <div className="case-metrics">
          {metrics.map((m) => (
            <div className="metric" key={m.num}>
              <span className="num">{m.num}</span>
              <span className="lbl">{m.lbl}</span>
            </div>
          ))}
        </div>
        <div className="stack">
          {stack.map((s) => (
            <span className="chip" key={s}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

/* ---------- section ---------- */

export function Cases() {
  const headRef = useReveal<HTMLDivElement>()
  return (
    <section id="work">
      <div className="wrap">
        <div className="sec-head rv" ref={headRef}>
          <span className="sec-kicker">Selected work</span>
          <h2>Real pipelines, real outcomes</h2>
          <p className="sec-sub">In production or active use — not demos.</p>
        </div>

        <CaseCard
          tag="ROIBOY Agency · marketing"
          title="Competitor analysis: one HTTP request → a client-ready deck"
          flow={['Playwright collector', 'GPT-4o vision', 'Branded PPTX', 'Human read']}
          media={<DeckFan />}
          metrics={[
            { num: '1 day → 15 min', lbl: 'Per report, 6 competitors' },
            { num: '0 APIs', lbl: 'Existed for this data — built around it' },
          ]}
          stack={['Node.js', 'TypeScript', 'Playwright', 'OpenAI API (GPT-4o)', 'REST APIs', 'pptxgenjs']}
        >
          <p>
            Every month, the agency's team manually screenshotted six competitors across Facebook
            Ads Library and Google Ads Transparency Center, wrote the analysis, and assembled a
            branded presentation. A full day of work, every time.
          </p>
          <p>
            <b>The catch:</b> Meta's Ad Library API doesn't return commercial ads for Ukraine, and
            Google ATC has no API at all. So I built browser automation that navigates the pages
            like a human, a GPT-4o vision layer that writes slide copy in the agency's own editorial
            style, and a PPTX builder whose output is indistinguishable from a handmade deck.
          </p>
        </CaseCard>

        <CaseCard
          tag="Inventor Miguel · solo AI educator"
          title="Content operations for a cross-language brand launch"
          flow={['PT video', 'Script extraction', 'EN adaptation', 'HeyGen avatar', 'Publish']}
          media={<PhonePair />}
          metrics={[
            { num: 'PT → EN', lbl: 'Market expansion, zero new hires' },
            { num: '1 person', lbl: 'Runs a two-language content op' },
          ]}
          stack={['AI content pipelines', 'Prompt engineering', 'HeyGen', 'Video → text', 'Localization']}
        >
          <p>
            A one-person AI education and consulting brand with a Portuguese-speaking Brazilian
            audience, expanding into the English-language market — without hiring a content team.
          </p>
          <p>
            I run the AI-assisted pipeline behind the launch:{' '}
            <b>extracting scripts from existing Portuguese video, adapting them for an international audience</b>{' '}
            — not just translating, but reworking references, tone and structure — and generating
            English-language video through HeyGen AI avatars. Source video in, publish-ready
            localized content out.
          </p>
        </CaseCard>

        <CaseCard
          tag="Meest Group · engineering team"
          title="AI Playbook: turning tool chaos into team practice"
          flow={['Task type', 'Tool choice', 'Prompt pattern', 'Review guardrails']}
          media={<PlaybookDoc />}
          metrics={[
            { num: '5+ engineers', lbl: 'Adopted a shared AI workflow' },
            { num: 'Day 1', lbl: 'Part of onboarding for new hires' },
          ]}
          stack={['Cursor', 'Claude', 'ChatGPT', 'Prompt engineering', 'Team enablement']}
        >
          <p>
            As frontend Team Lead, I watched engineers use AI tools inconsistently — great results
            for some, wasted hours for others. So I wrote the team's <b>AI Playbook</b>: a practical
            internal guide to when and how to use each tool.
          </p>
          <p>
            It covers tool selection (when Cursor, when Claude, when ChatGPT — and when none of
            them), prompt patterns for real frontend tasks, and guardrails for AI on production
            code. It leveled the whole team's AI usage: from "everyone experiments alone" to "the
            team has a method."
          </p>
        </CaseCard>
      </div>
    </section>
  )
}
