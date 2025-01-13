import Link from 'next/link'
import FutureLectures from 'app/components/futureLectures'

export default function Page() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Future Lectures</h1>
            <p className="mb-4">
                {`Future lectures are listed below. Each will be held on Zoom unless otherwise noted.`}
            </p>
            <br/>
            <FutureLectures/>
            <br/>
            <div className="w-full flex flex-col items-center md:flex-row space-x-0 md:space-x-2">
                <p className="mb-4">
                    {'Interested in giving a talk? Reach out to us on '}
                    <Link href="https://discord.gg/gpumode">
                        <u>Discord</u>
                    </Link>
                    {'!'}
                </p>
            </div>
        </section>
    )
}