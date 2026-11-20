"use client";

import Button from "@/components/ui/Button";
import { admissionsPage } from "@/lib/school";

const fieldClass =
  "h-12 w-full rounded-xl border border-navy/15 bg-white px-4 text-sm text-navy placeholder:text-slate/50 focus:border-gold focus:ring-2 focus:ring-gold/30 focus:outline-none";
const labelClass = "mb-2 block text-sm font-medium text-navy";
const copy = admissionsPage.form;

export default function AdmissionsForm() {
  return (
    <div id="apply" className="scroll-mt-28">
      <div className="rounded-3xl border border-border bg-white p-8 shadow-sm sm:p-10">
        <h2
          id="apply-title"
          className="font-heading text-2xl font-medium tracking-[-0.02em] text-navy"
        >
          {copy.title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate">{copy.intro}</p>

        <form
          className="mt-8"
          onSubmit={(event) => {
            event.preventDefault();
            // TODO: connect to backend in the backend phase
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="admissions-guardian">
                {copy.guardianLabel}
              </label>
              <input
                id="admissions-guardian"
                name="guardian"
                type="text"
                autoComplete="name"
                required
                placeholder={copy.guardianPlaceholder}
                className={fieldClass}
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="admissions-phone">
                {copy.phoneLabel}
              </label>
              <input
                id="admissions-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                placeholder={copy.phonePlaceholder}
                className={fieldClass}
              />
            </div>
          </div>

          <div className="mt-5">
            <label className={labelClass} htmlFor="admissions-email">
              {copy.emailLabel}
            </label>
            <input
              id="admissions-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder={copy.emailPlaceholder}
              className={fieldClass}
            />
          </div>

          <div className="mt-5">
            <label className={labelClass} htmlFor="admissions-level">
              {copy.levelLabel}
            </label>
            <select
              id="admissions-level"
              name="level"
              required
              defaultValue=""
              className={fieldClass}
            >
              <option value="">{copy.levelPlaceholder}</option>
              {copy.levelOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-5">
            <label className={labelClass} htmlFor="admissions-message">
              {copy.messageLabel}
            </label>
            <textarea
              id="admissions-message"
              name="message"
              rows={5}
              placeholder={copy.messagePlaceholder}
              className={`${fieldClass} h-auto resize-y py-3`}
            />
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted">{copy.footnote}</p>
            <Button variant="primary" icon={null} className="w-full justify-center sm:w-auto">
              {copy.submitLabel}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
