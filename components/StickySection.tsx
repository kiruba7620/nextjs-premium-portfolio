export default function StickySection({ title, content }: any) {
  return (
    <section className="min-h-screen flex">
      <div className="w-1/2 sticky top-24 h-fit p-10">
        <h2 className="text-3xl font-bold text-brand">{title}</h2>
      </div>
      <div className="w-1/2 p-10 space-y-10 text-gray-400">
        {content.map((c:any,i:number)=>(<p key={i}>{c}</p>))}
      </div>
    </section>
  );
}
