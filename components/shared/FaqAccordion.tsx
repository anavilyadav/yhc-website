import type { FaqItem } from "@/lib/types";
import styles from "./FaqAccordion.module.css";

/**
 * Native <details>/<summary> — no JS needed, and critically, unlike a
 * client-toggled `hidden` attribute, browsers and crawlers (Google has
 * confirmed this explicitly) still index the content of a *closed*
 * <details> panel. The previous version used React state + the `hidden`
 * attribute, which is a legitimate "not accessible content" signal that
 * conservative parsers (including simple AI/LLM text extraction) treat
 * as absent — so only the first, already-open FAQ was reliably readable.
 */
export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className={styles.accordion}>
      {items.map((item, i) => (
        <details key={item.id} className={styles.item} open={i === 0}>
          <summary className={styles.trigger}>
            <span>{item.question}</span>
            <span className={styles.icon} aria-hidden="true">
              +
            </span>
          </summary>
          <div className={styles.panel}>
            <p>{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
