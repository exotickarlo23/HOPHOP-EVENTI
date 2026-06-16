import { LeadForm } from "./LeadForm";
import { SITE } from "../lib/site";

export function CtaSection() {
  return (
    <section id="ponuda" className="section bg-background relative overflow-hidden">
      {/* Suptilne dekoracije */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="blob absolute -top-20 -left-16 h-64 w-64 rounded-full bg-primary-200" />
        <div className="blob absolute bottom-0 right-0 h-72 w-72 rounded-full bg-secondary-200" />
      </div>

      <div className="container-x relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="eyebrow">Rezervacija</span>
          <h2 className="h2 mt-3">
            Rezervirajte svoj <span className="text-primary-500">termin</span>
          </h2>
          <p className="lead mt-4">
            Recite nam datum i lokaciju — ponudu šaljemo isti dan.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              <ContactRow icon={<PhoneIcon />} label="Telefon" iconBg="bg-primary-100" iconColor="text-primary-600">
                <a
                  className="font-bold text-foreground underline-offset-2 hover:underline"
                  href={`tel:${SITE.phoneIntl}`}
                >
                  {SITE.phone}
                </a>
              </ContactRow>
              <ContactRow icon={<MailIcon />} label="Email" iconBg="bg-secondary-100" iconColor="text-secondary-600">
                <a
                  className="font-bold text-foreground underline-offset-2 hover:underline"
                  href={`mailto:${SITE.email}`}
                >
                  {SITE.email}
                </a>
              </ContactRow>
              <ContactRow icon={<PinIcon />} label="Područje" iconBg="bg-accent-100" iconColor="text-accent-700">
                <span className="font-bold text-foreground">Zagreb i okolica</span>
              </ContactRow>
              <ContactRow icon={<ClockIcon />} label="Odgovor" iconBg="bg-warning-100" iconColor="text-warning-700">
                <span className="font-bold text-foreground">U roku 24h</span>
              </ContactRow>
            </div>

            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-bold text-white shadow-playful hover:brightness-105 hover:shadow-mascot transition"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp / Viber
            </a>
          </div>
          <div className="lg:col-span-3">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  children,
  iconBg,
  iconColor,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
  iconBg: string;
  iconColor: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className={`inline-flex h-12 w-12 flex-none items-center justify-center rounded-full ${iconBg} ${iconColor}`}>
        {icon}
      </span>
      <div className="flex flex-col">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
        {children}
      </div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}
function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.52 3.48A11.94 11.94 0 0 0 12.05 0C5.5 0 .15 5.34.15 11.89c0 2.09.55 4.13 1.6 5.93L0 24l6.34-1.66a11.86 11.86 0 0 0 5.7 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.42-8.42ZM12.05 21.6h-.01a9.7 9.7 0 0 1-4.94-1.35l-.36-.21-3.76.99 1-3.66-.23-.38a9.66 9.66 0 0 1-1.49-5.1c0-5.36 4.36-9.71 9.72-9.71 2.59 0 5.03 1.01 6.86 2.84a9.6 9.6 0 0 1 2.85 6.88c0 5.36-4.36 9.71-9.64 9.71Zm5.56-7.27c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48a9 9 0 0 1-1.66-2.07c-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5 0 1.48 1.08 2.91 1.23 3.11.15.2 2.12 3.24 5.13 4.55.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}
