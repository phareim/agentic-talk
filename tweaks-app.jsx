// Tweaks app for "Agentisk Koding" deck.
// Currently exposes knobs for the Murakami-homage title slide.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "bandHeight": 280,
  "sunSize": 320,
  "sunLeft": 220,
  "sunTop": 80,
  "sunColor": "#ff303b",
  "riverColor": "#0d0d0c",
  "figureVisible": true
}/*EDITMODE-END*/;

const { useEffect } = React;

function applyTweaks(t) {
  const slide = document.querySelector("section.s-title");
  if (!slide) return;
  slide.style.setProperty("--band-h", t.bandHeight + "px");
  slide.style.setProperty("--sun-size", t.sunSize + "px");
  slide.style.setProperty("--sun-left", t.sunLeft + "px");
  slide.style.setProperty("--sun-top", t.sunTop + "px");
  slide.style.setProperty("--sun-color", t.sunColor);
  slide.style.setProperty("--river-color", t.riverColor);
  slide.style.setProperty("--figure-visible", t.figureVisible ? 1 : 0);
}

function TweaksApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => { applyTweaks(t); }, [t]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Sort toppband" />
      <TweakSlider label="Høyde" value={t.bandHeight} min={120} max={500} step={10} unit="px"
                   onChange={(v) => setTweak("bandHeight", v)} />

      <TweakSection label="Rød sol" />
      <TweakSlider label="Størrelse" value={t.sunSize} min={120} max={520} step={10} unit="px"
                   onChange={(v) => setTweak("sunSize", v)} />
      <TweakSlider label="Fra venstre" value={t.sunLeft} min={0} max={900} step={10} unit="px"
                   onChange={(v) => setTweak("sunLeft", v)} />
      <TweakSlider label="Fra topp" value={t.sunTop} min={-200} max={400} step={10} unit="px"
                   onChange={(v) => setTweak("sunTop", v)} />
      <TweakColor  label="Farge" value={t.sunColor}
                   options={["#ff303b", "#e8252f", "#ffd9a1", "#450d21"]}
                   onChange={(v) => setTweak("sunColor", v)} />

      <TweakSection label="Elv & figur" />
      <TweakColor  label="Elvefarge" value={t.riverColor}
                   options={["#0d0d0c", "#450d21", "#3d1436", "#ff303b"]}
                   onChange={(v) => setTweak("riverColor", v)} />
      <TweakToggle label="Vis figur" value={t.figureVisible}
                   onChange={(v) => setTweak("figureVisible", v)} />
    </TweaksPanel>
  );
}

// Mount the tweaks app into its own root, so it doesn't fight with deck-stage.
(function mount() {
  const root = document.createElement("div");
  root.id = "tweaks-root";
  document.body.appendChild(root);
  ReactDOM.createRoot(root).render(<TweaksApp />);

  // Apply defaults immediately so the slide renders correctly even before any user edits.
  applyTweaks(TWEAK_DEFAULTS);
})();
