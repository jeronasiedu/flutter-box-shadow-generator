import ShadowCard from "@/components/shadow-card";
import { shadows } from "@/lib/shadows";

const ShadowLibrary = () => {
  return (
    <div
      className={"max-w-5xl mx-auto mt-16 scroll-mt-14"}
      id={"shadow-library"}
    >
      <h3 className={"text-3xl mb-1 font-medium font-mono"}>Shadow Library</h3>
      <p className={"text-zinc-600"}>
        Tap on mobile or hover on desktop to see options
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
        {shadows.map((shadow) => (
          <ShadowCard key={shadow.shadow} shadow={shadow} />
        ))}
      </div>
    </div>
  );
};

export default ShadowLibrary;
