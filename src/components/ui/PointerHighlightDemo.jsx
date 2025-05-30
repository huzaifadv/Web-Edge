import { PointerHighlight } from "./pointer-highlight";


export function PointerHighlightDemo() {
    return (
        <>
            <div className="mx-auto container text-center">
                <h1 className="text-slate-700 dark:text-slate-300 md:text-7xl text-[40px] lg:text-[60px] font-[700] sm:text-[40px] text-[30px] mb-[15px]">
                    <span>About </span>
                    <PointerHighlight>
                        <span className="inline-block sm:px-[10px] sm:py-[10px] px-[6px]">WebEdge</span>
                    </PointerHighlight>
                </h1>
                <p className="text-slate-700 dark:text-slate-300 text-[13px] mt-[30px] sm:mx-[100px] mx-[20px] mb-[20px]">At WebEdge, we design and develop high-performing websites. we build responsive, user-focused solutions that help your business stand out online.</p>
            </div>
        </>
    );
}
