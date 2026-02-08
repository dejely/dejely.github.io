import { PixelButton, PixelCard, PixelSection } from '../components'
import type { ContactLink } from '../lib/constants'

type ContactSectionProps = {
  contactLinks: readonly ContactLink[]
  footerNote: string
}

export default function ContactSection({ contactLinks, footerNote }: ContactSectionProps) {
  return (
    <PixelSection id="contact" title="Connect">
      <div className="pixel-contact">
        <PixelCard hover={false} className="pixel-contact__card">
          <p className="pixel-text pixel-contact__copy">
            Ready to build something bold and blocky? Let&apos;s craft a standout digital
            experience together.
          </p>

          <div className="pixel-contact__actions">
            {contactLinks.map((link) => {
              const isExternal = link.href.startsWith('http')

              return (
                <PixelButton
                  key={link.label}
                  variant={link.variant}
                  size="lg"
                  href={link.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noreferrer noopener' : undefined}
                  aria-label={
                    isExternal
                      ? `Open ${link.label} in a new tab`
                      : `Start ${link.label.toLowerCase()} conversation`
                  }
                >
                  {link.label}
                </PixelButton>
              )
            })}
          </div>

          <div className="pixel-contact__footer">
            <p className="pixel-text-small">{footerNote}</p>
          </div>
        </PixelCard>
      </div>
    </PixelSection>
  )
}
