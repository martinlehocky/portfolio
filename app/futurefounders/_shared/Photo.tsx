// The portrait from /public/futurefounders, generated from the original photo:
// EXIF rotation baked in, Display P3 -> sRGB, all metadata (incl. GPS) stripped.
export const PHOTO_WIDTH = 1200
export const PHOTO_HEIGHT = 1600
export const PHOTO_ALT = "Martin Lehocký sa usmieva pred večerným, osvetleným Koloseom v Ríme."

const WEBP_SRCSET = [480, 800, 1200, 1600]
  .map((w) => `/futurefounders/martin-${w}.webp ${w}w`)
  .join(", ")

type PhotoProps = {
  /** Rendered width hints for the browser, e.g. "(min-width: 900px) 40vw, 90vw". */
  sizes: string
  className?: string
  alt?: string
  /** true for the photo above the fold (eager + high fetch priority). */
  priority?: boolean
  style?: React.CSSProperties
}

export default function Photo({sizes, className, alt = PHOTO_ALT, priority = false, style}: PhotoProps) {
  return (
    <picture>
      <source type="image/webp" srcSet={WEBP_SRCSET} sizes={sizes} />
      <img
        src="/futurefounders/martin-1200.jpg"
        alt={alt}
        width={PHOTO_WIDTH}
        height={PHOTO_HEIGHT}
        className={className}
        style={style}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
      />
    </picture>
  )
}
