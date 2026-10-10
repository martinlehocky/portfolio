import {ui} from "../content"
import s from "../notebook.module.css"

/**
 * Notebook index tabs on the right edge (desktop only; phones get the "Obsah" card in the hero).
 * NotebookMotion marks the tab of the section in view with aria-current.
 */
export default function Tabs() {
  return (
    <nav className={s.tabs} aria-label={ui.tabsNavLabel}>
      <ul className={s.tabList}>
        {ui.tabs.map((tab) => (
          <li key={tab.id}>
            <a className={s.tab} href={`#${tab.id}`} data-tab={tab.id}>
              {tab.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
