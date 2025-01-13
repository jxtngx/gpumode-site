

export default function Page() {
  return (
      <section>
          <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
              GPU Mode
          </h1>
          <p className="mb-4">
              {`Welcome to GPU Mode, your favorite GPU community!`}
          </p>
          <div>
              <iframe
                  width="560" height="315"
                  src="https://www.youtube.com/embed/FH5wiwOyPX4?si=FiiHl2JN18Au7xun"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen>
              </iframe>
          </div>
      </section>
  )
}
